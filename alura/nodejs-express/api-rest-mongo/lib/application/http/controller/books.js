import * as service from "../../../domain/usecases/books.js";
import * as authorsService from "../../../domain/usecases/authors.js";

export const createBook = async (request, response) => {
  const { title, pages, authorId } = request.body;

  const book = await service.createBook({
    title,
    authorId,
    pages,
  });

  return response.status(201).json(book);
};

export const searchBooks = async (request, response) => {
  const {
    title,
    author,
    page = 1,
    size = 10,
    minPages = 0,
    maxPages = 5000,
  } = request.query;

  const getAuthorId = async () => {
    if (!author) {
      return undefined;
    }

    const [foundAuthor] = await authorsService.listAuthors({
      query: author
        ? {
            name: author,
          }
        : undefined,
    });

    if (!foundAuthor) {
      return undefined;
    }

    return foundAuthor.id;
  };

  const authorId = await getAuthorId();

  if (author && !authorId) {
    return response.status(404).json({
      error: "O autor não existe",
    });
  }

  const query = (() => {
    let query = {};

    if (authorId) {
      query.authorId = authorId;
    }

    if (title) {
      const regex = new RegExp(title, "i");
      query.title = regex;
    }

    if (minPages) {
      query.pages = {
        ...query.pages,
        $gte: Number(minPages),
      };
    }

    if (maxPages) {
      query.pages = {
        ...query.pages,
        $lte: Number(maxPages),
      };
    }

    return query ?? undefined;
  })();

  console.log({ query });

  const books = await service.listBooks({
    page,
    size,
    query,
  });

  return response.status(200).json(books);
};

export const listBooks = async (request, response) => {
  const { page = 1, size = 10 } = request.query;

  const books = await service.listBooks({
    pagination: {
      page: Number(page),
      size: Number(size),
    },
  });

  return response.status(200).json(books);
};

export const retrieveBook = async (request, response) => {
  const { id } = request.params;

  try {
    const book = await service.retrieveBook(id);

    return response.status(200).json(book);
  } catch (error) {
    if (error.message === "Could not find book") {
      return response.status(404).json({ error: "Could not find book!" });
    }

    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBook = async (request, response) => {
  const { id } = request.params;
  const params = request.body;

  const book = await service.updateBook(id, params);

  return response.status(200).json(book);
};

export const deleteBook = async (request, response) => {
  const { id } = request.params;

  await service.deleteBook(id);

  return response.status(200).send();
};

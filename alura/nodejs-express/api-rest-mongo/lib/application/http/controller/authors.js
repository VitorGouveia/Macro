import * as service from "../../../domain/usecases/authors.js";

const InternalServerError = (response, error) => {
  console.log(`INTERNAL SERVER ERROR: ${error.message}`);

  console.error(error);

  return response.status(500).json({
    error: "Internal Server Error",
  });
};

const AppError = (response, { status, error }) => {
  return response.status(status).json({ error: error.message });
};

export const create = async (request, response) => {
  const { name } = request.body;

  try {
    const author = await service.createAuthor({
      name,
    });

    return response.status(201).json(author);
  } catch (error) {
    if (error instanceof service.UseCaseError) {
      return AppError(response, { status: 400, error });
    }

    return InternalServerError(response, error);
  }
};

export const list = async (request, response) => {
  const { page = 1, size = 10 } = request.query;

  const authors = await service.listAuthors({
    page,
    size,
  });

  return response.status(200).json(authors);
};

export const retrieve = async (request, response) => {
  const { id } = request.params;

  try {
    const author = await service.retrieveAuthor(id);

    return response.status(200).json(author);
  } catch (error) {
    if (error.message === "Could not find author") {
      return response.status(400).json({ error: "Could not find author!" });
    }

    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const update = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const author = await service.updateAuthor(id, {
    name,
  });

  return response.status(200).json(author);
};

export const remove = async (request, response) => {
  const { id } = request.params;

  await service.deleteAuthor(id);

  return response.status(200).send();
};

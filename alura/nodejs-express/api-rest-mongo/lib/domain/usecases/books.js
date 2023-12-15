import { ObjectId } from "mongodb";
import { repository } from "../../infra/repository.js";

export const createBook = async ({ title, pages, authorId }) => {
  const book = {
    title,
    pages,
    authorId: new ObjectId(authorId),
  };

  const id = await repository.create("books", book);

  return {
    id,
    title,
    authorId,
  };
};

export const retrieveBook = async (id) => {
  const book = await repository.retrieve("books", id);

  if (!book) {
    throw new Error("Could not find book");
  }

  return book;
};

export const listBooks = async ({ query = undefined, pagination }) => {
  const books = await repository.list("books", {
    query,
    pagination,
  });

  return books;
};

export const updateBook = async (id, query) => {
  await repository.update("books", id, query);

  return {
    id,
    ...query,
  };
};

export const deleteBook = async (id) => {
  await repository.delete("books", id);
};

import { repository } from "../../infra/repository.js";

export class UseCaseError extends Error {
  constructor(message) {
    super(message);
  }
}

export const createAuthor = async ({ name }) => {
  if (!name) {
    throw new UseCaseError("É necessário um nome para criar um autor");
  }

  const author = {
    name,
  };

  const id = await repository.create("authors", author);

  return {
    id,
    name,
  };
};

export const retrieveAuthor = async (id) => {
  const author = await repository.retrieve("authors", id);

  if (!author) {
    throw new Error("Could not find author");
  }

  return author;
};

export const listAuthors = async ({
  query = undefined,
  page = 1,
  size = 100,
}) => {
  const authors = await repository.list("authors", { query });

  const paginated = authors.slice((page - 1) * size, page * size);

  return paginated;
};

export const updateAuthor = async (id, { name }) => {
  const author = {
    id,
    name,
  };

  await repository.update("authors", id, {
    name,
  });

  return author;
};

export const deleteAuthor = async (id) => {
  await repository.delete("authors", id);
};

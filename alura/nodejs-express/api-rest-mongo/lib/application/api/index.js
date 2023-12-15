import { listBooks } from "../../domain/usecases/books.js";

const api = {
  books: {
    list: async (query, { size, page }) => {
      const pagination = {
        size,
        page,
      };

      try {
        const books = await listBooks(query, pagination);

        return {
          data: books,
          error: null,
        };
      } catch (error) {
        return {
          data: null,
          error: error.message,
        };
      }
    },
  },
};

export const client = (apiKey) => {
  return api;
};

// const clientAPI = client("api_dklajfejabfea3108=");
// const books = await clientAPI.books.list(
//   {},
//   {
//     size: 10,
//     page: 1,
//   }
// );

import express from "express";

import * as authors from "./controller/authors.js";
import * as books from "./controller/books.js";

export const router = express.Router();

router.post("/authors", authors.create);
router.get("/authors", authors.list);
router.get("/authors/:id", authors.retrieve);
router.put("/authors/:id", authors.update);
router.delete("/authors/:id", authors.remove);

router.post("/books", books.createBook);
router.get("/books", books.listBooks);
router.get("/books/search", books.searchBooks);
router.get("/books/:id", books.retrieveBook);
router.put("/books/:id", books.updateBook);
router.delete("/books/:id", books.deleteBook);

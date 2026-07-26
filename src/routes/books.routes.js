import {getAllBooks,getBookById,createBook,updateBook,deleteBook,borrowBook,returnBook}
from "../controller/books.controller.js"

import { Router } from "express"

const router = Router();

router.get("/",getAllBooks);
router.get("/:id",getBookById);
router.post("/",createBook);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook);
router.patch("/:id/borrow",borrowBook);
router.patch("/:id/return",returnBook);

export default router;
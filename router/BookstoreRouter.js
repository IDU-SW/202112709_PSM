const express = require("express");
const router = express.Router();

const bookController = require("../controller/BookController");

router.get("/book", bookController.getBookAll);
router.get("/book/id/:id", bookController.getBookById);
router.get("/book/publisher/:publisher", bookController.getBookByPublisher);
router.get("/book/author/:author", bookController.getBookByAuthor);
router.get("/book/ISBN/:isbn", bookController.getBookByISBN);

module.exports = router;
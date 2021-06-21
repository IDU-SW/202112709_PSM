const express = require("express");
const router = express.Router();

const bookController = require("../controller/BookController");

router.get("/", bookController.getBookAll);
router.get("/id/:id", bookController.getBookById);
router.get("/publisher/:publisher", bookController.getBookByPublisher);
router.get("/author/:author", bookController.getBookByAuthor);
router.get("/ISBN/:isbn", bookController.getBookByISBN);

module.exports = router;
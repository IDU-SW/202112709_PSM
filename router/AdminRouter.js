const express = require("express");
const router = express.Router();

const adminController = require("../controller/AdminController");

router.get("/", isAuthenticated, adminController.getDashboard);
router.get("/login", adminController.loginForm);
router.get("/signup", adminController.signupForm);
router.get("/books", isAuthenticated, adminController.getBooks);
router.post("/login", adminController.login);
router.post("/signup", adminController.signup);
router.post("/create/book", isAuthenticated, adminController.createBook);
router.put("/update/book", isAuthenticated, adminController.updateBook);
router.delete("/delete/book/:id", isAuthenticated, adminController.deleteBook);

module.exports = router;

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
       return next();
    } else {
        res.redirect('/admin/login');
    }
}
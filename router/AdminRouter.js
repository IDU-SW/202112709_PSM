const express = require("express");
const router = express.Router();

const adminController = require("../controller/AdminController");

router.get("/", isAuthenticated, adminController.getDashboard);
router.get("/login", adminController.loginForm);
router.get("/signup", adminController.signupForm);
router.post("/login", adminController.login);
router.post("/signup", adminController.signup);

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
       return next();
    }
    res.redirect('/admin/login');
}

module.exports = router;
const passport = require("passport");
const bcrypt = require("bcrypt");
const { Admin, Book } = require("../model");

exports.getDashboard = (req, res) => res.render('admin');

exports.loginForm = (req, res) =>  res.render('login', { isAuthorized: req.isAuthenticated() });

exports.signupForm = (_, res) => res.render('signup');

exports.login = passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login'
});
    
exports.signup = (req, res) => {
    var uid = req.body.uid;
    var pwd = req.body.pwd;

    Admin.create({
        uid,
        pwd: bcrypt.hashSync(pwd, 10),
        rank: 0
    }, { logging: false })
    .then( result => {
        const newData = result.dataValues;
        res.send({
            result: "success",
            newId: newData.id
        });
    })
    .catch( error => {
        sendErrorMsg(error, res);
    })
}

exports.getBooks = (_, res) => {
    Book.findAll({})
    .then( results => {
        res.send({
            result: "success",
            count: results.length,
            data: results
        })
    })
    .catch( error => {
        sendErrorMsg(error, res);
    });
}

exports.createBook = (req, res) => {
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        ISBN: req.body.ISBN,
        price: req.body.price,
        discount: req.body.discount,
        location: req.body.location,
        stock: req.body.stock,
    };

    Book.create(newBook, { logging: false })
    .then( result => {
        const newData = result.dataValues;
        console.log(`Create success :: New ID is ${newData.id}`);
        res.send({
            result: "success",
            newId: newData.id
        });
    })
    .catch( error => {
        sendErrorMsg(error, res);
    })
}

exports.updateBook = async (req, res) => {
    const bookId = req.body.id
    const book = {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        ISBN: req.body.ISBN,
        price: req.body.price,
        discount: req.body.discount,
        location: req.body.location,
        stock: req.body.stock,
    };

    Book.update(book, { where: { id: bookId } }, { logging: false })
    .then( result => {
        if (result < 1) throw "Not found resource.";

        console.log(`Update success :: Count is ${result}`)
        res.send({
            result: "success",
        })
    })
    .catch( error => {
        sendErrorMsg(error, res);
    })
}

exports.deleteBook = async (req, res) => {
    const bookId = req.params.id

    Book.destroy({ where: { id: bookId } }, { logging: false })
    .then( result => {
        if (result < 1) throw "Not found resource.";

        console.log(`Delete success :: Count is ${result}`)
        res.send({
            result: "success",
        })
    })
    .catch( error => {
        sendErrorMsg(error, res);
    })
}


function sendErrorMsg(error, res) {
    const msg = (typeof error === "string") ? error : error.name;
    console.error('Error :', msg);
    res.send({
        result: "fail",
        msg
    })
}
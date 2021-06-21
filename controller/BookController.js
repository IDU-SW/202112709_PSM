const { Book } = require("../model")
const Op = require("sequelize").Op;

exports.getBookAll = (_, res) => {
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

exports.getBookById = (req, res) => {
    const id = req.params.id;
    
    Book.findAll({where: { id: {[Op.eq]: id}}})
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

exports.getBookByPublisher = (req, res) => {
    const publisher = req.params.publisher;
    
    Book.findAll({where: { publisher: {[Op.eq]: publisher}}})
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

exports.getBookByAuthor = (req, res) => {
    const author = req.params.author;
    
    Book.findAll({where: { author: {[Op.eq]: author}}})
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

exports.getBookByISBN = (req, res) => {
    const isbn = req.params.isbn;
    
    Book.findAll({where: { isbn: {[Op.eq]: isbn}}})
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

function sendErrorMsg(error, res) {
    const msg = (typeof error === "string") ? error : error.name;
    console.error('Error :', msg);
    res.send({
        result: "fail",
        msg
    })
}
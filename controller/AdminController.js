const passport = require("passport");
const bcrypt = require("bcrypt");
const { Admin } = require("../model");

exports.getDashboard = (req, res) => {
    res.send("Success! Here is dashboard.");
}

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
const express   = require("express");
const passport  = require('passport');
const app   = express();

const conf  = require("./config/config");
const init = require("./model").initDB;
const initPP = require("./utils/passportSetup");
const routers = require("./router")

app.set("view engine", "ejs");
app.set("views", "./view");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(conf.SESSION);

initPP();
app.use(passport.initialize());
app.use(passport.session());

app.use("/",        routers.indexRouter);
app.use("/book",    routers.bookRouter);
app.use("/admin",   routers.adminRouter);

init()
    .then( _ => app.listen(conf.PORT, () => console.log(`Starting ${conf.HOST} at ${conf.PORT} port.`)) )
    .catch( err => console.log(err) );

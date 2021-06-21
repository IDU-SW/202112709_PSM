const express = require("express");
const app = express();
const conf = require("./config/config");
const { initDB } = require("./model");

const routers = require("./router")

app.use(express.json());
app.use("/", routers.indexRouter);
app.use("/booksRouter", routers.bookstoreRouter);

initDB()
    .then( _ => app.listen(conf.PORT, () => console.log(`Starting ${conf.HOST} at ${conf.PORT} port.`)) )
    .catch( err => console.log(err) );

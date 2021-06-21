const { Book, prepareBook } = require("./Book");
const { Admin, prepareAdmin } = require("./Admin");

function initialize() {
    return new Promise( (res, rej) => {
        const tasks = [
            prepareBook(),
            prepareAdmin()
        ];
        for (const isSuccess in tasks) {
            if (!isSuccess) rej("Failed to prepare DB");
        }
        res("Success to prepare DB");
    });
}

module.exports = {
    Book,
    Admin,
    initDB: initialize
};
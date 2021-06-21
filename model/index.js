const { Book, prepareBook } = require("./Book");

function initialize() {
    return new Promise( (res, rej) => {
        const tasks = [
            prepareBook()
        ];
        for (const isSuccess in tasks) {
            if (!isSuccess) rej("Failed to prepare DB");
        }
        res("Success to prepare DB");
    });
}

module.exports = {
    Book,
    initDB: initialize
};
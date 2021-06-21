const Sequelize = require("sequelize")
const properties = require("../config/mysql-properties");
const sequelize = new Sequelize(properties.DB, properties.ID, properties.PW, {
    dialect: 'mysql',
    host: properties.HOST,
    port: properties.PORT
});

class Book extends Sequelize.Model {}
Book.init({
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publisher: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ISBN: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    discount: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {sequelize});

async function prepareBook() {
    try {
        await Book.sync();
        return true;
    } catch(e) {
        console.log(`Book.sync Error::${e}`)
        return false
    }
}

module.exports = {
    Book,
    prepareBook
}
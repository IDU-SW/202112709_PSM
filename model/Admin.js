const Sequelize = require("sequelize")
const properties = require("../config/mysql-properties");
const sequelize = new Sequelize(properties.DB, properties.ID, properties.PW, {
    dialect: 'mysql',
    host: properties.HOST,
    port: properties.PORT
});

class Admin extends Sequelize.Model {}
Admin.init({
    uid: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pwd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rank: {
        type: Sequelize.SMALLINT,
        allowNull: false
    }
}, {sequelize});

async function prepareAdmin() {
    try {
        await Admin.sync();
        return true;
    } catch(e) {
        console.log(`Admin.sync Error::${e}`)
        return false
    }
}

module.exports = {
    Admin,
    prepareAdmin
}
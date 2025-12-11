
const {Sequelize} = require("sequelize");

const config = require("../util/config");

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: "mysql",
        logging:false
    }
);

const connectionTest = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (e) {
        console.error('Connection error:', e);
    }
}

connectionTest();

module.exports = sequelize;


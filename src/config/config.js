const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('gestaoeventos', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
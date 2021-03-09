const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');
const Tech = require('../models/Tech');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

//Inicia as models com o a conexão criada
Address.init(connection);
User.init(connection);
Tech.init(connection);

//Inicia as associações entre as models (foreignKeys)
Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;


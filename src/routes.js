const express = require('express');
const userController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json ({hello: 'world'})        
    })

routes.get('/users', userController.index );
routes.get('/users/:user_id', userController.findOne );   
routes.post('/users', userController.store);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);

module.exports = routes;

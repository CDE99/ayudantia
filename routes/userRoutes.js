const express = require("express");
const userController = require('../controllers/userController');
const api = express.Router();

api.post('/user', userController.createUser);
api.get('/users', userController.getUsers);
api.put('/user/update/:id', userController.updateUser);
api.delete('/user/delete/:id', userController.updateUser);
api.get('/user/search/:id', userController.updateUser);
api.post('/user/login', userController.login);

module.exports = api
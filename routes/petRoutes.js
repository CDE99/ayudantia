const express = require("express");
const petController = require('../controllers/petController');
const api = express.Router();

api.post('/pet', petController.createPet);
api.get('/pets', petController.getPets);
api.put('/pet/update/:id', petController.updatePet);
api.delete('/pet/delete/:id', petController.updatePet);
api.get('/pet/search/:id', petController.updatePet);

module.exports = api
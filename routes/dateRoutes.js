const express = require("express");
const dateController = require('../controllers/dateController');
const api = express.Router();

api.post('/date', dateController.createDate);
api.get('/dates', dateController.getDates);
api.put('/date/update/:id', dateController.updateDate);
api.delete('/date/delete/:id', dateController.updateDate);
api.get('/date/search/:id', dateController.updateDate);

module.exports = api
const express = require("express");
const employeeController = require('../controllers/employeeController');
const api = express.Router();

api.post('/employee', employeeController.createEmployee);
api.get('/employees', employeeController.getEmployees);
api.put('/employee/update/:id', employeeController.updateEmployee);
api.delete('/employee/delete/:id', employeeController.updateEmployee);
api.get('/employee/search/:id', employeeController.updateEmployee);

module.exports = api






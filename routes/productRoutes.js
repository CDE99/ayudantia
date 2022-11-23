const express = require("express");
const productController = require('../controllers/productController');
const api = express.Router();

api.post('/product', productController.createProduct);
api.get('/products', productController.getProducts);
api.put('/product/update/:id', productController.updateProduct);
api.delete('/product/delete/:id', productController.updateProduct);
api.get('/product/search/:id', productController.updateProduct);

module.exports = api
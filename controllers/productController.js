const { resolveSoa } = require('dns');
const Product = require('../models/product');

const createProduct = (req,res) =>{
    const { name, price, quantity, description } = req.body
    const newProduct = new Product({
        name,
        price,
        quantity,
        description
    })
    newProduct.save((error,product) =>{
        if(error){
            return res.status(400).send({message: "No se ha podido crear el producto"})
        }
        return res.status(201).send(product)
    })
}

const getProducts = (req,res) => {
    Product.find({},(error,products) => {
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(products.length == 0){
            return res.status(404).send({message:"No se encontraron productos"})
        }
        return res.status(200).send(products)
    })
}

const updateProduct = (req,res) => {
    const {id} = req.params
    Product.findByIdAndUpdate(id,req.body,(error, product) => {
        if (error) {
            return res.status(400).send({message: "No se pudo actualizar el producto"})
        }
        if (!product) {
            return res.status(404).send({message: "No se encontro el producto"})
        }
        return res.status(200).send({message: "Producto modificado"})
    })
}

const deleteProduct = (req,res) =>{
    const {id} = req.params
    Product.findByIdAndDelete(id,req.body,(error, product) => {
        if (error) {
            return res.status(400).send({message: "No se pudo eliminar el producto"})
        }
        if (!product) {
            return res.status(404).send({message: "No se encontro el producto"})
        }
        return res.status(200).send({message: "Producto eliminado"})
    })
}

const getProduct = (req,res) =>{
    const {id} = req.params
    Product.findById(id,req.body,(error, product) => {
        if (error) {
            return res.status(400).send({message: "No se pudo buscar el producto"})
        }
        if (!product) {
            return res.status(404).send({message: "No se encontro el producto"})
        }
        return res.status(200).send(product)
    })
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getProduct
}
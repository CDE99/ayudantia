const date = require('../models/date');

const createDate = (req,res) => {
    const {pet, day, hour} = req.body;
    const newDate = new date({
        pet,
        day,
        hour
    })
    newDate.save((error,date) => {
        if(error) {
            return res.status(400).send({message: "No se ha podido crear el carrito"})     
        }   
        return res.status(201).send(date);        
    })
}

const getDates = (req,res) => {
    Date.find({},(error,dates) => {
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(dates.length == 0){
            return res.status(404).send({message:"No se enconto el carrito"})
        }
        return res.status(200).send(date)
    })
}

const updateDate = (req,res) => {
    const {id} = req.params
    Date.findByIdAndUpdate(id,req.body,(error, date) => {
        if (error) {
            return res.status(400).send({message: "No se pudo actualizar el carrito"})
        }
        if (!date) {
            return res.status(404).send({message: "No se encontro el carrito"})
        }
        return res.status(200).send({message: "Categoria modificada"})
    })
}

const deleteDate = (req,res) =>{
    const {id} = req.params
    Date.findByIdAndDelete(id,req.body,(error, date) => {
        if (error) {
            return res.status(400).send({message: "No se pudo eliminar el carrito"})
        }
        if (!date) {
            return res.status(404).send({message: "No se encontro el carrito"})
        }
        return res.status(200).send({message: "Categoria eliminada"})
    })
}

const getDate = (req,res) =>{
    const {id} = req.params
    Date.findById(id,req.body,(error, date) => {
        if (error) {
            return res.status(400).send({message: "No se pudo buscar el carrito"})
        }
        if (!date) {
            return res.status(404).send({message: "No se encontro el carrito"})
        }
        return res.status(200).send(date)
    })
}
















 module.exports = {
    createDate,
    getDates,
    updateDate,
    deleteDate,
    getDate
}
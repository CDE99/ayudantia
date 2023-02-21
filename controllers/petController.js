const pet = require('../models/pet');

const createPet = (req,res) =>{
    const { name, typee, breed, owner } = req.body
    const newpet = new pet({
        name,
        typee,
        breed,
        owner
    })
    newpet.save((error,pet) =>{
        if(error){
            return res.status(400).send({message: "No se ha podido crear la mascota"})
        }
        return res.status(201).send(pet)
    })
}

const getPets = (req,res) => {
    pet.find({},(error,pets) => {
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(pets.length == 0){
            return res.status(404).send({message:"No se encontro la mascota"})
        }
        return res.status(200).send(pets)
    })
}

const updatePet = (req,res) => {
    const {id} = req.params
    pet.findByIdAndUpdate(id,req.body,(error, pet) => {
        if (error) {
            return res.status(400).send({message: "No se pudo actualizar la mascota"})
        }
        if (!pet) {
            return res.status(404).send({message: "No se encontro la mascota"})
        }
        return res.status(200).send({message: "mascota modificada"})
    })
}

const deletePet = (req,res) =>{
    const {id} = req.params
    Pet.findByIdAndDelete(id,req.body,(error, pet) => {
        if (error) {
            return res.status(400).send({message: "No se pudo eliminar la mascota"})
        }
        if (!pet) {
            return res.status(404).send({message: "No se encontro la mascota"})
        }
        return res.status(200).send({message: "peto eliminado"})
    })
}

const getPet = (req,res) =>{
    const {id} = req.params
    Pet.findById(id,req.body,(error, pet) => {
        if (error) {
            return res.status(400).send({message: "No se pudo buscar la mascota"})
        }
        if (!pet) {
            return res.status(404).send({message: "No se encontro la mascota"})
        }
        return res.status(200).send(pet)
    })
}

module.exports = {
    createPet,
    getPets,
    updatePet,
    deletePet,
    getPet
}
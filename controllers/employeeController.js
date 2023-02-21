const Employee = require('../models/employee');

const createEmployee = (req,res) => {
    const {name, rut} = req.body;
    const newEmployee = new employee({
        name,
        rut
    })
    newEmployee.save((error,employee) => {
        if(error) {
            return res.status(400).send({message: "No se ha podido crear el empleado"})     
        }   
        return res.status(201).send(employee)        
    })

}

const getEmployees = (req,res) => {
    Employee.find({},(error,employees) => { 
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(employee.length == 0){
            return res.status(404).send({message:"No se enconto el empleado"})
        }
        return res.status(200).send(employee)
    })
}

const updateEmployee = (req,res) => {
    const {id} = req.params
    Employee.findByIdAndUpdate(id,req.body,(error, employee) => {
        if (error) {
            return res.status(400).send({message: "No se pudo actualizar el empleado"})
        }
        if (!employee) {
            return res.status(404).send({message: "No se encontro el empleado"})
        }
        return res.status(200).send({message: "Empleado modificado"})
    })
}

const deleteEmployee = (req,res) =>{
    const {id} = req.params
    Employee.findByIdAndDelete(id,req.body,(error, employee) => {
        if (error) {
            return res.status(400).send({message: "No se pudo eliminar el empleado"})
        }
        if (!employee) {
            return res.status(404).send({message: "No se encontro el empleado"})
        }
        return res.status(200).send({message: "Empleado eliminado"})
    })
}

const getEmployee = (req,res) =>{
    const {id} = req.params
    Employee.findById(id,req.body,(error, employee) => {
        if (error) {
            return res.status(400).send({message: "No se pudo buscar el empleado"})
        }
        if (!employee) {
            return res.status(404).send({message: "No se encontro el empleado"})
        }
        return res.status(200).send(employee)
    })
}

 module.exports = {
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployees
}



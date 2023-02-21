const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    name:{
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    rut:{
        type: String,
        required: true,
        minLenght: 9,
        maxLenght: 10
    }
    
})

module.exports = mongoose.model('employee', employeeSchema);
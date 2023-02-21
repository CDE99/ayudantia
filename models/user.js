const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    livingplace: {
        type: Number,
        required: true
    },
    pet: {
        type: Schema.ObjectId,
        ref: "pet",
        required: false
        
    },
    role: {
        type: String,
        default: "user",
        enum: [
            'admin',
            'user'
        ]
    }
    
    
})

module.exports = mongoose.model('user', userSchema);
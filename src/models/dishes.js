import mongoose from 'mongoose';

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 1
    },
    price: {
        type: Number,
        required: true,
    },
    //Si se necesita mas de uno se usa []
    ingredients: [],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dish', dishSchema);
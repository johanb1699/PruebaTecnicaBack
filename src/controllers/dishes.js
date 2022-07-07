import Dish from '../models/dishes';
require('dotenv').config()

const createDish = async (req, res) => {

    const dish = new Dish(req.body);
    try {
        const savedDish = await dish.save();
        res.status(200).json({
            error: null,
            data: savedDish
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const getIngredientsDish = async (req, res) => {
    try {
        const dish = await Dish.aggregate([
            { $unwind: "$ingredients" },
            {
                $group: {
                    _id: "$ingredients",
                    count: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json({
            error: null,
            data: dish
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const getDishesMoreThreeIng = async (req, res) => {
    try {
        const dish = await Dish.find({ "ingredients.3": { "$exists": true } })
        res.status(200).json({
            error: null,
            data: dish
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const showAllDish = async (req, res) => {
    // get All Dish
    try {
        const dish = await Dish.find();
        res.status(200).json({
            error: null,
            data: dish
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const showByDishId = async (req, res) => {
    // get dish
    try {
        const dish = await Dish.findById(req.params.id);
        res.status(200).json({
            error: null,
            data: dish
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const updateDish = async (req, res) => {
    try {
        await Dish.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true });
        res.status(200).json({
            error: null,
            message: "Actualizado con exito"
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const deleteDish = async (req, res) => {
    try {
        await Dish.deleteOne({ _id: req.params.id });
        res.status(200).json({
            error: null,
            message: "Eliminado con exito"
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

export {
    createDish,
    getIngredientsDish,
    getDishesMoreThreeIng,
    showAllDish,
    showByDishId,
    updateDish,
    deleteDish
}
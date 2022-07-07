import { createDish, showAllDish, deleteDish, showByDishId, updateDish, getIngredientsDish, getDishesMoreThreeIng } from '../controllers/dishes'

// testing postman Authorization bearer token

module.exports = (app) => {
    //get all dishes
    app.get('/api/dishes', showAllDish);
    //get by id
    app.get('/api/dishes/:id', showByDishId);
    // create a new dish
    app.post('/api/dishes', createDish);
    // update dish
    app.put('/api/dish/:id', updateDish);
    // delet a new dish
    app.delete('/api/dish/:id', deleteDish);
    //get all ingredients
    app.get('/api/ingredients', getIngredientsDish);
    app.get('/api/dishMoreThreeIng', getDishesMoreThreeIng);
};
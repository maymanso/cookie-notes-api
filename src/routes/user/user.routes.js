const express = require('express');
const RecipesController = require('../../controller/recipes.controller');

const router = express();

router.get('/:userId/recipes', RecipesController.getByUserId);
router.patch('/recipeId/:recipeId', RecipesController.update);
router.get('/recipes/search', RecipesController.getByNameAndUser);

module.exports = router;

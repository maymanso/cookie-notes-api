const express = require('express');
const RecipesController = require('../../controller/recipes.controller');
const router = express();

router.post('/', RecipesController.create);
router.delete('/recipeId/:recipeId', RecipesController.delete);
router.get('/recipes', RecipesController.getAll);
router.get('/name', RecipesController.getByName);
router.get('/search', RecipesController.search);
router.get('/search/:recipeId', RecipesController.getByRecipeId);

module.exports = router;

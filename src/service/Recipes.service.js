const Recipes = require('../models/Recipes.model');
const BaseService = require('./Base.service');

class RecipesService extends BaseService {
  constructor() {
    super(Recipes)
  }

  searchRecipeByName = async (nameRecipe) => {
    try {
      return this.model.find({ name: { "$regex": `${nameRecipe}`, "$options": "i" } })
    } catch (error) {
      console.log('RecipesService.searchRecipeName - error ', error)
    }
  }

  searchRecipeByNameAndUser = async (nameRecipe, userId) => {
    try {
      return this.model.find({ name: { "$regex": `${nameRecipe}`, "$options": "i" }, userCreator: userId })
    } catch (error) {
      console.log('RecipesService.searchRecipeByNameAndUser - error ', error)
    }
  }

  searchRecipe = async (objectSearch) => {
    try {
      return await this.model.find(objectSearch)
    } catch (error) {
      console.log('RecipesService.searchRecipeName - error ', error)
    }
  }

}

module.exports = new RecipesService();

const RecipesService = require("../service/Recipes.service");
const UsersService = require("../service/Users.service");

const helperAvailableFilters = require("./helper/availableFilters.helper");
class RecipesController {

  _builderResponse = async (results) => {
    const recipesData = await Promise.all(results.map(async result => {
      const user = await UsersService.searchById(result.userCreator);

      const data = {
        recipeId: result.id,
        recipeName: result.name,
      };

      if (result.externalLink) data.externalLink = result.externalLink;
      if (result.recipe.length) data.recipe = result.recipe;

      data.userCreator = {
        id: result.userCreator,
        userName: user.name
      }

      return data;
    }))

    return {
      paging: {
        total: recipesData.length
      },
      recipes: recipesData,
      availableFilters: helperAvailableFilters.recipes,
    }
  }

  _verifyUser = (receipe, currentUser) => {
    const { userCreator } = receipe;
    if (userCreator != currentUser) throw new Error('Usuário não autorizado')
  }

  getByUserId = async (req, res) => {
    try {
      const { userId } = req.params;

      const recipesIds = await RecipesService.searchByUser(userId);

      const results = await Promise.all(recipesIds.map(recipeId => RecipesService.searchById(recipeId)));

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getByUserId - error ', error)
    }
  }

  getByRecipeId = async (req, res) => {
    try {
      const { recipeId } = req.params;

      const results = await RecipesService.searchById(recipeId);

      res.status(200).json(results);
    } catch (error) {
      console.log('RecipesController.getByRecipeId - error ', error)
    }
  }

  getAll = async (req, res) => {
    try {
      const results = await RecipesService.searchAll();

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getAll - error ', error)
    }
  }

  getByName = async (req, res) => {
    try {
      const { name } = req.query;
      const results = await RecipesService.searchRecipeByName(name);

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getByName - error ', error)
    }
  }

  getByNameAndUser = async (req, res) => {
    const { user } = req;

    try {
      const { name } = req.query;

      const results = await RecipesService.searchRecipeByNameAndUser(name, user.id);

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getByName - error ', error)
    }
  }

  search = async (req, res) => {
    try {
      const { query } = req;
      const results = await RecipesService.searchRecipe(query)

      const response = await this._builderResponse(results);

      res.status(200).json(response)
    } catch (error) {
      console.log('RecipesController.filterRecipes - error ', error)
    }
  }

  create = async (req, res) => {
    try {
      const { body, user } = req;

      const recipeRequest = {
        ...body,
        userCreator: user.id
      };

      const result = await RecipesService.create(recipeRequest);

      res.status(200).json({ message: `Recipe with ID ${result._id} was create!` })
    } catch (error) {
      console.log('RecipesController.filterRecipes - error ', error)
    }
  }

  update = async (req, res) => {
    const { body, user, params: { recipeId } } = req;
    const currentUsertoken = user.id;

    try {
      const receipe = await RecipesService.searchById(recipeId);
      this._verifyUser(receipe, currentUsertoken)

      await RecipesService.update(recipeId, body)

      res.status(200).json({ message: `Recipe with ID ${recipeId} was update!` })
    } catch (error) {
      console.log('RecipesController.filterRecipes - error ', error)
    }
  }

  delete = async (req, res) => {
    const { user, body } = req;

    const currentUsertoken = user.id;
    try {
      const receipe = await RecipesService.searchById(body.recipeId);
      this._verifyUser(receipe, currentUsertoken)

      await RecipesService.delete(body.recipeId)

      res.status(200).json({ message: `Recipe with ID ${body.recipeId} was delete!` })
    } catch (error) {
      console.log('RecipesController.delete - error ', error)
    }
  }
}

module.exports = new RecipesController();

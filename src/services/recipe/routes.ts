import { Router } from 'express';
import {
	createRecipe,
	findRecipes,
	findRecipeById,
	searchRecipes,
	updateRecipe,
	deleteRecipe,
	addHeart,
} from './controllers';

const router = Router();

/**
 * @ROUTE /api/recipes/:recipeId/heart
 * @method GET
 * @desc add heart to a given recipe
 * @access Private
 */
router.get('/:recipeId/heart', addHeart);

/**
 * @ROUTE /api/recipes/search?term="search-term"
 * @method GET
 * @desc search recipes
 * @access Public
 */
router.get('/search', searchRecipes);

/**
 * @ROUTE /api/recipes/:recipeId
 * @method DELETE
 * @desc delete recipe from database
 * @access Private
 */
router.delete('/:recipeId', deleteRecipe);

/**
 * @ROUTE /api/recipes/:recipeId
 * @method PUT
 * @desc update recipe
 * @access Private
 */
router.put('/:recipeId', updateRecipe);

/**
 * @ROUTE /api/recipes/:recipeId
 * @method GET
 * @desc find and return a recipe by id
 * @access Public
 */
router.get('/:recipeId', findRecipeById);

/**
 * @ROUTE /api/recipes?page=1&limit=10&sort=[title,asc]&filter=[[author,robert],[tag, chicken]]
 * @method GET
 * @desc get all recipes
 * @access public
 */
router.get('/', findRecipes);

/**
 * @ROUTE /api/recipes/
 * @method POST
 * @desc create a new recipe
 * @access Private
 */
router.post('/', createRecipe);

export default router;

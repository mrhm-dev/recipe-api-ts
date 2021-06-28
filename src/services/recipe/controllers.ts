import { Request, Response, NextFunction } from 'express';

/**
 * this controller function will accept ICreateRecipe as request body.
 * then create and store a newly created recipe to database.
 * @ROUTE /api/recipes
 * @method POST
 * @param req
 * @param res
 * @param next
 */
export function createRecipe(req: Request, res: Response, next: NextFunction) {}

/**
 * this function will return all recipes from database.
 * pagination, sorting, filtering can be applied externally with query params
 * @ROUTE /api/recipes
 * @method GET
 * @param req
 * @param res
 * @param next
 */
export function findRecipes(req: Request, res: Response, next: NextFunction) {}

/**
 * this function will return a recipe by it's id.
 * It should populate author and reviews also
 * @ROUTE /api/recipes:recipeId
 * @method GET
 * @param req
 * @param res
 * @param next
 */
export function findRecipeById(
	req: Request,
	res: Response,
	next: NextFunction
) {}

/**
 * this function will search database and filter recipes based on title, tags and body.
 * then return a list of matched recipe items.
 * @ROUTE /api/recipes/search?term="search-term"
 * @method GET
 * @param req
 * @param res
 * @param next
 */
export function searchRecipes(
	req: Request,
	res: Response,
	next: NextFunction
) {}

/**
 * this function will accept request body as IUpdateRecipe and update data
 * @ROUTE /api/recipes/:recipeId
 * @method PUT
 * @param req
 * @param res
 * @param next
 */
export function updateRecipe(req: Request, res: Response, next: NextFunction) {}

/**
 * this function will delete recipe from database.
 * @ROUTE /api/recipes/:recipeId
 * @method DELETE
 * @param req
 * @param res
 * @param next
 */
export function deleteRecipe(req: Request, res: Response, next: NextFunction) {}

/**
 * this function will add heart to a given recipe
 * @ROUTE /api/recipes/:recipeId/heart
 * @method GET
 * @param req
 * @param res
 * @param next
 */
export function addHeart(req: Request, res: Response, next: NextFunction) {}

const config = require('./knexfile').development
const database = require('knex')(config)

const getAllRecipeSummaries = (db = database) => {
  return db('recipes')
    .join('cook_time', 'recipes.cook_time_id', 'cook_time.id')
    .join(
      'cuisine_categories_recipes',
      'recipes.id',
      'cuisine_categories_recipes.recipe_id'
    )
    .join(
      'cuisine_categories',
      'cuisine_categories.id',
      'cuisine_categories_recipes.category_id'
    )
    .select(
      'recipes.id',
      'recipes.title',
      'recipes.season',
      'recipes.rating',
      'recipes.image',
      'cook_time.time_options',
      db.raw('GROUP_CONCAT(cuisine_categories.category_name, ",") cuisine_categories')
    )
    .groupBy('recipes.id')
}

const close = (db = database) => {
  db.destroy()
}

module.exports = {
  getAllRecipeSummaries,
  close
}

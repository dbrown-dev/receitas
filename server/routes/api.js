const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/summary', (req, res) => {
  db.getAllRecipeSummaries()
    .then(recipes => {
      const formattedRecipes = recipes.map(recipe => {
        recipe.cuisine_categories = recipe.cuisine_categories.split(',')
        return recipe
      })
      res.json(formattedRecipes)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

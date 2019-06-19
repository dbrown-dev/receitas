const fetch = require('node-fetch')
const getAllRecipes = () => {
  return fetch('http://localhost:3000/api/summary')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
      return data
    })
}

getAllRecipes()
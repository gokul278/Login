const express = require('express')

const {postUser} = require("../Controllers/UserController")

const routes = express.Router()

routes.post('/newaccounts/',postUser)

module.exports = routes
const config = require('../database/knexfile')[process.env.NODE_ENV]
const knex = require('knex')(config[process.env.NODE_ENV])

export knex

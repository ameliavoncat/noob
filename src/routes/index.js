var express = require('express')
var router = express.Router()
const pg = require('pg')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Server is running <3 <3')
})

module.exports = router

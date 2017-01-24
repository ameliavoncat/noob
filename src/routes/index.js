var express = require('express')
var router = express.Router()
const pg = require('pg')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' })
  res.send('hello')
})

module.exports = router

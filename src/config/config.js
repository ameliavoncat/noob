const pg = require('pg')
const fs = require('fs')

if(fs.existSync('.env')){
  require('dotenv').config()
}

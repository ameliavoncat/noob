const pg = require('pg')
const fs = require('fs')
const connectionString = process.env.DATABASE_URL

const env = () =>
 process.env.NODE_ENV || 'development'

if(fs.existsSync('.env')){
  require('dotenv').config()
}
export { env }

const pg = require('pg');
const fs = require('fs')
const connectionString = process.env.DATABASE_URL

if ( fs.existSync('.env') ) {
  require('dotenv').config()
}

const env = () =>
 process.env.NODE_ENV || 'development'


export { env, host_url, login_url }

const pg = require('pg');
const dotenv = require('dotenv')
const connectionString = process.env.DATABASE_URL
const host_url = process.env.PRODUCTION_URL
const login_url = process.env.AUTH_URL

const env = () =>
  return process.env.NODE_ENV || 'development'

export = { env, host_url, login_url }

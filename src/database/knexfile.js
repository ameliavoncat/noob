const defaultConfig = (env) => {
  const connectionString = process.env.DATABASE_URL

  return {
    client: 'postgresql',
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + 'src/database/migrations',
      tableName: 'migrations'
    }
  }
}

export {
  test: defaultConfig('test'),
  development: defaultConfig('development')
}

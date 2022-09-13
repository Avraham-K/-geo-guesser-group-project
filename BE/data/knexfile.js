const path = require('path')
const pathToMigrations = path.resolve(__dirname, '../migrations');


const knexConfig = {
  client: 'mysql',
  connection: {
    host: 'sql11.freemysqlhosting.net',
    database: 'sql11517556',
    user: 'sql11517556',
    password: 'vZBYE1uT1c',
  },
  pool: {
    min: 2,
    max: 80,
  },
  migrations: {
    tableName: 'knex-migrations',
    directory: pathToMigrations,
  },
};

module.exports = knexConfig
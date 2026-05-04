const knexModule = require('knex');

const dbConnection = knexModule({
  client: 'sqlite3',
  connection: {
    filename: './modules/school.sqlite3',
  },
  useNullAsDefault: true,
});
module.exports = dbConnection;

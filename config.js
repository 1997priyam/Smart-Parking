const {Pool} = require('pg')

const connectionString = 'postgres://bnuvjeos:HrbUAREVgZ6-6Vh5ieph_fASmapvbhlL@ruby.db.elephantsql.com:5432/bnuvjeos'

const pool = new Pool({
  connectionString: connectionString,
  ssl: false,
})

module.exports = {pool}
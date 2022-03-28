const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "test2022",
    host: "localhost",
    port: 5432,
    database: "todoDB"
  });

module.exports = pool;
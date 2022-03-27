const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "shopswap2022",
    host: "localhost",
    port: 5432,
    database: "shopswap"
  });

module.exports = pool;
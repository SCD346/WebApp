const Pool = require("pg").Pool;

const pool = new Pool({
    "user": "read1Jobs",
    "password" : "password",
    "host" : "Stephens-MBP",
    "port" : 5432,
    "database" : "postgres"
});

module.exports = pool;


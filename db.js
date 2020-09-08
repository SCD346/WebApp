//THIS FILE SETS UP THE CONNECTION TO POSTGRESQL
        //DB created, sitting on local host 5432
const Pool = require("pg").Pool; //PG library enables connection to the database with server

// Client object (pool)
const pool = new Pool({
    //Connection configuration: Uses the login information set up in PGAdmin when db: "postgres" was built
    "user": "read1Jobs",
    "password" : "password",
    "host" : "Stephens-MBP",
    "port" : 5432,
    "database" : "postgres"
});

//Export the above object, wont work without this
module.exports = pool;


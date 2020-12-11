//THIS FILE SETS UP THE CONNECTION TO POSTGRESQL
        //DB created, sitting on local host 5432
const Pool = require("pg").Pool; //PG library enables connection to the database with server
require("dotenv").config();

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     port: process.env.PG_PORT,
// };


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;


const proConfig = process.env.DATABASE_URL; //heroku addons

// Client object (pool)
const pool = new Pool({
    connectionString:
      process.env.NODE_ENV === "production" ? proConfig : devConfig,
  });

//Export the above object, wont work without this
module.exports = pool;

// // Client object (pool)
// const pool = new Pool({
//     //Connection configuration: Uses the login information set up in PGAdmin when db: "postgres" was built
//     "user": "read1Jobs",
//     "password" : "password",
//     "host" : "Stephens-MBP",
//     "port" : 5432,
//     "database" : "postgres"
// });
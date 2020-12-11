// Requiring necessary libraries
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db") //requiring the object created and exported in db.js
const path = require("path");
const PORT = process.env.PORT || 8080;


//HEROKU LAUNCH PREP
// process.env.PORT
// process.env.NODE_ENV => production or undefined



//middleware
app.use(cors());
app.use(express.json()); //enables sccess to'request.body' from the client side

if (process.env.NODE_ENV === "production") {
    //serve static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
}



// WEB SERVER: port 8080
    // Connects to the Postgresql DB on port 5432 (can access the db via PG Admin on port 5000)
app.listen(PORT, () => {
    console.log("server has started on port ${PORT}")
});



//ROUTES --> POST,  GET(all),  GET(one),  PUT(update),  DELETE

//CREATE - POST, async request
app.post("/jobs", async (req, res) => {
    try {
        const {title, description, company, id} = req.body;
        const newJob = await pool.query(
            "INSERT INTO jobs (title, description, company, id) VALUES($1, $2, $3, $4) RETURNING *",
            [title, description, company, id,]
        //console.log(req.body);
        );
        
        res.json(newJob.rows[0]);
    } catch (err) {
        console.error(err.message);
        
    }

})


//get all
app.get("/jobs", async (req, res) => {
    try {
        const allJobs = await pool.query("SELECT * from jobs");
        res.json(allJobs.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get one
app.get("/jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const job = await pool.query("SELECT * FROM jobs WHERE id = $1", [id]);
        //console.log(req.params);
        res.json(job.rows[0])
    } catch (err) {
        console.log(err.message);
    }
});

//update 
app.put("/jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateJob = await pool.query(
            "UPDATE jobs SET description = $1 WHERE id = $2",
            [description, id]
        );
        res.json("Job was updated")
    } catch (err) {
        console.error(err.message)
    }
})

//delete
app.delete("/jobs/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteJob = await pool.query("DELETE FROM jobs WHERE id = $1",
        [id]
        );
        res.json("Job was deleted!")
    } catch (err) {
      console.log(err.message);
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});
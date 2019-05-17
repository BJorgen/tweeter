"use strict";

// Express Server Setup
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongo DB Setup
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Mongo DB Connect
MongoClient.connect(MONGODB_URI, (err, db) => {
    if(err) {
        console.error(`Failed to connect: ${MONGODB_URI}`);
        throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`);
    
    // The `data-helpers` module provides an interface to the database of tweets.
    const DataHelpers = require("./lib/data-helpers.js")(db);

    // The `tweets-routes` module defines routes
    const tweetsRoutes = require("./routes/tweets")(DataHelpers);
    
    // Mount the tweets routes at the "/tweets" path prefix
    app.use("/tweets", tweetsRoutes);

})


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

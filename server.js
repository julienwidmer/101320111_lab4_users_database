/*
Course Code:    COMP3133
Lab:            4
Student Name:   Julien Widmer
Student ID:     101320111
*/
// Modules
require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const userModel = require("./models/userModel");

// Database connection
const DB_NAME = "COMP3133";
const DB_USER = "admin";
const DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.yw8mq9e.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) throw error;
    console.log("Successfully connected to MongoDB");
});

// Server config
const SERVER_PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing config
// http://localhost:3000/users
app.post("/users", async (req, res) => {
    const user = new userModel(req.body);

    try {
        await user.save((error) => {
            if(error){
                res.send(error)
            }else{
                res.send(user);
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(SERVER_PORT, () => {
    console.log(`Server listening at: http://localhost:${SERVER_PORT}`);
});
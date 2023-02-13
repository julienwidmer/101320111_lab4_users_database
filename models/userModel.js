/*
Course Code:    COMP3133
Lab:            4
Student Name:   Julien Widmer
Student ID:     101320111
*/
const mongoose = require("mongoose");

// Define schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true
        // TODO: Email must be valid
    },
    city: {
        type: String,
        required: true
        // TODO: Only alphabet and spaces
    },
    website: {
        type: String,
        required: true
        // TODO: Web URL address must be valid (http or https is valid)
    },
    zip: {
        type: String,
        required: true,
        // TODO: Zip code format must be like 12345-1234
    },
    phone: {
        type: String,
        required: true,
        // TODO: Phone format must be like 1-123-123-1234
    }
})

/* User JSON example:
{
    "username": "user532",
    "email": "user@example.com",
    "city": "Toronto",
    "website": "https://user532.portfolio.freebie.com",
    "zip": "34344-1112",
    "phone": "1-123-456-7890"
}
*/

// Create mongodb schema
const user = mongoose.model("users", UserSchema, "Users");
module.exports = user;
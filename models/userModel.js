/*
Course Code:    COMP3133
Lab:            4
Student Name:   Julien Widmer
Student ID:     101320111
*/
const mongoose = require("mongoose");
const validator = require("validator");

// Define schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username"],
        validate: {
            validator: (username) => username.length >= 4,
            message: (props) => `'${props.value}' is less than 4 characters`
        }
    },
    email: {
        type: String,
        required: [true, "Please enter email address"],
        validate: {
            validator: (email) => validator.isEmail(email),
            message: (props) => `'${props.value}' is not a valid email address`
        }
    },
    city: {
        type: String,
        required: [true, "Please enter city"],
        match: [/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"]
    },
    website: {
        type: String,
        required: [true, "Please enter website"],
        match: [/^(https?:\/\/)/i, "Please enter valid website URL with HTTP or HTTPS"]
    },
    zip: {
        type: String,
        required: [true, "Please enter ZIP"],
        match: [/^\d{5}-\d{4}$/, "Please enter valid ZIP with the following format DDDDD-DDDD (i.e. 12345-1234)"]
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"],
        match: [/^\d{1}-\d{3}-\d{3}-\d{4}$/,
            "Please enter valid phone number with the following format D-DDD-DDD-DDDD (i.e. 1-123-456-7890)"]
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
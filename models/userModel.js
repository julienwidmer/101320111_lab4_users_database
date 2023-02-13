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
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
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
    address: {
        street: {
            type: String,
            required: [true, "Please enter street"]
        },
        suite: {
            type: String,
            required: [true, "Please enter suite"]
        },
        city: {
            type: String,
            required: [true, "Please enter city"],
            match: [/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"]
        },
        zipcode: {
            type: String,
            required: [true, "Please enter ZIP"],
            match: [/^\d{5}-\d{4}$/, "Please enter valid ZIP with the following format DDDDD-DDDD (i.e. 12345-1234)"]
        },
        geo: {
            lat: {
                type: String,
                required: [true, "Please enter geo lat"]
            },
            long: {
                type: String,
                required: [true, "Please enter geo long"]
            }
        }
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"],
        match: [/^\d{1}-\d{3}-\d{3}-\d{4}$/,
            "Please enter valid phone number with the following format D-DDD-DDD-DDDD (i.e. 1-123-456-7890)"]
    },
    website: {
        type: String,
        required: [true, "Please enter website"],
        match: [/^(https?:\/\/)/i, "Please enter valid website URL with HTTP or HTTPS"]
    },
    company: {
        name: {
            type: String,
            required: [true, "Please enter company name"]
        },
        catchPhrase: {
            type: String,
            required: [true, "Please enter company catch phrase"]
        },
        bs: {
            type: String,
            required: [true, "Please enter company bs"]
        },
    },
})

/* User JSON example:
{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031",
    "website": "http://hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
*/

// Create mongodb schema
const user = mongoose.model("users", UserSchema, "Users");
module.exports = user;
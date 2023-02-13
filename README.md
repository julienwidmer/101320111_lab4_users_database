# COMP 3133 - Lab 4

---

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Setup database credentials


3. Run Server

```bash
npm start
```

## Create a new User
To create a new user, send a POST request with a valid JSON object to the `/users` endpoint on port `3000`.

`http://localhost:3000/users`

### Example of a valid User JSON object
```json
{
  "username": "user532",
  "email": "user@example.com",
  "website": "https://user532.portfolio.freebie.com",
  "address": {
    "city": "Toronto",
    "zipcode": "34344-1112"
  },
  "phone": "1-123-456-7890"
}
```
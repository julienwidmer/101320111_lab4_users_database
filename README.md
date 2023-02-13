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
```
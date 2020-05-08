# Kamvan

Environmental variables:
1. PORT="integer"
1. SALT="integer"
1. SECRET="string"

Required dependencies:
1. axios
1. bcryptjs
1. cors
1. dotenv
1. express
1. jsonwebtoken
1. pg
1. sequelize

Install the dependecies and then run the following command: `npm run dev`

## Kamvan API Documentation

Kamvan API is organized around [REST][1] that uses resource-oriented URLs and returns responses as JSON. In Kamvan, all tasks is saved as instance of model Task. Similarly, all users is saved as instance of model User.

Post, Pust and Delete method will require jsonwebtoken from users who successfully registered and signed in.

[1]: https://en.wikipedia.org/wiki/Representational_state_transfer

### POST /register

This will create a new user based on form-URL-encoded request body.

Request headers:
```javascript
{ Content-Type: "application/json" }
```

Request body:
```javascript
{
  "name": "username",
  "email": "emaildemo@mail.ru",
  "password": "emailada"
}
```

Success Response:
```javascript
{
  "User": {
    "id": 8,
    "name": "username",
    "email": "emaildemo@mail.ru",
    "organization": "Hacktiv8"
  }
}
```

Error Response:
```javascript
{
  "code": 400,
  "type": "Bad request"
}
```
### POST /login

This will return a string of jsonwebtoken based on input of user (email and password) in request body.

Request headers:
```javascript
{ Content-Type: "application/json" }
```

Request body:
```javascript
{
  "email": "emaildemo@mail.ru",
  "password": "emailada"
}
```

Success Response:
```javascript
{
  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Error Response:
```javascript
{ "msg": "Wrong email or password" }
```

### POST /

This will create a new Task instance based on form-url-encoded request body.

Request headers:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Request body:
```javascript
{
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "category": "Todo",
      "due_date": "2020-05-01"
}
```

Success Response:
```javascript
{
      "id": 2,
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "category": "Todo",
      "due_date": "2020-05-01T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-04-27T15:58:39.755Z",
      "updatedAt": "2020-04-27T15:58:39.755Z"
}    
```

Error Response:
```javascript
{
  error,
  msg: 'Mohon maaf, untuk saat ini layanan sedang tidak tersedia'
}
```

### GET /

This will return all Task instances saved in the server as array of objects. If no Task is saved in the server, then an empty array will be returned.

Request headers:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Success Response:
```javascript
{
  "tasks": [
    {
      "id": 2,
      "title": "Bisa Update Cat",
      "category": "Done",
      "description": "No description",
      "due_date": "2020-05-30T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-05-07T15:24:27.812Z",
      "updatedAt": "2020-05-08T02:58:05.429Z"
    },
    {
      "id": 5,
      "title": "Refactor Client",
      "category": "Todo",
      "description": "No description",
      "due_date": "2020-05-08T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-05-08T11:47:26.443Z",
      "updatedAt": "2020-05-08T11:47:26.443Z"
    }
  ]
}
```

Error Response:
```javascript
{
  "loc": "@authentication",
  "error": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
  }
}
```

### PUT /:id

This will update an instance of Task based on based on form-url-encoded request body. If any of the value in request body is empty, then that particular value will not be updated.

Request header:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Request params:
```javascript
{ id: "Task id"}
```

Request body:
```javascript
{
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "category": "Todo",
      "due_date": "2020-05-01"
}
```

Success Response:
```javascript
{
      "id": 2,
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "category": "Todo",
      "due_date": "2020-05-01T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-04-27T15:58:39.755Z",
      "updatedAt": "2020-04-27T15:58:39.755Z"
}    
```

Error Response:
```javascript
{
  "code": 400,
  "type": "Bad Request"
}
```

### DELETE /:id

This will destroy the instance of Task based on id in request params.

Request header:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Request params:
```javascript
{ id: "Task id"}
```

Success Response:
```javascript
{ msg: `Task with id 1 has been deleted` }
```

Error Response:
```javascript
{ msg: `Task dengan id 9 tidak ditemukan` }
```
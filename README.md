# Kamvan_server
**SIGNUP**

* **URL**

  /users/signup

* **Method:**

  `POST`

* **Header:**

  `{

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"

    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{

    "id": 3,
    "email": "cokro1@yahoo.com"
        
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**SignIn**

* **URL**

  /users/signin

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{

    "id": 3,
    "email": "cokro1@yahoo.com"
        
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Get Find All**

* **URL**

  /tasks

* **Method:**

  `GET`

* **Header:**

  `{

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
    
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      
  "tasks": [
    {
      "id": 4,
      "title": "masuk",
      "description": "jelas masuk",
      "category": "Back-Log",
      "UserId": 1,
      "createdAt": "2020-05-23T10:17:14.867Z",
      "updatedAt": "2020-05-23T10:45:43.578Z",
      "User": {
        "id": 1,
        "email": "cokro1@yahoo.com",
        "organization": "hacktiv8"
      }
    },
    {
      "id": 5,
      "title": "jangan",
      "description": "menyertai benar atau salah",
      "category": "Back-Log",
      "UserId": 1,
      "createdAt": "2020-05-23T10:19:22.088Z",
      "updatedAt": "2020-05-23T10:19:22.088Z",
      "User": {
        "id": 1,
        "email": "cokro1@yahoo.com",
        "organization": "hacktiv8"
      }
    }
  ]

}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Post Add Task**

* **URL**

  /tasks

* **Method:**

  `POST`

* **Header:**

  `{

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
    
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{

  "tasks": [
    {
      "id": 4,
      "title": "masuk",
      "description": "jelas masuk",
      "category": "Back-Log",
      "UserId": 1,
      "createdAt": "2020-05-23T10:17:14.867Z",
      "updatedAt": "2020-05-23T10:45:43.578Z",
      "User": {
        "id": 1,
        "email": "cokro1@yahoo.com",
        "organization": "hacktiv8"
      }
    },
    {
      "id": 5,
      "title": "jangan",
      "description": "menyertai benar atau salah",
      "category": "Back-Log",
      "UserId": 1,
      "createdAt": "2020-05-23T10:19:22.088Z",
      "updatedAt": "2020-05-23T10:19:22.088Z",
      "User": {
        "id": 1,
        "email": "cokro1@yahoo.com",
        "organization": "hacktiv8"
      }
    },
    {
      "id": 6,
      "title": "codingan",
      "description": "belum bener",
      "category": "Back-Log",
      "UserId": 1,
      "createdAt": "2020-05-23T10:41:29.860Z",
      "updatedAt": "2020-05-23T10:41:29.860Z",
      "User": {
        "id": 1,
        "email": "cokro1@yahoo.com",
        "organization": "hacktiv8"
      }
    }
  ]

}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Get Find Task**

* **URL**

  /tasks/:id

* **Method:**

  `GET`

* **Header:**

  `{

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
    
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{

  "task": [
    {
      "id": 4,
      "title": "masuk",
      "description": "jelas masuk",
      "category": "Back-Log",
      "UserId": 1,
      "createdAt": "2020-05-23T10:17:14.867Z",
      "updatedAt": "2020-05-23T10:45:43.578Z",
      "User": {
        "id": 1,
        "email": "cokro1@yahoo.com",
        "organization": "hacktiv8"
      }
    }
  ]

}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Delete Task**

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`

* **Header:**

  `{

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
    
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{

  "msg": "task deleted",
  "task": 1

}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Update Task**

* **URL**

  /tasks/:id

* **Method:**

  `PUT`

* **Header:**

  `{

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
    
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{

  "msg": "task updated",
  "task": [
    1,
    [
      {
        "id": 4,
        "title": "masuk",
        "description": "jelas masuk",
        "category": "Back-Log",
        "createdAt": "2020-05-23T10:17:14.867Z",
        "updatedAt": "2020-05-23T10:45:43.578Z",
        "UserId": 1
      }
    ]
  ]

}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`
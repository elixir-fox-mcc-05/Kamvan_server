# Kamvan_server

Postman: https://documenter.getpostman.com/view/10895410/Szme3xGp

**User Registration**
----

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Request Body**

    **Required:**
    
    `{
        email: "kamvan1@mail.com", 
        password: "123"
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

    `{
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYW12YW4xQG1haWwuY29tIiwib3JnYW5pemF0aW9uIjoiSGFja3RpdjgiLCJpYXQiOjE1ODg4NDc1NzV9.rWxLKZkj3IvdnMBB00aVJQ3Bb4lcyuM-ErB57ZkECQk",
        "msg": "Successfully registered"
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    
    `{
        type: "Bad Request",
        "errors": [
            {
                "message": "Email already exists"
            }
        ]
    }`

    OR

    `{
        "type": "Bad Request",
        "errors": [
            {
                "message": "Input valid email"
            },
            {
                "message": "Email must be inputted"
            },
            {
                "message": "Password must be 3-10 characters"
            },
            {
                "message": "Password must be inputted"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**User Login**
----

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Request Body**

  **Required:**
    
    `{
        email: "kamvan1@mail.com", 
        password: "123"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `{
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYW12YW4xQG1haWwuY29tIiwib3JnYW5pemF0aW9uIjoiSGFja3RpdjgiLCJpYXQiOjE1ODg4NDc4MTN9.Filk5rnFMTnEEYLFBPy6NzWAq48pUdaUwspdRAVzBvA",
        "msg": "Successfully logged in"
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    
    `{
        "type": "Bad Request",
        "errors": [
            {
                "message": "Invalid email/password"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`

**Create Task**
----

* **URL**

  /tasks

* **Method:**
  
  `POST`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **Request Body**

   **Required:**

   `{
       title: "Task from kamvan1",
       assignedTo: "someone"
    
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    
    `{
        "msg": "New Task Successfully created",
        "task": {
            "id": 5,
            "title": "Task from kamvan1",
            "category": "backlog",
            "assignedTo": "someone",
            "UserId": 1,
            "organization": "Hacktiv8"
        }
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    
    `{
        "type": "Bad Request",
        "errors": [
            {
                "message": "Title must be inputted"
            }
        ]
    }`

    OR

  * **Code:** 401 <br />
    **Content:** 
        
    `{
        "type": "Unauthorized",
        "errors": [
            {
                "message": "Please login first"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Show All Task**
----

* **URL**

  /tasks

* **Method:**
  
  `GET`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **Request Body**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "task": [
            {
            "id": 8,
            "title": "Task from kamvan 2",
            "category": "backlog",
            "assignedTo": "someone",
            "UserId": 5,
            "organization": "Hacktiv8",
            "createdAt": "2020-05-07T10:56:36.293Z",
            "updatedAt": "2020-05-07T10:56:36.293Z"
        },
        {
            "id": 5,
            "title": "Task from kamvan1",
            "category": "backlog",
            "assignedTo": "someone",
            "UserId": 1,
            "organization": "Hacktiv8",
            "createdAt": "2020-05-07T10:41:36.538Z",
            "updatedAt": "2020-05-07T10:41:36.538Z"
        }
        ]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Increase Category**
----

* **URL**

  /tasks/up/:id

* **Method:**
  
  `PATCH`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "msg": "Your task successfully updated",
        "task": [
            {
                "id": 5,
                "title": "Task from kamvan1",
                "category": "todo",
                "assignedTo": "someone",
                "UserId": 1,
                "organization": "Hacktiv8",
                "createdAt": "2020-05-07T10:41:36.538Z",
                "updatedAt": "2020-05-07T11:19:05.933Z"
            }
        ]
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
        "type": "Not Found",
        "errors": [
            {
                "message": "Task not found"
            }
        ]
    }`

    OR

  * **Code:** 401 <br />
    **Content:** 
    
    `{
        "type": "Unauthorized",
        "errors": [
            {
                "message": "You are not authorized"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Decrease Category**
----

* **URL**

  /tasks/down/:id

* **Method:**
  
  `PATCH`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "msg": "Your task successfully updated",
        "task": [
            {
                "id": 5,
                "title": "Task from kamvan1",
                "category": "backlog",
                "assignedTo": "someone",
                "UserId": 1,
                "organization": "Hacktiv8",
                "createdAt": "2020-05-07T10:41:36.538Z",
                "updatedAt": "2020-05-07T11:21:16.967Z"
            }
        ]
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
        "type": "Not Found",
        "errors": [
            {
                "message": "Task not found"
            }
        ]
    }`

    OR

  * **Code:** 401 <br />
    **Content:** 
    
    `{
        "type": "Unauthorized",
        "errors": [
            {
                "message": "You are not authorized"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`

**Delete Task**
----

* **URL**

  /tasks/:id

* **Method:**
  
  `DELETE`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "msg": "Successfully deleted task"
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
        "type": "Not Found",
        "errors": [
            {
                "message": "Task not found"
            }
        ]
    }`

    OR

  * **Code:** 401 <br />
    **Content:** 
    
    `{
        "type": "Unauthorized",
        "errors": [
            {
                "message": "You are not authorized"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`

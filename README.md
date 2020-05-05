# Kamvan_server

## User Register

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

  first_name=[string]
  last_name=[string]
  email=[string]
  password=[string]

* **Success Response:**

  * **Code:** 201 Created<br />
    **Content:** `{
    "User": {
        "id": 1,
        "first_name": "Yosa",
        "last_name": "Alfiqie",
        "email": "yosa@mail.com",
        "password": "$2a$10$2Vc.Uwk9.Bar7cvJBC46vua7CotA3VE8uNVvZV856TG/24awOgiba",
        "updatedAt": "2020-05-05T10:24:51.180Z",
        "createdAt": "2020-05-05T10:24:51.180Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/register

## User Login

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

  email=[string]<br>
  password=[string]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ5b3NhQG1haWwuY29tIiwiaWF0IjoxNTg3OTgzNTExfQ.99Xx38e9IQygRvuvUdus0mHccwE5LLznCDAO5FWyQoU"
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/login

## GET ALL TASKS
  GET all Task of a user

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "Task": [
        {
            "id": 2,
            "title": "Mengerjakan Kamvan",
            "description": "Mengerjakan Kamvan",
            "points": 200,
            "CategoryId": 1,
            "UserId": 1,
            "createdAt": "2020-05-05T10:38:02.093Z",
            "updatedAt": "2020-05-05T10:38:02.093Z",
            "User": {
                "id": 1,
                "email": "yosa@mail.com"
            }
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Todos relation does not exist" }`

* **Sample Call:**

  http://localhost:3000/tasks

## ADD NEW Task

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  title=[string] <br>
  description=[string] <br>
  points=[integer]
  categoryId=[integer]

* **Success Response:**

  * **Code:** 201 Created<br />
    **Content:** `{
    "Task": {
        "CategoryId": 1,
        "id": 2,
        "title": "Mengerjakan Kamvan",
        "description": "Mengerjakan Kamvan",
        "points": 200,
        "UserId": 1,
        "updatedAt": "2020-05-05T10:38:02.093Z",
        "createdAt": "2020-05-05T10:38:02.093Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validation Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/tasks

## Update Task

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   id=[integer]

* **Data Params**

  title=[string] <br>
  description=[string] <br>
  points=[integer]
  categoryId=[integer]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "Task": {
        "CategoryId": 1,
        "id": 2,
        "title": "Mengerjakan Kamvan",
        "description": "Mengerjakan Kamvan",
        "points": 200,
        "UserId": 1,
        "updatedAt": "2020-05-05T10:38:02.093Z",
        "createdAt": "2020-05-05T10:38:02.093Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validation Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/tasks

## DELETE TASK

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   id=[integer]

* **Data Params**

  title=[string] <br>
  description=[string] <br>
  points=[integer]
  categoryId=[integer]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "deletedData": {
        "CategoryId": 1,
        "id": 2,
        "title": "Mengerjakan Kamvan",
        "description": "Mengerjakan Kamvan",
        "points": 200,
        "UserId": 1,
        "updatedAt": "2020-05-05T10:38:02.093Z",
        "createdAt": "2020-05-05T10:38:02.093Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validation Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/tasks

## Show All Category

* **URL**

  /category

* **Method:**

  `GET`
  
*  **URL Params**

  NONE

* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "Categories": [
        {
            "id": 1,
            "name": "Back-Log",
            "createdAt": "2020-05-05T08:52:49.497Z",
            "updatedAt": "2020-05-05T08:52:49.497Z",
            "Tasks": [
                {
                    "id": 2,
                    "title": "Mengerjakan Kamvan",
                    "description": "Mengerjakan Kamvan",
                    "points": 200,
                    "CategoryId": 1,
                    "UserId": 1,
                    "createdAt": "2020-05-05T10:38:02.093Z",
                    "updatedAt": "2020-05-05T10:38:02.093Z"
                }
            ]
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validation Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/category

## Find Task By Category

* **URL**

  /category/:id

* **Method:**

  `GET`
  
*  **URL Params**

   id=[integer]

* **Data Params**

  title=[string] <br>
  description=[string] <br>
  points=[integer]
  categoryId=[integer]

* **Success Response:**

  * **Code:** 201 Created<br />
    **Content:** `{
    "Category": {
        "id": 1,
        "name": "Back-Log"
        "updatedAt": "2020-05-05T10:38:02.093Z",
        "createdAt": "2020-05-05T10:38:02.093Z",
        "Tasks": []
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validation Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/category/1
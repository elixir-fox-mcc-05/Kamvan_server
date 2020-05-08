# KamVan-Server

**SignUP User**
----
  adding new user to database

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `email=[string]`
   `password=[string]`
   `confirm_password=[string]`
   `org=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "successfully register",
                    "result": {
                        "id": 4,
                        "email": "email4@mail.com",
                        "password": "$2a$10$HF5ron9SKeYgQDshfccHCerFngbHsL03Ke86/T6dKN70QgIotd9WS",
                        "org": "888",
                        "updatedAt": "2020-05-08T00:21:54.592Z",
                        "createdAt": "2020-05-08T00:21:54.592Z"
                    }
                }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "please input confirm password same as password" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "password must morethan 4 character" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "email has already been used" }`

* **Sample Call:**

 **end**
----

**LogIn User**
----
   user Login

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbWFpbDFAZW1haWwuY29tIiwiaWF0IjoxNTg4MDY5Nzg0fQ.0obIolFw130Zz-npEcXoNfFU0ze8lw_4tQcBWa3n3tU"}`
 
* **Error Response:**

  * **Code:** 401 UNAUTORIZE <br />
    **Content:** `{ error : "wrong email/password" }`

* **Sample Call:**

 **end**
----

**Show User's organization TASK list**
----
  show user's organization todo list

* **URL**

  /task

* **Method:**

  `GET`
  
*  **URL Params**

  **Required:**

    headers : token login

* **Data Params**

    none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
                    {
                        "id": 1,
                        "title": "tes user 1",
                        "description": "desw",
                        "point": 100,
                        "assign_to": "anyone",
                        "status": "back-log",
                        "user_id": 1,
                        "user_org": "Hacktiv8",
                        "createdAt": "2020-05-08T00:21:13.798Z",
                        "updatedAt": "2020-05-08T00:21:13.798Z"
                    }
                ]`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "internal server error" }`


* **Sample Call:**

 **end**
----

**User Add Task**
----
  adding new task to user database

* **URL**

  /task

* **Method:**

  `POST`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `title=[string]`
   `description=[string]`
   `point=[integer]`
   `assign_to=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success adding task",
                    "result": {
                        "id": 4,
                        "title": "tes user 3",
                        "description": "desw",
                        "point": 100,
                        "assign_to": "anyone",
                        "user_id": 1,
                        "user_org": "Hacktiv8",
                        "updatedAt": "2020-05-08T03:24:59.157Z",
                        "createdAt": "2020-05-08T03:24:59.157Z",
                        "status": "back-log"
                    }
                }`
 
* **Error Response:**

* **Sample Call:**

 **end**
----

**User Edit Task**
----
  edit task that user selected

* **URL**

  /task/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `title=[string]`
   `description=[string]`
   `point=[string]`
   `assign_to=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success update data"
                }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ you don't have permision to update or delete this task }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ this task doesn't exists or has been deleted}`


* **Sample Call:**

 **end**
----

**User Move Task to another table**
----
  move task that user selected

* **URL**

  /task/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `status=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success update data"
                }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ you don't have permision to update or delete this task }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ this task doesn't exists or has been deleted}`


* **Sample Call:**

 **end**
----

**User Delete Task**
----
  deleting task that user selected

* **URL**

  /task/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

  **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success deleting task with id 1"
                }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZE <br />
    **Content:** `{ error : "not found" }`


* **Sample Call:**

 **end**
----
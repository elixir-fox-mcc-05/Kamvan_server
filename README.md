# **REST API DOCUMENTATION**

**INTRODUCTION**

Rest api documentation for project from *Hacktiv8* to make Kanban Website

----
## **Users**
----
Represents for register user data and for user login as a requirements before using this Website.

### **Register User**

Create user data with default organization as 'Hacktiv8'

* **Method:**

  `POST`

* **URL**

  /users/register

  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    | Params       | Description                          |
    |--------------|--------------------------------------|
    | email        | E-mail of the user, must be unique   |
    | password     | Password of the user                 |

* **Success Response:**

  * **Code:** 201 <br />
  **Content:** 

        {
            "id": 1,
            "email": "example@gmail.com",
            "organization": "Hacktiv8"
        }

* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
            {
                "message": "E-mail must be filled"
            },
            {
                "message": "E-mail must be in e-mail format \"youremail@mail.com\""
            },
            {
                "message": "Password must be filled"
            },
            {
                "message": "Email already in use"
            }
          ]
        }
    
    OR

  * **Code:** 500 Internal Server Error <br />   

### **Login User**

Login using user data that already created/registerd

* **Method:**

  `POST`

* **URL**

  /users/login

*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    | Params   | Description                                                      |
    |----------|------------------------------------------------------------------|
    | email    | E-mail of the user, must be already register                     |
    | password | Password of the user, must be already register, pair with e-mail |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 

        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJleGFtcGxlQGdtYWlsLmNvbSIsIm9yZ2FuaXphdGlvbiI6IkhhY2t0aXY4IiwiaWF0IjoxNTg4ODU3NDU2fQ.qee6iDK4adwbxIgDJhfRofCyFnDKnzAb5D_NA2TEtMw",
            "id": 1,
            "email": "example@gmail.com",
            "organization": "Hacktiv8"
        }  

* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
            {
                "message": "Invalid E-Mail/Password"
            }
          ]
        }
      
    OR

  * **Code:** 500 Internal Server Error <br />       


----
## **Tasks**
----
Represents as a main system. 

### **Create Task**

Create Task data with user id, email, and organization from login user, and category set default as 'Back Log'

* **Method:**

  `POST`

* **URL**

  /tasks

*  **URL Params**

   **Required:**
 
    headers = token

* **Data Params**

    | Params      | Description                   |
    |-------------|-------------------------------|
    | title       | Title of The Task             |
    | description | Description of The Task       |

* **Success Response:**

  * **Code:** 201 Created<br />
  **Content:** 

        {
            "task": {
                "category": "Back Log",
                "id": 1,
                "title": "example 1",
                "description": "desc example 1 ",
                "UserId": 1,
                "UserEmail": "example@gmail.com",
                "UserOrganization": "Hacktiv8",
                "updatedAt": "2020-05-07T13:27:33.312Z",
                "createdAt": "2020-05-07T13:27:33.312Z"
            }
        }
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
            {
                "message": "Title must be filled"
            }
          ]
        }

  OR

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
            {
              "message": "Unauthorized. Please login first"
            }
          ]
        }

  OR

  * **Code:** 500 Internal Server Error <br />

### **Read All Task**

Show all Task list that have same organization wtih login user

* **Method:**

  `GET`

* **URL**

  /tasks

*  **URL Params**

   **Required:**
 
    headers = token

* **Data Params**

    none

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
            "tasks": [
                {
                    "id": 2,
                    "title": "example 2",
                    "description": "",
                    "category": "Back Log",
                    "UserId": 1,
                    "UserEmail": "2exam@gmail.com",
                    "UserOrganization": "Hacktiv8",
                    "createdAt": "2020-05-07T13:29:42.203Z",
                    "updatedAt": "2020-05-07T13:29:42.203Z"
                },
                {
                    "id": 1,
                    "title": "example 1",
                    "description": "desc 1",
                    "category": "Back Log",
                    "UserId": 1,
                    "UserEmail": "example@gmail.com",
                    "UserOrganization": "Hacktiv8",
                    "createdAt": "2020-05-07T13:27:33.312Z",
                    "updatedAt": "2020-05-07T13:27:33.312Z"
                }
            ]
        }
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
            {
              "message": "Unauthorized. Please login first"
            }
          ]
        }

  OR

  * **Code:** 500 Internal Server Error <br />

### **Search Task**

Show Task by Task Id that have same user id and user organization with login user

* **Method:**

  `GET`

* **URL**

  /tasks/:taskId

*  **URL Params**

   **Required:**
 
    headers = token <br />
    taskId = [integer]

* **Data Params**

    none
   
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
            "task": {
                "id": 1,
                "title": "example 1",
                "description": "desc 1 ",
                "category": "Back Log",
                "UserId": 1,
                "UserEmail": "example@gmail.com",
                "UserOrganization": "Hacktiv8",
                "createdAt": "2020-05-07T13:27:33.312Z",
                "updatedAt": "2020-05-07T13:27:33.312Z"
            }
        }
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
  **Content:**

        {
          "name": "NotFound",
          "errors": [
            {
              "message": "Task with id 3 NOT FOUND"
            }
          ]
        } 

  OR

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
            {
              "message": "Unauthorized. Please login first"
            }
          ]
        }

  OR

  * **Code:** 500 Internal Server Error <br /> 

### **Update Task**

Update Task data by Task Id that have same user id and user organization with login user

* **Method:**

  `PUT`

* **URL**

  /tasks/:taskId

*  **URL Params**

   **Required:**
 
    headers = token <br />
    taskId = [integer]

* **Data Params**

    | Params      | Description                                  |
    |-------------|----------------------------------------------|
    | title       | Update title of The Task by taskId           |
    | description | Update description of The Task by taskId     |
    | category    | Update category of The Task by taskId        |

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
            "task": {
                "id": 1,
                "title": "update 1",
                "description": "desc update 1",
                "category": "Done",
                "UserId": 1,
                "UserEmail": "example@gmail.com",
                "UserOrganization": "Hacktiv8",
                "createdAt": "2020-05-07T13:27:33.312Z",
                "updatedAt": "2020-05-07T13:55:31.485Z"
            },
            "message": "Task 1 update"
        }
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
            {
                "message": "Title must be filled"
            }
          ]
        }

  OR

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
            {
              "message": "Unauthorized. Please login first"
            }
          ]
        }

  OR

  * **Code:** 404 Not Found <br />
  **Content:**

        {
            "name": "NotFound",
            "errors": [
                {
                "message": "Task with id 3 NOT FOUND "
                }
            ]
        }

  OR

  * **Code:** 500 Internal Server Error <br />  

### **Delete Task**

Delete Task data by Task Id that have same user id and user organization with login user

* **Method:**

  `DELETE`

* **URL**

  /tasks/:taskId

*  **URL Params**

   **Required:**
 
    headers = token <br />
    taskId = [integer]

* **Data Params**

    none
    
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
            "message": "Task 1 delete"
        }
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
            {
              "message": "Unauthorized. Please login first"
            }
          ]
        }

  OR

  * **Code:** 404 Not Found <br />
  **Content:**

        {
          "name": "NotFound",
          "errors": [
            {
              "message": "Task with id 3 NOT FOUND"
            }
          ]
        } 

  OR

  * **Code:** 500 Internal Server Error <br />  

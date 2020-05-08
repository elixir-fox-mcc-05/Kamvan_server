# Kamvan_server

[Kanban Server](https://server-akbar-kanban.herokuapp.com/)

## API Documentation

 Documentation also can be seen [here](https://documenter.getpostman.com/view/11047414/SzmfXGfq?version=latest)
----

**Create New Task**
----
  Create new Task to put on kanban board

* **URL**

  /tasks

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TASK_TITLE> | true |
  | description | <YOUR_TASK_DESCRIPTION> | false |
  | due_date | <YOUR_TASK_DUE_DATE> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "task": {
        "category": "backlog",
        "id": 25,
        "title": "Design Login Form",
        "description": "design a fancy, futuristic login form",
        "due_date": "2020-05-19T00:00:00.000Z",
        "UserId": 1,
        "updatedAt": "2020-05-08T14:17:01.113Z",
        "createdAt": "2020-05-08T14:17:01.113Z"
        }
    }
    ```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Tasks**
----
  Show all existing task on kanban board that came from same organization

* **URL**

  /tasks

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "tasks": [
            {
                "id": 15,
                "title": "Create Real Time Chat App",
                "description": "Use socket.io for this task",
                "category": "doing",
                "due_date": "2020-07-02T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-05-07T16:27:27.348Z",
                "updatedAt": "2020-05-08T10:44:07.056Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "email": "hueyguey@mail.com",
                    "organization": "Hacktiv8"
                }
            },
            {
                "id": 3,
                "title": "Create responsive website",
                "description": "",
                "category": "done",
                "due_date": "2020-05-09T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-05-07T06:56:59.380Z",
                "updatedAt": "2020-05-08T11:47:29.497Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "email": "hueyguey@mail.com",
                    "organization": "Hacktiv8"
                }
            },
            {
                "id": 25,
                "title": "Design Login Form",
                "description": "design a fancy, futuristic login form",
                "category": "backlog",
                "due_date": "2020-05-19T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-05-08T14:17:01.113Z",
                "updatedAt": "2020-05-08T14:17:01.113Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "email": "hueyguey@mail.com",
                    "organization": "Hacktiv8"
                }
            },
            {
                "id": 18,
                "title": "Make a NFL Web App",
                "description": "",
                "category": "todo",
                "due_date": "2020-05-10T00:00:00.000Z",
                "UserId": 5,
                "createdAt": "2020-05-07T23:14:36.203Z",
                "updatedAt": "2020-05-08T06:52:04.624Z",
                "User": {
                    "id": 5,
                    "name": "Duwey McMeow",
                    "email": "dadaduy@mail.com",
                    "organization": "Hacktiv8"
                }
            },
            {
                "id": 14,
                "title": "Create Login Page",
                "description": "Create a futuristic, fancy, responsive login page",
                "category": "done",
                "due_date": "2020-06-07T00:00:00.000Z",
                "UserId": 5,
                "createdAt": "2020-05-07T14:56:00.738Z",
                "updatedAt": "2020-05-08T06:52:10.880Z",
                "User": {
                    "id": 5,
                    "name": "Duwey McMeow",
                    "email": "dadaduy@mail.com",
                    "organization": "Hacktiv8"
                }
            },
            {
                "id": 19,
                "title": "Learn Socket.io",
                "description": "",
                "category": "done",
                "due_date": "2020-06-06T00:00:00.000Z",
                "UserId": 9,
                "createdAt": "2020-05-08T01:52:53.489Z",
                "updatedAt": "2020-05-08T07:33:48.130Z",
                "User": {
                    "id": 9,
                    "name": "Akbar Ramadhan",
                    "email": "akbarrmdhn94@gmail.com",
                    "organization": "Hacktiv8"
                }
            },
            {
                "id": 22,
                "title": "Create a Reddit Clone App",
                "description": "For exercise purpose",
                "category": "backlog",
                "due_date": "2020-06-03T00:00:00.000Z",
                "UserId": 10,
                "createdAt": "2020-05-08T09:54:54.472Z",
                "updatedAt": "2020-05-08T09:54:54.472Z",
                "User": {
                    "id": 10,
                    "name": "Ulul Azmi",
                    "email": "stevenjames5206@gmail.com",
                    "organization": "Hacktiv8"
                }
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```


----
  **Change Task Category**
----
  Change task category on kanban board

* **URL**

  /tasks/:id

* **Method:**
  
  `PATCH`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | category | <NEW_TASK_CATEGORY> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "task": [
        1,
            [
                {
                    "id": 25,
                    "title": "Design Login Form",
                    "description": "design a fancy, futuristic login form",
                    "category": "todo",
                    "due_date": "2020-05-19T00:00:00.000Z",
                    "createdAt": "2020-05-08T14:17:01.113Z",
                    "updatedAt": "2020-05-08T14:41:44.677Z",
                    "UserId": 1
                }
            ]
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Update Task**
----
  Update existing task on kanban board, selected by id

* **URL**

  /tasks/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TASK_TITLE> | true |
  | description | <YOUR_TASK_DESCRIPTION> | false |
  | due_date | <YOUR_TASK_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "task": [
            1,
            [
                {
                    "id": 25,
                    "title": "Design Login Form",
                    "description": "design a fancy, futuristic and responsive login form",
                    "category": "todo",
                    "due_date": "2020-05-10T00:00:00.000Z",
                    "createdAt": "2020-05-08T14:17:01.113Z",
                    "updatedAt": "2020-05-08T14:52:38.249Z",
                    "UserId": 1
                }
            ]
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ````

----
  **Delete Task**
----
  Delete existing task on kanban board, selected by id

* **URL**

  /tasks/:id

* **Method:**
  
  `DELETE`
  
* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success delete task with id 2" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **User Register**
----
  New user registration in kanban app

* **URL**

  /users/register

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_NAME> | true |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "email": "dadaduy@mail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **User Login**
----
  Login to user account to access kanban board (if user already register)

* **URL**

  /users/login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "accessToken": "<YOUR_TOKEN_HERE>"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "email not registered" }
        ``` 

        OR

        ```json
        { "error" : "wrong password" }
        ```

----
  **User Login Google**
----
  Login to Kanban app via google account

* **URL**

  /users/google-login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | google_token | <YOUR_GOOGLE_TOKEN> | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "accessToken": "<YOUR_TOKEN_HERE>"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```
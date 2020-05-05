# Kamvan_server

>Rest Api Kamvan App

<br>

    Base URL : http://localhost:3000

<br>

>List of endpoint you can use<br>

| URL           | Method        |
| ------------- |:-------------:|
| /tasks        | GET           |
| /tasks        | POST          |
| /tasks/:id    | GET           |
| /tasks/:id    | PUT           |
| /tasks/:id    | DELETE        |

<br>

-----
## /tasks
-----
* method: GET
* purpose: Show All Task
* request token in headers <br>
     ```javascript
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
                }
     ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "task": [
                {
                "id": 2,
                "title": "minum minum",
                "description": "minum minum",
                "category": "back-log",
                "createdAt": "2020-05-05T14:55:34.107Z",
                "updatedAt": "2020-05-05T14:55:34.107Z",
                "UserId": 1
                }
            ]
        }
        ```

* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```
        <br>

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "error": "Please login first"
        }
        ```

<br><br>

-----
## /tasks
-----
* method: POST
* purpose: Create new Task
* request token in headers <br>
     ```javascript
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
                }
     ```
* request body: <br>
    ```javascript
        {
            "title": "create website",
            "description": "create webste application",
            "category": "back-log"
        }
    ```
* success response: <br>
    * code: 201 <br>
    * content: <br>
        ```javascript
        {
        "task": {
            "id": 3,
            "title": "create website",
            "description": "create website application",
            "category": "back-log",
            "UserId": 1,
            "updatedAt": "2020-05-05T15:06:42.424Z",
            "createdAt": "2020-05-05T15:06:42.424Z"
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "error": "Please login first"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Title is required"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Description is required"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "category is required"
        }
        ```
    
    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Title must be or more than 4 character"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Description must be or more than 4 character"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Category must be or more than 4 character"
        }
        ```

<br><br>

-----
## /tasks/:id
-----
* method: GET
* purpose: Show Task based on ID
* request params: id <br>
* request token in headers <br>
     ```javascript
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
                }
     ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
        "task": {
            "id": 1,
            "title": "Makan makan",
            "description": "makan makan",
            "category": "done",
            "createdAt": "2020-05-05T14:54:15.686Z",
            "updatedAt": "2020-05-05T14:54:15.686Z",
            "UserId": 1
            }
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "error": "Please login first"
        }
        ```
    
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "error": "Id 7 is not found"
        }
        ```

<br><br>

-----
## /tasks/:id
-----
* method: PUT
* purpose: Edit Task based on ID
* request params: id <br>
* request token in headers <br>
     ```javascript
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
                }
     ```
* request body: <br>
    ```javascript
    {		
        "title": "Belajar Rest Api",
        "description": "Belajar Rest Api dari tutorial youtube",
        "category": "back-log"
    }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "msg": "Task with id 1 succesfully updated"
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "error": "Please login first"
        }
        ```

    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "error": "Id 7 is not found"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Title must be or more than 4 character"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Description must be or more than 4 character"
        }
        ```

    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "error": "Category must be or more than 4 character"
        }
        ```


<br><br>

-----
## /tasks/:id
-----
* method: DELETE
* purpose: Delete task based on ID
* request params: id <br>
* request token in headers <br>
     ```javascript
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhbWlyQGdtYWlsLmNvbSIsImlhdCI6MTU4ODE4NjAxN30.buWR7ZObH7L0_OmSMZSrj6wwrOTIH3Lak7tTX_HCqLE"
                }
     ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "msg": "task with id 3 successfully deleted"
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```
   
    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "error": "Please login first"
        }
        ```
    
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "error": "Id 7 is not found"
        }
        ```


<br><br>


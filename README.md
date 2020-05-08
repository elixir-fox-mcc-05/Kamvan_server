# Kanban-Board

>Hello! Welcome to Kanban Board!<br>
>Below are the list of URL that you can use<br>

| URL                   | Method        |
| -------------         |:-------------:|
| /users/register       | POST          |
| /users/login          | POST          |
| /users/google-login   | GET           |
| /users                | GET           |
| /tasks                | GET           |
| /tasks                | POST          |
| /tasks/:id            | GET           |
| /tasks/:id            | PUT           |
| /tasks/:id            | PATCH         |
| /tasks/:id            | DELETE        |
<br><br>

-----
## /users/register
-----
* method: POST
* purpose: Register account for new user
* req.body: <br>
    ```javascript
        {
            "name": "tina",
            "email": "tina@contoh.com",
            "password": "abcdef",
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "User": {
                "id": 16,
                "name": "Tomo",
                "email": "tomo@contoh.com",
                "organization": "Hacktiv8"
            },
            "notif": "Register successful!"
        }
    ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input name with minimum 3 characters"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input the correct email"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input password from 6-20 characters"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please make sure your email never registered here before"
    }
    ```

    OR
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /users/login
-----
* method: POST
* purpose: Login into user account
* req.body: <br>
    ```javascript
        {
            "username": "tono@contoh.com",
            "password": "xxxxxx"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec",
            'user': {
                'id': 21,
                'name': 'Contoh Nama',
                'email': 'contohnama@gmail.com'    
            },
            "notif": "Welcome back Contoh Nama!"
        }
    ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input registered email",
        }
    ```

    OR

    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input correct password",
        }
    ```

    OR
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /users/google-login
-----
* method: GET
* purpose: Login into user account using Google Account
* req.body: <br>
    ```javascript
        {
            "username": "tono@contoh.com",
            "password": "xxxxxx"
        }
    ```
* success response: <br>
    * code: 200 or 201 <br>
    * content: <br>
    ```javascript
        {
            'token': 'xxx',
            'user': {
                'id': 21,
                'name': 'Contoh Nama',
                'email': 'contohnama@gmail.com'    
            },
            'notif': 'Login Success!'
        }
    ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /users
-----
* method: GET
* purpose: Get specific attributes (id, name, email) from all user
* req.body: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec",
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "Users": [
                {
                "id": 4,
                "name": "Ana",
                "email": "ana@contoh.com"
                },
                {
                "id": 5,
                "name": "Ani",
                "email": "ani@contoh.com"
                },
                {
                "id": 8,
                "name": "Bambang",
                "email": "bambang@contoh.com"
                },
                .....
            ]
        }
    ```
* error response: <br>
    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR

    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /tasks
-----
* method: GET
* purpose: Show All Tasks
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
        "Tasks": [
            {
            "id": 4,
            "title": "Project 4",
            "description": "project-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            "category": "Todo",
            "priority": "Important",
            "deadline": "2021-01-11",
            "AssignorId": 7,
            "AssigneeId": 6,
            "createdAt": "2020-05-06T08:14:48.999Z",
            "updatedAt": "2020-05-06T08:14:48.999Z",
            "AssignorDetail": {
                "id": 7,
                "name": "Budi",
                "email": "budi@contoh.com"
                },
            "AssigneeDetail": {
                "id": 6,
                "name": "Siska",
                "email": "siska@contoh.com"
                }
            },
            .....
        ]
        ```
* error response: <br>
    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```
    OR

    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /tasks
-----
* method: POST
* purpose: Create new Task
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "title": "Project 19",
            "description": "project-19 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            "category": "Back-Log",
            "priority": "Normal",
            "deadline": "2021-01-01",
            "AssigneeId": 6,
        }
    ```
* success response: <br>
    * code: 201 <br>
    * content: <br>
        ```javascript
        {
            "Task": {
                "id": 5,
                "title": "Project 19",
                "description": "project-19 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                "category": "Back-Log",
                "priority": "Normal",
                "deadline": "2021-01-01",
                "assignorId": 2,
                "AssigneeId": 6,
                "updatedAt": "2020-04-27T05:44:14.609Z",
                "createdAt": "2020-04-27T05:44:14.609Z",
            },
            "notif": 'Todo successfully created!'
        }
        ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input title from 3-40 characters",
        }
    ```
    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input deadline which is greater than today",
        }
    ```
    OR

    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /tasks/:id
-----
* method: GET
* purpose: Show Task based on ID
* request params: id <br>
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "Task": {
                "id": 5,
                "title": "Project 19",
                "description": "project-19 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                "category": "Back-Log",
                "priority": "Normal",
                "deadline": "2021-01-01",
                "AssignorId": 2,
                "AssigneeId": 6,
                "updatedAt": "2020-04-27T05:44:14.609Z",
                "createdAt": "2020-04-27T05:44:14.609Z",
                "AssignorDetail": {
                    "id": 7,
                    "name": "Budi",
                    "email": "budi@contoh.com"
                    },
                "AssigneeDetail": {
                    "id": 6,
                    "name": "Siska",
                    "email": "siska@contoh.com"
                    }
            }
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Task not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /tasks/:id
-----
* method: PUT
* purpose: Edit Task based on ID
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request params: id <br>
* request body: <br>
    ```javascript
        {
            "title": "Project 19",
            "description": "project-19 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            "category": "Back-Log",
            "priority": "Normal",
            "deadline": "2021-01-01",
            "AssigneeId": 6,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "notif": "Task successfully updated"
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Task not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "Please input title from 3-40 characters"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "Please input deadline which is greater than today"
        }
        ```

    OR

    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /tasks/:id
-----
* method: PATCH
* purpose: Change category of Task
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request params: id <br>
* request body: 
    ``` javascript
        {
            'category': 'Todo'.
            'id': 5
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "notif": `Category of Task successfully changed!`
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Task not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>


-----
## /tasks/:id
-----
* method: DELETE
* purpose: Delete Task based on ID
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request params: id <br>
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "notif": "Task successfully deleted"
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Task not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```
<br><br>
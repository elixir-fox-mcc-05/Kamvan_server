# Kamvan_server*

* **URL:**
/task

* **Method:**
GET

* **URL Params:**
none

* **Data Params:**
none

* **Success Response:**
{
  "tasks": [
    {
      "id": 4,
      "title": "Mango Tree",
      "description": "Finish this task on first week at phase 1",
      "point": 40,
      "assigned_to": "Faris Muhammad",
      "UserId": 1,
      "category": "Back-Log",
      "createdAt": "2020-05-06T08:18:09.779Z",
      "updatedAt": "2020-05-06T08:18:09.779Z"
    },
    {
      "id": 5,
      "title": "sudoku",
      "description": "weekend anchor",
      "point": 70,
      "assigned_to": "sodara",
      "UserId": 1,
      "category": "Back-Log",
      "createdAt": "2020-05-06T14:34:15.574Z",
      "updatedAt": "2020-05-06T14:34:15.574Z"
    },
    .
    .
  ]
}

* **Error Response:**
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

--------------------------------------------------------------------------------------------------

* **URL:**
/task

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
    * **title:** string<br />
    * **description:** string<br />
    * **point:** integer<br />
    * **assigned_to:** date <br />

* **Success Response:**
{
  "task": {
    "id": 6,
    "title": "waduuuu",
    "description": "",
    "point": 700,
    "assigned_to": "hacktiv",
    "UserId": 1,
    "updatedAt": "2020-05-06T14:35:40.575Z",
    "createdAt": "2020-05-06T14:35:40.575Z",
    "category": "Back-Log"
  }
}


* **Error Response:**
  * **code:** 400 <br />
  * **Content:** {error: Validation error}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

----------------------------------------------------------------------------------------------------

* **URL:**
/task/:id

* **Method:**
PUT

* **URL Params:**
/:id

* **Data Params:**
  * **title:** string<br />
  * **description:** string<br />
  * **point:** integer<br />
  * **assigned_to:** date <br />
  * **category:** string

* **Success Response:**
{
  "task": [
    1,
    [
      {
        "id": 3,
        "title": "Hospital interface",
        "description": "this task is for fancy todo project",
        "point": 900,
        "assigned_to": "Mr x",
        "createdAt": "2020-05-06T08:17:03.533Z",
        "updatedAt": "2020-05-07T14:54:03.064Z",
        "UserId": 2,
        "category": "To-Do"
      }
    ]
  ]
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content:** {error: Validation error}<br />
  * **code:** 404 <br />
  * **Content:** {error: data not found}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

----------------------------------------------------------------------------------------------------

* **URL:**
/task/:id

* **Method:**
DELETE

* **URL Params:**
/:id

* **Data Params:**
none

* **Success Response:**
example with id = 10
{
  "Success": "Success delete data with id 10"
}

* **Error Response:**
  * **code:** 404 <br />
  * **Content:** {error: data not found}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

----------------------------------------------------------------------------------------------------

* **URL:**
/register

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
  * **email:** string <br />
  * **password:** string

* **Success Response:**
{
  "id": 6,
  "email": "lockdown@test.com",
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content:** {"error": "Validation error: Validation isEmail on email failed"}

  ----------------------------------------------------------------------------------------------------

* **URL:**
/login

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
  * **email:** string <br />
  * **password:** string

* **Success Response:**
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJsb2NrZG93bkB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJEs0WUxkM1k4VGJZa1ZhR29wVkZab3VjZHRVbFRjYml4Y0w0RzVoT2RNSUtVYkd0NC42MkxpIiwiaWF0IjoxNTg4MDA1NzQzfQ.XwHm238w633qa09LZiyU78_Zm52JvCYouXfNUa8BLVc"
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content 1:** {"error": "password not match"}<br />
  * **Content 2:** {"error": "Invalid email or password"}
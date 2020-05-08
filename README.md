**Register**
----

* **URL**

  /users/register

* **Method:**
  
  `POST` 
  
*  **URL Params**

   none

* **Data Params**

  {
      "name": "Agus",
      "email": "agus@gmail.com",
      "password": "123456",
      "organization": "Hacktiv8"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `
        {
            "id": 15,
            "email": "agus@gmail.com",
            "organization": "Hacktiv8"
        }
    `
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "Email already exists"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---
**Login**
----
  
* **URL**

  /users/login

* **Method:**
  
  `POST` 

*  **URL Params**

   none

* **Data Params**

  {
      "email": "agus@gmail.com",
      "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
}`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "email atau password salah"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Create Kanban**
----

* **URL**

  /kanbans

* **Method:**
  
  `POST` 

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }
  
*  **URL Params**

   none

* **Data Params**

  {
    "title": "Functional Design",
    "description": "Build fd for login feature",
    "point": "20"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `
        {
            "id": 8,
            "title": "Functional Design",
            "description": "Build fd for login feature",
            "point": 20,
            "status": "Backlog",
            "UserId": 11,
            "organization": "Hacktiv8",
            "updatedAt": "2020-05-07T11:31:00.284Z",
            "createdAt": "2020-05-07T11:31:00.284Z"
        }
    `
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "semua data harus diisi"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---   

**Show Kanban**
----

* **URL**

  /todos

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
        {
            "id": 8,
            "title": "Functional Design",
            "description": "Build fd for login feature",
            "point": 20,
            "status": "Backlog",
            "UserId": 11,
            "organization": "Hacktiv8",
            "updatedAt": "2020-05-07T11:31:00.284Z",
            "createdAt": "2020-05-07T11:31:00.284Z"
        }
    `
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Update Todo**
----

* **URL**

  /todos/:kanbanid
* **Method:**
  
  `PATCH`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }
  
*  **URL Params**

   **Required:**
 
   `kanbanid=[integer]`

* **Data Params**

  {
    "title": "Functional Design",
    "description": "Build fd for login feature",
    "point": "20"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
        {
            "id": 8,
            "title": "Functional Design",
            "description": "Build fd for login feature",
            "point": 20,
            "status": "Backlog",
            "UserId": 11,
            "organization": "Hacktiv8",
            "updatedAt": "2020-05-07T11:31:00.284Z",
            "createdAt": "2020-05-07T11:31:00.284Z"
        }
    `
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
      "code": "401",
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": "404",
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---
**Delete Todo**
----

* **URL**

  /todos/:kanbanid

* **Method:**
  
  `DELETE`
  
    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

   **Required:**
 
   `kanbanid=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `Successfully delete kanban`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
      "code": "401",
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": "404",
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Update Category**
----

* **URL**

  /todos/:kanbanid/category
* **Method:**
  
  `PATCH`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }
  
*  **URL Params**

   **Required:**
 
   `kanbanid=[integer]`

* **Data Params**

  { "status": "ToDo" }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
        {
            "id": 8,
            "title": "Functional Design",
            "description": "Build fd for login feature",
            "point": 20,
            "status": "ToDo",
            "UserId": 11,
            "organization": "Hacktiv8",
            "updatedAt": "2020-05-07T11:31:00.284Z",
            "createdAt": "2020-05-07T11:31:00.284Z"
        }
    `
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
      "code": "401",
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": "404",
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`
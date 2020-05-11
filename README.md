Deploy link  = https://g-kan-ban.firebaseapp.com/

Env ={
PORT = 3000
SECRET = HACKTIV8
SECRET_GMAILID = qFeVd9tbl1xUfnp622uf1DMJ
SECRET_PASS = test
}

## **REGISTER**

* **URL:**

​			/user/register

* **Method:**

​		`POST`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

  `None`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "msg": " Success add user",
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpZ3VuIiwiaWF0IjoxNTg2NTI1Mjg4fQ.H6FYpX5AIJpa5MOPR3iR9-NE0vTEvx2KF76c9_wkzzY"
    }
    ```

    

- **Error Response:**

  - **Code:** 400 Bad Request
    **Content:** 

    ```json
    {
      "msg": "add user fail",
      "error": {
        "name": "SequelizeValidationError",
        "errors": [
          {
            "message": "User.username cannot be null",
            "type": "notNull Violation",
            "path": "username",
            "value": null,
            "origin": "CORE",
            "instance": {
              "id": null,
              "updatedAt": "2020-04-10T15:41:58.487Z",
              "createdAt": "2020-04-10T15:41:58.487Z"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
          },
          {
            "message": "User.email cannot be null",
            "type": "notNull Violation",
            "path": "email",
            "value": null,
            "origin": "CORE",
            "instance": {
              "id": null,
              "updatedAt": "2020-04-10T15:41:58.487Z",
              "createdAt": "2020-04-10T15:41:58.487Z"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
          },
          {
            "message": "User.password cannot be null",
            "type": "notNull Violation",
            "path": "password",
            "value": null,
            "origin": "CORE",
            "instance": {
              "id": null,
              "updatedAt": "2020-04-10T15:41:58.487Z",
              "createdAt": "2020-04-10T15:41:58.487Z"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
          }
        ]
      }
    }
    ```

    

- **Sample Call:**

  ```
    axios({
              method:"POST",
              url:"/user/register",
              data:{
                  username:this.form.username,
                  email:this.form.email,
                  password:this.form.password
            		}
          })
  ```







## **LOGIN**

* **URL:**

​			/user/login

* **Method:**

​		`POST`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

  `none`

- **Data Params**

  **Required:**

  `username:string`

  `email:string`

  `password:string`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpZ3VuIiwiaWF0IjoxNTg2NTMzNTQ3fQ.TUjn0MVoXqgzPtz44G5pRCGxB4cN2wzBN2veoxzzOtw"
    }
    ```
    
    
  
- **Error Response:**

  - **Code:** 401 Unauthorized
    **Content:** 

    ```json
    {
      "msg": "username/password not found"
    }
    ```
    
    
    
    
  
- **Sample Call:**

  ```
    axios({
        method:"POST",
        url:"/user/login",
        data:{
            username:this.username,
            password:this.password
        }
    })
  ```



## **ADD TASK**

* **URL:**

​			/task/

* **Method:**

​		`POST`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

  `token=[string]`

- **Data Params**

  **Required:**

  `title: string`

  `description: string`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "msg": "Taks add success"
    }
    ```
    
    
  
  
  
- **Sample Call:**

  ```
  axios({
      method:"POST",
      url:"/task",
      data:{
          title: this.payload.title,
          description : this.payload.description
      },
      headers:{
      	token:localStorage.token
      }
  })
  ```



## **Find All Task Per-User**

* **URL:**

​			/task

* **Method:**

​		`GET`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

   ` token : [string]
  
- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "msg": "find All success",
      "data": [
        {
          "id": 3,
          "title": "deploy firebase",
          "description": "Pasti bisa",
        "status": "Backlog",
          "createdAt": "2020-04-10T14:04:42.369Z",
          "updatedAt": "2020-04-10T14:04:42.369Z"
        },
        {
          "id": 2,
          "title": "belajar Deploy heroku",
          "description": "pasti bisa",
          "status": "Done",
          "createdAt": "2020-04-10T14:04:16.281Z",
          "updatedAt": "2020-04-10T15:07:30.795Z"
        },
        {
          "id": 1,
          "title": "Belajar Vue",
          "description": "Harus Bisa",
          "status": "Todo",
          "createdAt": "2020-04-10T14:03:54.747Z",
          "updatedAt": "2020-04-10T15:07:33.448Z"
        },
        {
          "id": 4,
          "title": "Deploy firebase",
          "description": "Success",
          "status": "Backlog",
          "createdAt": "2020-04-10T15:08:05.702Z",
          "updatedAt": "2020-04-10T15:08:05.702Z"
        },
        {
          "id": 5,
          "title": "coding vue componen",
          "description": null,
          "status": "Backlog",
          "createdAt": "2020-04-10T15:54:21.328Z",
          "updatedAt": "2020-04-10T15:54:21.328Z"
        }
      ]
    }
    ```
    
    

  

  

- **Sample Call:**

  ```
  axios({
      method:"GET",
      url:"/task",
      headers:{
      	token:localStorage.token
      }
  })
  ```

## **Update Task**

* **URL:**

​			/task/:id

* **Method:**

​		`PUT`

- **URL Params**

  **Required:**

  `id:[integer]`

- **Data Headers**

  **Required:**

   ` token:[string]`

- **Data Params**

  **Required:**

  `id: Integer`

  `title: string`

  `description: string`

- **Required:**

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "msg": "Update success",
      "data": [
        1
      ]
    }
    ```

- **Error Response:**

  - **Code:** 401 unauthorized
    **Content:** 

    ```json
    {
      "message": "Unauthorized",
      "errors": "User Not authorized"
    }
    ```

    

- **Sample Call:**

  ```
  axios({
      method:"PUT",
      url:"/task/+id,
      headers:{
          token:localStorage.token
      },
      data:{
          title: string,
          description : string
      }
  })
  
  ```




## **Update Status Task**

* **URL:**

​			/task/forward/:status/:id,

​			/task/backward/:status/:id

* **Method:**

​		`PUT`

- **URL Params**

  **Required:**

  `status:[string]`

  `id:[integer]`

- **Data Headers**

  **Required:**

   ` token:[string]`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "msg": "Update status success",
      "data": [
        1
      ]
    }
    ```

    

- **Error Response:**

  - **Code:** 401 unauthorized
    **Content:** 

    ```json
    {
      "message": "Unauthorized",
      "errors": "User Not authorized"
    }
    ```

    

- **Sample Call:**

  ```
  axios({
      method:"PUT",
      url:"/task/forward/"+status+"/"+id,
      headers:{
          token:localStorage.token
      }
  })
  
  axios({
      method:"PUT",
      url:"/task/backward/"+status+"/"+id,
      headers:{
          token:localStorage.token
      }
  })
  ```



## **Delete  Task**

* **URL:**

​			/task/+id,

* **Method:**

​		`DELETE`

- **URL Params**

  **Required:**

  `id:[integer]`

- **Data Headers**

  **Required:**

   ` token:[string] `

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "message": "Delete Success",
      "todos": 1
    }
    ```

    

- **Error Response:**

  - **Code:** 401 unauthorized
    **Content:** 

    ```json
    {
      "message": "Unauthorized",
      "errors": "User Not authorized"
    }
    ```

    

- **Sample Call:**

  ```
  axios({
      method:"DELETE",
      url:"/task/"+id,
      headers:{
          token:localStorage.token
      }
  })
  ```




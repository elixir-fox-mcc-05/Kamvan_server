URL 

'/login'

HTTP Method : POST

Request

email:[string]
password:[string]

response 

Success :

200 : {token : "asdjnawp3rnergmsdoigndkjngp"}

error :


500 : {err : "internal server error"}

-------------------------------------------------------------------------------------

URL 

'/register'

HTTP Method : POST

Request:

email:[string]
password:[string]

response 

Success :

200 : {
    "id": 1,
    "first_name": "yusa",
    "last_name": "lala",
    "email": "a@asd.com",
    "organization": "hacktiv8"
}

error : 

500 : {err : 'internal server error'}

-------------------------------------------------------------------------------

URL

'/tasks/list'

HTTP Method : GET

Request

Headers : token=[string]

response: 

200 : { id : 1,
        title : 'beli sayur',
        status : 'process',
        UserId : 12
        }

--------------------------------------------------------------------------------

URL 

'/tasks/update/:id'

HTTP Method : PUT

Request:

Headers : token=[string]

Params : id = [integer]

response 

Success :

200 : {id : 1,
        title : 'beli sayur',
        status : 'process',
        UserId : 12}

error : 

500 : {err : 'internal server error'}

------------------------------------------------------------------------------------------------------------

URL

'/tasks/delete/:id'

HTTP Method : DELETE

Request

Headers : token=[string]

Params : id - [integer]

response: 

200 : { id : 1,
        title : 'beli sayur',
        status : 'process',
        UserId : 12
        }

--------------------------------------------------------------------------------------------------------------

URL

'/tasks/:id'

HTTP Method : GET

Request

Headers : token=[string]

Params : id=[integer]

response: 

200 : {
    "id": 2,
    "title": "shotgun",
    "points": 100,
    "description": "asdasdasdasdasd",
    "category": "backlog",
    "User": {
        "id": 1,
        "first_name": "yusa",
        "last_name": "lala",
        "email": "mail@mail.com",
        "password": "admin",
        "points": 0,
        "organization": null,
        "createdAt": "2020-05-06T06:33:35.375Z",
        "updatedAt": "2020-05-06T06:33:35.375Z"
    }
}
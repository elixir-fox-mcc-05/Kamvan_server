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

first_name:[string]
last_name:[string]
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

'/tasks/add'

HTTP Method : POST

Request:

Headers : token=[string]

Body : 
title=[string]
points=[integer]
description=[string]
category=[string]
organization=[string]

response 

Success :

200 :{
    "id": 13,
    "title": "shotgun",
    "points": 100,
    "description": "asdasdasdasdasd",
    "category": "done",
    "organization": "hacktiv8",
    "UserId": 4
}

error : 

400 : {error : 'unable to}

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
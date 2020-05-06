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

200 : {id : '2', email : 'beli1dapet2@mail.com'}

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

200 : { id : 1,
        title : 'beli sayur',
        status : 'process',
        UserId : 12
        }
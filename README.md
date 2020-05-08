# Kamvan_server

## REGISTER

Method : `POST` 

URL : `http://localhost:3000/register`

### Request :

~~~
{
    email: irwanlearn@gmail.com
    password: 12345
}
~~~

### Respond :
`SUCCESS` : 
Status Code : `201`

Status : `CREATED`

~~~
{
    id: 1,
    email: irwanlearn@gmail.com
}
~~~

`ERROR` : 
Status Code : `400`

Status : `Bad Request`

~~~
{
    irwanlearn@gmailom is not an email
}
~~~

## LOGIN

Method : `POST` 

URL : `http://localhost:3000/login`

### Request : 

~~~
{
    id: 1,
    email: irwanlearn@gmail.com
}
~~~

### Respond :

`SUCCESS` : 

Status Code : `200`

Status : `OK`

~~~
{
    access_token: 'U*isjd&0N##*H∆adsoij'
}
~~~

`ERROR` : 

Status Code : `404`

Status : `Not Found`

~~~
{
    user not found
}
~~~

## GOOGLE SIGN IN

Method : `POST` 

URL : `http://localhost:3000/google-signin`

### Request : 

~~~
{
    access_token: 'wklefqwU*(RQ#br9wuc(H#'
}
~~~

### Respond :

`SUCCESS` : 

Status Code : `200`

Status : `OK`

~~~
{
    access_token: 'U*isjd&0N##*H∆adsoij'
}
~~~

`SUCCESS` : 

Status Code : `201`

Status : `CREATED`

~~~
{
    access_token: 'U*isjd&0N##*H∆adsoij'
}
~~~

`ERROR` : 

Status Code : `500`

Status : `Internal Server Error`

~~~
{
    SERVER INTERNAL ERROR
}
~~~

## LOGGED IN (`user with status already logged`)

Method : `POST` 

URL : `http://localhost:3000/google-signin`

### Request : 

~~~
{
    access_token: 'wklefqwU*(RQ#br9wuc(H#'
}
~~~

### Respond :

`SUCCESS` : 

Status Code : `200`

Status : `OK`

~~~
{
    user {
        id:
        email: irwanlearn@gmail.com
        password: 'fajksdnfkajsdfaksjnalvjdlsfjkawbrutavwciu'
        createdAt: 2020-05-05 19:41:59.142+07
        updatedAt: 2020-05-05 19:41:59.142+07
        organization: 'Hacktiv8'
    }
}
~~~

`ERROR` : 

Status Code : `404`

Status : `Not Found`

~~~
{
    user not found
}
~~~

## GET ALL TASKS

Method : `GET` 

URL : `http://localhost:3000/tasks`

### Request : 
~~~
    anyone can access this route
~~~

`SUCCESS` : 

Status Code : `200`

Status : `OK`

~~~
[
    {
        id : 1,
        title : 'reading',
        description : 'math book',
        UserId : 1,
        organization : 'Hacktiv8',
        UserId: {
            id : 1,
            email : 'irwanlearn@gmail.com',
            password : 'NjnvfNIBan7¥©∂ƒnh'
        }
    },
    ...
]
~~~

`ERROR` : 

Status Code : `500`

Status : `Internal Server`

~~~
{
    internal server error
}
~~~


## ADD NEW TASK

Method : `POST` 

URL : `http://localhost:3000/tasks`

### Request : 
~~~
    access_token: 'faksdfnjkwenfmwe ckjsandvjhphy[i][oip][eoprmfk'
~~~

`SUCCESS` : 

Status Code : `201`

Status : `CREATED`

~~~
[
    {
        id : 1,
        title : 'reading',
        description : 'math book',
        createdAt: 2020-05-05 19:41:59.142+07,
        updatedAt: 2020-05-05 19:41:59.142+07
    },
    ...
]
~~~

`ERROR` : 

Status Code : `500`

Status : `Internal Server`

~~~
{
    internal server error
}
~~~

## GET TASK BY ID

Method : `GET` 

URL : `http://localhost:3000/tasks/:taskId`

### Request : 

- req.params.taskId
- access_token

`SUCCESS` : 

Status Code : `200`

Status : `OK`

~~~
[
    {
        id : 1,
        title : 'reading',
        description : 'math book',
        createdAt: 2020-05-05 19:41:59.142+07,
        updatedAt: 2020-05-05 19:41:59.142+07
    }
]
~~~

`ERROR` : 

Status Code : `500`

Status : `Internal Server`

~~~
{
    internal server error
}
~~~

## EDIT A TASK

Method : `PUT` 

URL : `http://localhost:3000/tasks/:taskId`

### Request : 

- access_token
- req.body.category
- req.params.taskId

`SUCCESS` : 

Status Code : `200`

Status : `OK`

~~~
[
    {
        id : 1,
        title : 'learn',
        description : 'geography book',
        createdAt: 2020-05-05 19:41:59.142+07,
        updatedAt: 2020-05-05 19:41:59.142+07
    }
]
~~~

`ERROR` : 

Status Code : `500`

Status : `Internal Server`

~~~
{
    internal server error
}
~~~

## DELETE A TASK

Method : `DELETE` 

URL : `http://localhost:3000/tasks/:taskId`

### Request : 

- access_token
- req.params.taskId

`SUCCESS` : 

Status Code : `204`

Status : `NO CONTENT`

~~~
[
    {
        data: 1
    }
]
~~~

`ERROR` : 

Status Code : `500`

Status : `Internal Server`

~~~
{
    internal server error
}
~~~

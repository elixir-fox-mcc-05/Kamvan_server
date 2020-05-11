# Fancy Todo

##       URL DEPLOY : https://mysterious-basin-64968.herokuapp.com

### Return json data for all Category

*    Url

        /task/

*    Method:

        GET

*    URL PARAMS

        headers = Token

*    Data PARAMS

        NONE

*    Succes Response
        ```
        Code : 200        
        Content : {
                        "Category": [
                        {
                        "id": 1,
                        "name": "Backlogs",
                        "createdAt": "2020-05-11T18:15:13.837Z",
                        "updatedAt": "2020-05-11T18:15:13.837Z",
                        "Tasks": [
                                {
                                "id": 4,
                                "title": "Masih Penasaran",
                                "descriptions": "HAJAR KAN",
                                "point": 1000000000,
                                "assigned": "Yodi",
                                "UserId": 1,
                                "CategoryId": 1,
                                "createdAt": "2020-05-11T18:25:50.359Z",
                                "updatedAt": "2020-05-11T18:25:50.359Z"
                                },
                                {
                                "id": 3,
                                "title": "Ok, Start CMS",
                                "descriptions": "Jangan Lemot Yod",
                                "point": 1000000,
                                "assigned": "Yodi",
                                "UserId": 1,
                                "CategoryId": 1,
                                "createdAt": "2020-05-11T18:21:23.775Z",
                                "updatedAt": "2020-05-11T18:21:23.775Z"
                                },
                        ]
                ]
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/task/",
            headers: "token",
            type : "GET",
            success : function(result) {
                res.status(200).json({
                    Category : result
                })
            }
        });
        ```
### Return json data with create Task

*    Url

        /task

*    Method:

        POST

*    URL PARAMS

        headers : token

*    Data PARAMS
        ```
        title : String
        description : String
        point : Integer
        assigned : String
        ```
*    Succes Response
        ```
        Code : 201       
        Content : {
                    "Task": {
                                "id": 3,
                                "title": "Ok, Start CMS",
                                "descriptions": "Jangan Lemot Yod",
                                "point": 1000000,
                                "assigned": "Yodi",
                                "UserId": 1,
                                "CategoryId": 1,
                                "createdAt": "2020-05-11T18:21:23.775Z",
                                "updatedAt": "2020-05-11T18:21:23.775Z"
                                }
                    }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/task",
            headers: "token",
            type : "POST",
            data : {
                    "title",
                    "description",
                    "point",
                    "assigned"
            },
            success : function(result) {
                res.status(201).json({
                    Task : result
                })
            }
        });
        ```
### Return json data for a single Todo

*    Url

        /task/:id

*    Method:

        GET

*    URL PARAMS
        ```
        id = integer
        headers = token
        ```
*    Data PARAMS

        None

*    Succes Response
        ```
        Code : 200
        Content :   {
                        "Task": {
                                "id": 3,
                                "title": "Ok, Start CMS",
                                "descriptions": "Jangan Lemot Yod",
                                "point": 1000000,
                                "assigned": "Yodi",
                                "UserId": 1,
                                "CategoryId": 1,
                                "createdAt": "2020-05-11T18:21:23.775Z",
                                "updatedAt": "2020-05-11T18:21:23.775Z"
                        }
                }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/task/8",
            headers: "token",
            type : "GET",
            success : function(result) {
                res.status(200).json({
                    Task : result
                })
            }
        });
        ```
### Return json data after edit item or changing category

*    Url

        /task/:id

*    Method:

        PUT

*    URL PARAMS
        ```
        id = integer
        headers = token
        ```
*    Data PARAMS
        ```
        title : String
        description : String
        point : Integer
        assigned : String
        CategoryId : Integer
        ```
*    Succes Response
        ```
        Code : 202
        Content :   {
                        "Task": {
                                "id": 3,
                                "title": "Ok, Start CMS",
                                "descriptions": "Jangan Lemot Yod",
                                "point": 1000000,
                                "assigned": "Yodi",
                                "UserId": 1,
                                "CategoryId": 1,
                                "createdAt": "2020-05-11T18:21:23.775Z",
                                "updatedAt": "2020-05-11T18:21:23.775Z"
                        }
                    }
        ```
*    Error Response :
        ```
        Code :  500,
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/task/8",
            headers: "token",
            data : {
                    title,
                    descriptions,
                    point,
                    assigned,
                    category,
            }
            type : "PUT",
            success : function(result) {
                res.status(200).json({
                    Task : result
                })
            }
        });
        ```
### Return json data after delete

*    Url

        /task/:id

*    Method:

        DELETE

*    URL PARAMS
        ```
        id : INTEGER
        headers = Token
        ```
*    Data PARAMS

        NONE

*    Succes Response
        ```
        Code : 202
        Content : { msg : "Succes Destroy Todo with ${Id} " }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/task/3",
            headers: "token",
            type : "DELETE",
            success : function(result) {
                res.status(200).json({
                    msg : `Completely Destroy Todo ${id}`
                })
            }
        });
        ```
### Return json data after create user

*    Url

        /user/register

*    Method:

        POST

*    URL PARAMS

        NONE

*    Data PARAMS
        ```
        email : String
        password : String
        confirmPassword : String
        organization : String
        ```
*    Succes Response
        ```
        Code : 201
        Content :   {
                    "UserId": 1,
                    "UserEmail" : "your email",
                    "Organization" : "your organization"
                    }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/user/register",
            method : "Post",
            success : function(result) {
                res.status(201).json({
                    User : result
                })
            }
        });
        ```
### Return json data after login user
*    Url

        /user/login

*    Method:

        POST

*    URL PARAMS

        NONE

*    Data PARAMS
        ```
        email : String
        password : String
        ```
*    Succes Response
        ```
        Code : 202
        Content :   {
                        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaTA5QGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4MDg5Mn0.RGbRjWwP5ZwhqZIsDSDKlciDyR-AR0MW8VDxllYjeKY"
                    }
        ```
*    Error Response :
        ```
        Code :  400
        Content : "wrong email/password"
        ```
*    Sample Call :
        ```
        axios({
            url: "/user/login",
            method : "Post",
            success : function(result) {
                res.status(202).json({
                    Token : result
                })
            }
        });
        ```

### Return json data after login/register via google user
*    Url
        /user/google-login

*    Method:

        POST

*    URL PARAMS

        headers : google_token

*    Data PARAMS

        None

*    Succes Response
        ```
        Code : 202
        Content :   {
                        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaTA5QGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4MDg5Mn0.RGbRjWwP5ZwhqZIsDSDKlciDyR-AR0MW8VDxllYjeKY"
                    }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        axios({
            url: "/user/google-login",
            dataType: "json",
            method : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```
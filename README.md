# Fancy Todo

### Return json data for all Task by category

*    Url

        /task/:category

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
                    "Task": [
                                {
                                "id": 7,
                                "title": "corona AI",
                                "descriptions": "Doing Something",
                                "point": 100,
                                "assigned": "test7",
                                "category": "backlogs",
                                "UserId": null,
                                "createdAt": "2020-05-06T12:58:23.841Z",
                                "updatedAt": "2020-05-06T12:58:23.841Z"
                                },
                                {
                                "id": 8,
                                "title": "corona AI",
                                "descriptions": "Doing Something",
                                "point": 100,
                                "assigned": "test8",
                                "category": "backlogs",
                                "UserId": null,
                                "createdAt": "2020-05-06T12:58:23.841Z",
                                "updatedAt": "2020-05-06T12:58:23.841Z"
                                }
                        ]
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
            url: "/task/backlogs",
            headers: "token",
            type : "GET",
            success : function(result) {
                res.status(200).json({
                    Task : result
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
        Code : 202       
        Content : {
                    "Task": {
                                "id": 8,
                                "title": "corona AI",
                                "descriptions": "Doing Something",
                                "point": 100,
                                "assigned": "test8",
                                "category": "backlogs",
                                "UserId": null,
                                "createdAt": "2020-05-06T12:58:23.841Z",
                                "updatedAt": "2020-05-06T12:58:23.841Z"
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
        $.ajax({
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
                res.status(200).json({
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
                                "id": 8,
                                "title": "corona AI",
                                "descriptions": "Doing Something",
                                "point": 100,
                                "assigned": "test8",
                                "category": "backlogs",
                                "UserId": null,
                                "createdAt": "2020-05-06T12:58:23.841Z",
                                "updatedAt": "2020-05-06T12:58:23.841Z"
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
        $.ajax({
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
### Return json data after edit

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
        category : String
        ```
*    Succes Response
        ```
        Code : 202
        Content :   {
                        "Task": {
                                "id": 8,
                                "title": "corona AI",
                                "descriptions": "Doing Something",
                                "point": 100,
                                "assigned": "test8",
                                "category": "todos",
                                "UserId": null,
                                "createdAt": "2020-05-06T12:58:23.841Z",
                                "updatedAt": "2020-05-06T12:58:23.841Z"
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
        $.ajax({
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
        $.ajax({
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
        $.ajax({
            url: "/user/register",
            type : "Post",
            success : function(result) {
                res.status(200).json({
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
        Code :  404
        Content : "wrong email/password"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/user/login",
            type : "Post",
            success : function(result) {
                res.status(200).json({
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

        token : google_token

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
        $.ajax({
            url: "/user/google-login",
            dataType: "json",
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```
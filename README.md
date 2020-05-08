# Kamvan_server
### Return json data for all Status include title

*    Url

        /status/

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
                    "result": [
                        {
                            "id": 1,
                            "name": "Back-Log",
                            "color": "bg-danger",
                            "btnColor": "btn-danger",
                            "createdAt": "2020-05-07T20:18:13.102Z",
                            "updatedAt": "2020-05-07T20:18:13.102Z",
                            "Titles": [
                                {
                                    "id": 1,
                                    "title": "Kanban pou",
                                    "description": "Using VUE JS",
                                    "point": 100,
                                    "assignedto": "kalys",
                                    "UserId": 1,
                                    "createdAt": "2020-05-07T20:19:21.348Z",
                                    "updatedAt": "2020-05-07T20:19:21.348Z",
                                    "StatusId": 1
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Todo",
                            "color": "bg-warning",
                            "btnColor": "btn-warning",
                            "createdAt": "2020-05-07T20:18:13.102Z",
                            "updatedAt": "2020-05-07T20:18:13.102Z",
                            "Titles": []
                        },
                        {
                            "id": 3,
                            "name": "Doing",
                            "color": "bg-primary",
                            "btnColor": "btn-primary",
                            "createdAt": "2020-05-07T20:18:13.102Z",
                            "updatedAt": "2020-05-07T20:18:13.102Z",
                            "Titles": []
                        },
                        {
                            "id": 4,
                            "name": "Done",
                            "color": "bg-success",
                            "btnColor": "btn-success",
                            "createdAt": "2020-05-07T20:18:13.102Z",
                            "updatedAt": "2020-05-07T20:18:13.102Z",
                            "Titles": []
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
            url: "/status/",
            headers: "token",
            type : "GET",
        });
        ```
### Return json data with create Title

*    Url

        /title

*    Method:

        POST

*    URL PARAMS

        headers : token

*    Data PARAMS
        ```
        title : String
        description : String
        point : Integer
        assignedto : String
        ```
*    Succes Response
        ```
        Code : 202       
        Content :   {
                        "title": {
                            "id": 1,
                            "title": "Kanban pou",
                            "description": "Using VUE JS",
                            "point": 100,
                            "assignedto": "kalys",
                            "UserId": 1,
                            "StatusId": 1,
                            "updatedAt": "2020-05-07T20:19:21.348Z",
                            "createdAt": "2020-05-07T20:19:21.348Z"
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
            url: "/title",
            headers: "token",
            type : "POST",
            data : {
                    "title",
                    "description",
                    "point",
                    "assignedto"
            },
        });
        ```
### Return json title after edit

*    Url

        /title/:id

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
        assignedto : String
        ```
*    Succes Response
        ```
        Code : 202
        Content :   {
                        "title": [
                            1,
                            [
                                {
                                    "id": 6,
                                    "title": "Kanvan",
                                    "description": "belum kelar masih di client",
                                    "point": 44,
                                    "assignedto": "kalys",
                                    "createdAt": "2020-05-07T13:09:26.987Z",
                                    "updatedAt": "2020-05-07T16:28:01.681Z",
                                    "UserId": 1,
                                    "StatusId": 1
                                }
                            ]
                        ],
                        "msg": "Title 6 succesfully update!"
                    }
        ```
*    Error Response :
        ```
        Code :  500,
        Content : "Something Went Wrong"
        ```
### Return json title after delete

*    Url

        /title/:id

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
        Content : { msg : "Title ${id} successfully deleted!" }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
### Return json data after create user

*    Url

        /users/register

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

        /users/

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
                        "id": 1,
                        "email": "kalys@gmail.com",
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJrYWx5c0BnbWFpbC5jb20iLCJvcmdhbmlzYXRpb24iOiJIYWNrdGl2OCIsImlhdCI6MTU4ODg4MjQwMH0.jHM5DwI730L7g9KLNMRrr7ayva7hX379T2Td6b61yGQ",
                        "organisation": "Hacktiv8"
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
            url: "/users/",
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```


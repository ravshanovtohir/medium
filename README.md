# medium
To use the program, first download this repository

To use the program, first download this repository

# setup database
The data structure is located inside the model file inside the setup file. In this file, copy the postgres code to your postgresql terminal and create a database. After that, edit the database information in the .env file (such as password and database name). If you want, postgresQl code for mock data is written in the mockData.js file inside the setup file

# Installation
```
npm install
```

# Running the app
```
# development
$ npm run start
```

# Environment
```
1. Edit .env file on your project. Here is multiple environment variable that need to be setup:

*   PG_HOST
*   PG_PORT
*   PG_USER
*   PG_PASSWORD
*   PG_DATABASE

*   JWT_SECRET
```

# Routes
### Register(Sign Up)
Route: `/auth/register` Method: `POST` 

Request:
```
{
    "user_name": "Alfred1231",
    "user_email": "alfred9959@gmail.com",
    "user_password": "qwer4321"
}
```
Response:
```
{
    "status": 201,
    "message": "The user successfully registired!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjkuMiIsImlwIjoiOjoxIiwidXNlcl9pZCI6NiwiaWF0IjoxNjc3MzUxMzk2fQ.oEp5NDlrVJIezetuOxK8TsMmtNGXVntgbQLzQ7Op6po",
    "user": {
        "user_id": 6,
        "user_name": "Alfred1231",
        "user_email": "alfred9959@gmail.com"
    }
}
```
### Login
Route: `/auth/login` Method: `POST` 
Request:
```
{
    "user_email": "alfred9959@gmail.com",
    "user_password": "qwer4321"
}
```
Response:
```
{
    "status": 201,
    "message": "The user successfully logged in!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjkuMiIsImlwIjoiOjoxIiwidXNlcl9pZCI6NiwiaWF0IjoxNjc3MzUxNzQ0fQ.3LduAogl22RmhFon33CxrVOLWfnBdqYhnr2kAFZLXbo",
    "user": {
        "user_id": 6,
        "user_name": "Alfred1231",
        "user_email": "alfred9959@gmail.com"
    }
}
```

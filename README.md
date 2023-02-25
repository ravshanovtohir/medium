# medium
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

### Post
Route: `/post/add` Method: `POST` 
Request:
```
{
    "post_title": "Sport new nimadirda",
    "post_content": "Bozor iqtisodiyotida turli mulkchilikka asoslangan minglab korxonalar faoliyatini tasavvurga sig’dirish qiyin emas. Korxonalar faoliyatini u yoki bu darajadagi boshqaruvini tashkil etish, shu korxona rahbarining boshqaruv qobiliyatiga bog’liq. Uning qobiliyati esa menejment sohasidagi bilimlarni qanchalik darajada egallanganligi bilan o’lchanadi. Shu nuqtai nazardan menejment so’zi bizning hayotimizda bozor iqtisodiyoti bilan bog’liq kirib kelgan so’zlar qatoridan joy oldi."
}
```
Response:
```
{
    "status": 201,
    "message": "The post successfully created!",
    "post": {
        "post_title": "Sport new nimadirda",
        "post_content": "Bozor iqtisodiyotida turli mulkchilikka asoslangan minglab korxonalar faoliyatini tasavvurga sig’dirish qiyin emas. Korxonalar faoliyatini u yoki bu darajadagi boshqaruvini tashkil etish, shu korxona rahbarining boshqaruv qobiliyatiga bog’liq. Uning qobiliyati esa menejment sohasidagi bilimlarni qanchalik darajada egallanganligi bilan o’lchanadi. Shu nuqtai nazardan menejment so’zi bizning hayotimizda bozor iqtisodiyoti bilan bog’liq kirib kelgan so’zlar qatoridan joy oldi.",
        "post_author": "Alfred123"
    }
}
```

### Get Posts
Route: `/api/posts` Method: `GET` 
Response:
```
{
    "status": 200,
    "post": [
        {
            "post_id": 6,
            "post_title": "Sport new nimadirda",
            "post_content": "Bozor iqtisodiyotida turli mulkchilikka asoslangan minglab korxonalar faoliyatini tasavvurga sig’dirish qiyin emas. Korxonalar faoliyatini u yoki bu darajadagi boshqaruvini tashkil etish, shu korxona rahbarining boshqaruv qobiliyatiga bog’liq. Uning qobiliyati esa menejment sohasidagi bilimlarni qanchalik darajada egallanganligi bilan o’lchanadi. Shu nuqtai nazardan menejment so’zi bizning hayotimizda bozor iqtisodiyoti bilan bog’liq kirib kelgan so’zlar qatoridan joy oldi.",
            "user": {
                "user_id": 5,
                "user_name": "Alfred123",
                "user_email": "alfred999@gmail.com"
            }
        },
        {
            "post_id": 3,
            "post_title": "Baqaybek",
            "post_content": "70000",
            "user": {
                "user_id": 1,
                "user_name": "Olimbek",
                "user_email": "olma@gmail.com"
            }
        },
     ]
  }
```

### Get Posts By Id
Route: `/api/posts/1` Method: `GET` 
Response:
```
{
    "status": 200,
    "post": {
        "post_id": 1,
        "post_title": "Haydarbek",
        "post_content": "70000",
        "user": {
            "user_id": 1,
            "user_name": "Olimbek",
            "user_email": "olma@gmail.com"
        }
    }
}
```

### There is also pagination here
Route: `/api/posts/paginate?page=1&limit=10` Method: `GET` 

### Get Users
Route: `/api/posts` Method: `GET` 
Response:
```
{
    "status": 200,
    "users": [
        {
            "user_id": 6,
            "user_name": "Alfred1231",
            "user_email": "alfred9959@gmail.com"
        },
        {
            "user_id": 3,
            "user_name": "Andrey",
            "user_email": "Horror@gmail.com"
        },
     ]
}
```

### Get User By Id
Route: `/api/users/1` Method: `GET` 
Response:
```
{
    "status": 200,
    "user": {
        "user_id": 1,
        "user_name": "Olimbek",
        "user_email": "olma@gmail.com"
    }
}
```

### There is also pagination here
Route: `/api/users/paginate?page=1&limit=10` Method: `GET` 

### Get User with their posts
Route: `api/usersWithPost` Method: `GET` 
Response:
```
{
    "status": 200,
    "users": [
        {
            "user_id": 5,
            "user_name": "Alfred123",
            "user_email": "alfred999@gmail.com",
            "post": [
                {
                    "post_id": 6,
                    "post_title": "Sport new nimadirda",
                    "post_content": "Bozor iqtisodiyotida turli mulkchilikka asoslangan minglab korxonalar faoliyatini tasavvurga sig’dirish qiyin emas. Korxonalar faoliyatini u yoki bu darajadagi boshqaruvini tashkil etish, shu korxona rahbarining boshqaruv qobiliyatiga bog’liq. Uning qobiliyati esa menejment sohasidagi bilimlarni qanchalik darajada egallanganligi bilan o’lchanadi. Shu nuqtai nazardan menejment so’zi bizning hayotimizda bozor iqtisodiyoti bilan bog’liq kirib kelgan so’zlar qatoridan joy oldi."
                }
            ]
        },
    ]
}
```
### There is also pagination here
Route: `api/usersWithPost?page=1&limit=10` Method: `GET` 

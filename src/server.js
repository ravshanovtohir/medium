import "./config/index.config.js"
import express from 'express'
import responseTime from './utils/index.js'

// import path from 'path'
// import database from "./config/db.config.js"

//other files


// other datas
const PORT = process.env.PORT || 5000
const app = express()

//middlewares
app.use(express.json())

app.get('/', (req, res) => res.send("Hello"))



// routes
import authRouter from './routes/auth.js'
import postRouter from './routes/post.js'
import userRouter from './routes/user.js'
// import authRouter from './routes/auth.js'
// import bookRouter from './routes/books.js'
// import categoryRouter from "./routes/category.js"

!async function () {
    try {
        app.use(postRouter)
        app.use(authRouter)
        app.use(userRouter)
    } catch (error) {
        console.log(error)
    }
    app.use((error, req, res, next) => {
        if (error.name == 'ValidationError') {
            return res.status(error.status).json({
                status: error.status,
                message: error.message,
                errorName: error.name,
                error: true,
            })
        }


        if (error.status != 500) {
            error.status = error.status ? error.status : 404
            return res.status(error.status).json({
                status: error.status,
                message: error.message,
                errorName: error.name,
                error: true,
            })
        }

        fs.appendFileSync('./log.txt', `${req.url}__${req.method}__${Date.now()}__${error.name}__${error.message}\n`)

        return res.status(error.status).json({
            status: error.status,
            message: 'Internal Server Error',
            errorName: error.name,
            error: true,
        })
    })
    app.listen(PORT, () => console.log("🚀 BackEnd server is running http://localhost:" + PORT))
}()
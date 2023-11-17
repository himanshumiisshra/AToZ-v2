import express from "express"
import productRoute from "./routes/productRoute.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
const app = express()

// Body Parser Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true  }))

//cookie parser middleware
    app.use(cookieParser())


connectDB()
const port = process.env.PORT || 8080


app.get('/', (req,res) => {
    res.send("api is running")
})

app.use('/api/products', productRoute)
app.use('/api/users', userRoutes)


app.use(notFound)
app.use(errorHandler)



app.listen(port, () => console.log(`Server is runing on port ${port}`))
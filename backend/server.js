import express from "express"
import productRoute from "./routes/productRoute.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
const app = express()




connectDB()
const port = process.env.PORT || 8080


app.get('/', (req,res) => {
    res.send("api is running")
})

app.use('/api/products', productRoute)


app.use(notFound)
app.use(errorHandler)



app.listen(port, () => console.log(`Server is runing on port ${port}`))
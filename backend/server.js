import express from "express"
import dotenv from "dotenv"
dotenv.config()
import products from "./data/product.js"
const app = express()
const port = process.env.PORT || 8080


app.get('/', (req,res) => {
    res.send("api is running")
})


app.get('/api/products' , (req,res) => {
    res.json(products)
})

app.get('/api/products/:id',(req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

app.listen(port, () => console.log(`Server is runing on port ${port}`))
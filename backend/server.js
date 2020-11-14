import express from 'express'
import data from './data.js'

const app=express()

app.get("/api/products",(req,res)=>{
    res.send(data.products)
})

app.get('/',(req,res)=>{
res.send("server started")
})

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})
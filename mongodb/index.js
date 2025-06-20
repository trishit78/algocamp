require('dotenv').config()
const express = require('express');
const app = express();
const productRoute = require('./routes/product.routes')
const port=3000;
const mongoose = require('mongoose')
const connectDb = require('./database/db')
connectDb();
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("mongodb connected successfully"))
//   .catch((e) => console.log(e));

app.use('/product',productRoute)


app.listen(port,()=>{
    console.log('server is running');
})
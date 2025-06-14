require('dotenv').config();

const express = require('express');
const connectDB = require('./database/db')
const app = express();
const bookRouter = require('./routes/book-router')
const port =  process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use('/api/book',bookRouter)

app.listen(port , ()=>{
    console.log('server is running');
})

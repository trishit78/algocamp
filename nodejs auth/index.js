require('dotenv').config();

const express = require('express')
const port = process.env.PORT;
const app = express();
const authRouter = require('./routes/auth.routes')
const homeRouter = require('./routes/home.routes')
const adminRouter = require('./routes/admin.routes')
const uploadImageRoutes = require('./routes/image.routes')
const connectDB = require('./database/db');
connectDB();

app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/home',homeRouter);
app.use('/api/home',adminRouter);
app.use('/api/image',uploadImageRoutes);


app.listen(port,()=>{
    console.log('server is running');
})
const express = require('express');
const cors = require('cors');
const { configureCors } = require('./config/corsConfig');
const port = 3000;
const app = express();

app.use(express.json());
app.use(requestLoggerer());
app.use(addTimeStamp());
app.use(configureCors());


app.listen(port,()=>{
    console.log('server is listening');
});



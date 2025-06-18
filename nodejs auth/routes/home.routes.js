const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')



router.get('/welcome',authMiddleware,(req,res)=>{
    const {username,role} = req.userInfo;
    console.log(username)
    console.log(role)
    
    res.json('welcome to home page');

})

module.exports=router;

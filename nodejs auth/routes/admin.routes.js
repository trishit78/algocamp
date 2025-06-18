const express = require('express');
const router = express.Router();
const authMiddleware=require('../middleware/auth.middleware')
const isAdminMiddleware =require('../middleware/admin.middleware')

router.get('/admin',authMiddleware,isAdminMiddleware,(req,res)=>{
    res.send('Admin page');
})

module.exports = router;
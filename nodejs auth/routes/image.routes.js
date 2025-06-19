const express =require('express');
const authMiddleware = require('../middleware/auth.middleware');
const isAdminMiddleware = require('../middleware/admin.middleware');
const uploadMiddleware = require('../middleware/upload.middleware');
const {uploadImageController} = require('../controllers/image.controller')

const router = express.Router();

router.post('/upload',authMiddleware,isAdminMiddleware,uploadMiddleware.single('image'),uploadImageController)


module.exports=router;
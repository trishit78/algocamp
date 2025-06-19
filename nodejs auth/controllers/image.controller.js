const Image = require('../models/image.model');
const {uploadToCloudinary} = require('../helpers/cloudinary.helpers')
const uploadImageController= async(req,res)=>{
    try {
        if(!req.file){
            return req.status(500).json({
                success:false,
                msg:'file is required, please upload the image'
            })
        }

        const {url,publicId} =await  uploadToCloudinary(req.file.path);

        const newImage = new Image({
            url,publicId,
            uploadedBy:req.userInfo.userId
        }) 
        await newImage.save();

        res.status(201).json({
            success:true,
            msg:'Image Uploaded',
            image: newImage
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            msg:'something went wrong, please try again'
        });
    }
}

module.exports= {uploadImageController}
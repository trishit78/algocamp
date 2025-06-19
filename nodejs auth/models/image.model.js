const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    ur:{
        type:String,
        required:true
    },
    publicId:{
            type:String,
            required:true,

    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

},{timestamps:true});

module.exports = mongoose.model('Image',imageSchema);
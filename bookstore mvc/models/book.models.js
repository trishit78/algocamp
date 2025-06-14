const mongoose = require('mongoose');
const {Schema} = mongoose;
const BookSchema = new Schema({
    title:{
        type:String,
        required:[true,'title is a must'],
        trim:true,
        maxLength:[100,'100 is the max length']
    },
    author:{
        type:String,
        required:[true,'title is a must'],
        trim:true,
        maxLength:[100,'100 is the max length']
    },
    year:{
        type:Number,
        required:[true,'year is a must'],
        min:[1000,'1000 is the min year'],
        max:[new Date().getFullYear(), 'future date is not allowed']
    
    },
    createdAt:{
        type:Date(),
        default:Date.now()   
    }
})

module.exports = mongoose.model("Book",BookSchema);
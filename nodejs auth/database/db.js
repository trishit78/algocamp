const mongoose= require('mongoose');

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB connected successfully');
    } catch (error) {
        console.log('connection failed');
        exit(1);
    }
}
module.exports= connectDb;
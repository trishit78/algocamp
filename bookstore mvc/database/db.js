const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(
            'mongodb+srv://trishit456:QrJNhrzr3jzseDi5@cluster0.t8utjub.mongodb.net/'
        )
        console.log('mongodb connection established')
    } catch (error) {
        console.log('mongodb connection failed');
        process.exit(1);
    }
}

connectDB();

module.exports=connectDB
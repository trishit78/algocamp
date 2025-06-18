const User = require("../models/User.models");
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken');

const registerUser = async(req,res)=>{
    try {
        const username = req.body.username;
        const email= req.body.email;
        const password = req.body.password;
        const role = req.body.role;

        const checkExistingUser = await User.findOne({$or:[{username},{email}]});
        if(checkExistingUser){
            res.status(400).json({
                msg:'the user already exists with same username or email',
                success:false
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newlyCreatedUser = new User({
                username,
                email,
                password: hashedPassword,
                role:role||'User'
            });
        await newlyCreatedUser.save();

        if(newlyCreatedUser){
            res.status(201).json({
                success:true,
                message:'User register successfully'
            });
        }else{
            res.status(400).json({
                success:false,
                message:'User register unsuccessful'
            });
        }


    } catch (error) {
        console.log(error)
        console.log('register unsuccessful')
    }
}

const loginUser = async(req,res)=>{
    try {
        const { username,password} =req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.json({
                success:false,
                message:"user doesnt exists"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);

        if(!isPasswordMatch){
            return res.json({
                success:false,
                message:"invalid password"
            })
        }

        const accessToken = jwt.sign({
            userId:user._id,
            username:user.username,
            role:user.role
        },process.env.JWT_SECRET_KEY,{
            expiresIn:'15m',
        });

        res.status(200).json({
            success:true,
            message:'logged in successfully',
            accessToken
        });





        
    } catch (error) {
        console.log('login unsuccessful');
        console.log('error');
    }
}

module.exports = {registerUser,loginUser};
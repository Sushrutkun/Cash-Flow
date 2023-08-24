import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async(req,res) => {
    const {username,email,password}= req.body;

    const userExists=await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user=await User.create({
        username,
        password,
        email,
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
        })
    }
    else{
        res.status(400)
        throw new Error("Error Occured")
    }
    res.json({
        username,
        email,
    });
});

export default registerUser;

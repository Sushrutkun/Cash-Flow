import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

export const registerUser = asyncHandler(async(req,res) => {
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
            // pic:user.pic,
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

export const authUser = asyncHandler(async(req,res) => {
    const {username,password}= req.body;

    const user=await User.findOne({username});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            username:user.username,
            email:user.email,
            // pic:user.pic,
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid Email or Password")
    }
});


import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema=mongoose.Schema({
        username:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        username:{
            type:String,
            require:true,
        },
        pic:{
            type:String,
            require:true,
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    {
        timestamps:true,
    }
);
//bcrypt the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const user=mongoose.model("user",userSchema);

export default user;

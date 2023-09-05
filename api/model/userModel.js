import mongoose from "mongoose";


const UserSchema=mongoose.Schema({  
    userName:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default : false
    }
})

const User = mongoose.model('User', UserSchema);
export default User;
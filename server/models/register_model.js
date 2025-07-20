import mongoose from "mongoose";    

var register=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{type:String,
        required:true
    },
    city:String,
    state:String,
    skills:String,
    resume:Buffer
},{timestamps:true})

export default new mongoose.model('registers',register)
import mongoose from "mongoose";

var contactschema=new mongoose.Schema({
   fullName:String,
   email:String,
   phone:Number,
   time:String,
   location:String,
   budget:Number,
   services:String,
   currentwebsite:String,
   noofpages:Number,

})
var contactmodel=mongoose.model('contact',contactschema)
export default contactmodel;
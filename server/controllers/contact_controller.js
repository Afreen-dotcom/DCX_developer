import contactmodel from '../models/contact_model.js'
export const createContact=(req,res)=>{
    var contact=new contactmodel({
   fullName:req.body.fullname,
   email:req.body.email,
   phone:req.body.phone,
   time:req.body.calltime,
   location:req.body.location,
   budget:req.body.budget,
   services:req.body.service,
   currentwebsite:req.body.currentwebsite,
   noofpages:req.body.noofpages,

    })

contact.save().then(result=>res.send(result))
.catch(err=>console.log(err));
}
export const getContact=(req,res)=>{
    var _id=req.params._id

    contactmodel.find({_id:_id}).then(result=>res.send(result))
    .catch(err=>console.log(err));
}
export const getContacts=(req,res)=>{
   var _id=req.params._id
    contactmodel.find({_id:_id}).then(result=>res.send(result))
    .catch(err=>console.log(err));
    

}
export const updateContact=(req,res)=>{
     var contact=new contactmodel({
     fullName:req.body.fullname,
   email:req.body.email,
   phone:req.body.phone,
   calltime:req.body.calltime,
   location:req.body.location,
   budget:req.body.budget,
   services:req.body.service,
   currentwebsite:req.body.currentwebsite,
   noofpages:req.body.noofpages,
     })
    contactmodel.findByIdAndUpdate(req.params.id,contact)
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
}
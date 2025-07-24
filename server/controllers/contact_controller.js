import ContactModel from '../models/contact_model.js'
export const createContact=(req,res)=>{
    try{
    var contact=new ContactModel({
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
.catch(err=>{if (err.name === 'ValidationError') {
        return res.status(400).send({ error: err.message });
      }
      return res.status(500).send({ error: 'Something went wrong while saving the contact.' });
    });

}
catch(err){
    console.error(err);
    res.send({"error":err})
}

}
// export const getContact=(req,res)=>{
//     try{
//     var _id=req.params._id

//     ContactModel.find({_id:_id}).then(result=>res.send(result))
//     .catch(err=>res.send({"error":err}));
// }
// catch(err){
//     console.error(err);
//     res.send({"error":err})
// }

// }
// export const getContacts=(req,res)=>{
//     try{
//    var _id=req.params._id
//    ContactModel.find({_id:_id}).then(result=>res.send(result))
//    .catch(err=>res.send({"error":err}));
//     }
//     catch(err){
//         console.error(err);
//         res.send({"error":err})
//     }

// }
// export const updateContact=(req,res)=>{
//     try{
//      var contact=new ContactModel({
//         fullName:req.body.fullname,
//         email:req.body.email,
//         phone:req.body.phone,
//         time:req.body.calltime,
//         location:req.body.location,
//         budget:req.body.budget,
//         services:req.body.service,
//         currentwebsite:req.body.currentwebsite,
//         noofpages:req.body.noofpages,
//      })
//      ContactModel.findByIdAndUpdate(req.params.id,contact)
//     .then(result=>res.send(result))
//     .catch(err=>res.send({"error":err}));
// }
// catch(err){
//     console.error(err);
//     res.send({"error":err})
// }

// }
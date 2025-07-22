import register_model from "../models/register_model.js";
export const create_profile= async (req,res)=>{
    console.log(req.body);

   var register= new register_model({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    city:req.body.city,
    state:req.body.state,
    skills:req.body.skills,
    Availability:req.body.Availability,
    resume:req.file.buffer
   }) 
   await register.save()
   .then(result=>res.send(result))
   .catch(err=>console.log(err));
}
export const get_profiles=(req,res)=>{

    register_model.find()
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
}
export const get_profile=(req,res)=>{

    register_model.find({_id:req.params.id})
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
}

export const del_profile=(req,res)=>{
    register_model.findByIdAndDelete(req.params.id)
    .then(result=>res.send(result))
    .catch(err=>console.log(err));
}

export const update_profile=(req,res)=>{
    var register= new register_model({
        _id:req.params.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        city:req.body.city,
        state:req.body.state,
        skills:req.body.skills,
        Availability:req.body.Availability,
        resume:req.file.buffer
       }) 
       register_model.findByIdAndUpdate(req.params.id,register)
       .then(result=>res.send(result))
       .catch(err=>console.log(err));

}
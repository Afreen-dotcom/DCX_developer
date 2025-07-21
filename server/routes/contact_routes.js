import express from 'express';
var router=express.Router(); //To import Router
import {createContact,getContact,getContacts,updateContact} from '../controllers/contact_controller.js';

contactRouter.post('/',createContact);
router.get('/get/:id',getContact);
router.get('/getAll',getContacts);
router.put('/update/:id',updateContact);


module.exports=router;
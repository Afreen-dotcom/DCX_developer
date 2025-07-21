import express from 'express';
var contactRouter=express.Router(); //To import Router
import {createContact,getContact,getContacts,updateContact} from '../controllers/contact_controller.js';

contactRouter.post('/',createContact);
contactRouter.get('/get/:id',getContact);
contactRouter.get('/getAll',getContacts);
contactRouter.put('/update/:id',updateContact);

export default contactRouter;
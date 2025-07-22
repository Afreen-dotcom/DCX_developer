import express from 'express';
import multer from 'multer';
import {create_profile,get_profile,del_profile,update_profile, get_profiles} from '../controllers/register_controller.js';

var registerRouter=express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
registerRouter.post('/',upload.single('resume'),create_profile);
registerRouter.get('/profiles',get_profiles);
registerRouter.get('/:id',get_profile);
registerRouter.delete('/delete/:id',del_profile);
registerRouter.put('/profile/:id', upload.single('resume'),update_profile);

export default registerRouter;
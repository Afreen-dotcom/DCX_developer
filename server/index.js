import dotenv from 'dotenv';
import express from 'express'
import registerRouter from './routes/register_routes.js';
import contactRouter from './routes/contact_routes.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const PORT =process.env.PORT || 8000;
 

var app= express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/register',registerRouter)
app.use('/contact',contactRouter)
mongoose.connect(process.env.MONGO_URL,{
})
.then(result=>console.log("mongo connected"),
err=>console.log('connection error'+err)
).catch(err=>console.log('catch connection error'+err));

app.listen(PORT,()=>{})

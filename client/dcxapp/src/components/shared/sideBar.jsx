import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import '../../App.scss'
const Sidebar=()=>{
    const location=useLocation();
    const {pathname}=location;
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    return(
        <div class='col-lg-4 gy-5 gx-5 d-flex justify-content-center justify-content-lg-end' >
  <div class="card text-center mb-4" id='left'>
  <div class="card-header fw-bold " >
  <ul class="list-group list-group-item-action list-group-flush ">
  <li class="list-group-item fw-bold gy-5" >Links</li>
  </ul>
    
  </div>
  <ul class="list-group list-group-item-action list-group-flush ">
    
  <a href="#" className="list-group-item  fw-bold" >SEO</a>
  <a href="#" className="list-group-item  fw-bold" >PHP</a>
  <a href="#" className="list-group-item fw-bold" >Ajax</a>
  <a href="#" className="list-group-item fw-bold" >jQuery</a>
  <a href="#" className="list-group-item fw-bold" >Web design</a>
  <a href="#" className="list-group-item fw-bold" >Web Programming</a>
  <a href="#" className="list-group-item fw-bold" >Content Creation</a>
  <a href="#" className="list-group-item fw-bold" >Internet Marketing</a>
  <a href="#" className="list-group-item fw-bold" >XHTML Templates</a>  
  </ul>
  {pathname==='/'? <div class="card-footer fw-bold " >
  <ul class="list-group  list-group-flush" >
  <div class="card-header fw-bold " >Newsletter</div>
  <li class="list-group-item fw-bold " >Subscribed Email:</li>
  <li class="list-group-item fw-normal" >
    <form id="form">
    Name: <input class='mb-2' onChange={(e)=>{setName(e.target.value)}}></input>  
  Email: <input class='mb-2' onChange={(e)=>{setEmail(e.target.value)}}></input> 
  <button onClick={()=>{email===''?alert("please Enter Email"):localStorage.setItem("name",name)}}>Send</button>
  <button onClick={()=>{document.getElementById('form').reset()}}>clear</button></form>
  </li>
  
  
  </ul>
  </div>:''
  }
 
    </div>
    </div>
    )
}
export default Sidebar;
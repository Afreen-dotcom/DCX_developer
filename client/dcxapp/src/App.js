import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import RegisterAsDeveloper from './pages/register';
import { Link,Routes,Route,useLocation } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about';
import Contact from './pages/contact';
import { useState } from 'react';
function App() {
  const location=useLocation();
  const {pathname}=location;
  //console.log(pathname)

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');

  return (

    <div>
        <div class="row align-items-start " >
          <div class="col-6 mt-2">
          <h1><span class='blue'> DCX</span> Developers </h1>
          </div>
          <div class="col-6 mt-3">
          <h3 ><span class='blue'> Find A Developer</span> NOW</h3>
        </div>
      </div>
    

    <div >
      <nav class="navbar navbar-expand-lg navbar-dark " >
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to="/about">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to="#">Browse Developers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to="/register">Register As Developer</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to="/contact">Contact us</Link>
        </li>
      </ul>
      { localStorage.getItem("name")!==''?
        <div class="d-flex text-white" > Welcome Back, {localStorage.getItem("name")} </div>:
        ""
      }
      
      </div>
  </div>

</nav>
</div>
   
<div class='row' id='body'>
  <div class='col-lg-4 gy-5 gx-5 d-flex justify-content-center justify-content-lg-end' >
  <div class="card text-center " id='left'>
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
  <div class='col-lg-8 gy-5 gx-5 '>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/register' element={<RegisterAsDeveloper/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>  
  </div>  
  <div class='d-flex justify-content-center' id='footer'>Copyright 2025. DCX Developer Directory </div>
    </div>
  );
}

export default App;

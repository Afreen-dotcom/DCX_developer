import React from 'react';
import { Link} from 'react-router-dom';
import '../../App.scss'
const Navbar=()=>{
    return(
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
          <Link class="nav-link text-white fw-bold" to="/profiles">Browse Developers</Link>
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
   
    )
}
export default Navbar
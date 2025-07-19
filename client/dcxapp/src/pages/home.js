import React from'react';
import '../App.css'
const Home=()=>{
    return (
        <div >

    <div class="card border-primary container mb-4" >
    <div class="card-body d-flex flex-column flex-md-row">
      <div class='col-md-7 '>
      <h3 class="fw-bold text-center">Welcome to DCX Developer Directory!</h3>
      <h5 class='blue-text'>Who Are We?</h5>
      <p>We are a fictional website and service that list top web developers around the world. Search and browse fictional web developers on our website absolutley FREE!</p>
      <h5 class='blue-text'>What Skills Do Our Developers Have?</h5>
      <p>Our listed fictional web developers skill ranges from Graphic design with Photoshop, Illustrator and Fireworks to markup languages like HTML5, XHTML and XML to programming languages such as Javascript, PHP, Python and ASP</p>
      </div>
      <div id='image' class='col-md-5 '></div>
    </div>
   </div>


    
    <div class="card border-primary container mb-4 ">
    <div class="card-body d-flex flex-column flex-md-row">
      <div class='col-md-7 '>
      <h3 class="card-title fw-bold text-center">Latest DCX Developers</h3>
      <table class="table table-borderless">
        <thead class='blue-text'><tr><th>Megan Jennings</th></tr></thead>
        <tbody>
          <tr><td>Location: Boston USA</td></tr>
          <tr><td>Skills: HTML/CSS, PHP,RoR</td></tr>
          <tr><td>Availability: Full-Time</td></tr>
          <tr><td >View Profile</td></tr>
        </tbody>
      </table>
      </div>
      
    </div>
   </div>

    </div>
    )
}
export default Home;
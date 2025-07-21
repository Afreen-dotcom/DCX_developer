import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './home';
import About from './about';
import Browse from './browse';
import Register from './register';
import Contact from './contact';
import {Link,Routes,Route} from 'react-router-dom';
import background from './background.png';
function App(){
	  var appStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

return(
	<div style={appStyle}>
<div style={{ display: 'flex', alignItems: 'center', gap: '25rem' }}>
  <h1 style={{ color: 'white', margin: 0 }}>
    <span style={{ color: '#A9D1FA' }}>DCX </span>Developer Directory
  </h1>
  <h3 style={{ color: '#A9D1FA', margin: 0 }}>
    Find A Developer <span style={{ color: 'white' }}>NOW</span>
  </h3>
</div><br></br>
		
	<nav class="navbar navbar-expand-lg" style={{backgroundColor:"#1C47BE"}}>
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active"style={{color:"white"}}  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"style={{color:"white"}}  to='/about'>About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" style={{color:"white"}}  to='/browse'>Browser Developers</Link>
        </li>
		  <li class="nav-item">
          <Link class="nav-link"style={{color:"white"}}  to='/register'>Register As Developer</Link>
        </li>
		  <li class="nav-item">
          <Link class="nav-link" style={{color:"white"}}  to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>

<Routes>
	<Route path='/' element={<Home/>}/>
	<Route path='/about' element={<About/>}/>
	<Route path='/browse' element={<Browse/>}/>
	<Route path='/register' element={<Register/>}/>
	<Route path='/Contact' element={<Contact/>}/>
</Routes>
        <div style={{display: 'flex', // fixed typo
    flexDirection: 'row', // layout sidebar & form side by side
    fontFamily: 'Arial, sans-serif',
    padding: '10px',
    gap: '30px', }}>
  <div style={{    minWidth: '200px',
    background: '#1976d2',
    color: 'white',
    padding: '15px',
    borderRadius: '10px',}}>
<h3>Links</h3>
<ul style={{  listStyleType: 'none',
    paddingLeft: '0',
    lineHeight: '2'}}>
  <li>SEO</li>
  <li>PHP</li>
  <li>Ajax</li>
  <li>jQuery</li>
  <li>Web Design</li>
  <li>Web Programming</li>
  <li>Content Creation</li>
  <li>Internet Marketing</li>
  <li>XHTML Templates</li>
</ul>
  </div>
  </div>
	</div>
)
}

export default App;
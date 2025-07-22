import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Header from './components/shared/header';
import Navbar from './components/shared/navbar';
import Sidebar from './components/shared/sideBar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/shared/footer';

function App() {
  return (<div class="row align-items-start " >
          <Header/>
          <Navbar/>
          <div class='row' id='body'>
          <Sidebar/>
          <AppRoutes/>
        </div>
        <Footer/>  
    </div>
  );
}

export default App;

import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function AboutUs(){
    return(
        <div className="container py-5">
            <h1 className="mb-4">DCX Developer Directory!</h1>

            <div className="mb-5">
            <h3 className="text-primary fw-bold">Who Are We?</h3>
            <p className="mt-3">
                We are a fictional website and service that list top web developers around the world. Search and browse fictional web developers on our website absolutley FREE!</p>
            <h3 className="text-primary fw-bold">What Skills Do Our Developers Have?</h3>
            <p className="mt-3"> 
                Our listed fictional web developers skill ranges from Graphic design with Photoshop, Illustrator and Fireworks to markup languages like HTML5, XHTML and XML to programming languages such as Javascript, PHP, Python and ASP</p>
            </div>

            <div className="mb-5">
                <video width="320" height="240" controls>
                <source src="/video/ad.mp4" type="video/mp4">
                </source>
                </video>
            </div>
            
            <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-outline-primary px-4 py-2 fw-semibold">▶️ Play / Pause</button>
            </div>   
        </div>
    );
}
export default AboutUs;


 








 






 


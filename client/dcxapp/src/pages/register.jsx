import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.scss'
import { MapContainer, TileLayer, Marker, useMap,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { useForm } from 'react-hook-form';


const RegisterAsDeveloper=()=>{
    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', 
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const [firstName,setFirstName]=useState('');
    const  [lastName,setLastName]=useState('');
    const  [email,setEmail]=useState('');
    const  [profile,setProfile]=useState('');
    const [position,setPosition] = useState([0,0]);
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [skills,setSkills]=useState('');
    const [Availability,setAvailabity]=useState('');

  


    const handeleSubmit=(e)=>{
        e.preventDefault()
        
        const formData= new FormData();
        formData.append('firstName',firstName)
        formData.append('lastName',lastName)
        formData.append('email',email)
        formData.append('city',city)
        formData.append('state',state)
        formData.append('skills',skills)
        formData.append('Availability',Availability)
        formData.append('resume',profile)

        fetch('http://localhost:7000/register/',{
            method:'POST',
            
            body:formData
        }).then(response=>{return response.json()})
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    

    }
    
    useEffect(()=>{
      const savedPosition = sessionStorage.getItem('userPosition');
      if (savedPosition) {
        const [lat, long] = JSON.parse(savedPosition);
        setPosition([lat, long]);
        return;
      }

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat=position.coords.latitude
                var long= position.coords.longitude
                sessionStorage.setItem('userPosition', JSON.stringify([lat, long]));

                setPosition([lat,long]);
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`)
                .then(response => response.json())
                .then(data => {
                    const city = data.address.city || data.address.town || data.address.village;
                    const state = data.address.state;
                    setCity(city);
                    setState(state);
                })
                .catch(error => console.error('Error fetching location info:', error));

              },(error) => {
                console.error('Error getting location:', error.message);
              }
            );
          } else {
            alert('Geolocation is not supported by your browser.');
          }
          
        },[]);

        
           
const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView(position, map.getZoom());
      }
    }, [position, map]);
    return null;
  };
  
        
      

    return(
        <div class='card border-primary container mb-4'>
        <div className='container mt-2 mb-2'> 
            <h2 class="mb-3 blue-text" >Register As A Developer</h2>
            <p class='fw-bold'>Please use this Form to register as a developer here.</p>
            <form onSubmit={handeleSubmit}>
            
          


            <div class="col-md-6 d-flex align-items-center mb-3">

            <label for="exampleFormControlInput1" class="form-label mb-0 fixed-label" >First Name</label>

                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your First name" onChange={(e)=>setFirstName(e.target.value)}></input>
              </div>


                <div class="col-md-6 d-flex align-items-center gap-2 mb-3">
                <label for="exampleFormControlInput1" class="form-label mb-0 fixed-label" >Last Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your last name" onChange={(e)=>setLastName(e.target.value)}></input>
                </div>
               
                <div class="col-md-6 d-flex align-items-center gap-2 mb-3">
                <label for="exampleFormControlInput1" class="form-label mb-0 fixed-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
               
                <div class="col-md-6 d-flex align-items-center gap-2 mb-3">
                <label for="exampleFormControlInput1" class="form-label mb-0 fixed-label" >Skills</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your skills" onChange={(e)=>setSkills(e.target.value)}></input>
                </div>
                 
                <div class="col-md-6 d-flex align-items-center gap-2">
                <label className="form-label mb-0">Availability</label>
              {[ 'Full-Time', 'Part-Time'].map((time) => (
            <div key={time} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="Availability"
                value={time}
                onChange={(e)=>{setAvailabity(e.target.value)}}
              />
              <label className="form-check-label">{time}</label>
                </div>))}
                </div>

              
                <div className="mb-3">
                <label>
                    Location
                </label>
                <div id='map' >
                <MapContainer center={position}
                            zoom={10}
                            scrollWheelZoom={true}
                            style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={redIcon}>
                                 <Popup>{city}</Popup>
                                </Marker>
                                <RecenterMap position={position}/>
            </MapContainer >
                            </div>


                </div>
                <div class="col-md-6 d-flex align-items-center gap-5 ">
                <label for="exampleFormControlInput1" class="form-label mb-0 fixed-label">Upload Profile</label>
                <input type="file" className="form-control" onChange={(e)=>setProfile(e.target.files[0])}/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>     
                      
    </form>
        </div>
        </div>
    )
    
    
}   
export default RegisterAsDeveloper;                                                                                                                                                    
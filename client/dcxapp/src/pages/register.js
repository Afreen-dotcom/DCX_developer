import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const RegisterAsDeveloper=()=>{
    const [firstName,setFirstName]=useState('');
    const  [lastName,setLastName]=useState('');
    const  [email,setEmail]=useState('');
    const  [location,setLocation]=useState('');
    const  [profile,setProfile]=useState('')

    const handleFirstNameChange=(e)=>setFirstName(e.target.value);
    const handleLastNameChange=(e)=>setLastName(e.target.value);
    const handleEmailChange=(e)=> setEmail(e.target.value);
    const handleLocationChange=(e)=>setLocation(e.target.value)
    const handleProfileChange=(e)=>setLocation(e.target.value)

    const handeleSubmit=(e)=>{
        e.preventDefault()
        const formData= new FormData();
        formData.append('firstName',firstName)
        formData.append('lastName',lastName)
        formData.append('Email',email)
        formData.append('location',location)
        formData.append('Profile',profile)
    
    }

    return(
        <div class='card border-primary container mb-4'>
        <div className='container mt-2 mb-2'> 
            <h2 class="mb-3 blue-text" >Register As A Developer</h2>
            <p>Please use this Form to contact a membet a member of our website team</p>
            <form onSubmit={handeleSubmit}>
                <div className="mb-3">
                <label className="form-label">
                    First Name:<input type="text" value={firstName} onChange={handleFirstNameChange}/>
                </label>
                </div>
                <div className="mb-3">
                <label>
                    Last Name:<input type="text" value={lastName}  onChange={handleLastNameChange}/>
                </label>
                </div>
                <div className="mb-3">
                <label>
                    Email:<input type="text" value={email}  onChange={handleEmailChange}/>
                </label>
                
                </div>
                <div className="mb-3">
                <label>
                    Location:<input type="text" className="form-control" value={location} onChange={handleLocationChange}/>
                </label>
                </div>
                <div className="mb-3">
                <label>
                   Update Profile: <input type="file" className="form-control" />
                </label>
                   
                </div>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button type="submit" className="btn btn-success">Register</button>            
            </form>
        </div>
        </div>
    )
    
    
}   
export default RegisterAsDeveloper;                                                                                                                                                    
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    location: { lat: null, lng: null },
    skills: '',
    resumeFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resumeFile') {
      setFormData((prev) => ({ ...prev, resumeFile: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData();
  data.append('firstname', formData.firstname);
  data.append('lastname', formData.lastname);
  data.append('email', formData.email);
  data.append('skills', formData.skills);
  data.append('resume', formData.resumeFile);
  data.append('location[type]', 'Point');
  data.append('location[coordinates][]', formData.location.lng);
  data.append('location[coordinates][]', formData.location.lat);

  fetch('http://localhost:6020/register/', {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((result) => {
      alert(result.message || 'Registered successfully');
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Registration failed');
    });
};

  const LocationPicker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setFormData((prev) => ({
          ...prev,
          location: { lat, lng },
        }));
      },
    });
    return formData.location.lat ? (
      <Marker position={[formData.location.lat, formData.location.lng]} />
    ) : null;
  };

  return (
    <div className="container" style={{ flex:1, 
    padding: '20px',
    float:'right',
    width:'80%',
    border: '1px solid #aaa',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    paddingRight: '40px'}}>
      <h2 style={{color:'blue'}}>Register</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Basic fields */}
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">First Name:</label>
          <div className="col-sm-3">
          <input type="text" className="form-control" name="firstname" onChange={handleChange} required />
        </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Last Name:</label>
          <div className="col-sm-3">
          <input type="text" className="form-control" name="lastname" onChange={handleChange} required />
        </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-3">
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Skills:</label>
          <div className="col-sm-3">
          <input type="text" className="form-control" name="skills" onChange={handleChange} />
        </div>
        </div>

        {/* File Upload */}
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Upload Resume:</label>
          <div className="col-sm-3">
          <input type="file" className="form-control" name="resumeFile" onChange={handleChange} required />
        </div>
        </div>

        {/* Map Component */}
        <div className="mb-3 row">
          <label>Select Location:</label>
          {/* <MapContainer center={[13.0827, 80.2707]} zoom={10} style={{ height: '300px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationPicker />
          </MapContainer> */}
          <div style={{ width: '350px', height: '250px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
  <MapContainer 
  center={[22.9734, 78.6569]} // central India
  zoom={5}                    // shows most of India
  maxBounds={[[6, 68], [38, 97]]} // prevents panning too far
  style={{ height: '250px', maxwidth: '100%' }}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <LocationPicker />
</MapContainer>
</div>
          {formData.location.lat && (
            <div className="mt-2 text-muted">
              Selected: Latitude {formData.location.lat}, Longitude {formData.location.lng}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    // </div>
  );
}

export default Register;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
const Contact=()=>{
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    time: '',
    location: '',
    budget: 10000,
    services: [],
    currentwebsite: '',
    noofpages: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updatedServices = checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value);
        return { ...prev, services: updatedServices };
      });
    } else if (type === 'radio') {
      setFormData({ ...formData, time: value });
    } else if (name === 'budget') {
      setFormData({ ...formData, budget: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:7000/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || 'Form submitted successfully');
        console.log('Response:', data);
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Submission failed');
      });
  };

  return (
    <div class='card border-primary container mb-4'>
      <h2 class="blue-text">Contact Us</h2>
      <p className='fw-bold'>Please use this form to contact a member of our website team</p>
      <form onSubmit={handleSubmit} >
        {/* Full Name */}
        <div className="mb-2 row">
          <label className="col-sm-2 col-form-label">Full Name:</label>
          <div className="col-sm-3">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-2 row">
          <label className="col-sm-2 col-form-label">Email Address:</label>
          <div className="col-sm-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-2 row">
          <label className="col-sm-2 col-form-label">Phone Number:</label>
          <div className="col-sm-3">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Call Time (Radio Buttons) */}
        <div className="d-flex align-items-center gap-4 mb-2">
          <label className="form-label mb-0">Best Time To Call:</label>
          {['Morning', 'Noon', 'Evening'].map((time) => (
            <div key={time} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="calltime"
                value={time}
                checked={formData.time === time}
                onChange={handleChange}
              />
              <label className="form-check-label">{time}</label>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="mb-2 row">
          <label className="col-sm-2 col-form-label">Location:</label>
          <div className="col-sm-3">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        
        <h2>About the Project</h2>
        <div class='mb-2' style={{ border: '1px solid' }}>
            <div class='container ms-3'>
          <div >
            <label>Budget:</label>
            <input
              type="range"
              name="budget"
              min={1000}
              max={10000}
              step={100}
              value={formData.budget}
              onChange={handleChange}
            />
            <div class="col-sm-3">
            <input
              type="number"
              value={formData.budget}
              readOnly
              className="form-control"
            />
          </div>
          </div>

          {/* Services (Checkboxes) */}
          <fieldset >
            <legend>Services Needed:</legend>
            {['HTML', 'PHP', 'ASP', 'Java', 'C++', 'Design'].map((svc) => (
              <div key={svc} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={svc}
                  checked={formData.services.includes(svc)}
                  onChange={handleChange}
                />
                <label className="form-check-label">{svc}</label>
              </div>
            ))}
          </fieldset>

          {/* Current Website */}
          <div className="mb-2 row">
            <label className="col-sm-2 col-form-label">Current Website:</label>
            <div className="col-sm-3">
              <input
                type="text"
                name="currentwebsite"
                value={formData.currentwebsite}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          {/* Number of Pages */}
          <div className="mb-2 row">
            <label className="col-sm-2 col-form-label">Number of Pages:</label>
            <div className="col-sm-3">
              <input
                type="number"
                name="noofpages"
                value={formData.noofpages}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div><br></br>

        {/* Submit Button */}
        <div className="col-12 ">
          <button type="submit" className="btn btn-primary ms-3 mb-2">
            Submit Inquiry
          </button>
        </div>
        </div>
      </form>
    </div>
    
  );
}



export default Contact;
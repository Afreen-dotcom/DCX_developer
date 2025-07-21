import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    calltime: '',
    location: '',
    budget: 10000,
    service: [],
    currentwebsite: '',
    noofpages: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updatedServices = checked
          ? [...prev.service, value]
          : prev.service.filter((s) => s !== value);
        return { ...prev, service: updatedServices };
      });
    } else if (type === 'radio') {
      setFormData({ ...formData, calltime: value });
    } else if (name === 'budget') {
      setFormData({ ...formData, budget: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:6020/contact/', {
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
    <div style={styles.formContainer}>
      <h2 style={{ color: 'blue' }}>Contact Us</h2>
      <p>Please use this form to contact a member of our website team</p>
      <form onSubmit={handleSubmit} style={styles.form} >
        {/* Full Name */}
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Full Name:</label>
          <div className="col-sm-3">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3 row">
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
        <div className="mb-3 row">
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
        <div className="d-flex align-items-center gap-4 mb-3">
          <label className="form-label mb-0">Best Time To Call:</label>
          {['Morning', 'Noon', 'Evening'].map((time) => (
            <div key={time} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="calltime"
                value={time}
                checked={formData.calltime === time}
                onChange={handleChange}
              />
              <label className="form-check-label">{time}</label>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="mb-3 row">
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
        <div style={{ border: '1px solid' }}>
          <div style={styles.budgetBox}>
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
          <fieldset style={styles.services}>
            <legend>Services Needed:</legend>
            {['HTML', 'PHP', 'ASP', 'Java', 'C++', 'Design'].map((svc) => (
              <div key={svc} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={svc}
                  checked={formData.service.includes(svc)}
                  onChange={handleChange}
                />
                <label className="form-check-label">{svc}</label>
              </div>
            ))}
          </fieldset>

          {/* Current Website */}
          <div className="mb-3 row">
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
          <div className="mb-3 row">
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
        <div className="col-12">
          <button type="submit" className="btn btn-secondary">
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
    
  );
}

const styles = {
  formContainer: {
    flex: 1, 
    padding: '20px',
    border: '1px solid #aaa',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    paddingRight: '40px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  budgetBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  services: {
    marginTop: '10px',
    padding: '10px',
  },
};

export default Contact;
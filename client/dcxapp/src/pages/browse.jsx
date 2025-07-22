import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const BrowseDevelopers=()=>{
  const [developers, setDevelopers]=useState([]);
useEffect(()=>{
   
    fetch('http://localhost:7000/register/profiles')
    .then(res=>{return res.json()})
    .then(data=>{
      setDevelopers(data);})
    .catch(error=>{
      console.error('error fetching developers data:', error);
    })
  },[])
    // Group developers by state
const groupedByState = developers.reduce((acc, dev) => {
  if (!acc[dev.state]) acc[dev.state] = [];
  acc[dev.state].push(dev);
  return acc;
}, {});
 
// Sort states alphabetically
const sortedStates = Object.keys(groupedByState).sort((a, b) => a.localeCompare(b));
 
// Render tables
return <div style={{color:"black", padding:'20px',background:'#f0f4f8',borderRadius:'8px', border: '6px solid blue'}}>
{sortedStates.map((state) => (
  <table key={state} cellSpacing={0} cellPadding={8} style={{ width: '100%', marginBottom: '20px' }}>
    <thead >
      <tr>
        <th colSpan={3}><h4>{state}</h4></th>
      </tr>
      <tr style={{ borderBottom: '1px dotted #999' }}>
        <th>Name</th>
        <th>City</th>
        <th>Skills</th>
      </tr>
    </thead>
    <tbody>
      {groupedByState[state].map((dev, index) => (
        <tr key={index} style={{ borderBottom: '1px dotted #999' }}>
          <td><a href="#">{dev.firstName} {dev.lastName}</a></td>
          <td>{dev.city}</td>
          <td>{dev.skills}</td>
        </tr>
      ))}
    </tbody>
  </table>))}
  </div>
 
};
 
 
export default BrowseDevelopers;
import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h2>Form Submission Details</h2>
      {formData ? (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phoneCode} {formData.phoneNumber}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>PAN Number: {formData.panNo}</p>
          <p>Aadhar Number: {formData.aadharNo}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Details;

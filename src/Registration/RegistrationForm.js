// src/components/RegistrationForm.js
import React, { useState, useEffect } from 'react';
import { validateRegistrationForm, calculateAge } from '../utils/validation';
import Toaster from '../components/Toaster';
import './RegistrationForm.scss';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    city: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = () => {
    const validationResult = validateRegistrationForm(formData);
    if (validationResult.isValid) {
      localStorage.setItem('user', JSON.stringify(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        city: '',
        postalCode: '',
      });
      // Show success toaster
      setErrors({});
    } else {
      setErrors(validationResult.errors);
    }
  };

  useEffect(() => {
    const isDisabled = Object.values(formData).some((value) => value === '');
    setIsButtonDisabled(isDisabled);
  }, [formData]);

  return (
    <div className="registration-form">
      {errors.firstName && (
        <div className="error-message">{errors.firstName}</div>
      )}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      

      {errors.lastName && (
        <div className="error-message">{errors.lastName}</div>
      )}
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      
      {errors.email && <div className="error-message">{errors.email}</div>}
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />

      {errors.dateOfBirth && (
        <div className="error-message">{errors.dateOfBirth}</div>
      )}
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
        placeholder="Date of Birth"
      />
      

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        placeholder="City"
      />

      {errors.postalCode && (
        <div className="error-message">{errors.postalCode}</div>
      )}
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleInputChange}
        placeholder="Postal Code"
      />
      

      <button onClick={handleSubmit} disabled={isButtonDisabled} className={isButtonDisabled ? "neutralButton" : !isButtonDisabled ? "validButton" : ""}>
        SAVE
      </button>
      {/* <Toaster errors={errors} /> */}
    </div>
  );
};

export default RegistrationForm;

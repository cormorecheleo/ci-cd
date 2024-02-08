// src/utils/validation.js
export const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
  
    return age;
  };
  
  export const validateRegistrationForm = (formData) => {
    const errors = {};
  
    // Validate first name
    if (!/^[a-zA-ZÀ-ÿ-]+$/.test(formData.firstName.trim())) {
      errors.firstName = 'Invalid first name';
    }
  
    // Validate last name
    if (!/^[a-zA-ZÀ-ÿ-]+$/.test(formData.lastName.trim())) {
      errors.lastName = 'Invalid last name';
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email address';
    }
  
    // Validate date of birth
    const age = calculateAge(formData.dateOfBirth);
    if (age < 18) {
      errors.dateOfBirth = 'Must be at least 18 years old';
    }
  
    // Validate city (optional, adjust as needed)
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }
  
    // Validate postal code
    const postalCodeRegex = /^(?:[0-8]\d|9[0-8])\d{3}$/;
    if (!postalCodeRegex.test(formData.postalCode.trim())) {
      errors.postalCode = 'Invalid postal code';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };
  
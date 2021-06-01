import axios from 'axios';
export default function validateInfo(values) {
    let errors = {}; // object with errors
    
    
    // username includes white chars or specialcharacters
    if (!values.username.trim() || !(/^[A-Za-z]+/.test(values.username.trim()) || /\s/.test(values.username.trim()) )) {
      errors.username = 'Username required/Invalid username';
    }
    
    // password to short or not given
    if (!values.password) {
      errors.password = 'Password is required';
    }

    
     
    return errors;
  }
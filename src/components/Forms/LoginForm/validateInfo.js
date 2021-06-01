import axios from 'axios';
export default function validateInfo(values) {
    let errors = {}; // object with errors
    // username includes white chars or specialcharacters
    if (!values.email) {
      errors.email = 'Email required';
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';}
    
    // password to short or not given
    if (!values.password) {
      errors.password = 'Password is required';
    }

    
    return errors;
  }
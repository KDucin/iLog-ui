import { useState } from 'react';
import {useHistory} from 'react-router-dom'

export default function validateInfo(values) {
    let errors = {}; // object with errors
    
  
    // username includes white chars or specialcharacters
    if (!values.username.trim() || (!/^[A-Za-z]+/.test(values.username.trim())) ) {
      errors.username = 'Username required/Invalid username';
    }
    
    // password to short or not given
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }

    /*
      Status 400 ? pair username + password doesnt exist ->
      
      errors.username = 'Username and password do not match'
    */
    
    return errors;
  }
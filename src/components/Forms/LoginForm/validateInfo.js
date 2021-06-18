import axios from 'axios';
export default function validateInfo(values) {
    let errors = {}; // object with errors


    if (!values.email) {
      errors.email = 'Email required';
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';}

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if(values.email && values.password) // both given - check if pair exists
    {
    axios
    .post('http://localhost:8080/auth/login')
    .then(response => {
  })
  .then(data => {
     console.log("data:" + data)
  })
  .catch(error => {
    errors.email = 'Given user doesnt exist';
   
     console.log("catch :" + error.response.data.error)
     return errors
  })
    }
    
    return errors;
  }
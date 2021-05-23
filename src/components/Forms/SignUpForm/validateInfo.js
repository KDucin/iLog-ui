export default function validateInfo(values) {
    let errors = {}; // object with errors
  
    // username will not include white chars
    if (!values.username.trim()  ) {
      errors.username = 'Username required/Invalid username';
    }else if(!/^[A-Za-z]+$/.test(values.username.trim())){
      errors.username = 'Invalid username';
    }
    /*
      else == not Empty and Doesnt contain invalid characters
      so try to connect te BE / DB and get response
      
          if() username already exists, return error ->
          errors.username = "account username already exists"
    */
     // validate if email is empty or containts invalid content 
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
     /*
      else == not Empty and Doesnt contain invalid characters
      so try to connect te BE / DB and get response
            if() email already exists status 200?, return error ->
            errors.email = "account given email already exists"
    */
    // password to short or not given
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    // password not given or doesnt match with original
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
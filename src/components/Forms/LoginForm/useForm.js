import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import axios from 'axios';

const useForm = (validate) => {

    const history = useHistory();
    const [values, setValues] = useState({
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };
    const handleSubmit = e => { // handleSubmit if no errors
      e.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };

    /* Create redirection, <Redirect/> wont work*/
    useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitting ) {
          axios.post('http://localhost:8080/auth/login',
          {
            email: values.email,
            password : values.password 
          })
          .then(function(resp){
            if(resp.status >= 200 && resp.status <300 ){
              console.log(resp)
            localStorage.setItem('token', resp.data.accessToken )
            history.push(`/user/`, resp.data );
            }
          })
          .catch(function(err){
            console.log(err)
          });
      } 
    }, [errors]) //always return errors, even empty
  
    return { handleChange, handleSubmit, values, errors };
  };
  export default useForm;

  /*
  
  axios.post(apiBaseUrl+'createUsers', data, {headers: headers}).then(function (response) {

console.log(response);

if(response.data.success){

localStorage.setItem("u_code", encodeURIComponent(JSON.stringify(response.data.data)));

localStorage.setItem('is_done', true);

window.location.href = "/";

console.log("Login successfull");

}else{

alert(response.data.message);

}

}).catch(function (error) {

console.log(error);

});

}

}
  
  
  */
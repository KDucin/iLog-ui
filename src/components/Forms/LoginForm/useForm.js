import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import ReactDOM from 'react-dom'
import axios from 'axios';

const useForm = (validate) => {

    const history = useHistory(); // React hook 
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
       /*
          Status 200 -> JSON, pass instead {name, data} below
          FIX HERE -> handle axios POST !!!!!!
        */ 
          const config = require('./config.json');
          const config2 = require('./config12.json');
          axios.get('http://localhost:8080/api/user',
          {
            email: values.email,
            password : values.password 
          })
          .then(function(resp){
            if(resp.status(200) ){
              //success
               /*just random file to test*/
              console.log(resp)
              history.push( '/user-panel', config );
            }
          })
          .catch(function(err){
            //negative
            console.log(err)
            history.push( '/user-panel', config );
          });


          // /*just random file to test*/
          //history.push( '/user-panel', config );
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
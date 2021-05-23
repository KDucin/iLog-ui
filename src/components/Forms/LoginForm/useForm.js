import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
const useForm = (validate) => {

    const history = useHistory(); // React hook 
    const [values, setValues] = useState({
      username: '',
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
        */
       const config = {name: "json", data:"here"}
        history.push('/user-panel', config)
      } 
    }, [errors]) //always return errors, even empty
  
    return { handleChange, handleSubmit, values, errors };
  };
  export default useForm;
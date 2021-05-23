import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
const useForm = (validate) => {

    const history = useHistory();
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
  
    const handleSubmit = e => {
      e.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
    
   
    useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitting ) {
        history.push('/user-panel', {name: "JSON DATA" }/*here we pass JSON to build user-panel*/)
      }
        
    }, [errors])
  
    return { handleChange, handleSubmit, values, errors };
  };
  
  export default useForm;
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
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

  const history = useHistory();
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting)
      setTimeout(() => {history.push("/login")}, 2000)
  }, [errors])

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
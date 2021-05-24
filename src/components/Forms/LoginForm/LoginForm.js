import React from 'react'
import useForm from './useForm'
import validate from './validateInfo' /* Validate password and login, returns errors { } */
import './LoginForm.css'
import { Link } from 'react-router-dom'
// import { FcGoogle, RiFacebookCircleFill }  from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
    const { handleChange, values, handleSubmit, errors} = useForm(validate);
    const isValidated = Object.entries(errors).length !== 0;
    const history = useHistory();
    return (
        
            <div className='form-content'>
                <form className='form' onSubmit = {handleSubmit}> 
                     <h1>
                     Here is Login panel text
                     </h1>
                     <div className = 'form-inputs'>
                         <label htmlFor="username" className='form-label'>
                             Username
                         </label>
                         <input 
                             id = 'username' // mark when focued
                             type='text' 
                             name='username' 
                             className='form-input'
                             placeholder='Enter your username'
                             value={values.username}
                             onChange={handleChange}
                             />
                             {errors.username && <p>{errors.username}</p>} {/*if any username-type errors occure*/}
                     </div>
                     <div className = 'form-inputs'>
                        <label htmlFor="password" className='form-label'>
                        Password
                        </label>
                        <input 
                            id = 'password' // mark when focued
                            type='password' 
                            name='password' 
                            className='form-input'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>} {/* if any password-type errors occure */}
                    </div>
                    <button className='form-input-btn' type='submit' >
                    Login
                    </button>
                <span className='form-input-sign-up'>
                    Don't have an account ?
                    Create one <Link to='/sign-up'>right here</Link> ! {/*  */}
                </span>

                
                </form>
            </div>
    )
}

export default LoginForm

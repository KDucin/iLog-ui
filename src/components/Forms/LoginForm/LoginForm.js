import React from 'react'
import useForm from './useForm'
import validate from './validateInfo' /* Validate password and login, returns errors { } */
import './LoginForm.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
    const { handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
            <div className='form-content'>
                <form className='form' onSubmit = {handleSubmit}> 
                     <h1>
                     Login to your panel
                     </h1>
                     <div className = 'form-inputs'>
                         <label htmlFor="username" className='form-label'>
                             Email
                         </label>
                         <input
                        type='email' 
                        name='email' 
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>} {/*if any email-type errors occure*/}
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

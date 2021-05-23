import React from 'react'
import { Link } from 'react-router-dom'
import useForm from './useForm'
import validate from './validateInfo'
import './SignUpForm.css'

import { FcGoogle }  from 'react-icons/fc';
import { RiFacebookCircleFill }  from 'react-icons/ri';

const SignUpForm = () => {
const {handleChange, handleSubmit, values, errors} = useForm(validate);

    return (
       <div className='form-content'>
           <form className='form' onSubmit = {handleSubmit}> 
                <h1>
                    Create your ILog account fast and easy!
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
                    <label htmlFor="email" className='form-label'>
                       Email
                    </label>
                    <input 
                        id = 'email' // mark when focued
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
                    <label htmlFor="password2" className='form-label'>
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

                <div className = 'form-inputs'>
                    <label htmlFor="password" className='form-label'>
                       Confirm Password
                    </label>
                    <input 
                        id = 'password2' // mark when focued
                        type='password' 
                        name='Confirm password' 
                        className='form-input'
                        placeholder='Repeat your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>} {/* if any confirm-password-type errors occure*/}
                </div>

                <button className='form-input-btn' type='submit' onSubmit={handleSubmit}>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Already have an account ? 
                    Login <Link to='/login'>here</Link>! {/* change Link to '/login' */}
                </span>
                <div className='form-socials' color="#fff">

                <div className='icons-login-wrapper'>
                    
                    <div className='form-socials-text'> 
                        OR SIGN UP VIA:   {/* Text */}
                     </div>

                <div className='form-socials-icons'> 
                <Link className='social-icon-login' to='/'> 
                            <FcGoogle size='32'/>
                        </Link>
                        <Link className='social-icon-login' to='/'> 
                            <RiFacebookCircleFill size='32' color='#fff'/>
                        </Link>    {/*  */}
                </div>
                       
                    </div>
                </div>
           </form>
       </div>
    )
}

export default SignUpForm

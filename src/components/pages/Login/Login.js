import React from 'react'
import LoginForm from '../../Forms/LoginForm/LoginForm'
import './Login.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
function Login() {
    return (
        <>
            <Navbar />
            <div className='form-wrapper'> 
                <div className='form-container'> 
                <LoginForm/>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}

export default Login

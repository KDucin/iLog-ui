import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import SignUpForm from '../../Forms/SignUpForm/SignUpForm';
import Navbar from '../../Navbar/Navbar'
import Footer from '../Footer/Footer';


/*Fetch from backend
In Backend:
@CrossOrigin('*') to avoid CORS policy ( Access-Control-Allow-Origin)

const UserProfile = () => {

    const fetchUserProfile () => {
        axios.get("api/linkToProfile").then(response =>
            {
            // do something
            });
    };

    useEffect( () => {
        fetchUserProfile();
    }, [])
}
*/

const SignUp = () => {
    return (
        < >
            <Navbar />  
            <div className='form-wrapper' >
                <div className='form-container' style={{backgroundColor:"blue"}}> 
                    <SignUpForm/>       
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SignUp
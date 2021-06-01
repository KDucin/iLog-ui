import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import UserNavbar from '../../UserNavbar/UserNavbar';
import FormComponent from './FormComponent';

import './UserPanel.css'
const UserPanel = () => {

        const location = useLocation();
        return (
            <>
            <UserNavbar />
                <div className='main-container'>
                <div className='icons-wrapper'>
                    {location.state.map(data => <FormComponent {...data}/>)}   
                </div>
                
                </div>
            <Footer />
                
            </>
        
        )
      
        
    
}

export default UserPanel

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import FormComponent from './FormComponent';
import Navbar from './../../../components/Navbar/Navbar'
import Footer from './../../Footer/Footer'
import './UserPanel.css'
const UserPanel = () => {

        const location = useLocation();
        return (
            <>
            <Navbar />
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

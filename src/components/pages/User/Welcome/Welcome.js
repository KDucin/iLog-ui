import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import UserNavbar from '../UserNavbar/UserNavbar';
import './Welcome.css'
const Welcome = ({match, location}) => {
/* token === location.state*/
    const token = localStorage.getItem('token')
    console.log(localStorage.getItem('token'))
    return(
        <>
        <UserNavbar />
        <div className='user-panel-container'>
            <div className='user-panel-wrapper'>
            <Link to={{pathname:`/user/create`, state: {token:token} }}>
                
                <div className='user-panel-c'>
                    Create new 
                </div>
                </Link>
                
                <Link to={{pathname:`/user/data-view`, state: {token:token} }}>
                
                <div className='user-panel-c'>
                    Data View {}
                </div>
                </Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Welcome

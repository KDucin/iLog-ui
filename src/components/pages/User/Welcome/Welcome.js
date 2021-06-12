import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import UserNavbar from '../UserNavbar/UserNavbar';
import './Welcome.css'
const Welcome = ({match, location}) => {
/* token === location.state*/
    return(
        <>
        <UserNavbar url={match.url}/>
        <div className='user-panel-container'>
            <div className='user-panel-wrapper'>
            <Link to={`${match.url}create`}>
                <div className='user-panel-c'>
                    Create new {JSON.stringify(match, null, 2)}
                </div>
                </Link>
                <Link to={`${match.url}history`}>
                <div className='user-panel-c'>
                    Check created{JSON.stringify(location, null, 2)}
                </div>
                </Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Welcome

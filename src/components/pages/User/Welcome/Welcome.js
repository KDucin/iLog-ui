import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import UserNavbar from '../UserNavbar/UserNavbar';
import './Welcome.css'
import { IconContext } from "react-icons"
import {IoMdCreate} from "react-icons/io"
import {VscChecklist} from "react-icons/vsc"

const Welcome = ({match, location}) => {
/* token === location.state*/
    const token = localStorage.getItem('token')
    console.log("TK in Welcome : "+ token)
    return(
        <>
        
        <UserNavbar />
        <IconContext.Provider value={{ color: 'white', size: '86px' }} >
        <div className='user-panel-container'>
            <div className='user-panel-wrapper'>
            <Link to='/user/create'>
                <div className='user-panel-c'>
                    <IoMdCreate/><br/><br/>
                    CREATE NEW FORM
                </div>
                </Link>
                <Link to='/user/data-view'>
                <div className='user-panel-c'>
                    <VscChecklist/><br/><br/>
                    DATA VIEW
                </div>
                </Link>
            </div>
        </div>
        </IconContext.Provider>
        <Footer/>
        
        </>
    )
}
export default Welcome

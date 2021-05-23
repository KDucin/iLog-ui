import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Renderer from './Renderer';

const UserPanel = () => 
 {
    const location = useLocation();
    return (
        <div>
           <p>{location.state.name}</p>
            <Link to='/'>Back to main </Link>
            <Renderer/>
        </div>
    )
}

export default UserPanel

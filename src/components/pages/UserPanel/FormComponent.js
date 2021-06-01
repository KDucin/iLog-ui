import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import './FormComponent.css'
import Logo from './logoMale-4.svg'
/*Renderer builds dynamic data from JSON*/
function FormComponent(
    {
        name,
        data
    }
 ) {
   
    return (
    <Link to ='/' style={{ textDecoration: 'none' }}>
        <div className='single-form-container'>
            <div className='form-icon-container'>
                <img src = {Logo}/>
            </div>
            <div className='form-data-container'>
                <div className='form-title-wrapper'>
                    <h3>{name}</h3>
                    
                </div>
                <div className='form-info-wrapper'>
                    <p>{data}</p>
                </div>
                
             </div>
        </div>
    </Link>    
    )
}

export default FormComponent

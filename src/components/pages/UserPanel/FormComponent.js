import React, { Component } from 'react'
import { Redirect, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './FormComponent.css'
import Logo from './logoMale-4.svg'
/*Renderer builds dynamic data from JSON*/

/* 
    {this.props.data.questions.map(obj => obj.answers.map(answ => answ.name))}

*/


class FormComponent extends Component
   {

    render()
    {
        
        
        return (
                <div className='single-form-container'>
                    <Link to= {{
                        pathname: '/edit-panel',
                        state : {data : this.props.data}
                    }}>       
                    <div className='form-icon-container'>
                        <img src = {Logo}/>
                    </div>
                    <div className='form-data-container'>
                        <div className='form-title-wrapper'>
                            <h3>{this.props.data.formName}</h3>    
                        </div>
                     </div>
                     </Link>
                </div>
            
            );
    }
    
    
}

export default FormComponent


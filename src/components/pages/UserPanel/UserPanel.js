import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import UserNavbar from '../../UserNavbar/UserNavbar';
import FormComponent from './FormComponent';
import GetForms from './GetForms';
import './UserPanel.css'
const UserPanel = (props) => {

    /*
    const [data, setData] = useState[{}]
    axios get (header : token ) -> response => setData(response)

    */
    var data = require('../../Forms/LoginForm/config.json')
    var token = props.location.state.token
    var email = props.location.state.email
    var password = props.location.state.password
    const { errors } = GetForms(token); // errors, data
    
    function isEmpty(obj)
    {
        return !obj.keys(obj).length;
    }

    console.log(data)
        return (
            <>
            <UserNavbar {...email} {...password}/>
            {/* 
                data from GetForms
            */}
            {data.map( form => <FormComponent data={form}/>)}
            {errors}
            <Footer />
            
            </>
        
        )
      
        
    
}

export default UserPanel

import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserNavbar from '../User/UserNavbar/UserNavbar'
import DataInfo from './DataInfo';
import './DataView.css'
import Footer from '../../Footer/Footer'
import {IoAddSharp} from 'react-icons/io5'
import { IconContext } from "react-icons"


 class DataView extends Component
 {
     
     constructor(props){
         super(props);
         this.state = {
             data : [ ],
         }
     }
     componentDidMount(){
        const posts = async () => {
            const token = localStorage.getItem('token');
            console.log("TK in View : "+ token)
            const resp = await axios.get("http://localhost:8080/forms/", {headers : {"Authorization" : `Bearer ${token}` }} );
            this.setState({
                data : resp.data
            })
        }
        posts();
     }
     render(){
        return (
            <>
            <IconContext.Provider value={{ color: 'white', size: '64px' }} >
            {console.log(this.state.data)}
            <UserNavbar/>
            {   
            (this.state.data && this.state.data.length > 0) ?
                    this.state.data.map(
                        item => 
                
                    <div className = "data-view-container" >
                        <DataInfo data={item}/>
                    </div>
                    )
                    :              
                    <div className = "data-view-container" >
                        <div className="empty-view-container">
                            <div className="empty-view-text-wrapper">
                                Ow it looks you don't have any forms created...
                            </div>
                            <div className="empty-view-link-wrapper">
                            Create one!
                            <Link to='/user/create'>
                                <div className="empty-view-link-box">
                                    <div className="link-box-text">
                                        <IoAddSharp style={{ color: 'white' }}/>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        </div>      
                     </div>  
               
            }
            <Footer/>
            </IconContext.Provider>
            </>
        )
     }
 }
 

        
    


export default DataView


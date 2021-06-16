import axios from 'axios'
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import UserNavbar from '../User/UserNavbar/UserNavbar'
import DataInfo from './DataInfo';
import './DataView.css'
import Footer from '../../Footer/Footer'



 class DataView extends Component
 {
     constructor(props){
         super(props);
         this.state = {
             data : [ ],
             token : props.location.state.token,
            

         }
     }
     componentDidMount(){
        const posts = async () => {
            const resp = await axios.get("http://localhost:8080/forms/", {headers : {"Authorization" : `Bearer ${this.state.token}` }} );
            this.setState({
                data : resp.data
            })
            
        }
        posts();

       // axios.get("http://localhost:8080/forms/", {headers : {"Authorization" : `Bearer ${this.state.token}` }} ).then(resp => {this.setState(
        //prevstate => ({
         //   data : [ ...prevstate.data,resp.data]
        //})    
       // ) } )
       // console.log(this.state.data)
     }
     render(){
        return (
            <>
            {console.log(this.state.data)}
            <UserNavbar/>
            <div className = "data-view-container" >
            {   
                

                    this.state.data.map(
                        item => 
                            
                            <DataInfo data={item}/>
                        
                        
   
                    )

            
            }
            </div>
            <Footer/>
                
            
            </>
            
        )
     }
 }
 

        
    


export default DataView


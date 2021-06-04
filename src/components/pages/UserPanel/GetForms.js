import axios from "axios";
import { useState } from "react";

const GetForm = (token) => {

    var errors;
    
    const data = axios.get('url', {headers: {'token' : token}})
    .then(function (response) {
        this.setState({ data: response})
    .catch(function (error){
        console.log(error);
        errors = "Error!";
    })
    });
    return {errors, data};

}
export default GetForm;
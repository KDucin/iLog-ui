import { useState } from "react"


const validToken = (token) =>
{
    const[token, setToken] = useState(null);
    const[isValid, setValidation] = useState(false);

    if(token !==null){
        setToken(token);
        setValidation(true);
    } 
}

export default validToken
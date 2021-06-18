
import { useState } from 'react'
import './CHOICE.css'

/* TO DO : css @megia -> textarea.cols rows */
const WRITTEN = ({handleAnswer} ) => {

const[answer,setAnswer] = useState("");
const handleChange = (e) =>{
    setAnswer(e.target.value);
    //console.log(answer);
}
    return(
        <>
        <div class="TextAnwser">
             <label class="textarea">
             <textarea 
             wrap="hard" 
             id="textanwser" 
             name="_textanwser" 
             rows="15" 
             cols="80"
             onChange={handleChange}
             />
             </label>
        </div>
        </>
    )}

export default WRITTEN

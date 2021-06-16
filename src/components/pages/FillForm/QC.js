
import { useState } from 'react'
import './QC.css'

const QC = (props) =>{

    const [checked, setChecked] = useState(false)
    function handlSingle() {
        console.log(props.data)
    }
    function handleMulti() {
        console.log(props.data)
    }
    return(
        
        <div className="super-fill-wrapper">
        <h2>{"Pytanie: " + props.qst}</h2>
        <div className = "fill-answer-type-wrapper">
                    
            {
                
                props.data.map(ans => 
                <>
                <input type={props.type==="SINGLE_CHOICE" ? 
                "radio" : "checkbox"
                } name = "answer-type" onClick={props.type==="SINGLE_COICE" ? handlSingle:handleMulti  }/>
                <label for="answer-type">{ ans.text } </label>
                </>)
            }
            
        </div>
        </div>
    )
} 

export default QC
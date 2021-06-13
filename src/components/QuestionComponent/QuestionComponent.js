import { useState } from "react"
import './QuestionComponent.css'
const QuestionComponent = (props) =>
{
    const[question, setQuestion] = useState("");
    const[type, setType] = useState(props.type);
    const[answers, setAnswers] = useState(
        [ 
            {name: ""} 
        ]);

    const AddAnswer = () => {
        const update=[...answers, {name:""}];
        setAnswers(update)  
        sendData()
    }
    const RemoveAnswer = index => {
        const temp = [...answers];
        temp.splice(index,1);
        setAnswers(temp);
        sendData()
    }
    function QuestionChange(e){
        setQuestion(String(e.target.value))
        sendData()
        
    }
    const InputChange=(e,i) =>
    {
        var data = Object.assign([], answers)
        data[i].name = e.target.value === "" ? "" : e.target.value;
        setAnswers(data);
        sendData()
    }

    function sendData(){
        props.update( props.index,{question:question,type:type, answers:answers} )
    }

   return(
      <>
      <div className='question-container'>
      <input type="text" class={`css-input ${props.type}`} placeholder={`Question`} 
            onChange={e => QuestionChange(e)}/>
        {
            answers.map((obj,idx) => 
                type!=="WRITTEN" ?
                <>
                    <input name="name" type="text" placeholder={`ans ${idx}`} 
                            onChange={e => InputChange(e,idx)}/>
                    <button 
                        onClick={ AddAnswer }>                   
                    Add
                    </button>
                    {
                    answers.indexOf(obj)!==0 ? 
                    <button 
                        onClick={ () => RemoveAnswer(idx)}>
                    Remove
                    </button>  : null
                    }
                    <br/>
                </>
                :
                <textarea readonly cols="30" value={props.type}/>
                )
        }
      </div>













    {
        /*
<div className='question-container'>
        <input type="text" class={`css-input ${props.type}`} placeholder={`Question :${question}`} 
            onChange={e => QuestionChange(e)}
        />
        <div>
            {answers.map(obj => 
            type!=="WRITTEN" ?
            <>
                <input name="name" type="text" placeholder={`ans ${obj.name}`} 
                        onChange={e => InputChange(e,answers.indexOf(obj))}/>
                <button 
                    onClick={ () => setAnswers({answers:[...answers, 
                                        {name:`click from ${answers.indexOf(obj)}`}
                                    ]})}>
                Add
                </button>
                {
                answers.indexOf(obj)!==0 ? 
                    <button onClick={() => RemoveAnswer(answers.indexOf(obj))}>Remove</button>  : null
                }
                <br/>
            </>
            :
            <textarea readonly cols="30" value={props.type}/>
            )}
        </div>
                
    </div>

        */
    }
     
      </>
   )

}

export default QuestionComponent
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../../../Footer/Footer"
import QuestionComponent from "../../../QuestionComponent/QuestionComponent"
import UserNavbar from "../UserNavbar/UserNavbar"

import './Create.css'
const Create = () => {

    const[data, setData] = useState(
        {
            formName:'',
            questions: []
        }
    );

    const [formName, setFormName] = useState("")
    const [questions, setQuestions] = useState([])

    const AddWritten = () =>{
        setQuestions([...questions,
            {question:'',
            type:'WRITTEN',
            answers:[] } ])
        }
    
    const AddSigle = () =>{
        setQuestions([...questions,
            {question:'',
            type:'SINGLE_CHOICE',
            answers:[] } ])
    }
    const AddMulti = () =>{
        setQuestions([...questions, 
            {
            question:'',
            type:'MULTI_CHOICE',
            answers:[]}
        ])
    }

    const RemoveComponent = (index) => {
            const list = [...questions];
            list.splice(index,1);
            setQuestions(list)
        }

   function handleChildChange(index,question){
    var update = [...questions]
    update[index] = question
    setQuestions(update);
    
   }
 
    
    
    return(
        <>
        <UserNavbar />
        <div className='create-container'>
                <div className='controller-wrapper'>
                    <div className='controller'>
                       <div className='controller-icons-wrapper'>
                       <button className='controller-icon' onClick={ AddWritten}>Written</button>
                        <button className='controller-icon' onClick={  AddSigle}>Single</button>
                        <button className='controller-icon' onClick={ AddMulti}>Multi</button>
                        </div>
                    </div>
                </div>
                <div className='create-wrapper'>
                <input type="text" class={`css-input`} placeholder={`formName`} />
                    <div className='create-form'>
                        {questions.map( (obj, index) => 
                        <div className='wrapper-delete'>
                        <button onClick={() => RemoveComponent(index)}>DELETE</button>
                        <QuestionComponent  
                            index={index}
                            type={obj.type} 
                            update={(idx,quest) => handleChildChange(idx,quest)} 
                        />
                    </div>
                        )}
                    </div>
                </div>
               
            </div>
            {questions.length!==0 ? <button onClick={ () => console.log(...questions)}  
                            >Elo</button> : null}
        <Footer/>
        
        </>
    )
}


export default Create
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../../../Footer/Footer"
import QuestionComponent from "../../../QuestionComponent/QuestionComponent"
import UserNavbar from "../UserNavbar/UserNavbar"
import './Create.css'

const Create = (props) => {

    const[data, setData] = useState(
        {
            formName:'',
            questions: []
        }
    );

    const [formName, setFormName] = useState("")
    const [questions, setQuestions] = useState([])
    const [ids,setter] = useState( [ ] )
    const AddWritten = () =>{
        setQuestions([...questions,
            {question:'',
            type:'WRITTEN',
            answers:[] } ])
            setData( {formName: formName , questions:[...questions] } )
        }
    
    const AddSigle = () =>{
        setQuestions([...questions,
            {question:'',
            type:'SINGLE_CHOICE',
            answers:[] } ])
            setData( {formName: formName , questions:[...questions] } )
    }
    const AddMulti = () =>{
        setQuestions([...questions, 
            {
            question:'',
            type:'MULTI_CHOICE',
            answers:[]}
        ])
        setData( {formName: formName , questions:[...questions] } )
    }

    const RemoveComponent = (index) => {
            const list = [...questions];
            list.splice(index,1);
            setQuestions(list)
            setData( {formName: formName , questions:[...questions] } )
        }

   function handleChildChange(index,question){
    var update = [...questions]
    update[index] = question
    setQuestions(update);
    setData( {formName: formName , questions:[...questions] } )
   }
 
   const handleSubmit = () => {
    const token = localStorage.getItem('token');
    const header = {headers : {"Authorization" : `Bearer ${token}` }}
        axios.post("http://localhost:8080/forms/create", formName, header )
        .then(respform => { 
            const uuid = respform.data.uuid;
            questions.map(item => 
                axios.post(`http://localhost:8080/forms/${uuid}/questions`, {question: item.question, type: item.type }, header )
                .then(
                    respquest => 
                    item.answers.map(
                        ans => 
                        axios.post(`http://localhost:8080/forms/${uuid}/questions/${respquest.data.id}/answers`, {text : ans.name }, header )
                        )
                    )
                )
            })
            .then(
               () => props.history.push("/user"))
   }
    return(
        <>
        {console.log('to props',props)}
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
                <input type="text" class={`css-input`} placeholder={`formName`} onChange={e => setFormName({formName: e.target.value})} />
                    <div className='create-form'>
                        {questions.map( (obj, index) => 
                        <div className='wrapper-delete'>
                        <QuestionComponent  
                            index={index}
                            type={obj.type} 
                            update={(idx,quest) => handleChildChange(idx,quest)}     
                        />
                        <div class = "buttontest">
                        <button onClick={() => RemoveComponent(index)}>DELETE</button>
                        </div>
                    </div>
                        )}
                    </div> 
                </div>
            </div>
            
            <div class="SubmitForm">
                <div class="cont">
                    {questions.length!==0 ? 
                    <button onClick={ handleSubmit }>
                    Submit
                    </button>  : null
                    }
                </div>              
            </div>  
        <Footer/> 
        </>
    )
}


export default Create
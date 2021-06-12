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

    const handleNameChange = e =>{
        data.formName = e.target.value;
    }

    const AddWritten = () =>{
        setData({questions: [...data.questions,
            {question:'',
            type:'WRITTEN',
            answers:[]}]})
        }
    
    const AddSigle = () =>{
        setData({questions: [...data.questions,
            {question:'',
            type:'SINGLE_CHOICE',
            answers:[]}]})
    }
    const AddMulti = () =>{
        setData({questions: [...data.questions,
            {
            question:'',
            type:'MULTI_CHOICE',
            answers:[]}
        ]})}

    const RemoveComponent = (index) => {
            const list = [...data.questions];
            list.splice(index,1);
            setData({questions: list})
        }

    function AddQuestion(childData) {
        setData({questions: [...data.questions,{questions : [...childData]}
            ]})
        }
    
    return(
        <>
        <UserNavbar />
        <div className='create-container'>
                <div className='controller-wrapper'>
                    <div className='controller'>
                       <div className='controller-icons-wrapper'>
                       <button className='controller-icon' onClick={AddWritten}>Written</button>
                        <button className='controller-icon' onClick={AddSigle}>Single</button>
                        <button className='controller-icon' onClick={AddMulti}>Multi</button>
                        </div>
                    </div>
                </div>
                <div className='create-wrapper'>
                    <form onSubmit={ e=> e.preventDefault()} className='create-form'>
                        {data.questions.map(obj => 
                        <>
                        <QuestionComponent type={obj.type} onChange={AddQuestion}/>
                        <button onClick={RemoveComponent}>DELETE</button>
                        </>
                        )}
                    </form>
                </div>
            </div>
        <Footer/>
        {console.log(JSON.stringify(data))}
        </>
    )
}


export default Create
import { useState } from "react";
import { useLocation } from "react-router"
import UserNavbar from "../UserNavbar/UserNavbar";

import QuestionComponent from "./QuestionComponent";

const handleSubmit = () =>{}

const EditPanel = () => {

    const location = useLocation();
    const [dataD,setData] = useState([]);
    const handleData = (quest) =>{
        setData(dataD + quest);
        console.log(dataD);
    }
    console.log(location.state)
    return(
        <>
        <UserNavbar/>
        {/* <h2>{  location.state.data.questions.map(obj => obj.answers.map(answ => answ.name))} </h2> */}
        <form className="form-edit-container">
            <div className="form-name-wrapper">
                <h1>{ location.state.data.formName} </h1>
            </div>
            { location.state.data.questions.map( question => <QuestionComponent handler={handleData} {...question}/>)}
        </form>
        
        <button >Save</button>
        </>
    )
}
export default EditPanel

//SINGLE_CHOICE, WRITTEN, MULTI_CHOICE
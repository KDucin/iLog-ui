import { useState } from "react"
import MULTI_CHOICE from "./MULTI_CHOICE"
import SINGLE_CHOICE from "./SINGLE_CHOICE"
import WRITTEN from "./WRITTEN"


/*
    4.06 TO DO : 
        EventListener
        OnChnage
        to Components
*/


const QuestionComponent = (question, {handleData}) => {

    const [answ, setAnsw] = useState([]);
    const handleAnswer=(ans)=>{
        setAnsw(answ + ans)
        handleData(answ);
    }

    return(
            <>
            <div className='question-container'>
                <form action="">
                <div className='wrapper-question'>
                    {question.name}    
                </div>
                <div className='question-wrapper'>
                    {
                      question.type==="WRITTEN" ?
                       <WRITTEN handler={handleAnswer} />
                      :
                      ( question.type==="SINGLE_CHOICE" ?
                      question.answers.map(obj => <SINGLE_CHOICE handler={handleAnswer} {...obj}/>)
                      :
                      question.answers.map(obj => <MULTI_CHOICE handler={handleAnswer} {...obj}/>) )
                    }
                </div>
                </form>
                
            </div>
            </>
    )

}

export default QuestionComponent
import MULTI_CHOICE from "./MULTI_CHOICE"
import SINGLE_CHOICE from "./SINGLE_CHOICE"
import WRITTEN from "./WRITTEN"


const QuestionComponent = (question) => {

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
                      question.answers.map(obj => <WRITTEN {...obj}/>)
                      :
                      question.type==="SINGLE_CHOICE" ?
                      question.answers.map(obj => <SINGLE_CHOICE{...obj}/>)
                      :
                      question.answers.map(obj => <MULTI_CHOICE{...obj}/>)
                    }
                </div>
                </form>
            </div>
            </>
    )

}

export default QuestionComponent
import { useState } from "react"
import './QuestionComponent.css'

const QuestionComponent = (param) =>
{
    const[data, setData] = useState({
        question:'',
        type:param.type,
        answers:[]
    })

    const AddAnswer = () =>{
        setData({answers: [...data.answers, {name: "sss"}] } ) 
        //console.log(`dodaje: ${data.answers.map(ob => ob.name)}`)
        param.onChange([data])
    }
    const RemoveAnswer = (index) => {
        const list = [...data.answers];
        list.splice(index,1);
        setData({answers: list})
        param.onChange([data])
        //console.log(`usuwam: ${data.answers.map(ob => ob.name)}`)
    }

    const handleChange = (e,index) =>{
       const {name,value} = e.target;
       const list = [...data.answers]
       list[index][name]=value;
       setData({answers: list})
    }



   return(
      <>
      <div className='question-container'>

        <input type="text" class="CheckboxQ" id="CheckboxQuestion" name="CheckboxQuestion" value="CheckboxQuestion">
        </input>
        
        {data.answers.map( obj => 
        
        obj.type==="WRITTEN" ?
        <>
        <label class="CheckboxAnwser">
        <textarea rows="5" cols="60" name="text" placeholder="Answer here"></textarea>
        </label>
        </>  
        :
        obj.type==="SINGLE_CHOICE" ?
        <>
        <label class="RadiokAnwser">
        <input type="text" class="RadioButtonA" id="RadioButtonAnwser" name="RadioButtonAnwser" value="RadioButtonAnwser"/> <br> </br>
        </label>
        </>
        :
        <>
        <label class="CheckboxAnwser">
        <input type="text" class="CheckboxA" id="CheckboxAnwser" name="CheckboxAnwser" value="CheckboxAnwser"/><br/><br/>
        </label>
        </>
        )}
        <br />
        {(data.type!=="WRITTEN") ?  <button onClick={AddAnswer}>Add</button> : null}
        {(data.type!=="WRITTEN") ? <button onClick={RemoveAnswer}>Remove</button> : null}
      </div>
        {}
      </>
   )

}

export default QuestionComponent
import axios from "axios"
import { Component } from "react"

import Footer from "../../Footer/Footer.js"

import Navbar from "../../Navbar/Navbar.js"
import './FillForm.css'


class FillForm extends Component  {
    constructor(props){
        super(props)
        this.state = {  
            form:[],
            uuid : window.location.href.substring(28,window.location.href.length),
            gender : "",
            age:"",
            formname:"",
            questions:[],
            model:[],
            selected_type: "SINGLE_CHOICE",
            selected_quest: "Choose Gender",
            selected_ans: [
                {gender:"MALE"},
                {gender:"FEMALE"},
                {gender:"OTHER"}
            ],
            index: 0
        };
        this.handleGoNext = this.handleGoNext.bind(this);  
    }
    
    
     componentDidMount(){
         axios.get(`http://localhost:8080/forms/${this.state.uuid}`).then(
             resp => {//console.log("response: ",resp.data)
               this.setState( 
                 {
                    form : resp.data,
                    formname: resp.data.formName,
                    user : resp.data.user,
                    questions : (resp.data.questions),
                    model: new Array(2+resp.data.questions.length)
                                .fill({question:"",type:"",answers:[]})
                                .fill({question:"",type:"SINGLE_CHOICE",answers:[]},0,2),
                                selected_type: "SINGLE_CHOICE",
                                selected_quest: "Choose Gender",
                                selected_ans: [
                                    {gender:"MALE"},
                                    {gender:"FEMALE"},
                                    {gender:"OTHER"}
                                ],
                    index: 0
                 }
               )
            }
         )
     }

    submit = () =>{

    }

    handleGoNext = () =>
    { 

        var obj = this.state.questions[this.state.index];

        if(this.state.index === 0 ){
            this.setState( () =>({
                selected_type: "SINGLE_CHOICE",
                selected_quest: "Choose Gender",
                selected_ans: [
                    {gender:"MALE"},
                    {gender:"FEMALE"},
                    {gender:"OTHER"}
                ],
            }))
        }
        
         if(this.state.index === 1 ){
            this.setState(() =>({  
                selected_quest: "Choose Age",
                selected_type: "SINGLE_CHOICE",
                selected_ans: [
                {age:"UNDER_18"},
                {age:"A18_25"},
                {age:"A26_30"},
                {age:"A31_35"},
                {age:"A36_40"},
                {age:"A41_45"},
                {age:"A46_50"},
                {age:"A51_55"},
                {age:"A56_60"},
                {age:"OVER_60"},
            ]}))
        }
        if(this.state.index >= 2){
            this.setState(() =>({  
                selected_quest: obj.question,
                selected_type: obj.type,
                selected_ans: obj.answers
            }))
        }
        this.setState(() =>({index: this.state.index+1}))
      //  axios.post(`http://localhost:8080/forms/${this.state.uuid}/createView`)
    }

    render(){
        return(
            <>
            <Navbar/>
        
                <div className='fill-form-container'>
                    <div className='fill-form-wrapper'>
                        <h1>{this.state.formname}</h1>
                        <div className='fill-form-question-wrapper'>
                           {this.state.selected_quest}
                        </div>
                        <div className='fill-form-answers-wrapper'>
                        {
                            (this.state.index === 0) ?
                            <>
                           <div className = "button-gender-wrapper">
                                 <input type = "radio" className="gender-input" id = "FEMALE" value = "FEMALE" name = "gender-studies"/>
                                <label for="FEMALE">FEMALE</label>
                                </div>

                                <div className = "button-gender-wrapper">
                                <input type = "radio" className="gender-input"  value = "MALE" name = "gender-studies"/>
                                <label for="MALE">MALE</label>
                                </div>

                                <div className = "button-gender-wrapper">
                                <input type = "radio" className="gender-input" value = "OTHER" name = "gender-studies"/>
                                <label for="OTHER">OTHER</label>
                        </div>  
                        </>
                            :
                            (this.state.index === 1) ?
                        <>
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input" value = "UNDER_18" name = "age-studies"/>
                            <label for="UNDER_18">UNDER_18</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"  value = "A18_25" name = "age-studies"/>
                            <label for="A18_25">A18_25</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input" value = "A26_30" name = "age-studies"/>
                            <label for="A26_30">A26_30</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"value = "A31_35" name = "age-studies"/>
                            <label for="A31_35">A31_35</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"  value = "A36_40" name = "age-studies"/>
                            <label for="A36_40">A36_40</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"  value = "A41_45" name = "age-studies"/>
                            <label for="A41_45">A41_45</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"  value = "A46_50" name = "age-studies"/>
                            <label for="A46_50">A46_50</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"  value = "A51_55" name = "age-studies"/>
                            <label for="A51_55">A51_55</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input" value = "A56_60" name = "age-studies"/>
                            <label for="A56_60">A56_60</label>
                            </div>
    
                            <div className = "button-gender-wrapper">
                            <input type = "radio" className="age-input"  value = "OVER_60" name = "age-studies"/>
                            <label for="OVER_60">OVER_60</label>
                            </div>
                        </>
                            :

                            this.state.selected_ans.map((ans) =>
                            <div className = "button-gender-wrapper">
                            <input 
                                type={ this.state.type==="WRITTEN"?"textarea": (this.state.type === "SINGLE_CHOICE" ? "checkbox" : "radio") } 
                                value =  {`value-${this.state.index}`} 
                                name = {`name-${this.state.type}`}
                                for =  {`value-${this.state.index}`}
                            />
                            
                            </div>
                            )
                        }
                        </div>
                            {/*onClick={() => this.handleGoNext()}*/}
                        <div className="fill-form-button-wrapper">
                        <button className='fill-form-button' onClick=
                            {this.state.index === this.state.questions.length ? 
                                 () => this.submit()  : () => this.handleGoNext() }
                        
                        >
                            {this.state.index === 0 ? <>GET STARTED</> :
                            this.state.index === this.state.questions.length ? <>SUBMIT</> : <>NEXT</>}
                        </button>
                        </div>
                    </div>

                </div>
                
            <Footer/>
            </>
        )
    }
}
export default FillForm



/*
  handleGenderAge=() =>{
        const age = this.state.age
        const gender = this.state.gender
        if( !( ( age === null  || age.trim() === "" ) || ( gender === null  || gender.trim() === "" ) ) )
        {
            axios.post(`http://localhost:8080/forms/${this.state.uuid}/castVote`,{gender:gender,age:age } ).then(
               resp => this.setState({id: resp.data.id })
            )
            console.log(this.state.id)
           console.log("age ",age," gender ",gender)
        }
     }
     handleAnswer=(e) =>{
         var array = [...this.state.singles]
         var index = array.indexOf(e)
         if(index !== -1){
             array.splice(index,1)
         }

         this.setState({singles : array} )
         console.log(this.state.singles)
     }
     handleChildChange(index,question){
       // var update = [...questions]
       // update[index] = question
       // setQuestions(update);
        //setData( {formName: formName , questions:[...questions] } )
       }
















 <div className="fill-form-container">
                <div className="fill-form-title-wrapper">
                    <div className ="fill-form-name">
                        {this.state.form.formName}
                    </div>
                </div>
                <div className="fill-form-gender-age-wrapper">
                    <div className ="fill-form-gender-pick">
                        PICK A GENDER
                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="gender-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({gender : 'FEMALE'})  } id = "FEMALE" value = "FEMALE" name = "gender-studies"/>
                        <label for="FEMALE">FEMALE</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="gender-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({gender : 'MALE'}) } value = "MALE" name = "gender-studies"/>
                        <label for="MALE">MALE</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="gender-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({gender : 'OTHER'}) } value = "OTHER" name = "gender-studies"/>
                        <label for="OTHER">OTHER</label>
                        </div>
                            
                    </div>
                    <div className ="fill-form-age-pick">
                        SELECT YOUR AGE

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input"  'UNDER_18'}) } value = "UNDER_18" name = "age-studies"/>
                        <label for="UNDER_18">UNDER_18</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({age : 'A18_25'}) } value = "A18_25" name = "age-studies"/>
                        <label for="A18_25">A18_25</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({age : 'A26_30'}) } value = "A26_30" name = "age-studies"/>
                        <label for="A26_30">A26_30</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge} onChange={ () => this.setState({age : 'A31_35'}) } value = "A31_35" name = "age-studies"/>
                        <label for="A31_35">A31_35</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({age : 'A36_40'}) } value = "A36_40" name = "age-studies"/>
                        <label for="A36_40">A36_40</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({age : 'A41_45'}) } value = "A41_45" name = "age-studies"/>
                        <label for="A41_45">A41_45</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({age : 'A46_50'}) } value = "A46_50" name = "age-studies"/>
                        <label for="A46_50">A46_50</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge}  onChange={ () => this.setState({age : 'A51_55'}) } value = "A51_55" name = "age-studies"/>
                        <label for="A51_55">A51_55</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={ this.handleGenderAge}  onChange={ () => this.setState({age : 'A56_60'}) } value = "A56_60" name = "age-studies"/>
                        <label for="A56_60">A56_60</label>
                        </div>

                        <div className = "button-gender-wrapper">
                        <input type = "radio" className="age-input" onClick={this.handleGenderAge }  onChange={ () => this.setState({age : 'OVER_60'}) } value = "OVER_60" name = "age-studies"/>
                        <label for="OVER_60">OVER_60</label>
                        </div>
                    </div>
                    
                </div>
                <div className = "fill-form-questions-wrapper">
                    {
                        this.state.questions.map(
                            question =>     
                            <div className = "fill-form-question-wrapper">
                                
                                
                                {
                                    <>
                                <div className = "question-value"> 

                                </div>
                                 <div className = "answers-wrapper">
                                    {
                                        question.type === "WRITTEN" ? 
                                        <input type="textarea"/>
                                        :
                                        question.type === "SINGLE_CHOICE" ? 
                                        <QC qst={question.question} type ="SINGLE_CHOICE" update={(idx,quest) => this.handleChildChange(idx,quest)}  
                                        data = {question.answers}/>
                                        :
                                        <QC qst={question.question} type ="MULTI_CHOICE" update={(idx,quest) => this.handleChildChange(idx,quest)}  
                                        data = {question.answers}
                                        />

                                        
                                    }
                                 </div>
                                 </>
                                }
                        </div>
                        )
                        
                        //this.state.form.questions.map(
                         //   question => <h1>h1</h1>
                        
                       // )
                    }

                </div>
            </div>
            <div className="fill-button-wrapper">
                <button >
                    SUBMIT
                </button>
            </div>





*/
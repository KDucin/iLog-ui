import { Link } from "react-router-dom"
import Footer from "../../Footer/Footer"
import UserNavbar from "../User/UserNavbar/UserNavbar"
import './Results.css'
const Result = (props) => {

    return(
        <>
        <UserNavbar/>
        <div className="result-data-container">
            <h1 style={{textAlign:"center"}}>RESULTS OF FORM</h1><br/>
            <h5 style={{textAlign:"center"}}>uuid : </h5>
            <div className="result-data-wrapper">
              <div className="result-data-row-segment">
                  Test 1
                    <div className="result-data-row-wrapper">
                        <div  className="result-data-result male">
                        <div style={{width:"41%"}} className="result-data-result female"> 
                        <div className="result-data-result other">
                         </div>
                        </div>
                        </div>
                        
                      
                    </div>
                </div>
                <div className="result-data-row-segment">
                Pytanie 2
                    <div className="result-data-row-wrapper">
                        <div  className="result-data-result male">
                        <div style={{width:"40%"}} className="result-data-result female">
                            
                        <div className="result-data-result other">
                
                         </div>
                        </div>
                        </div>
                        
                      
                    </div>
                </div>
                <div className="result-data-row-segment">
                Question 3
                    <div className="result-data-row-wrapper">
                        <div  className="result-data-result male">
                        <div style={{width:"60%"}} className="result-data-result female">
                            
                        <div className="result-data-result other">
                        <div className="result-data-result other">
                
                        </div>
                         </div>
                        </div>
                        </div>
                        
                      
                    </div>
                </div>
                <div className="result-data-row-segment">
                  Maybe
                    <div className="result-data-row-wrapper">
                        <div  className="result-data-result male">
                        <div style={{width:"10%"}} className="result-data-result female">
                            
                        <div className="result-data-result other">
                
                         </div>
                        </div>
                        </div>
                        
                      
                    </div>
                </div>
                <div className="result-data-row-segment">
                  Testing ready
                    <div className="result-data-row-wrapper">
                        <div  className="result-data-result male">
                        <div style={{width:"62%"}} className="result-data-result female">
                            
                        <div style={{width:"2%"}}className="result-data-result other">
                
                         </div>
                        </div>
                        </div>
                        
                      
                    </div>
                </div>
                    <Link to="/user/data-view/">
                    <button className="ok-go-back-button">
                        GO BACK
                    </button>
            </Link>
        </div>
       
        </div>
        <Footer/>
        </>
    )



}

export default Result

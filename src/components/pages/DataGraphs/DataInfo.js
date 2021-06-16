import { Link, useHistory } from 'react-router-dom'
import './DataInfo.css'
import Logo  from "./ankietaPrzed.svg"
import {TiExportOutline} from "react-icons/ti"
const DataInfo = (props) => {
    const history = useHistory()
    const flink = String(`http//localhost:3000/link/:${props.data.uuid}`)
    //console.log(props.data.uuid)
    return (
        //<Link to = { {pathname: '/user:userId/data-view/id', state : {data : "kotek" } } }>

        
                <div className = "data-info-container">
                    <div className = "data-info-wrapper" >
                        <img src = {Logo} alt="obraz"></img>
                    <button className = "data-view-button" onClick={() => history.push('/user:userId/data-view/id', {state : props } ) } > {props.data.formName} </button>
                    <div className = "data-clipboard-container">
                        <div className="data-clipboard-wrapper"> 
                            <input type= "text" value = {flink}>

                            </input>
                            <button className ="clipboard-button">
                                <div className ="data-icon-wrapper">
                            <TiExportOutline/>
                            </div>
                            </button>
                        </div>

                    </div>
                    </div>
                    
                    
                </div>

           // </Link>
       
    )
}
export default DataInfo
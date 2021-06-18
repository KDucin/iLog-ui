import { Link, useHistory } from 'react-router-dom'
import './DataInfo.css'
import Logo  from "./ankietaPrzed.svg"
import {TiExportOutline} from "react-icons/ti"
import { IconContext } from "react-icons"
const DataInfo = (props) => {
    const history = useHistory()
    const link = String(`localhost:3000/link/:${props.data.uuid}`)
    return ( 
        <IconContext.Provider value={{ color: 'white', size: '20px' }} >   
         <Link to={`/user/data-view/:${props.data.uuid}/result`}>
                <div className = "data-info-container">
                    <div className = "data-info-wrapper" >
                        <img src = {Logo} alt="obraz"></img>
                    <button className = "data-view-button" 
                        onClick={() => history.push('/user:userId/data-view/id')}> 
                        {props.data.formName} 
                    </button>
                    <div className = "data-clipboard-container">
                        <div className="data-clipboard-wrapper"> 
                            <input className='input-clipboard' type= "text" value = {link}/>   
                            <button className ="clipboard-button">
                                <div className ="data-icon-wrapper">
                                <TiExportOutline/>
                                </div>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </Link>
        </IconContext.Provider>
    )
}
export default DataInfo
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './UserNavbar.css';
import {ReactComponent as Logo} from './logo-navbar.svg';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
/*
*/
function UserNavbar() {
  const HandleLogout = () => {
    localStorage.clear()
    closeMobileMenu()
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}> {/* set properites of all icons */}
        <nav className='u-navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <Logo width = "75" height="75"/>
            </Link>

 
            <div className='menu-icon' onClick={handleClick}> 
              {click ? <FaTimes /> : <FaBars />}  {/* Click event Icon for menu-active aka mobile version */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* Type of menu 'full' or mobile panel*/}
              <li className='nav-item'>
              <Link to={{pathname: `/user/create` }}  className='nav-links' onClick={closeMobileMenu} >
                  CREATE NEW FORM
                </Link>
              </li>
              <li className='nav-item'>
              <Link to={{pathname: `/user/data-view`}} 
                 className='nav-links' onClick={closeMobileMenu}>
                  MY FORMS
                </Link>
              </li>
              <li className='nav-item'>
              <Link to={{pathname: `/`}} 
                 className='nav-links' onClick={HandleLogout}>
                  LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}




export default UserNavbar;

/*

*/
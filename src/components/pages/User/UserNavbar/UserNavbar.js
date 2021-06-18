import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './UserNavbar.css';
import {ReactComponent as Logo} from './logo-navbar.svg';

/*
*/
function UserNavbar() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const HandleLogout = () => {
    
   // const token = localStorage.getItem('token');
   // axios.post("http://localhost:8080/auth/logout",{"Authorization" : `Bearer ${token}` })
   // .then(resp => console.log(resp));
    localStorage.clear();
    console.log("LS Logout : "+ localStorage)
    closeMobileMenu() 
  }
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
              <Link to={{pathname: `/user` }}  className='nav-links' onClick={closeMobileMenu} >
                  PROFILE
                </Link>
              </li>
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

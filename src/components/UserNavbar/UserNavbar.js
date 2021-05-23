import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './UserNavbar.css';
import Logo from './../Navbar/logoMale-3.svg';


function UserNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}> {/* set properites of all icons */}
        <nav className='u-navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img className='navbar-svg-logo' src={Logo} />
            </Link>
            <div className='menu-icon' onClick={handleClick}> 
              {click ? <FaTimes /> : <FaBars />}  {/* Click event Icon for menu-active aka mobile version */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* Type of menu 'full' or mobile panel*/}
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  PROFILE
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
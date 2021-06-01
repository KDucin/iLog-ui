import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import Logo from './logoMale-3 copy.svg';

function Footer() { // this is the one and only Footer, no its not a foot!
  return (
    <div className='footer-container'>
        <h1>Creators of ILOG</h1>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Maria<br/>Kaczmarczyk</h2>
            {/* <h4>Documentation</h4> */}
            {/* <h4>Graphics</h4> */}
          </div>

          <div className='footer-link-items'>
             <h2>Michał<br/>Zawisza</h2>
             {/* <h4>Documentation</h4> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Cezary<br/>Przybysz</h2>
            {/* <h4>Backend</h4> */}
          </div>

          <div className='footer-link-items'>
            <h2>Aleksander<br/>Wiśniewski</h2>
            {/* <h4>Backend</h4> */}
          </div>
          <div className='footer-link-items'>
            <h2>Daniel<br/>Delegacz</h2>
            {/* <h4>Backend</h4> */}
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Kacper<br/>Ducin</h2>
            {/* <h4>Frontend</h4> */}
          </div>
          <div className='footer-link-items'>
            <h2>Daniel<br/>Markowski</h2>   
            {/* <h4>Data Bases</h4> */}
            {/* <h4>Frontend</h4> */}
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={Logo} width="79"/>
            </Link>
          </div>
          <small className='website-rights'>ILOG © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//github.com'}
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>  
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;


import React from 'react';
import './HeroSection.css';
import { Button } from './../Button/Button';
import { Link } from 'react-router-dom';

/* 
    implementation and export of Section in src/HomePage/Data.js 
*/
function HeroSection({
  lightBg, /* bool is background light */
  topLine,/* text of topline  */
  lightTopline, /* bool is topline light */
  lightText, /* bool is heading text light light */
  lightTextDesc, /* bool is description text light */
  headline, /* text of header */
  description, /* text of description */
  buttonLabel, /* bool pattern of Button class */
  img, /* source image */
  alt, /* alternative text of image */
  imgStart /* bool position of image */
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className={ lightTopline ? 'top-line' : 'top-line darktl'}>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='orange' buttonStyle='btn--primary'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

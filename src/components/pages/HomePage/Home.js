import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import {homeObjOne } from './Data'
import {homeObjTwo } from './Data'
import {homeObjThree } from './Data'
function Home() {
    return (
        <>
            <Navbar />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <Footer/>
        </>
    )
}

export default Home

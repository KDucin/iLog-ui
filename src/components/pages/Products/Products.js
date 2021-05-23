import React from 'react'
import { homeObjThree } from './Data'
import HeroSection from '../../HeroSection/HeroSection'
import Navbar from '../../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Products() {
    return (
        <>
            <Navbar/>
            <HeroSection {...homeObjThree} />
            <Footer/>
        </>
    )
}

export default Products
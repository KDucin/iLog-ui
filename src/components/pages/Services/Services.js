import React from 'react'
import { homeObjTwo} from './Data'
import HeroSection from '../../HeroSection/HeroSection'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

function Services() {
    return (
        <>
            <Navbar/>
            <HeroSection {...homeObjTwo} />
            <Footer />
        </>
    )
}

export default Services

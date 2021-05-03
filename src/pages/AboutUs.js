import React from 'react'
import AboutSection from '../components/AboutSection'
import SecvicesSection from '../components/SecvicesSection'
import Faq from '../components/FaqSection'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} animate="show" initial="hidden" exit="exit" >
            <AboutSection />
            <SecvicesSection />
            <Faq />
        </motion.div>
    )
}

export default AboutUs

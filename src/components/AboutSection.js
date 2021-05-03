import React from 'react'
import home1 from '../img/home1.png'
import {motion} from 'framer-motion'
import {About, Description,Image} from '../styles'


const AboutSection = () => {
    const title = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                duration: 5
            }
        }
    }
    const container = {
        hidden: {
            x: 100
        },
        show: {
            x: 0,
            transition: {
                duration: 2,
                staggerChildren: 0.25,
                easy: "easy-in-out",
                when: "afterChildren"
            }
        }
    }
    return (
        <About>
            <Description>
                <motion.div  
                    variants={container} 
                    initial="hidden" 
                    animate="show" 
                    className="title"
                >
                    <div className="hide">
                        <motion.h2 variants={title}>We work to make</motion.h2>
                    </div>
                    <div  className="hide">
                    <motion.h2 variants={title}> <span> dreams </span>  come </motion.h2>
                    </div>
                    <div  className="hide">
                    <motion.h2 variants={title}>true</motion.h2>
                    </div>
                    <motion.p variants={title}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</motion.p>
                    <motion.button variants={title}>Contact us</motion.button>
                </motion.div>   
                {/* end of the title */}      
            </Description>
            <Image>
                <img src={home1} alt="img"/>
            </Image> 
        </About>
    )
}

export default AboutSection

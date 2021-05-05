import React from 'react'
import home1 from '../img/home1.png'
import {motion} from 'framer-motion'
import {titleAnime, fade,photoAnimate} from '../animation'
import {About, Description,Image,} from '../styles'
import styled from 'styled-components'
import Wave from './Wave'


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
        <motion.div >
            <About>
                <Description>
                    <motion.div  className="title">
                        <Hide>
                            <motion.h2 variants={titleAnime} >We work to make</motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnime}> <span> dreams </span>  come </motion.h2>
                        </Hide>
                        <Hide>
                        <motion.h2 variants={titleAnime}>true</motion.h2>
                        </Hide>
                        <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</motion.p>
                        <motion.button variants={fade}>Contact us</motion.button>
                    </motion.div>   
                    {/* end of the title */}      
                </Description>
                <Image variants={photoAnimate}>
                    <motion.img  variants={photoAnimate} src={home1} alt="img"/>
                </Image> 
            </About>
            <Wave />    
        </motion.div>
        
    )
}

const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection

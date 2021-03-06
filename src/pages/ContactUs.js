import React from 'react'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <h1>Contact</h1>
        </motion.div>
    )
}

export default ContactUs

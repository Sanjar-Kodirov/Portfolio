import { motion } from 'framer-motion'
import React, {useState} from 'react'

const Toggle = ({children,title}) => {
    const [toggle, setToggle] = useState(true)
    
    return (
        <motion.div layout onClick={()=> setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            <div layout className="faq-line"></div>
            {toggle ? children : ""}
        </motion.div>
    )
}

export default Toggle

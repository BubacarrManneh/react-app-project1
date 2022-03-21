import React from 'react'
import { motion } from 'framer-motion'
import Classes from '../NavBar/NavBar.module.css'

const Header = ({header}) => {
    return (
        <div className={Classes.Header}>
            <motion.header initial={{scale: 3}} animate={{scale: 1}} transition={{duration: 3}}
            >{header}</motion.header>
        </div>
    )
}

export default Header

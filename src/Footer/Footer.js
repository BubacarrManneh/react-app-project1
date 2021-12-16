import React from 'react'
import Classes from './Footer.module.css'
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {motion} from 'framer-motion'

const handleURL = (url) => {
    return () => window.open(url, "_black")
}
const Footer = () => {
    return (
        <div className={Classes.Footer} id="Footer">
           <motion.div  whileHover={{scale: 1.3}} style={{margin: 10}}><FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/BubacarrManneh')}/></motion.div>
           <motion.div  whileHover={{scale: 1.3}} style={{margin: 10}}><FaLinkedin color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/bubacarr-m-manneh-full-stack-developer/')}/></motion.div>
           <motion.div  whileHover={{scale: 1.3}} style={{margin: 10}}><FaFacebook color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.facebook.com/Albuba')}/></motion.div>
        </div>
    )
}

export default Footer

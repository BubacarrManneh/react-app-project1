import React from 'react'
import Classes from './NavBar.module.css'
import { motion } from 'framer-motion'

const NavBar = () => {
    return (
        <div className={Classes.NavBar}> 
            <div className={Classes.name}>
                <motion.header initial={{scale: 3}} animate={{scale: 1}} transition={{duration: 3}}
                
                >Bubacarr</motion.header>
            </div>
       
           <nav>  
               <ul>
                   <li>
                       <a href='/'>Home</a>
                   </li>
                   <li>
                       <a href='/#'>Projects</a>
                   </li>
                   <li>
                       <a href='/#Skill'>Skills</a>
                   </li>
                   <li>
                       <a href='/#Videos'>Videos</a>
                   </li>
                   <li>
                       <a href='/#About'>About</a>
                   </li>
                   <li>
                       <a href='/#Footer'>Contact</a>
                   </li>
               </ul>
           </nav>
        </div>
    )
}

export default NavBar

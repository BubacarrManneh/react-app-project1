import React from 'react'
import Classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={Classes.NavBar}> 
            <div className={Classes.name}>
                <header >Bubacarr</header>
            </div>
       
           <nav>  
               <ul>
                   <li>
                       <a href='/'>Home</a>
                   </li>
                   <li>
                       <a href='/#Skill'>Skills</a>
                   </li>
                   <li>
                       <a href='/#Videos'>Muulti-Media</a>
                   </li>
                   <li>
                       <a href='/#About'>ABout</a>
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

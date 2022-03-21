import React from 'react'

import Classes from './Home.module.css'
import Code from './../Img/Code.svg'
import {motion} from 'framer-motion'
import World from './../Img/World.svg'
import Wave from './Wave'

const Home = () => {
    return (
        <div className={Classes.Home} id="Home">
            <Wave />
              <div className={Classes.Container}>
                  <h1 className={Classes.Hello}>Hello, I'm Bubacarr</h1>
                  <h1>Welcome to my Website</h1>
              </div>
              <img className={Classes.Code} src={Code} alt="cannot be loaded"></img>
              <motion.img className={Classes.World} src={World} alt="cannot be loaded"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 1.6}}
              ></motion.img>
        </div>
    )
}

export default Home

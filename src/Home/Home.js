import React from 'react'
import Classes from './Home.module.css'
import Code from './../Img/Code.svg'
import World from './../Img/World.svg'

const Home = () => {
    return (
        <div className={Classes.Home}>
              <div className={Classes.Container}>
                  <h1 className={Classes.Hello}>Hello, World</h1>
                  <h1>Welcome to my Website</h1>
              </div>
              <img className={Classes.Code} src={Code} alt="cannot be loaded"></img>
              <img className={Classes.World} src={World} alt="cannot be loaded"></img>
        </div>
    )
}

export default Home

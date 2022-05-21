import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Classes from './About.module.css'
import Photo from '../Img/Photo.jpg'
const About = () => {
    return (
        <div className={Classes.AboutMe} id="About">
            <PageHeader title={'About Me'}/>
            <div className={Classes.Container}>
                <div className={Classes.Text}>
                    <h1>Hello I'm Bubacarr Manneh</h1>
                    <p>
                        I am a FullStack developer with diversed skillset in programming. I have passion for web development and have developed some web apps and websites.
                        I built this simple React responsive website as one of my projects aside my traneeship pragram. 
                    </p>
                </div>
                <div className={Classes.Profile}>
                    <img src={Photo} alt="fails to load" className={Classes.Image}></img>
                </div>
            </div>
        </div>
    )
}

export default About

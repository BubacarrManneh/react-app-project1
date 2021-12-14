import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Classes from './About.module.css'
import Photo from '../Img/Photo.jpg'
const About = () => {
    return (
        <div className={Classes.AboutMe}>
            <PageHeader title={'About Me'}/>
            <div className={Classes.Container}>
                <div className={Classes.Text}>
                    <h1>Hello I'm Bubacarr M Manneh</h1>
                    <p>
                        I am a FullStack developer from Gambia based in The Netherlands. I am an Integrify International Academy Alumni 2022, with skills in different programming languages and frameworks.
                        I built this simple React responsive website as one of my projects i do ouside of school projects, for the purpose of self study. 
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

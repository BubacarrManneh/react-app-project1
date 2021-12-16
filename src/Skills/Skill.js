import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Classes from './Skills.module.css'
import CodeThink from '../Img/CodeThink.svg'

const Skill = () => {
    const titleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '5px', paddingTop: '15px'}
    const frontendSkills = <ul>
        <li style={titleStyle}>FRONTEND</li>
        <li>Ajax - JavaSCript - Express - NodeJs - React - Redux</li>
        <li>Bootstrap - CSS3 - HTML5 - Material-Ui</li>
    </ul>
    const backendSkills = <ul>
        <li style={titleStyle}>BACKEND</li>
        <li>MongoDB - MySQL - PostgreSql - Databases  - PHP</li>
        <li> Docker - AWS</li>
    </ul>
    const otherSkills = <ul>
        <li style={titleStyle}>OTHERS</li>
        <li>AWS -Docker - Git - GitHub Action -Bash Scripting</li>
        <li>Bash Scripting</li>
    </ul>
    const totalSkills = [frontendSkills, backendSkills, otherSkills]

    return (
        <div className={Classes.Skills}  id="Skill">
              <PageHeader title={'Skills'}/>
            <p>
                    I made this collection of the pragramming languages, libraries and frameworks i have been working with before, during and after my training at Integrify as a Fullstack developer.   
                </p>
              <div className={Classes.Container} >
                  <img src={CodeThink} alt='Code cannot be loaded'></img>
                 {totalSkills.map(skills => {
                     return (
                         <div className={Classes.List}>
                             {skills}
                         </div>
                     )
                 })}
              </div>
        </div>
    )
}

export default Skill

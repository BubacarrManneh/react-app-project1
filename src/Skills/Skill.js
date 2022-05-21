import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Classes from './Skills.module.css'
import CodeThink from '../Img/CodeThink.svg'

const Skill = () => {
    const titleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '5px', paddingTop: '15px'}
    const frontendSkills = (
      <ul>
        <li style={titleStyle}>FRONTEND</li>
        <li>Ajax-HTML5 - JavaSCript - JQuery</li>
        <li>React - Redux - TypeScript</li>
        <li>Bootstrap - CSS3 - Material-Ui - Tailwindcss</li>
      </ul>
    );
    const backendSkills = (
      <ul>
        <li style={titleStyle}>BACKEND</li>
        <li>MongoDB - Express - MySQL - NodeJs</li>
        <li> PHP - PostgreSQL - Rest API</li>
      </ul>
    );
    const DevOpsSkills = (
      <ul>
        <li style={titleStyle}>DevOps</li>
        <li>Bash Scripting - Docker Container</li>
        <li>Git - GitHub Action</li>
      </ul>
    );

    const Clouds = (
      <ul>
        <li style={titleStyle}>Clouds</li>
        <li> AWS - Google Clouds</li>
      </ul>
    );
    const totalSkills = [frontendSkills, backendSkills, DevOpsSkills , Clouds]

    return (
        <div className={Classes.Skills}  id="Skill">
              <PageHeader title={'Skills'}/>
                <p>
                    I made this collection of the pragramming languages, libraries and frameworks i have been working with to build this project.   
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

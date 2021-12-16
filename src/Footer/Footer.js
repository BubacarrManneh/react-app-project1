import React from 'react'
import Classes from './Footer.module.css'
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';

const handleURL = (url) => {
    return () => window.open(url, "_black")
}
const Footer = () => {
    return (
        <div className={Classes.Footer} id="Footer">
           <FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/BubacarrManneh')}/>
           <FaLinkedin color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/bubacarr-m-manneh-full-stack-developer/')}/>
           <FaFacebook color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.facebook.com/Albuba')}/>
        </div>
    )
}

export default Footer

import React,{useState} from 'react'
import {CgMenuRound} from 'react-icons/cg'
import {RiCloseCircleLine} from 'react-icons/ri'
import Classes from './NavBar.module.css'
import NavLinks from './NavLinks'

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    const HamburgerIcon = <CgMenuRound className={Classes.Hamburger} size="50px" color='white' onClick={(() => setOpen(!open))} />
    const closeIcon = <RiCloseCircleLine className={Classes.Hamburger} size="50px" color="white" onClick={(() => setOpen(!open))} />
    // const closeMobileMenu = setOpen(false) 
    return (
      <nav className={Classes.MobileNavbar}>
        {open ? closeIcon : HamburgerIcon}
        {open &&  <NavLinks /> }
      </nav>
    );
}

export default MobileNav

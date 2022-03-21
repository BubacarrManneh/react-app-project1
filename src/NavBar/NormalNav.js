
import React from 'react'
import NavLinks from './NavLinks'
import Classes from './NavBar.module.css'

const NormalNav = () => {
    return (
        <nav>
            <nav className={Classes.NormalNavbar}>
                <NavLinks />
            </nav>
        </nav>
    )
}

export default NormalNav

import React from "react";
import Classes from './NavBar.module.css'
import MobileNavbar from "./MobileNav";
import NormalNavbar from "./NormalNav.js";

const NavBar = () => {
    return (
      <div className={Classes.NavBar}>
        <NormalNavbar />
        <MobileNavbar />
      </div>
    );
}

export default NavBar

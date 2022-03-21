import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Classes from "./NavBar.module.css";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const NavLinks = () => {
  return (
    <div className={Classes.NavLinks}>
      <Header header={"Bubacarr"} />
      <nav>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>

          <li>
            <a href="/#Skill">Skills</a>
          </li>
          <li>
            <a href="/#Videos">Videos</a>
          </li>
          <li>
            <a href="/#About">About</a>
          </li>
          <li>
            <a href="/#Footer">Contact</a>
          </li>
          <li>
            <a href="/#Projects">Projects</a>
          </li>
        </ul>
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/Projects" exact element={<Projects />} /> Project
            </Routes>
          </Suspense>
        </>
      </nav>
    </div>
  );
};

export default NavLinks;

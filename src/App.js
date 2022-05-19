import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


import About from "./About/About";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
// import MultiMedia from "./MultiMedia/MultiMedia";
import NavBar from './NavBar/NavBar'
import Skills from "./Skills/Skill";
import MobileNavbar from "./NavBar/MobileNav";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MobileNavbar/>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

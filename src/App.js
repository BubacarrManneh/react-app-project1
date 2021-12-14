import './App.css';
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import MultiMedia from './MultiMedia/MultiMedia'
import NavBar from './NavBar/NavBar'
import Skills from './Skills/Skill'



function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <MultiMedia />
     <Skills />
     <About />
     <Contact />
    </div>
  );
}

export default App;

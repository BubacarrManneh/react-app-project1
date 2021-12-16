import './App.css';
import './index.css'

import About from './About/About'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import MultiMedia from './MultiMedia/MultiMedia'
import NavBar from './NavBar/NavBar'
import Skills from './Skills/Skill'

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <About />
     <Skills />
     <MultiMedia />
     <Footer />
    </div>
  );
}

export default App;

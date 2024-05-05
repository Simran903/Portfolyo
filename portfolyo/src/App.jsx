import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Certifications from './pages/certifications/Certifications'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Timeline from './pages/timeline/Timeline'

function App() {


  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications/>
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'
import Home from './components/Home/index.jsx'
import About from './components/About/index.jsx'
import Contact from './components/Contact/index.jsx'
import Project from './components/Project/index.jsx'
import Blog from './components/Blog/index.jsx'
import './components/SideBar/index.css'
import './components/Layout/index.css'
import './components/Home/index.css'
import './components/Home/Logo/index.css'
import './components/About/index.css'
import './components/Contact/index.scss'
import './components/Contact/ContactForm.css'
import './components/AnimatedLetters/index.scss'
import 'loaders.css/src/animations/pacman.scss'
import './query.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}

export default App

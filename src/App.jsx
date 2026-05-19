import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Accessories from './pages/Accessories.jsx'
import Catalogue from './pages/Catalogue.jsx'
import About from './pages/About.jsx'
import Locations from './pages/Locations.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

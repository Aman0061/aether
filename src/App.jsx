import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectsPage from './components/ProjectsPage'
import StudioPage from './components/StudioPage'
import ServicesPage from './components/ServicesPage'
import Journal from './components/Journal'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App


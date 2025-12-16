import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'

// Глобальные компоненты
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Страницы
import Home from './components/Home'
import ProjectsPage from './components/ProjectsPage'
import StudioPage from './components/StudioPage'
import ServicesPage from './components/ServicesPage'
import Journal from './components/Journal'
import Contact from './components/Contact'

// Хук для скролла вверх при переходе по страницам
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Обертка для глобальных стилей и Sticky Footer */}
      <div className="min-h-screen flex flex-col bg-[#F9F8F6] text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black">
        
        {/* Navbar всегда сверху */}
        <Navbar />

        {/* Контент страниц растягивается, заполняя пространство */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* ВОТ ЭТА СТРОКА ВАЖНА: */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/journal" element={<Journal />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* Заглушка для 404 */}
            <Route path="*" element={<div className="h-[50vh] flex items-center justify-center">Страница не найдена</div>} />
          </Routes>
        </main>

        {/* Footer всегда снизу */}
        <Footer />
        
      </div>
    </Router>
  )
}

export default App
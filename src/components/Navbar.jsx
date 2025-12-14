import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
            : ''
        }`}
      >
        <Link
          to="/"
          className={`text-2xl tracking-[0.2em] font-light z-50 transition-colors ${
            isScrolled || !isHomePage
              ? 'text-black'
              : 'mix-blend-difference text-white'
          }`}
        >
          AETHER
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-12 text-xs tracking-[0.15em] font-light uppercase transition-colors ${
            isScrolled || !isHomePage
              ? 'text-black'
              : 'mix-blend-difference text-white'
          }`}
        >
          <Link
            to="/"
            className={`nav-link hover:opacity-50 transition-opacity ${
              location.pathname === '/'
                ? 'opacity-100 font-normal'
                : isHomePage
                ? 'hover:opacity-70'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Главная
          </Link>
          <Link
            to="/projects"
            className={`nav-link hover:opacity-50 transition-opacity ${
              location.pathname === '/projects'
                ? 'opacity-100 font-normal'
                : isHomePage
                ? 'hover:opacity-70'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Проекты
          </Link>
          <Link
            to="/studio"
            className={`nav-link hover:opacity-50 transition-opacity ${
              location.pathname === '/studio'
                ? 'opacity-100 font-normal'
                : isHomePage
                ? 'hover:opacity-70'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Студия
          </Link>
          <Link
            to="/services"
            className={`nav-link hover:opacity-50 transition-opacity ${
              location.pathname === '/services'
                ? 'opacity-100 font-normal'
                : isHomePage
                ? 'hover:opacity-70'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Услуги
          </Link>
          <Link
            to="/journal"
            className={`nav-link hover:opacity-50 transition-opacity ${
              location.pathname === '/journal'
                ? 'opacity-100 font-normal'
                : isHomePage
                ? 'hover:opacity-70'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Журнал
          </Link>
          <Link
            to="/contact"
            className={`nav-link hover:opacity-50 transition-opacity ${
              location.pathname === '/contact'
                ? 'opacity-100 font-normal'
                : isHomePage
                ? 'hover:opacity-70'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Контакты
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden z-50 transition-colors ${
            isScrolled || !isHomePage
              ? 'text-black'
              : 'mix-blend-difference text-white'
          }`}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 stroke-[1px]" />
          ) : (
            <Menu className="w-6 h-6 stroke-[1px]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 ${
          isHomePage ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black'
        } z-40 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`text-3xl font-serif italic transition-colors ${
              location.pathname === '/'
                ? isHomePage
                  ? 'text-white'
                  : 'text-black'
                : isHomePage
                ? 'text-white hover:text-neutral-400'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Главная
          </Link>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={`text-3xl font-serif italic transition-colors ${
              location.pathname === '/projects'
                ? isHomePage
                  ? 'text-white'
                  : 'text-black'
                : isHomePage
                ? 'text-white hover:text-neutral-400'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Проекты
          </Link>
          <Link
            to="/studio"
            onClick={handleLinkClick}
            className={`text-3xl font-serif italic transition-colors ${
              location.pathname === '/studio'
                ? isHomePage
                  ? 'text-white'
                  : 'text-black'
                : isHomePage
                ? 'text-white hover:text-neutral-400'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Студия
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className={`text-3xl font-serif italic transition-colors ${
              location.pathname === '/services'
                ? isHomePage
                  ? 'text-white'
                  : 'text-black'
                : isHomePage
                ? 'text-white hover:text-neutral-400'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Услуги
          </Link>
          <Link
            to="/journal"
            onClick={handleLinkClick}
            className={`text-3xl font-serif italic transition-colors ${
              location.pathname === '/journal'
                ? isHomePage
                  ? 'text-white'
                  : 'text-black'
                : isHomePage
                ? 'text-white hover:text-neutral-400'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Журнал
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`text-3xl font-serif italic transition-colors ${
              location.pathname === '/contact'
                ? isHomePage
                  ? 'text-white'
                  : 'text-black'
                : isHomePage
                ? 'text-white hover:text-neutral-400'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Контакты
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar


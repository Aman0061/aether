import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { navTranslations } from '../translations/nav'

const NAV_ITEMS = [
  { path: '/', key: 'home' },
  { path: '/services', key: 'services' },
  // { path: '/studio', key: 'studio' }, // скрыто пока
  { path: '/projects', key: 'projects' },
  { path: '/contact', key: 'contact' },
  { path: 'https://www.instagram.com/vimana__architects/', label: 'Instagram' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = navTranslations[lang]
  
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(prev => {
        if (prev !== scrolled) return scrolled
        return prev
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  const navClasses = `fixed w-full z-50 transition-all duration-300 px-6 md:px-12 flex justify-between items-center bg-white ${
    isScrolled ? 'py-4 shadow-sm' : 'py-6'
  }`

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path
    let classes = 'nav-link transition-all duration-300 text-sm tracking-[0.15em] uppercase font-bold '
    
    if (isActive) {
      return classes + 'text-black opacity-100'
    }
    return classes + 'text-neutral-500 hover:text-black'
  }

  const getLabel = (item) => item.key ? t[item.key] : item.label

  const LangSwitcher = ({ className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <button 
        onClick={() => setLang('RU')}
        className={`transition-colors duration-300 uppercase font-bold tracking-[0.15em] text-sm ${
          lang === 'RU' ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        RU
      </button>
      <span className="text-neutral-300 text-sm font-light">/</span>
      <button 
        onClick={() => setLang('EN')}
        className={`transition-colors duration-300 uppercase font-bold tracking-[0.15em] text-sm ${
          lang === 'EN' ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        EN
      </button>
    </div>
  )

  return (
    <>
      <nav className={navClasses}>
        {/* ЛЕВАЯ ЧАСТЬ: Логотип + Телефон */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 z-50">
          <Link
            to="/"
            className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-black transition-colors uppercase"
          >
            VIMANA
          </Link>

          <a
            href="https://wa.me/996551968818"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-xl font-light text-black hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            +(996) 551 968 818
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {NAV_ITEMS.map((item) => (
            item.path.startsWith('http') ? (
               <a 
                 key={item.label || item.key}
                 href={item.path}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={getLinkClasses(item.path)}
               >
                 {getLabel(item)}
               </a>
            ) : (
              <Link
                key={item.key}
                to={item.path}
                className={getLinkClasses(item.path)}
              >
                {getLabel(item)}
              </Link>
            )
          ))}

          {/* ЯЗЫКОВОЙ ПЕРЕКЛЮЧАТЕЛЬ (DESKTOP) */}
          {/* Добавляем небольшой отступ слева, чтобы отделить от меню */}
          <div className="pl-4 border-l border-neutral-200 ml-4 h-4 flex items-center">
             <LangSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-black"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8 stroke-[1.5px]" />
          ) : (
            <Menu className="w-8 h-8 stroke-[1.5px]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } 
        justify-start pt-32 pb-10 overflow-y-auto`} // <--- ИЗМЕНЕНИЯ ЗДЕСЬ
      >
        <div className="flex flex-col space-y-6 text-center items-center min-h-min">
          {NAV_ITEMS.map((item) => (
             item.path.startsWith('http') ? (
                <a
                  key={item.label || item.key}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                >
                  {getLabel(item)}
                </a>
             ) : (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl md:text-3xl font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === item.path
                      ? 'text-black'
                      : 'text-neutral-400 hover:text-black'
                  }`}
                >
                  {getLabel(item)}
                </Link>
             )
          ))}
          
          {/* ЯЗЫКОВОЙ ПЕРЕКЛЮЧАТЕЛЬ (MOBILE) */}
          <div className="pt-8">
             <LangSwitcher className="scale-125" />
          </div>

          <a href="https://wa.me/996551968818" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl font-light text-black pb-8">
             +(996) 551 968 818
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
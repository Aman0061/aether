import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { path: '/', label: 'Главная' },
  { path: '/projects', label: 'Проекты' },
  { path: '/studio', label: 'Студия' },
  { path: '/services', label: 'Услуги' },
  { path: '/contact', label: 'Контакты' },
  { path: 'https://instagram.com', label: 'Instagram' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Добавили состояние для языка ('RU' по умолчанию)
  const [lang, setLang] = useState('RU')
  
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

  // Компонент переключателя (чтобы не дублировать код)
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
            className="text-xl md:text-2xl tracking-[0.1em] font-bold text-black transition-colors uppercase"
          >
            VIMANA
          </Link>

          <a
            href="tel:+996551968818"
            className="text-sm md:text-lg font-light text-black hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            +(996) 551 968 818
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {NAV_ITEMS.map((item) => (
            item.path.startsWith('http') ? (
               <a 
                 key={item.label}
                 href={item.path}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={getLinkClasses(item.path)}
               >
                 {item.label}
               </a>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={getLinkClasses(item.path)}
              >
                {item.label}
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
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center items-center">
          {NAV_ITEMS.map((item) => (
             item.path.startsWith('http') ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
             ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === item.path
                      ? 'text-black'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
             )
          ))}
          
          {/* ЯЗЫКОВОЙ ПЕРЕКЛЮЧАТЕЛЬ (MOBILE) */}
          <div className="pt-8">
             <LangSwitcher className="scale-125" /> {/* Чуть увеличили для удобства нажатия пальцем */}
          </div>

          <a href="tel:+996551968818" className="mt-4 text-xl font-light text-black">
             +(996) 551 968 818
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
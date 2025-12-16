import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// 1. Выносим данные. Легко добавить новую ссылку в будущем.
const NAV_ITEMS = [
  { path: '/', label: 'Главная' },
  { path: '/projects', label: 'Проекты' },
  { path: '/studio', label: 'Студия' },
  { path: '/services', label: 'Услуги' },
  // { path: '/journal', label: 'Журнал' },
  { path: '/contact', label: 'Контакты' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  const isHomePage = location.pathname === '/'

  // 2. Оптимизация скролла. Не обновляем стейт лишний раз.
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      // Обновляем стейт, только если значение изменилось
      setIsScrolled(prev => {
        if (prev !== scrolled) return scrolled
        return prev
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Блокировка скролла
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    // Важно: cleanup function на случай размонтирования компонента с открытым меню
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  // 3. Вычисляемые стили (чтобы убрать кашу из JSX)
  // Темная тема (черный текст, белый фон) нужна, если мы скроллим ИЛИ мы не на главной
  const isDarkTheme = isScrolled || !isHomePage

  // Базовые классы для навбара
  const navBackgroundClass = isDarkTheme 
    ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' 
    : 'bg-transparent py-6'

  // Цвет основных элементов (Лого и иконки)
  const baseTextColorClass = isDarkTheme 
    ? 'text-black' 
    : 'mix-blend-difference text-white'

  // Логика стилей для ссылок (активная/неактивная)
  const getLinkClasses = (path) => {
    const isActive = location.pathname === path
    
    // Базовые стили
    let classes = 'nav-link transition-all duration-300 '
    
    if (isActive) {
      return classes + 'opacity-100 font-normal'
    }
    
    // Стили при наведении и неактивном состоянии
    if (isHomePage && !isDarkTheme) {
      // Прозрачная шапка на главной
      return classes + 'hover:opacity-70 text-white'
    } else {
      // Белая шапка или внутренние страницы
      return classes + 'text-neutral-500 hover:text-black hover:opacity-100'
    }
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${navBackgroundClass}`}
      >
        <Link
          to="/"
          className={`text-2xl tracking-[0.2em] font-light z-50 transition-colors ${baseTextColorClass}`}
        >
          AETHER
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-12 text-xs tracking-[0.15em] font-light uppercase`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={getLinkClasses(item.path)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden z-50 transition-colors ${baseTextColorClass}`}
          aria-label="Toggle menu"
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
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
           // Здесь я упростил логику фона: обычно меню имеет один стиль. 
           // Если хочешь сохранить смену фона на главной, оставь как было.
           // Но для консистентности лучше делать меню всегда одним цветом (например, белым или черным).
           isHomePage ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-serif italic transition-colors ${
                location.pathname === item.path
                  ? 'opacity-100' // Активная ссылка
                  : 'opacity-50 hover:opacity-100' // Неактивная
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
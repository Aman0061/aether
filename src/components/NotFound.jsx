import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { navTranslations } from '../translations/nav'

const NotFound = () => {
  const { lang } = useLanguage()
  const t = navTranslations[lang]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-8xl font-serif font-light text-neutral-300 mb-4">404</h1>
      <p className="text-xl md:text-2xl font-light text-neutral-600 mb-12 text-center">
        {t.pageNotFound}
      </p>
      <Link
        to="/"
        className="text-sm font-medium uppercase tracking-[0.15em] border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
      >
        {t.backToHome}
      </Link>
    </div>
  )
}

export default NotFound

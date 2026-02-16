import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { homeTranslations } from '../translations/home'

const HomeWelcome = () => {
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = homeTranslations[lang]

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-black leading-tight mb-6">
          {t.block4Title}
        </h2>
        <p className="text-2xl md:text-4xl font-serif italic text-neutral-600">
          {t.block4Subtitle}
        </p>
      </div>
    </section>
  )
}

export default HomeWelcome

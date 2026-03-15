import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { homeTranslations } from '../translations/home'

const HomeTagline = () => {
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = homeTranslations[lang]

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-24 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        <div className="md:col-span-5 fade-in-up">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/images/8.jpg"
              alt="Vimana Architecture"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
        <div className="md:col-span-7 fade-in-up delay-100 space-y-6">
          <p className="text-2xl md:text-4xl font-serif font-medium text-black leading-tight">
            {t.block3Line1}
          </p>
          <p className="text-2xl md:text-4xl font-serif font-medium text-black leading-tight">
            {t.block3Line2}
          </p>
          <p className="text-2xl md:text-4xl font-serif font-medium text-black leading-tight">
            {t.block3Line3}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeTagline

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { homeTranslations } from '../translations/home'

const HomeAbout2 = () => {
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = homeTranslations[lang]

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-7 fade-in-up">
            <p className="text-neutral-800 text-lg md:text-xl font-normal leading-relaxed mb-8 text-balance">
              {t.block2Text1}
            </p>
            <p className="text-neutral-800 text-lg md:text-xl font-normal leading-relaxed max-w-lg text-balance">
              {t.block2Text2}
            </p>
          </div>
          <div className="md:col-span-5 fade-in-up delay-100">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/C1.jpg"
                alt="Vimana Design"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout2

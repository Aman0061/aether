import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { homeTranslations } from '../translations/home'

const HomeAbout = () => {
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
          <div className="aspect-[3/4] overflow-hidden relative group">
            <img
              src="/images/B3.jpg"
              alt="Vimana Studio"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 text-sm font-bold tracking-widest text-white mix-blend-difference">
              EST. 2024
            </div>
          </div>
        </div>

        <div className="md:col-span-7 fade-in-up delay-100">
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 text-black leading-tight">
            {t.block1Title}
          </h2>
          <p className="text-neutral-800 text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-10 text-balance">
            {t.block1Text}
          </p>
          <Link
            to="/projects"
            className="inline-block text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
          >
            {t.ourProjects}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout

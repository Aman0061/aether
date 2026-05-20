import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { homeTranslations } from '../translations/home'

const Hero = () => {
  const heroRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = homeTranslations[lang]

  return (
    <header ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image - из папки Фоновые для главной страницы */}
      <div className="absolute inset-0">
        <img
          src="/images/Contemporary house 340/k1.jpg"
          alt="Luxury Living Room Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <p className="fade-in-up text-base md:text-lg tracking-[0.3em] uppercase mb-6 font-bold text-shadow-sm">
          {t.heroSubtitle}
        </p>

        <h1 className="fade-in-up text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-tight drop-shadow-lg delay-100">
          {t.heroTitle} <br />
          <span className="">{t.heroTitleItalic}</span>
        </h1>

        <div className="fade-in-up mt-12 delay-200">
          <a
            href="#projects"
            className="inline-block border-2 border-white px-10 py-4 text-xs md:text-sm tracking-[0.25em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            {t.heroCta}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero

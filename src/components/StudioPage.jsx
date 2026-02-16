import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { studioTranslations } from '../translations/studio'

const StudioPage = () => {
  const studioRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = studioTranslations[lang]

  return (
    <section ref={studioRef} className="pt-32 md:pt-48 pb-24 min-h-screen bg-white">
      
      {/* Manifesto / Intro */}
      <div className="px-6 md:px-12 mb-32 md:mb-48 max-w-7xl mx-auto">
        <div className="text-center md:text-left fade-in-up">
          {/* Label: text-xs + font-bold + text-black */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
            {t.philosophy}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-balance text-black">
            {t.headline}{' '}
            <span className="italic text-neutral-600">{t.headlineItalic}</span> {t.headlineEnd}
          </h1>
          
          <div className="mt-12 md:max-w-3xl md:ml-auto">
            <p className="text-xl font-normal text-neutral-900 leading-relaxed">
              {t.body}
            </p>
          </div>
        </div>
      </div>

      {/* Founder Block */}
      <div className="mb-32 md:mb-48 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-[1800px] mx-auto">
          <div className="md:col-span-5 md:col-start-2 fade-in-up hover-trigger">
            <div className="img-container aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                alt="Elena Volkova Portrait"
                className="w-full h-full object-cover img-zoom grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-8 px-6 md:px-0 fade-in-up delay-100">
            {/* Quote: font-medium + black */}
            <blockquote className="text-2xl md:text-3xl font-serif font-medium italic leading-relaxed mb-8 text-black">
              {t.quote}
            </blockquote>
            <div className="space-y-2">
              <h3 className="text-base uppercase tracking-[0.2em] font-bold text-black">
                {t.founderName}
              </h3>
              <p className="text-sm text-neutral-600 tracking-wide font-medium">
                {t.founderRole}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="bg-neutral-50 py-24 mb-32 md:mb-48 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Stat 1 */}
          <div className="fade-in-up">
            {/* Number: font-bold + tracking-tighter (как в Services) */}
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              12
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              {t.yearsDesign}
            </span>
          </div>

          {/* Stat 2 */}
          <div className="fade-in-up delay-100">
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              85
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              {t.completedProjects}
            </span>
          </div>

          {/* Stat 3 */}
          <div className="fade-in-up delay-200">
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              14
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              {t.awards}
            </span>
          </div>

          {/* Stat 4 */}
          <div className="fade-in-up delay-300">
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              3
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              {t.continents}
            </span>
          </div>

        </div>
      </div>

      {/* Values & Process */}
      <div className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 fade-in-up">
          {/* Header: bold + black */}
          <h2 className="text-4xl font-serif font-medium italic text-black mb-6">
            {t.materialsTitle}
          </h2>
          <div className="w-16 h-[2px] bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Col 1 */}
          <div className="space-y-8 md:mt-24">
            <div className="fade-in-up hover-trigger">
              <div className="img-container aspect-square mb-8">
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop"
                  alt="Stone Texture"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              {/* Title: font-bold */}
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">{t.tactility}</h3>
              <p className="text-base text-neutral-800 leading-relaxed">
                {t.tactilityDesc}
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-8">
            <div className="fade-in-up delay-100 hover-trigger">
              <div className="img-container aspect-[3/4] mb-8">
                <img
                  src="https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=800&auto=format&fit=crop"
                  alt="Light Shadow"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">{t.luminosity}</h3>
              <p className="text-base text-neutral-800 leading-relaxed">
                {t.luminosityDesc}
              </p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-8 md:mt-12">
            <div className="fade-in-up delay-200 hover-trigger">
              <div className="img-container aspect-square mb-8">
                <img
                  src="/images/wood.jpg"
                  alt="Wood Detail"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">{t.legacy}</h3>
              <p className="text-base text-neutral-800 leading-relaxed">
                {t.legacyDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Atmosphere / Team */}
      <div className="px-4 md:px-0 mb-32">
        <div className="max-w-[1800px] mx-auto relative group cursor-pointer fade-in-up">
          <div className="img-container aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
              alt="Team Working"
              className="w-full h-full object-cover img-zoom grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-10">
            {/* Label: font-bold */}
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">{t.behindScenes}</p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium italic drop-shadow-md">{t.atelier}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioPage
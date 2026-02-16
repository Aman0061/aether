import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { servicesTranslations } from '../translations/services'

const CATEGORY_IMAGES = [
  '/images/8.jpg',
  '/images/B3.jpg',
  '/images/C1.jpg',
  '/images/residence.avif',
]

const ServicesPage = () => {
  const servicesRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = servicesTranslations[lang]

  const [openAccordion, setOpenAccordion] = useState(null)

  const categories = [
    {
      id: 'viz',
      title: t.vizTitle,
      subCount: 2,
      subs: [
        { title: t.vizExterior, items: null },
        { title: t.vizInterior, items: null },
      ],
    },
    {
      id: 'int',
      title: t.intDesignTitle,
      subCount: 2,
      subs: [
        { title: t.intDesignResidential, label: t.intDesignResidentialLabel, items: t.intResidentialItems },
        { title: t.intDesignHoreca, label: t.intDesignHorecaLabel, items: t.intHorecaItems },
      ],
    },
    {
      id: 'arch',
      title: t.archTitle,
      subCount: 2,
      subs: [
        { title: t.archResidential, items: null, archList: true },
        { title: t.archHoreca, items: null, archList: true },
      ],
    },
    {
      id: 'supervision',
      title: t.supervisionTitle,
      subCount: 0,
      subs: [],
    },
  ]

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const renderArchList = () => (
    <div className="space-y-5">
      <div>
        <h4 className="font-medium text-neutral-800 text-sm uppercase tracking-wider mb-2">{t.archSectionAR}</h4>
        <ul className="space-y-1.5">
          {t.archARItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" strokeWidth={2} />
              <span className="text-neutral-600 text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-neutral-800 text-sm uppercase tracking-wider mb-2">{t.archSectionKR}</h4>
        <ul className="space-y-1.5">
          {t.archKRItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" strokeWidth={2} />
              <span className="text-neutral-600 text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-neutral-800 text-sm uppercase tracking-wider mb-2">{t.archSectionEng}</h4>
        <ul className="space-y-1.5">
          {t.archEngItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" strokeWidth={2} />
              <span className="text-neutral-600 text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="space-y-1.5">
        {t.archOtherItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" strokeWidth={2} />
            <span className="text-neutral-600 text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section
      ref={servicesRef}
      className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col bg-white"
    >
      <header className="mb-16 md:mb-20 flex flex-col items-center md:items-start fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 mb-6">
          {t.pageTitle}
        </h1>
        <p className="text-base md:text-lg font-normal text-neutral-600 max-w-2xl leading-relaxed text-left">
          {t.pageDesc}
        </p>
      </header>

      {/* Services grid: каждая карточка + контент в одной колонке */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 fade-in-up delay-100">
        {categories.map((cat, index) => (
          <div key={cat.id} className="flex flex-col gap-4">
            {/* Карточка */}
            <div
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                openAccordion === index ? 'ring-2 ring-amber-600 ring-offset-2 shadow-lg shadow-amber-900/10' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={CATEGORY_IMAGES[index]}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-1">
                    {cat.title}
                  </h2>
                  {cat.subCount > 0 && (
                    <p className="text-sm text-white/80 font-light tracking-wide">
                      {cat.subCount} {t.directions}
                    </p>
                  )}
                  <div
                    className={`mt-4 inline-flex items-center gap-2 text-white/90 text-sm font-medium tracking-wider uppercase transition-transform duration-300 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" strokeWidth={2} />
                    {t.learnMore}
                  </div>
                </div>
              </div>
            </div>

            {/* Контент сразу под карточкой */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openAccordion === index ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {openAccordion === index && (
                <div className="py-8 md:py-10 px-6 md:px-8 bg-amber-50/50 rounded-lg border-2 border-amber-200 border-l-4 border-l-amber-500">
                  <div className="flex flex-col gap-6">
                    <div className="space-y-6">
                      {cat.subs.length === 0 ? (
                        <p className="text-base text-neutral-600 leading-relaxed">{t.supervisionDesc}</p>
                      ) : (
                        cat.subs.map((sub, subIdx) => (
                          <div key={subIdx} className="border-l-2 border-neutral-300 pl-5">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-medium text-base text-neutral-900">{sub.title}</h3>
                              {sub.label && (
                                <span className="text-xs font-normal text-neutral-500 uppercase tracking-widest">
                                  {sub.label}
                                </span>
                              )}
                            </div>
                            {sub.archList ? (
                              renderArchList()
                            ) : sub.items ? (
                              <>
                                <p className="text-xs font-normal text-neutral-500 uppercase tracking-wider mb-2">{t.projectScope}</p>
                                <ul className="space-y-1.5">
                                  {sub.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" strokeWidth={2} />
                                      <span className="text-neutral-600 text-[15px]">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : null}
                          </div>
                        ))
                      )}
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={CATEGORY_IMAGES[index]}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-24 md:mt-32 flex flex-col items-center md:items-start fade-in-up delay-200">
        <h3 className="text-2xl md:text-3xl font-serif font-light text-neutral-800 mb-10">{t.cta}</h3>
        <Link
          to="/contact"
          className="inline-block text-sm font-medium uppercase tracking-[0.15em] border border-neutral-300 px-10 py-4 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 rounded-sm"
        >
          {t.ctaButton}
        </Link>
      </section>
    </section>
  )
}

export default ServicesPage

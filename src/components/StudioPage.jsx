import { useEffect, useRef } from 'react'
import Navbar from './Navbar'

const StudioPage = () => {
  const studioRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = studioRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black min-h-screen">
      <Navbar />
      <main ref={studioRef} className="pt-32 md:pt-48 pb-24">
        {/* Manifesto / Intro */}
        <section className="px-6 md:px-12 mb-32 md:mb-48 max-w-7xl mx-auto">
          <div className="text-center md:text-left fade-in-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-8">
              Философия
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight text-balance text-neutral-900">
              Мы верим, что пространство — это не просто контейнер для объектов, а{' '}
              <span className="italic text-neutral-500">холст для света</span> и тишины.
            </h1>
            <div className="mt-12 md:max-w-2xl md:ml-auto">
              <p className="text-lg font-light text-neutral-600 leading-relaxed">
                Наш подход редуктивен. Мы убираем лишнее, чтобы раскрыть сущностную красоту формы и
                материала. Каждая линия продумана, каждая текстура выбрана, чтобы вызвать чувство
                спокойствия и постоянства в хаотичном мире.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Block */}
        <section className="mb-32 md:mb-48 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-[1800px] mx-auto">
            <div className="md:col-span-5 md:col-start-2 fade-in-up hover-trigger">
              <div className="img-container aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Founder Portrait"
                  className="w-full h-full object-cover img-zoom grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-8 px-6 md:px-0 fade-in-up delay-100">
              <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-neutral-800">
                "Истинная роскошь — это способность слышать собственные мысли. Мы проектируем
                пространства, которые дают эту привилегию."
              </blockquote>
              <div className="space-y-1">
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Елена Волкова</h3>
                <p className="text-xs text-neutral-400 tracking-wide font-light">
                  Основатель и главный архитектор
                </p>
              </div>
              <div className="mt-8 text-4xl text-neutral-400 font-serif italic opacity-60">
                Елена Волкова
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="bg-neutral-50 py-24 mb-32 md:mb-48 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="fade-in-up">
              <span className="block text-5xl md:text-7xl font-serif font-light mb-2 text-neutral-900">
                12
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Лет дизайна
              </span>
            </div>
            <div className="fade-in-up delay-100">
              <span className="block text-5xl md:text-7xl font-serif font-light mb-2 text-neutral-900">
                85
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Завершенных проектов
              </span>
            </div>
            <div className="fade-in-up delay-200">
              <span className="block text-5xl md:text-7xl font-serif font-light mb-2 text-neutral-900">
                14
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Международных наград
              </span>
            </div>
            <div className="fade-in-up delay-300">
              <span className="block text-5xl md:text-7xl font-serif font-light mb-2 text-neutral-900">
                3
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Континента
              </span>
            </div>
          </div>
        </section>

        {/* Values & Process (Materiality Grid) */}
        <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 fade-in-up">
            <h2 className="text-3xl font-serif italic text-neutral-900 mb-4">
              Процесс работы с материалами
            </h2>
            <div className="w-12 h-[1px] bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {/* Col 1 */}
            <div className="space-y-12 md:mt-24">
              <div className="fade-in-up hover-trigger">
                <div className="img-container aspect-square mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1616627561950-9f746e33018e?q=80&w=800&auto=format&fit=crop"
                    alt="Stone Texture"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <h3 className="text-lg font-serif italic mb-2">Тактильность</h3>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Мы выбираем материалы не по тому, как они выглядят, а по тому, как они ощущаются.
                  Натуральный камень, сырой шелк и необработанная древесина заземляют наши
                  пространства в реальности.
                </p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-12">
              <div className="fade-in-up delay-100 hover-trigger">
                <div className="img-container aspect-[3/4] mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=800&auto=format&fit=crop"
                    alt="Light and Shadow"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <h3 className="text-lg font-serif italic mb-2">Светимость</h3>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Свет — наш основной строительный материал. Мы лепим его, чтобы создать глубину,
                  драму и ритм в течение дня.
                </p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="space-y-12 md:mt-12">
              <div className="fade-in-up delay-200 hover-trigger">
                <div className="img-container aspect-square mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1517146783983-41333812066e?q=80&w=800&auto=format&fit=crop"
                    alt="Wood Texture"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <h3 className="text-lg font-serif italic mb-2">Наследие</h3>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Мы чтим историю архитектуры, принимая будущее. Каждая деталь — это диалог между
                  старым и новым.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Atmosphere / Team */}
        <section className="px-4 md:px-0 mb-32">
          <div className="max-w-[1800px] mx-auto relative group cursor-pointer fade-in-up">
            <div className="img-container aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
                alt="Team Working"
                className="w-full h-full object-cover img-zoom grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white mix-blend-difference z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-2">За кулисами</p>
              <h2 className="text-3xl md:text-5xl font-serif italic">Ателье</h2>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#F9F8F6] pt-24 pb-12 px-6 md:px-12 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-neutral-900">
                Давайте создадим что-то
                <br />
                <span className="italic">вечное.</span>
              </h2>
              <a
                href="mailto:hello@aether.com"
                className="text-xl md:text-2xl border-b border-neutral-300 pb-2 hover:border-black transition-colors"
              >
                hello@aether.com
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm font-light">
              <div>
                <h5 className="uppercase tracking-[0.2em] mb-6 text-neutral-400 text-xs">Студия</h5>
                <p className="mb-1">Москва</p>
                <p className="mb-1">Россия</p>
                <p>+7 (999) 000-00-00</p>
              </div>
              <div>
                <h5 className="uppercase tracking-[0.2em] mb-6 text-neutral-400 text-xs">Социальные сети</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-neutral-500 transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-500 transition-colors">
                      Pinterest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-500 transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400 border-t border-neutral-200 pt-8">
            <p>&copy; 2024 Aether Studio. Все права защищены.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-neutral-600">
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-600">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default StudioPage


import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'

const Journal = () => {
  const journalRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('Все истории')

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

    const elements = journalRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const filters = ['Все истории', 'Тренды', 'Архитектура', 'Образ жизни', 'Интервью']

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black min-h-screen">
      <Navbar />
      <main ref={journalRef} className="pt-24 pb-0 min-h-screen">
        {/* Hero: Featured Article */}
        <section className="px-6 md:px-12 mb-24 max-w-[1600px] mx-auto fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 relative group cursor-pointer">
              <div className="img-container aspect-[16/10] w-full">
                <img
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop"
                  alt="Featured Article"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </div>
            <div className="md:col-span-4 md:pl-8">
              <div className="flex flex-col h-full justify-center">
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-6">
                  Избранная история
                </span>
                <h1 className="text-4xl md:text-5xl font-serif italic text-neutral-900 leading-tight mb-6">
                  Возвращение ар-деко в современный минимализм
                </h1>
                <p className="text-sm font-light text-neutral-500 leading-relaxed mb-8 max-w-sm">
                  Исследуем, как геометрические узоры и богатые материалы возвращаются в самые
                  строгие пространства, создавая новое тепло.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-xs tracking-widest uppercase border-b border-black pb-1 w-max hover:opacity-60 transition-opacity"
                >
                  Читать статью <ArrowRight className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <div className="px-6 md:px-12 mb-16 border-b border-neutral-100 pb-8 sticky top-20 z-30 bg-white/95 backdrop-blur-sm fade-in-up delay-100">
          <div className="max-w-[1600px] mx-auto flex gap-8 md:gap-12 overflow-x-auto no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs uppercase tracking-[0.15em] shrink-0 pb-1 transition-colors ${
                  activeFilter === filter
                    ? 'text-black border-b border-black'
                    : 'text-neutral-400 hover:text-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Grid (Masonry-style) */}
        <section className="px-6 md:px-12 mb-32 max-w-[1600px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {/* Article 1 */}
            <article className="break-inside-avoid group cursor-pointer fade-in-up delay-100">
              <div className="img-container aspect-[3/4] mb-6 w-full bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1507133750069-775b0f4a6265?q=80&w=1200&auto=format&fit=crop"
                  alt="Lighting Design"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                    Советы
                  </span>
                  <span className="text-[10px] text-neutral-400 font-serif italic">12 окт</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900 leading-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  Свет как скульптура
                </h2>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Почему сам светильник становится столь же важным, как и освещение, которое он
                  обеспечивает.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="break-inside-avoid group cursor-pointer fade-in-up delay-150">
              <div className="img-container aspect-square mb-6 w-full bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop"
                  alt="Wabi Sabi"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                    Философия
                  </span>
                  <span className="text-[10px] text-neutral-400 font-serif italic">8 окт</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900 leading-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  Ваби-саби: искусство несовершенства
                </h2>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Принятие красоты естественного старения материалов.
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article className="break-inside-avoid group cursor-pointer fade-in-up delay-200">
              <div className="img-container aspect-[16/9] mb-6 w-full bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Sustainable Materials"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                    Материалы
                  </span>
                  <span className="text-[10px] text-neutral-400 font-serif italic">24 сен</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900 leading-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  Будущее тактильно
                </h2>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Отход от гладких поверхностей к сильно текстурированным тканям и стенам.
                </p>
              </div>
            </article>

            {/* Article 4 */}
            <article className="break-inside-avoid group cursor-pointer fade-in-up delay-100">
              <div className="img-container aspect-[2/3] mb-6 w-full bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Interview"
                  className="w-full h-full object-cover img-zoom grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                    Интервью
                  </span>
                  <span className="text-[10px] text-neutral-400 font-serif italic">15 сен</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900 leading-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  В беседе: Елена Волкова
                </h2>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Наш основатель обсуждает вызовы проектирования для тишины в шумном мире.
                </p>
              </div>
            </article>

            {/* Article 5 */}
            <article className="break-inside-avoid group cursor-pointer fade-in-up delay-150">
              <div className="img-container aspect-square mb-6 w-full bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1200&auto=format&fit=crop"
                  alt="Color Theory"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                    Тренды
                  </span>
                  <span className="text-[10px] text-neutral-400 font-serif italic">2 сен</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900 leading-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  Земляные тона 2025
                </h2>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Почему терракота и шалфей заменяют прохладные серые тона прошлого десятилетия.
                </p>
              </div>
            </article>

            {/* Article 6 */}
            <article className="break-inside-avoid group cursor-pointer fade-in-up delay-200">
              <div className="img-container aspect-[16/9] mb-6 w-full bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop"
                  alt="Apartment Tour"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                    Образ жизни
                  </span>
                  <span className="text-[10px] text-neutral-400 font-serif italic">28 авг</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900 leading-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  Городское убежище
                </h2>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Как создать ощущение простора в ограниченном пространстве городской квартиры.
                </p>
              </div>
            </article>
          </div>

          {/* Load More */}
          <div className="mt-24 text-center">
            <button className="text-[10px] uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              Загрузить старые истории
            </button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#111111] py-20 px-6 md:px-12 text-white">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-serif italic mb-4">Aether Edit</h3>
              <p className="text-neutral-400 text-sm font-light max-w-md">
                Присоединяйтесь к нашей кураторской рассылке для получения ежемесячных инсайтов о
                дизайне, прогнозов трендов и обновлений студии. Без лишнего, только суть.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex flex-col md:flex-row gap-8 items-end md:items-center">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Ваш email адрес"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600"
                />
              </div>
              <button className="shrink-0 text-xs uppercase tracking-[0.2em] border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all duration-500">
                Подписаться
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 text-left">
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
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">
            &copy; 2024 Aether Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Journal


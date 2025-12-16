import { useScrollAnimation } from '../hooks/useScrollAnimation'

const StudioPage = () => {
  // Используем наш хук (одна строка вместо 20)
  const studioRef = useScrollAnimation()

  return (
    // Убрали <Navbar /> и <footer>, так как они в App.js
    // Убрали лишние обертки, оставляем семантический контент
    <section ref={studioRef} className="pt-32 md:pt-48 pb-24 min-h-screen">
      
      {/* Manifesto / Intro */}
      <div className="px-6 md:px-12 mb-32 md:mb-48 max-w-7xl mx-auto">
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
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="bg-neutral-50 py-24 mb-32 md:mb-48 border-y border-neutral-100">
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
      </div>

      {/* Values & Process (Materiality Grid) */}
      <div className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 fade-in-up">
          <h2 className="text-3xl font-serif italic text-neutral-900 mb-4">
            Процесс работы с материалами
          </h2>
          <div className="w-12 h-[1px] bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Col 1: Тактильность (Вставил правильное фото) */}
          <div className="space-y-12 md:mt-24">
            <div className="fade-in-up hover-trigger">
              <div className="img-container aspect-square mb-6">
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop"
                  alt="Stone and Wood Texture"
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

          {/* Col 2: Светимость */}
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

          {/* Col 3: Наследие */}
          <div className="space-y-12 md:mt-12">
            <div className="fade-in-up delay-200 hover-trigger">
              <div className="img-container aspect-square mb-6">
                <img
                  src="/images/wood.jpg"
                  alt="Wood Detail"
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
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white mix-blend-difference z-10">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2">За кулисами</p>
            <h2 className="text-3xl md:text-5xl font-serif italic">Ателье</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioPage
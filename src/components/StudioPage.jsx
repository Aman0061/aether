import { useScrollAnimation } from '../hooks/useScrollAnimation'

const StudioPage = () => {
  const studioRef = useScrollAnimation()

  return (
    <section ref={studioRef} className="pt-32 md:pt-48 pb-24 min-h-screen bg-white">
      
      {/* Manifesto / Intro */}
      <div className="px-6 md:px-12 mb-32 md:mb-48 max-w-7xl mx-auto">
        <div className="text-center md:text-left fade-in-up">
          {/* Label: text-xs + font-bold + text-black */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Философия
          </p>
          
          {/* Headline: font-medium + text-black */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-balance text-black">
            Мы верим, что пространство — это не просто контейнер для объектов, а{' '}
            <span className="italic text-neutral-600">холст для света</span> и тишины.
          </h1>
          
          <div className="mt-12 md:max-w-3xl md:ml-auto">
            {/* Body Text: text-xl (крупно) + normal weight + text-neutral-900 (почти черный) */}
            <p className="text-xl font-normal text-neutral-900 leading-relaxed">
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
            {/* Quote: font-medium + black */}
            <blockquote className="text-2xl md:text-3xl font-serif font-medium italic leading-relaxed mb-8 text-black">
              "Истинная роскошь — это способность слышать собственные мысли. Мы проектируем
              пространства, которые дают эту привилегию."
            </blockquote>
            <div className="space-y-2">
              {/* Name: text-base + font-bold */}
              <h3 className="text-base uppercase tracking-[0.2em] font-bold text-black">
                Елена Волкова
              </h3>
              {/* Role: text-sm + font-medium + darker gray */}
              <p className="text-sm text-neutral-600 tracking-wide font-medium">
                Основатель и главный архитектор
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
              Лет дизайна
            </span>
          </div>

          {/* Stat 2 */}
          <div className="fade-in-up delay-100">
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              85
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Завершенных проектов
            </span>
          </div>

          {/* Stat 3 */}
          <div className="fade-in-up delay-200">
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              14
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Наград
            </span>
          </div>

          {/* Stat 4 */}
          <div className="fade-in-up delay-300">
            <span className="block text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
              3
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Континента
            </span>
          </div>

        </div>
      </div>

      {/* Values & Process */}
      <div className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 fade-in-up">
          {/* Header: bold + black */}
          <h2 className="text-4xl font-serif font-medium italic text-black mb-6">
            Процесс работы с материалами
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
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">Тактильность</h3>
              {/* Text: text-base + darker color */}
              <p className="text-base text-neutral-800 leading-relaxed">
                Мы выбираем материалы не по тому, как они выглядят, а по тому, как они ощущаются.
                Натуральный камень, сырой шелк и необработанная древесина заземляют наши
                пространства в реальности.
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
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">Светимость</h3>
              <p className="text-base text-neutral-800 leading-relaxed">
                Свет — наш основной строительный материал. Мы лепим его, чтобы создать глубину,
                драму и ритм в течение дня.
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
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">Наследие</h3>
              <p className="text-base text-neutral-800 leading-relaxed">
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
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-10">
            {/* Label: font-bold */}
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">За кулисами</p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium italic drop-shadow-md">Ателье</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioPage
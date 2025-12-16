import { Link } from 'react-router-dom' // Импорт Link
import { useScrollAnimation } from '../hooks/useScrollAnimation' // Импорт нашего хука

const Hero = () => {
  const heroRef = useScrollAnimation()

  return (
    <header ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/mainbackground.jpg"
          alt="Luxury Living Room Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <p className="fade-in-up text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-light">
          Архитектурные интерьеры
        </p>
        <h1 className="fade-in-up text-5xl md:text-7xl lg:text-9xl font-serif font-light tracking-tight leading-tight mix-blend-overlay opacity-90 delay-100">
          Тишина & <br />
          <span className="italic">Симметрия</span>
        </h1>
        <div className="fade-in-up mt-12 delay-200">
          {/* Здесь можно использовать Link, если 'projects' это отдельная страница, 
              или <a> если это якорь на этой же странице. Оставим Link для универсальности. */}
          <a
            href="#projects" 
            className="inline-block border border-white/30 px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          >
            Смотреть портфолио
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
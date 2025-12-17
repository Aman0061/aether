import { Link } from 'react-router-dom' 
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const heroRef = useScrollAnimation()

  return (
    <header ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/mainbackground.jpg"
          alt="Luxury Living Room Interior"
          // Убрали brightness-[0.85], лучше затемним оверлеем, так чище
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient Overlay - Сделали чуть темнее (black/40), чтобы белый текст горел */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        
        {/* 1. СУБТИТР: Стал жирным (font-bold) и чуть крупнее */}
        <p className="fade-in-up text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-bold text-shadow-sm">
          Архитектурные интерьеры
        </p>

        {/* 2. ЗАГОЛОВОК: 
            - Убрали mix-blend-overlay (чтобы был чисто белым)
            - font-light заменили на font-medium (средняя жирность, для Serif это выглядит дорого и плотно)
            - Добавили drop-shadow-lg (тень, чтобы отделить от фото) 
        */}
        <h1 className="fade-in-up text-5xl md:text-7xl lg:text-9xl font-serif font-medium tracking-tight leading-tight drop-shadow-lg delay-100">
          Тишина & <br />
          <span className="italic">Симметрия</span>
        </h1>

        <div className="fade-in-up mt-12 delay-200">
          {/* 3. КНОПКА: Сделали рамку ярче (border-white) и текст жирным (font-bold) */}
          <a
            href="#projects" 
            className="inline-block border-2 border-white px-10 py-4 text-xs md:text-sm tracking-[0.25em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Смотреть портфолио
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
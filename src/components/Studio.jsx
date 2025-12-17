import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Studio = () => {
  const studioRef = useScrollAnimation()

  return (
    <section
      id="studio"
      ref={studioRef}
      className="py-24 md:py-40 px-6 md:px-24 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        
        {/* IMAGE COLUMN */}
        <div className="md:col-span-5 fade-in-up">
          <div className="aspect-[3/4] overflow-hidden relative group">
            <img
              src="/images/B3.jpg"
              alt="Detail of chair"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Сделали надпись жирной (font-bold) */}
            <div className="absolute bottom-4 left-4 text-sm font-bold tracking-widest text-white mix-blend-difference">
              EST. 2024
            </div>
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className="md:col-span-7 fade-in-up delay-100">
          {/* ЗАГОЛОВОК:
              - font-light -> font-medium (стал плотнее)
              - Италичный текст стал темнее (text-neutral-600 вместо 500), чтобы не терялся
          */}
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 text-black leading-tight">
            Мы создаем пространства, которые <span className="italic text-neutral-600">восхищают</span>.
          </h2>

          {/* ПАРАГРАФ:
              - Убран font-light (стал обычным/нормальным весом)
              - Цвет text-neutral-600 -> text-neutral-800 (почти черный, высокая читаемость)
          */}
          <p className="text-neutral-800 text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-10 text-balance">
            Наша философия основана на убеждении, что роскошь — это не изобилие, а отсутствие шума.
            Мы создаем среды, которые служат убежищем для современного ума.
          </p>

          {/* ССЫЛКА:
              - Добавил font-bold (жирная)
              - Border стал толще (border-2) для заметности
          */}
          <Link
            to="/studio"
            className="inline-block text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
          >
            Наша история
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Studio
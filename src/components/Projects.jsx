import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const projectsRef = useScrollAnimation()

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-12 px-4 md:px-12 bg-white"
    >
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-16 md:mb-24 px-2">
        <div>
          {/* Subtitle: Сделали жирным и чуть крупнее */}
          <span className="block text-sm font-bold tracking-[0.2em] text-neutral-500 mb-3 uppercase">
            Избранные работы
          </span>
          {/* Title: Увеличили до 4xl и сделали плотнее (font-medium) */}
          <h3 className="text-4xl md:text-5xl font-serif font-medium italic text-black">
            Кураторские пространства
          </h3>
        </div>
        {/* Link: Жирный шрифт */}
        <Link
          to="/projects"
          className="hidden md:block text-sm font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity border-b-2 border-transparent hover:border-black pb-1"
        >
          Все проекты
        </Link>
      </div>

      {/* Project 1 */}
      <Link to="/projects" className="block group cursor-pointer mb-24 md:mb-40 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9 img-zoom-container overflow-hidden">
            <img
              src="/images/C1.jpg"
              alt="Project 1"
              className="w-full h-[60vh] md:h-[80vh] object-cover img-zoom"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-end h-full pb-4">
            {/* Tag: text-[10px] -> text-xs + font-bold + text-black */}
            <span className="text-xs font-bold tracking-[0.2em] text-black mb-3 uppercase">
              Москва, Россия
            </span>
            {/* Title: text-3xl -> text-4xl + font-medium */}
            <h4 className="text-3xl md:text-4xl font-serif font-medium mb-4 transition-all text-black">
              Каменный дом
            </h4>
            {/* Desc: text-sm -> text-base + убрали font-light + цвет темнее */}
            <p className="text-base text-neutral-800 leading-relaxed mb-6">
              Монолитная резиденция с использованием сырого бетона и восстановленной древесины.
            </p>
            {/* Link: text-xs -> text-sm + font-bold */}
            <span className="inline-flex items-center text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
              Смотреть проект <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        </div>
      </Link>

      {/* Project 2 (Alternate Layout) */}
      <Link to="/projects" className="block group cursor-pointer mb-24 md:mb-40 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3 md:col-start-2 flex flex-col justify-start h-full pt-12 md:text-right order-2 md:order-1">
            
            <span className="text-xs font-bold tracking-[0.2em] text-black mb-3 uppercase">
              Санкт-Петербург
            </span>
            
            <h4 className="text-3xl md:text-4xl font-serif font-medium mb-4  transition-all text-black">
              Авеню Монтень
            </h4>
            
            <p className="text-base text-neutral-800 leading-relaxed mb-6">
              Реставрация квартиры в стиле Османа XIX века.
            </p>
            
            <div className="flex md:justify-end">
              <span className="inline-flex items-center text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                Смотреть проект <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
          <div className="md:col-span-8 md:col-start-5 img-zoom-container overflow-hidden order-1 md:order-2">
            <img
              src="/images/8.jpg"
              alt="Project 2"
              className="w-full h-[60vh] md:h-[70vh] object-cover img-zoom"
            />
          </div>
        </div>
      </Link>

      {/* Project 3 */}
      <Link to="/projects" className="block group cursor-pointer mb-12 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 img-zoom-container overflow-hidden">
            <img
              src="/images/xdf.jpg"
              alt="Project 3"
              className="w-full h-[50vh] object-cover img-zoom"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            
            <span className="text-xs font-bold tracking-[0.2em] text-black mb-3 uppercase">
              Сочи, Россия
            </span>
            
            <h4 className="text-3xl md:text-4xl font-serif font-medium mb-4 transition-all text-black">
              Горное убежище
            </h4>
            
            <p className="text-base text-neutral-800 leading-relaxed mb-6">
              Минималистичная альпийская архитектура с акцентом на панорамные виды.
            </p>
            
            <span className="inline-flex items-center text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
              Смотреть проект <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        </div>
      </Link>

      {/* Mobile Button */}
      <div className="text-center mt-24 md:hidden">
        <Link
          to="/projects"
          className="text-sm font-bold uppercase tracking-[0.2em] border-2 border-neutral-200 px-8 py-4 block w-full hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          Все проекты
        </Link>
      </div>
    </section>
  )
}

export default Projects
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const projectsRef = useRef(null)

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

    const elements = projectsRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-12 px-4 md:px-12 bg-white"
    >
      <div className="flex justify-between items-end mb-16 md:mb-24 px-2">
        <div>
          <span className="block text-xs tracking-[0.2em] text-neutral-400 mb-2 uppercase">
            Избранные работы
          </span>
          <h3 className="text-3xl font-serif italic text-neutral-900">Кураторские пространства</h3>
        </div>
        <a
          href="/projects"
          className="hidden md:block text-xs uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
        >
          Все проекты
        </a>
      </div>

      {/* Project 1 */}
      <div className="group cursor-pointer mb-24 md:mb-40 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9 img-zoom-container overflow-hidden">
            <img
              src="/images/thirdback.avif"
              alt="Project 1"
              className="w-full h-[60vh] md:h-[80vh] object-cover img-zoom"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-end h-full pb-4">
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">
              Москва, Россия
            </span>
            <h4 className="text-3xl font-serif mb-4 group-hover:italic transition-all">
              Каменный дом
            </h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
              Монолитная резиденция с использованием сырого бетона и восстановленной древесины для
              создания бесшовной связи с окружающим лесом.
            </p>
            <span className="inline-flex items-center text-xs tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
              Смотреть проект <ArrowRight className="w-3 h-3 ml-2" />
            </span>
          </div>
        </div>
      </div>

      {/* Project 2 (Alternate Layout) */}
      <div className="group cursor-pointer mb-24 md:mb-40 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3 md:col-start-2 flex flex-col justify-start h-full pt-12 md:text-right order-2 md:order-1">
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">
              Санкт-Петербург, Россия
            </span>
            <h4 className="text-3xl font-serif mb-4 group-hover:italic transition-all">
              Авеню Монтень
            </h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
              Реставрация квартиры в стиле Османа XIX века, сочетающая историческую лепнину с
              современной минималистичной мебелью.
            </p>
            <div className="flex md:justify-end">
              <span className="inline-flex items-center text-xs tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                Смотреть проект <ArrowRight className="w-3 h-3 ml-2" />
              </span>
            </div>
          </div>
          <div className="md:col-span-8 md:col-start-5 img-zoom-container overflow-hidden order-1 md:order-2">
            <img
              src="/images/fourth.avif"
              alt="Project 2"
              className="w-full h-[60vh] md:h-[70vh] object-cover img-zoom"
            />
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group cursor-pointer mb-12 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 img-zoom-container overflow-hidden">
            <img
              src="/images/fivth.avif"
              alt="Project 3"
              className="w-full h-[50vh] object-cover img-zoom"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">
              Сочи, Россия
            </span>
            <h4 className="text-3xl font-serif mb-4 group-hover:italic transition-all">
              Горное убежище
            </h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
              Минималистичная альпийская архитектура с акцентом на панорамные виды и натуральные
              материалы.
            </p>
            <span className="inline-flex items-center text-xs tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
              Смотреть проект <ArrowRight className="w-3 h-3 ml-2" />
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mt-24 md:hidden">
        <a
          href="/projects"
          className="text-xs uppercase tracking-[0.2em] border border-neutral-200 px-8 py-4 block w-full hover:bg-neutral-900 hover:text-white transition-colors"
        >
          Все проекты
        </a>
      </div>
    </section>
  )
}

export default Projects


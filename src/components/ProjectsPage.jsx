import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projectsData } from '../data/projects' // <--- Импорт данных

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const projectsRef = useScrollAnimation(activeFilter)

  const filters = ['All', 'Architecture', 'living', 'kitchen', 'bathroom']

  const labels = {
    'All': 'Все дизайны',
    'Architecture': 'Архитектура',
    'living': 'Гостиные',
    'kitchen': 'Кухня',
    'bathroom': 'Санузел',
  }

  // Фильтрация данных из импортированного файла
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData
    return projectsData.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section ref={projectsRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      <header className="mb-24 md:mb-32 flex flex-col items-center md:items-start fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 mb-6 italic">
          Наши проекты
        </h1>
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
          Архив работ 2023 — 2025
        </p>
      </header>

      <div className="flex flex-wrap gap-8 md:gap-12 mb-16 text-xs tracking-[0.15em] uppercase text-neutral-400 fade-in-up delay-100">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`transition-all duration-300 ${
              activeFilter === filter
                ? 'text-black border-b border-black pb-1'
                : 'hover:text-black border-b border-transparent pb-1'
            }`}
          >
            {labels[filter] || filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`project-card group cursor-pointer fade-in-up ${project.delay} ${project.offset || ''}`}
            >
              <div className={`img-container ${project.aspect} w-full mb-6 bg-neutral-100 overflow-hidden relative`}>
                <img
                  src={project.preview} // Используем поле preview из data/projects.js
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none' 
                    e.target.parentElement.classList.add('bg-neutral-200')
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </div>
              </div>

              <div className="flex justify-between items-baseline border-t border-neutral-100 pt-4">
                <h2 className="text-xl md:text-2xl font-serif font-light text-neutral-800 group-hover:italic transition-all duration-300">
                  {project.title}
                </h2>
                <span className="text-xs text-neutral-400 font-light tracking-wide">
                  {project.area}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 font-sans">{project.location}</p>
            </Link>
          ))
        ) : (
          <div className="col-span-2 py-20 text-center fade-in-up">
            <p className="text-neutral-400 font-serif italic text-xl">
              В этой категории пока нет проектов.
            </p>
          </div>
        )}
      </div>

      <div className="mt-32 text-center fade-in-up">
        <button className="text-xs tracking-[0.2em] uppercase border border-neutral-200 px-12 py-4 hover:bg-black hover:text-white transition-all duration-500">
          Загрузить еще
        </button>
      </div>
    </section>
  )
}

export default ProjectsPage
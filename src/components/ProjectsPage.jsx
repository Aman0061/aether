import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { projectsData } from '../data/projects'
import { projectsTranslations } from '../translations/projects'
import { projectDataTranslations } from '../translations/projectData'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('interior')
  const projectsRef = useScrollAnimation(activeFilter)
  const { lang } = useLanguage()
  const t = projectsTranslations[lang]

  const filters = ['interior', 'Architecture']

  const labels = {
    'interior': t.interiorDesign,
    'Architecture': t.architecture,
  }

  const getProjectTitle = (project) => projectDataTranslations[project.id]?.title?.[lang] ?? project.title
  const getProjectLocation = (project) => projectDataTranslations[project.id]?.location?.[lang] ?? project.location

  // Фильтрация данных из импортированного файла
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Architecture') {
      return projectsData.filter((project) => project.category === 'Architecture')
    }
    // Дизайн интерьера — всё кроме архитектуры
    return projectsData.filter((project) => project.category !== 'Architecture')
  }, [activeFilter])

  return (
    <section ref={projectsRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      <header className="mb-12 md:mb-16 flex flex-col items-center md:items-start fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 mb-6">
          {t.ourProjects}
        </h1>
      </header>

      <div className="flex flex-wrap gap-8 md:gap-12 mb-10 text-sm md:text-base tracking-[0.15em] uppercase text-neutral-400 fade-in-up delay-100">
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`project-card group cursor-pointer fade-in-up ${project.delay}`}
            >
              <div className={`img-container aspect-[4/3] w-full mb-4 bg-neutral-100 overflow-hidden relative`}>
                <img
                  src={project.preview} // Используем поле preview из data/projects.js
                  alt={getProjectTitle(project)}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none' 
                    e.target.parentElement.classList.add('bg-neutral-200')
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {labels[project.category] || project.category}
                </div>
              </div>

              <div className="flex justify-between items-baseline border-t border-neutral-100 pt-4">
                <h2 className="text-lg md:text-xl font-serif font-light text-neutral-800 group-hover:italic transition-all duration-300">
                  {getProjectTitle(project)}
                </h2>
                <span className="text-xs text-neutral-400 font-light tracking-wide">
                  {project.area}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 font-sans">{getProjectLocation(project)}</p>
            </Link>
          ))
        ) : (
          <div className="col-span-2 py-20 text-center fade-in-up">
            <p className="text-neutral-400 font-serif italic text-xl">
              {t.noProjects}
            </p>
          </div>
        )}
      </div>

    </section>
  )
}

export default ProjectsPage
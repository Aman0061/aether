import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { homeTranslations } from '../translations/home'
import { projectsTranslations } from '../translations/projects'
import { projectDataTranslations } from '../translations/projectData'
import { projectsData } from '../data/projects'

const Projects = () => {
  const projectsRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = homeTranslations[lang]
  const pt = projectsTranslations[lang]
  const featured = projectsData.filter((p) => p.category === 'interior').slice(0, 3)
  const getTitle = (p) => projectDataTranslations[p?.id]?.title?.[lang] ?? p?.title
  const getLocation = (p) => projectDataTranslations[p?.id]?.location?.[lang] ?? p?.location

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-12 px-4 md:px-12 bg-white"
    >
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-16 md:mb-24 px-2">
        <div>
          <span className="block text-sm font-bold tracking-[0.2em] text-neutral-500 mb-3 uppercase">
            {t.featuredWorks}
          </span>
          <h3 className="text-4xl md:text-5xl font-serif font-medium italic text-black">
            {t.curatedSpaces}
          </h3>
        </div>
        <Link
          to="/projects"
          className="hidden md:block text-sm font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity border-b-2 border-transparent hover:border-black pb-1"
        >
          {t.allProjects}
        </Link>
      </div>

      {featured.map((project, idx) => {
        const layouts = [
          { grid: 'items-end', img: 'md:col-span-9', text: 'md:col-span-3 justify-end pb-4', imgOrder: '', textOrder: '', textAlign: '' },
          { grid: 'items-start', img: 'md:col-span-8 md:col-start-5 order-1 md:order-2', text: 'md:col-span-3 md:col-start-2 pt-12 md:text-right order-2 md:order-1', imgOrder: '', textOrder: '', textAlign: 'flex md:justify-end' },
          { grid: 'items-center', img: 'md:col-span-6', text: 'md:col-span-5 md:col-start-8', imgOrder: '', textOrder: '', textAlign: '' },
        ]
        const L = layouts[idx]
        return (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={`block group cursor-pointer fade-in-up ${idx === 2 ? 'mb-12' : 'mb-24 md:mb-40'}`}
          >
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${L.grid}`}>
              <div className={`img-zoom-container overflow-hidden ${L.img}`}>
                <img
                  src={project.preview}
                  alt={getTitle(project)}
                  className={`w-full object-cover img-zoom ${idx === 0 ? 'h-[60vh] md:h-[80vh]' : idx === 1 ? 'h-[60vh] md:h-[70vh]' : 'h-[50vh]'}`}
                />
              </div>
              <div className={`flex flex-col ${L.text}`}>
                <span className="text-xs font-bold tracking-[0.2em] text-black mb-3 uppercase">
                  {getLocation(project)}
                </span>
                <h4 className="text-3xl md:text-4xl font-serif font-medium mb-4 transition-all text-black">
                  {getTitle(project)}
                </h4>
                <p className="text-base text-neutral-800 leading-relaxed mb-6">
                  {pt[`project${idx + 1}Desc`]}
                </p>
                <div className={L.textAlign}>
                  <span className="inline-flex items-center text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                    {t.viewProject} <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}

      {/* Mobile Button */}
      <div className="text-center mt-24 md:hidden">
        <Link
          to="/projects"
          className="text-sm font-bold uppercase tracking-[0.2em] border-2 border-neutral-200 px-8 py-4 block w-full hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          {t.allProjects}
        </Link>
      </div>
    </section>
  )
}

export default Projects
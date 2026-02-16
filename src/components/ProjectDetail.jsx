import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { projectsData } from '../data/projects'
import { projectsTranslations } from '../translations/projects'
import { projectDataTranslations } from '../translations/projectData'
import Lightbox from './Lightbox'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projectsData.find((p) => p.id === parseInt(id))
  const detailRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = projectsTranslations[lang]
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const getProjectTitle = (p) => projectDataTranslations[p?.id]?.title?.[lang] ?? p?.title
  const getProjectLocation = (p) => projectDataTranslations[p?.id]?.location?.[lang] ?? p?.location

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">{t.projectNotFound}</h1>
        <Link to="/projects" className="border-b border-black">{t.backToProjects}</Link>
      </div>
    )
  }

  return (
    <main ref={detailRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      <Link 
        to="/projects" 
        className="inline-flex items-center text-xs uppercase tracking-widest mb-16 hover:opacity-50 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {t.allProjects}
      </Link>

      <header className="mb-24 md:mb-32 fade-in-up">
        <h1 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 leading-tight mb-8">
          {getProjectTitle(project)}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-300 pt-8 text-sm uppercase tracking-[0.15em]">
          <div>
            <span className="block text-neutral-500 mb-2 font-medium">{t.location}</span>
            <span className="text-neutral-800 font-medium">{getProjectLocation(project)}</span>
          </div>
          <div>
            <span className="block text-neutral-500 mb-2 font-medium">{t.area}</span>
            <span className="text-neutral-800 font-medium">{project.area}</span>
          </div>
          <div>
            <span className="block text-neutral-500 mb-2 font-medium">{t.category}</span>
            <span className="text-neutral-800 font-medium">{project.category}</span>
          </div>
        </div>
      </header>

      {/* ГАЛЕРЕЯ-КОЛЛАЖ — несколько фото видно одновременно, клик = lightbox */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {project.images.map((img, index) => {
          // Каждое 4-е фото занимает 2 колонки для разнообразия
          const isWide = index % 4 === 0
          return (
            <div
              key={index}
              className={`fade-in-up overflow-hidden bg-neutral-100 cursor-pointer group aspect-square ${
                isWide ? 'col-span-2' : ''
              }`}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img}
                alt={`${getProjectTitle(project)} — ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('bg-neutral-200')
                  e.target.parentElement.classList.remove('cursor-pointer')
                }}
              />
            </div>
          )
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, i - 1))}
          onNext={() => setLightboxIndex((i) => Math.min(project.images.length - 1, i + 1))}
        />
      )}

      {/* Навигация к следующему проекту (Опционально) */}
      <div className="mt-32 pt-12 border-t border-neutral-200 flex justify-end fade-in-up">
         <Link to="/contact" className="text-xl md:text-3xl font-serif italic hover:text-neutral-500 transition-colors">
            {t.discussProject} &rarr;
         </Link>
      </div>
    </main>
  )
}

export default ProjectDetail
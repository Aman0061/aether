import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

const ProjectsPage = () => {
  const projectsRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05 }
    )

    const elements = projectsRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const filters = ['All', 'Residential', 'Commercial', 'Architecture']

  const projects = [
    {
      id: 1,
      title: 'ЖК Сады Пекина',
      area: '145 м²',
      location: 'Moscow, Russia',
      image: '/images/pekin.avif',
      aspect: 'aspect-[4/3]',
      delay: 'delay-100',
    },
    {
      id: 2,
      title: 'Capital Towers',
      area: '112 м²',
      location: 'Moscow, Russia',
      image: '/images/capital.avif',
      aspect: 'aspect-[3/4]',
      delay: 'delay-200',
      offset: 'md:mt-12',
    },
    {
      id: 3,
      title: 'Резиденция Рублево',
      area: '350 м²',
      location: 'Moscow Region',
      image: '/images/residence.avif',
      aspect: 'aspect-[3/4]',
      delay: 'delay-100',
    },
    {
      id: 4,
      title: 'Badaevskiy',
      area: '180 м²',
      location: 'Moscow, Russia',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
      aspect: 'aspect-[4/3]',
      delay: 'delay-200',
      offset: 'md:mt-12',
    },
    {
      id: 5,
      title: 'Tessinsky 1',
      area: '98 м²',
      location: 'Moscow, Russia',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
      aspect: 'aspect-[16/9]',
      delay: 'delay-100',
    },
    {
      id: 6,
      title: 'Cloud Nine',
      area: '125 м²',
      location: 'Moscow, Russia',
      image: 'https://mebelshik.kiev.ua/images/os_imagegallery_362/original/img-1215.png',
      aspect: 'aspect-[3/4]',
      delay: 'delay-200',
      offset: 'md:mt-12',
    },
  ]

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black min-h-screen">
      <Navbar />
      <main ref={projectsRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="mb-24 md:mb-32 flex flex-col items-center md:items-start fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 mb-6 italic">
            Наши проекты
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
            Selected Works 2021 — 2024
          </p>
        </header>

        {/* Filter / Categories */}
        <div className="flex flex-wrap gap-8 md:gap-12 mb-16 text-xs tracking-[0.15em] uppercase text-neutral-400 fade-in-up delay-100">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`transition-colors ${
                activeFilter === filter
                  ? 'text-black border-b border-black pb-1'
                  : 'hover:text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group cursor-pointer fade-in-up ${project.delay} ${project.offset || ''}`}
            >
              <div className={`img-container ${project.aspect} w-full mb-6 bg-neutral-100`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                  onLoad={() => console.log('Image loaded:', project.image)}
                  onError={(e) => {
                    console.error('Failed to load image:', project.image, 'Trying alternative path')
                    // Попробуем альтернативный путь
                    if (project.image.startsWith('/images/')) {
                      e.target.src = project.image.replace('/images/', './images/')
                    } else {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'
                    }
                  }}
                />
              </div>
              <div className="flex justify-between items-baseline border-t border-neutral-100 pt-4">
                <h2 className="text-xl md:text-2xl font-serif font-light text-neutral-800 group-hover:italic transition-all">
                  {project.title}
                </h2>
                <span className="text-xs text-neutral-400 font-light tracking-wide">
                  {project.area}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 font-sans">{project.location}</p>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-32 text-center fade-in-up">
          <button className="text-xs tracking-[0.2em] uppercase border border-neutral-200 px-12 py-4 hover:bg-black hover:text-white transition-all duration-500">
            View Archive
          </button>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-neutral-100 py-12 px-6 md:px-12 text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400">
          &copy; 2024 Aether Studio.
        </p>
      </footer>
    </div>
  )
}

export default ProjectsPage


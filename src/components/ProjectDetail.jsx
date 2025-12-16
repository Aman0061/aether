import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projectsData } from '../data/projects' // Импортируем данные

const ProjectDetail = () => {
  const { id } = useParams()
  // Находим проект по ID из URL (важно: id из URL это строка, приводим к числу)
  const project = projectsData.find((p) => p.id === parseInt(id))
  
  // Хук анимации
  const detailRef = useScrollAnimation()

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">Проект не найден</h1>
        <Link to="/projects" className="border-b border-black">Вернуться в каталог</Link>
      </div>
    )
  }

  return (
    <main ref={detailRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      {/* Кнопка Назад */}
      <Link 
        to="/projects" 
        className="inline-flex items-center text-xs uppercase tracking-widest mb-16 hover:opacity-50 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Все проекты
      </Link>

      {/* Заголовок проекта */}
      <header className="mb-24 md:mb-32 fade-in-up">
        <h1 className="text-4xl md:text-8xl font-serif italic font-light mb-8 text-neutral-900 leading-tight">
          {project.title}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-200 pt-8 text-xs uppercase tracking-[0.2em] text-neutral-500">
          <div>
            <span className="block text-neutral-300 mb-2">Локация</span>
            {project.location}
          </div>
          <div>
            <span className="block text-neutral-300 mb-2">Площадь</span>
            {project.area}
          </div>
          <div>
            <span className="block text-neutral-300 mb-2">Категория</span>
            {project.category}
          </div>
        </div>
      </header>

      {/* ГАЛЕРЕЯ */}
      <div className="flex flex-col gap-12 md:gap-24">
        {project.images.map((img, index) => (
          <div 
            key={index} 
            className={`fade-in-up img-container w-full overflow-hidden bg-neutral-100 ${
               // Чередуем стили: четные картинки чуть уже, нечетные на всю ширину (для красоты)
               index % 2 === 0 ? 'aspect-[16/9]' : 'aspect-[3/4] md:aspect-[16/9] md:w-[90%] md:mx-auto'
            }`}
          >
            <img 
              src={img} 
              alt={`${project.title} view ${index + 1}`} 
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Навигация к следующему проекту (Опционально) */}
      <div className="mt-32 pt-12 border-t border-neutral-200 flex justify-end fade-in-up">
         <Link to="/contact" className="text-xl md:text-3xl font-serif italic hover:text-neutral-500 transition-colors">
            Обсудить ваш проект &rarr;
         </Link>
      </div>
    </main>
  )
}

export default ProjectDetail
import { useEffect, useRef } from 'react'

const Services = () => {
  const servicesRef = useRef(null)

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

    const elements = servicesRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-24 bg-[#111111] text-neutral-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div className="fade-in-up">
            <span className="block text-4xl font-serif italic mb-4 text-white">01</span>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-4 text-white">
              Интерьерная архитектура
            </h4>
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              Структурные изменения, планировка пространства и архитектурная детализация для
              оптимизации потока и света.
            </p>
          </div>
          <div className="fade-in-up delay-100">
            <span className="block text-4xl font-serif italic mb-4 text-white">02</span>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-4 text-white">
              Дизайн и декор
            </h4>
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              Подбор эксклюзивной мебели, кураторство искусства и подбор текстиля для целостной
              эстетики.
            </p>
          </div>
          <div className="fade-in-up delay-200">
            <span className="block text-4xl font-serif italic mb-4 text-white">03</span>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-4 text-white">
              Управление проектом
            </h4>
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              Полный контроль от концепции до завершения, обеспечивая бескомпромиссное качество.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services


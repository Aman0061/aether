import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
  const servicesRef = useScrollAnimation()

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-24 bg-[#111111] text-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-16">
          
          {/* Service 01 */}
          <div className="fade-in-up">
            {/* ИЗМЕНЕНИЯ:
                - Убрал font-serif и italic
                - Добавил font-bold (как в хедере)
                - Добавил tracking-tighter (чуть плотнее, стильно для цифр) 
            */}
            <span className="block text-5xl font-bold tracking-tighter mb-6 text-white">
              01
            </span>
            <h4 className="text-base font-bold uppercase tracking-[0.2em] mb-4 text-white">
              Интерьерная архитектура
            </h4>
            <p className="text-base leading-relaxed text-neutral-400">
              Структурные изменения, планировка пространства и архитектурная детализация для
              оптимизации потока и света.
            </p>
          </div>

          {/* Service 02 */}
          <div className="fade-in-up delay-100">
            <span className="block text-5xl font-bold tracking-tighter mb-6 text-white">
              02
            </span>
            <h4 className="text-base font-bold uppercase tracking-[0.2em] mb-4 text-white">
              Дизайн и декор
            </h4>
            <p className="text-base leading-relaxed text-neutral-400">
              Подбор эксклюзивной мебели, кураторство искусства и подбор текстиля для целостной
              эстетики.
            </p>
          </div>

          {/* Service 03 */}
          <div className="fade-in-up delay-200">
            <span className="block text-5xl font-bold tracking-tighter mb-6 text-white">
              03
            </span>
            <h4 className="text-base font-bold uppercase tracking-[0.2em] mb-4 text-white">
              Управление проектом
            </h4>
            <p className="text-base leading-relaxed text-neutral-400">
              Полный контроль от концепции до завершения, обеспечивая бескомпромиссное качество.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
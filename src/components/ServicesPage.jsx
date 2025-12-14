import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const ServicesPage = () => {
  const servicesRef = useRef(null)
  const [openAccordion, setOpenAccordion] = useState(null)

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

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const services = [
    {
      title: 'Полный дизайн-проект',
      price: 'от 5000 ₽ / м²',
      description:
        'Фундаментальная проработка пространства. Мы создаем не просто красивые картинки, а подробную инструкцию для строителей, продумывая каждый узел и стык материалов.',
      features: [
        'Обмерный план и планировочные решения (3-4 варианта)',
        'Фотореалистичная 3D визуализация всех помещений',
        'Полный пакет рабочих чертежей (электрика, свет, сантехника)',
        'Развертки стен и ведомость отделочных материалов',
      ],
      image:
        'https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Комплектация',
      price: '10% от сметы',
      description:
        'Полное управление закупками. Мы берем на себя общение с поставщиками, логистику и контроль сроков, чтобы вы не тратили время на рутину.',
      features: [
        'Составление подробной сметы на реализацию',
        'Поиск лучших цен и скидок от партнеров',
        'Организация доставки и приемка товаров на объекте',
        'Работа с рекламациями и заменой брака',
      ],
      image:
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Авторский надзор',
      price: 'от 50 000 ₽ / мес',
      description:
        'Контроль соответствия ремонтных работ дизайн-проекту. Мы регулярно посещаем стройку, чтобы идея была воплощена в жизнь без искажений.',
      features: [
        'Еженедельные выезды на объект (4 раза в месяц)',
        'Консультации строителей по чертежам',
        'Внесение корректировок в проект в ходе работ',
        'Фотофиксация процесса и отчетность',
      ],
      image:
        'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Декорирование',
      price: 'по запросу',
      description:
        'Финальный штрих, который вдыхает жизнь в интерьер. Подбор искусства, текстиля и аксессуаров, создающих атмосферу.',
      features: [
        'Подбор предметов искусства и антиквариата',
        'Текстильное оформление окон и мебели',
        'Стайлинг интерьера для фотосессии',
      ],
      image:
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black min-h-screen">
      <Navbar />
      <main
        ref={servicesRef}
        className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col"
      >
        {/* Header */}
        <header className="mb-24 md:mb-32 text-center fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-neutral-900 mb-6 italic">
            Услуги
          </h1>
          <p className="text-sm font-light text-neutral-500 max-w-lg mx-auto leading-relaxed">
            Мы предлагаем комплексный подход к созданию интерьера: от первых эскизов до
            декорирования готового пространства.
          </p>
        </header>

        {/* Services Accordion List */}
        <div className="border-t border-neutral-200 fade-in-up delay-100">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group border-b border-neutral-200 cursor-pointer service-item ${
                openAccordion === index ? '[&>div:first-child]:bg-neutral-50/50' : ''
              }`}
              onClick={() => toggleAccordion(index)}
              data-state={openAccordion === index ? 'open' : 'closed'}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 pr-4 transition-colors duration-300 group-hover:bg-neutral-50/50">
                <div className="flex items-center gap-6">
                  <span
                    className={`text-2xl font-light text-neutral-300 accordion-icon block transition-transform ${
                      openAccordion === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 group-hover:italic transition-all">
                    {service.title}
                  </h2>
                </div>
                <div className="mt-4 md:mt-0 pl-10 md:pl-0">
                  <span className="text-sm tracking-widest uppercase text-neutral-500">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`accordion-content ${
                  openAccordion === index ? 'open' : ''
                }`}
              >
                <div className="accordion-inner grid grid-cols-1 md:grid-cols-12 gap-12 pl-0 md:pl-12 pt-4">
                  <div className="md:col-span-7">
                    <p className="text-neutral-500 font-light mb-8 max-w-xl leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <Check className="w-4 h-4 text-neutral-300 mt-1 shrink-0" />
                          <span className="text-sm font-light text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5 hidden md:block">
                    <div
                      className={`aspect-[4/3] bg-neutral-100 overflow-hidden hover-reveal-img relative ${
                        openAccordion === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 border border-black/5 m-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get a Quote / CTA */}
        <section className="mt-auto pt-32 text-center fade-in-up">
          <h3 className="text-2xl font-serif italic text-neutral-900 mb-8">
            Готовы обсудить ваш проект?
          </h3>
          <Link
            to="/contact"
            className="inline-block text-xs uppercase tracking-[0.2em] border border-neutral-300 px-12 py-5 hover:bg-black hover:text-white transition-all duration-500"
          >
            Заполнить бриф
          </Link>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-neutral-100 py-12 px-6 md:px-12 text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400">
          &copy; 2024 Aether Studio. Moscow.
        </p>
      </footer>
    </div>
  )
}

export default ServicesPage


import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ServicesPage = () => {
  const servicesRef = useScrollAnimation()
  
  const [openAccordion, setOpenAccordion] = useState(null)

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
    <section
      ref={servicesRef}
      className="pt-32 pb-24 px-6 md:px-12 mx-auto min-h-screen flex flex-col bg-white"
    >
      {/* Header */}
      <header className="mb-24 md:mb-32 text-center fade-in-up">
        {/* H1: Bold + Uppercase + Black */}
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 uppercase tracking-tighter">
          Услуги
        </h1>
        {/* Desc: text-lg + normal font weight + dark gray */}
        <p className="text-lg md:text-xl font-normal text-neutral-800 max-w-2xl mx-auto leading-relaxed text-balance">
          Мы предлагаем комплексный подход к созданию интерьера: от первых эскизов до
          декорирования готового пространства.
        </p>
      </header>

      {/* Services Accordion List */}
      <div className="border-t-2 border-neutral-100 fade-in-up delay-100">
        {services.map((service, index) => (
          <div
            key={index}
            // Border стал толще (border-b-2) и черным при открытии
            className={`group border-b-2 cursor-pointer service-item transition-all duration-300 ${
              openAccordion === index ? 'border-black bg-neutral-50' : 'border-neutral-100 hover:border-neutral-300'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {/* Header Аккордеона */}
            <div className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 pr-4">
              <div className="flex items-center gap-8">
                {/* Иконка плюса: жирнее (strokeWidth={3}) */}
                <span
                  className={`text-neutral-400 transform transition-transform duration-300 ${
                    openAccordion === index ? 'rotate-45 text-black' : 'group-hover:text-black'
                  }`}
                >
                   <Plus className="w-8 h-8" strokeWidth={2.5} />
                </span>
                
                {/* Title: Убрал serif/italic, сделал bold uppercase */}
                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-black">
                  {service.title}
                </h2>
              </div>
              
              <div className="mt-6 md:mt-0 pl-16 md:pl-0">
                {/* Price: Bold + Black */}
                <span className="text-sm md:text-base font-bold tracking-widest uppercase text-black">
                  {service.price}
                </span>
              </div>
            </div>

            {/* Content Аккордеона */}
            <div
              className={`accordion-content ${
                openAccordion === index ? 'open' : ''
              }`}
            >
              <div className="accordion-inner grid grid-cols-1 md:grid-cols-12 gap-12 pl-0 md:pl-16 pt-0 pb-14">
                
                {/* Описание и список */}
                <div className="md:col-span-7">
                  {/* Desc: text-lg + font-normal (убрал light) */}
                  <p className="text-lg text-neutral-800 font-normal mb-10 max-w-xl leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        {/* Check: Жирнее */}
                        <Check className="w-5 h-5 text-black mt-1 shrink-0" strokeWidth={3} />
                        {/* Feature text: Medium font weight */}
                        <span className="text-base font-medium text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Картинка */}
                <div className="md:col-span-5 hidden md:block">
                  <div
                    className={`aspect-[4/3] bg-neutral-100 relative transition-all duration-700 ${
                      openAccordion === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-auto pt-32 md:pt-48 text-center fade-in-up delay-200">
        {/* Title: Bold + Black */}
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Готовы обсудить ваш проект?
        </h3>
        <Link
          to="/contact"
          // Button: Жирнее и с толстой рамкой
          className="inline-block text-sm font-bold uppercase tracking-[0.2em] border-2 border-neutral-200 px-12 py-5 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
        >
          Заполнить бриф
        </Link>
      </section>
    </section>
  )
}

export default ServicesPage
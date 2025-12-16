import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  // 1. Используем наш хук для анимации
  const contactRef = useScrollAnimation()
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    details: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки (например, в Telegram или на почту)
    console.log('Form submitted:', formData)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    // Убрали внешнюю обертку и Navbar.
    // min-h-screen нужен, чтобы на больших экранах контент был по центру вертикально.
    <section
      ref={contactRef}
      className="min-h-screen pt-32 pb-12 px-6 md:px-12 flex flex-col md:justify-center max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 h-full">
        
        {/* Left Column: Info */}
        <div className="md:col-span-5 flex flex-col justify-between h-full fade-in-up">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-neutral-900 mb-16 italic">
              Обсудить проект
            </h1>

            <div className="space-y-6">
              <a
                href="tel:+79990000000"
                className="block text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 hover:opacity-60 transition-opacity font-sans tracking-tight"
              >
                +7 (999) 000-00-00
              </a>
              <a
                href="mailto:hello@aether.com"
                className="block text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 hover:opacity-60 transition-opacity font-sans tracking-tight break-words"
              >
                hello@aether.com
              </a>
            </div>
          </div>

          <div className="mt-24 md:mt-0 grid grid-cols-2 gap-8 border-t md:border-t-0 border-neutral-100 pt-8 md:pt-0">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-4">
                Адрес
              </span>
              <p className="text-sm font-light leading-relaxed text-neutral-600">
                Москва, Россия
                <br />
                Пресненская наб., 12
                <br />
                Башня Федерация
              </p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-4">
                Social
              </span>
              <ul className="space-y-2 text-sm font-light text-neutral-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:col-span-7 md:pl-12 lg:pl-24 pt-8 md:pt-4 fade-in-up delay-100">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                  className="minimal-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  required
                  className="minimal-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="minimal-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="group">
              <input
                type="text"
                name="type"
                placeholder="Тип объекта (Квартира, Дом, Офис)"
                className="minimal-input"
                value={formData.type}
                onChange={handleChange}
              />
            </div>

            <div className="group pt-4">
              <textarea
                rows="4"
                name="details"
                placeholder="Детали проекта"
                className="minimal-input resize-none"
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-12 flex justify-start">
              <button
                type="submit"
                className="btn-hover bg-black text-white text-xs uppercase tracking-[0.2em] px-12 py-5 hover:bg-neutral-800 transition-colors duration-300 w-full md:w-auto"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer внутри страницы убран, так как есть глобальный Footer в App.js. 
          Если нужен специфический отступ снизу, его дает padding-bottom у section */}
    </section>
  )
}

export default Contact
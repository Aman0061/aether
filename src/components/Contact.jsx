import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import toast from 'react-hot-toast'

const Contact = () => {
  const contactRef = useScrollAnimation()
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    details: '',
  })

  // -------------------------------------------------------------------------
  // НАСТРОЙКИ TELEGRAM
  // -------------------------------------------------------------------------
  const TG_BOT_TOKEN = '8227356630:AAEF6lzCccHU_frM04GpS5AXkP-0iU2lCBU'
  const TG_CHAT_ID = '5221925241'
  // -------------------------------------------------------------------------

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `
<b>🔔 Новая заявка с сайта!</b>

<b>👤 Имя:</b> ${formData.name}
<b>📱 Телефон:</b> ${formData.phone}
<b>📧 Email:</b> ${formData.email || 'Не указан'}
<b>🏠 Тип объекта:</b> ${formData.type || 'Не указан'}

<b>📝 Детали:</b>
${formData.details || 'Без комментариев'}
    `

    const sendMessagePromise = async () => {
      const response = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      })

      if (!response.ok) throw new Error('Telegram API Error')
      return response
    }

    toast.promise(sendMessagePromise(), {
      loading: 'Отправляем заявку...',
      success: 'Спасибо! Мы скоро свяжемся с вами.',
      error: 'Ошибка соединения. Попробуйте позже.',
    })
    .then(() => {
      setFormData({ name: '', phone: '', email: '', type: '', details: '' })
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <section
      ref={contactRef}
      className="min-h-screen pt-32 pb-12 px-6 md:px-12 flex flex-col md:justify-center max-w-[1600px] mx-auto bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 h-full">
        
        {/* Left Column: Info */}
        <div className="md:col-span-5 flex flex-col justify-between h-full fade-in-up">
          <div>
            {/* Заголовок: text-black */}
            <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-16 italic">
              Обсудить проект
            </h1>

            <div className="space-y-6">
              <a
                href="tel:+996551968818"
                // Телефон: text-black
                className="block text-3xl md:text-4xl lg:text-5xl font-light text-black hover:opacity-60 transition-opacity font-sans tracking-tight"
              >
                +(996) 551-968-818
              </a>
              <a
                href="mailto:hello@vimana.com" // Поправил на vimana, если нужно
                // Email: text-black
                className="block text-3xl md:text-4xl lg:text-5xl font-light text-black hover:opacity-60 transition-opacity font-sans tracking-tight break-words"
              >
                hello@vimana.com
              </a>
            </div>
          </div>

          <div className="mt-24 md:mt-0 grid grid-cols-2 gap-8 border-t md:border-t-0 border-neutral-200 pt-8 md:pt-0">
            <div>
              {/* Метка: text-black + font-bold (чтобы мелкий текст читался) */}
              <span className="text-[10px] tracking-[0.2em] uppercase text-black font-bold block mb-4">
                Адрес
              </span>
              {/* Текст адреса: text-black */}
              <p className="text-sm font-light leading-relaxed text-black">
                Бишкек, Кыргызстан
                <br />
                Пресненская наб., 12
                <br />
                Башня Федерация
              </p>
            </div>
            <div>
              {/* Метка: text-black + font-bold */}
              <span className="text-[10px] tracking-[0.2em] uppercase text-black font-bold block mb-4">
                Social
              </span>
              {/* Ссылки: text-black */}
              <ul className="space-y-2 text-sm font-light text-black">
                <li>
                  <a href="https://www.instagram.com/vimana__architects/" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-60 transition-opacity">
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
                  // INPUT: добавил text-black placeholder:text-neutral-500
                  className="minimal-input text-black placeholder:text-neutral-500 border-neutral-300 focus:border-black"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  required
                  className="minimal-input text-black placeholder:text-neutral-500 border-neutral-300 focus:border-black"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="minimal-input text-black placeholder:text-neutral-500 border-neutral-300 focus:border-black"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="group">
              <input
                type="text"
                name="type"
                placeholder="Тип объекта (Квартира, Дом, Офис)"
                className="minimal-input text-black placeholder:text-neutral-500 border-neutral-300 focus:border-black"
                value={formData.type}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="group pt-4">
              <textarea
                rows="4"
                name="details"
                placeholder="Детали проекта"
                className="minimal-input resize-none text-black placeholder:text-neutral-500 border-neutral-300 focus:border-black"
                value={formData.details}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="pt-12 flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-hover bg-black text-white text-xs uppercase tracking-[0.2em] px-12 py-5 transition-all duration-300 w-full md:w-auto ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800'
                }`}
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
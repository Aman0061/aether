import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import toast from 'react-hot-toast'
import { contactTranslations } from '../translations/contact'

const Contact = () => {
  const contactRef = useScrollAnimation()
  const { lang } = useLanguage()
  const t = contactTranslations[lang]
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    details: '',
  })

  const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN
  const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID

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
<b>🔔 ${t.tgTitle}</b>

<b>👤 ${t.tgName}:</b> ${formData.name}
<b>📱 ${t.tgPhone}:</b> ${formData.phone}
<b>📧 ${t.tgEmail}:</b> ${formData.email || t.notSpecified}
<b>🏠 ${t.tgType}:</b> ${formData.type || t.notSpecified}

<b>📝 ${t.tgDetails}:</b>
${formData.details || t.noComments}
    `

    const sendMessagePromise = async () => {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      })
    
      if (!response.ok) {
        throw new Error('Message send error')
      }
    
      return response
    }

    toast.promise(sendMessagePromise(), {
      loading: t.toastLoading,
      success: t.toastSuccess,
      error: t.toastError,
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
            <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-16">
              {t.title}
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
                href="mailto:architectsvimana@gmail.com"
                className="block text-3xl md:text-4xl lg:text-5xl font-light text-black hover:opacity-60 transition-opacity font-sans tracking-tight break-words"
              >
                architectsvimana@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-24 md:mt-0 grid grid-cols-2 gap-8 border-t md:border-t-0 border-neutral-200 pt-8 md:pt-0">
            <div>
              {/* Метка: text-black + font-bold (чтобы мелкий текст читался) */}
              <span className="text-[10px] tracking-[0.2em] uppercase text-black font-bold block mb-4">
                {t.address}
              </span>
              <p className="text-sm font-light leading-relaxed text-black">
                {t.addressLines.map((line, i) => (
                  <span key={i}>{line}{i < t.addressLines.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
            <div>
              {/* Метка: text-black + font-bold */}
              <span className="text-[10px] tracking-[0.2em] uppercase text-black font-bold block mb-4">
                {t.social}
              </span>
              {/* Ссылки: text-black */}
              <ul className="space-y-2 text-sm font-light text-black">
                <li>
                  <a href="https://www.instagram.com/vimana__architects/" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/996551968818" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
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
                  placeholder={t.placeholderName}
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
                  placeholder={t.placeholderPhone}
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
                placeholder={t.placeholderType}
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
                placeholder={t.placeholderDetails}
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
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import toast from 'react-hot-toast'
import { contactTranslations } from '../translations/contact'

const Devs = () => {
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
      if (!TG_BOT_TOKEN || !TG_CHAT_ID) throw new Error('Telegram not configured')
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
            For projects and collaboration:
            WhatsApp / Telegram
            +996 700 466 412
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Devs
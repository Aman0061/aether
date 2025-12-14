import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

const Contact = () => {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    details: '',
  })

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

    const elements = contactRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black min-h-screen">
      <Navbar />
      <main
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
                  Location
                </span>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  142 Wooster St
                  <br />
                  New York, NY 10012
                  <br />
                  USA
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
                      LinkedIn
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

        {/* Footer Note */}
        <div className="mt-auto pt-24 md:pt-12 text-center md:text-left border-t md:border-none border-neutral-100">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">
            &copy; 2024 Aether Studio. All Rights Reserved.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Contact


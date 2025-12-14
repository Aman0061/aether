import { useEffect, useRef } from 'react'

const Studio = () => {
  const studioRef = useRef(null)

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

    const elements = studioRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="studio"
      ref={studioRef}
      className="py-24 md:py-40 px-6 md:px-24 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        <div className="md:col-span-5 fade-in-up">
          <div className="aspect-[3/4] overflow-hidden relative group">
            <img
              src="/images/secondmain.avif"
              alt="Detail of chair"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 text-xs tracking-widest text-white mix-blend-difference">
              EST. 2024
            </div>
          </div>
        </div>
        <div className="md:col-span-7 fade-in-up delay-100">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 text-neutral-900 leading-tight">
            Мы создаем пространства, которые <span className="italic text-neutral-500">дышат</span>.
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8 text-balance">
            Наша философия основана на убеждении, что роскошь — это не изобилие, а отсутствие шума.
            Мы создаем среды, которые служат убежищем для современного ума.
          </p>
          <a
            href="/studio"
            className="text-xs uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
          >
            Наша история
          </a>
        </div>
      </div>
    </section>
  )
}

export default Studio


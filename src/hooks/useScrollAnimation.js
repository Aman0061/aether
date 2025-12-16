import { useEffect, useRef } from 'react'

export const useScrollAnimation = (trigger = null) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Небольшой таймаут, чтобы React успел отрисовать новые элементы DOM перед поиском
    const timeoutId = setTimeout(() => {
      const elements = elementRef.current?.querySelectorAll('.fade-in-up')
      elements?.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [trigger]) // <--- ВАЖНО: перезапуск при изменении trigger

  return elementRef
}
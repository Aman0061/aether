import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'vimana_lang'

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'EN'
    } catch {
      return 'EN'
    }
  })

  const setLang = (value) => {
    setLangState(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

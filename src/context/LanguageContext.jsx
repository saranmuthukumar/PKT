import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')

    const t = (key) => {
        return translations[language]?.[key] || translations['en']?.[key] || key
    }

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ta' : 'en')
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)

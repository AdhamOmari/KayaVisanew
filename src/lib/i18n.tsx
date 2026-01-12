'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import enTranslations from '@/locales/en.json'
import arTranslations from '@/locales/ar.json'

type Locale = 'en' | 'ar'
type Translations = typeof enTranslations

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  dir: 'ltr' | 'rtl'
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [translations, setTranslations] = useState<Translations>(enTranslations)

  useEffect(() => {
    // Only access localStorage after component is mounted (client-side only)
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale | null
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'ar')) {
        setLocaleState(savedLocale)
        setTranslations(savedLocale === 'ar' ? arTranslations : enTranslations)
        document.documentElement.lang = savedLocale
        document.body.dir = savedLocale === 'ar' ? 'rtl' : 'ltr'
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setTranslations(newLocale === 'ar' ? arTranslations : enTranslations)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
      document.documentElement.lang = newLocale
      document.body.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
    }
  }

  return (
    <I18nContext.Provider
      value={{
        locale,
        t: translations,
        setLocale,
        dir: locale === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

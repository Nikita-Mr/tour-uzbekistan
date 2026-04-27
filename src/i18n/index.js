// src/i18n/index.js
import { createI18n } from 'vue-i18n'

// Статические переводы для всех языков
const messages = {
  ru: {
    nav: {
      about: 'О нас',
      directions: 'Направления',
      services: 'Услуги',
      why_we: 'Почему мы?',
      countries: 'Страны',
      tours: 'Туры',
      for_agent: 'Агентам'
    },
    countries: {
      uzbekistan: 'Узбекистан',
      kazakhstan: 'Казахстан',
      kyrgyzstan: 'Кыргызстан',
      tajikistan: 'Таджикистан',
      caucasus: 'Кавказ',
    },
    languages: {
      ru: 'Русский',
      en: 'English',
      uz: "O'zbek"
    }
  },
  en: {
    nav: {
      about: 'About Us',
      directions: 'Directions',
      services: 'Services',
      why_we: 'Why We?',
      countries: 'Countries',
      tours: 'Tours',
      for_agent: 'For Agent'
    },
    countries: {
      uzbekistan: 'Uzbekistan',
      kazakhstan: 'Kazakhstan',
      kyrgyzstan: 'Kyrgyzstan',
      tajikistan: 'Tajikistan',
      caucasus: 'Caucasus',
    },
    languages: {
      ru: 'Russian',
      en: 'English',
      uz: "Uzbek"
    }
  },
  uz: {
    nav: {
      about: 'Biz haqimizda',
      directions: 'Yo‘nalishlar',
      services: 'Xizmatlar',
      why_we: 'Nima uchun biz?',
      countries: 'Davlatlar',
      tours: 'Turlar',
      for_agent: 'Agentlar uchun'
    },
    countries: {
      uzbekistan: "O'zbekiston",
      kazakhstan: 'Qozog‘iston',
      kyrgyzstan: 'Qirg‘iziston',
      tajikistan: 'Tojikiston',
      caucasus: 'Kavkaz',
    },
    languages: {
      ru: 'Ruscha',
      en: 'Inglizcha',
      uz: "O'zbekcha"
    }
  }
}

// Создаем экземпляр i18n
const i18n = createI18n({
  legacy: false, // Используем Composition API
  locale: localStorage.getItem('language') || 'en', // Язык по умолчанию
  fallbackLocale: 'en',
  messages
})

export default i18n
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import fa from './fa/adminPanel'
import en from './en/adminPanel'
import { store } from '@/store'
import { SET_DIRECTION } from '@/store/actions'

// تنظیمات ذخیره‌سازی کوکی
const cookieDomain = window.location.hostname
const cookieExpirationDays = 365

const i18next = i18n.createInstance({
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        caches: ['cookie']
    },
    resources: {
        fa: {
            adminPanel: fa
        },
        en: {
            adminPanel: en
        }
    },
    fallbackLng: 'en',
    debug: false,
    returnObjects: true,
    // have a common namespace used around the full app2
    ns: ['adminPanel'],
    defaultNS: 'adminPanel',
    fallbackNS: ['adminPanel'],

    keySeparator: false, // we use content as keys
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    }
})

i18next.use(LanguageDetector).use(initReactI18next).init()

// Change language and direction together
export const changeLanguage = (lang) => {
    // Change language
    i18next.changeLanguage(lang)

    // Update direction based on language
    const direction = lang === 'fa' ? 'rtl' : 'ltr'

    // Update document direction
    document.dir = direction
    document.documentElement.setAttribute('dir', direction)

    // Update Redux store
    if (store && store.dispatch) {
        store.dispatch({ type: SET_DIRECTION, direction })
    }

    // Save both language and direction to localStorage
    localStorage.setItem('locale', lang)
    localStorage.setItem('direction', direction)

    // Set cookie
    document.cookie = `i18next=${lang}; path=/; max-age=${cookieExpirationDays * 24 * 60 * 60}; domain=${cookieDomain}`
}

const translate = (key, opt) => i18next.t(key, opt)

export default i18next

export { translate }

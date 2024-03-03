import { createI18n } from 'vue-i18n'

import EN from './en.json'
import ES from './es.json'

const i18n = createI18n({
  locale: 'es',
  legacy: false,
  messages: {
    en: EN,
    es: ES
  }
})

export default i18n

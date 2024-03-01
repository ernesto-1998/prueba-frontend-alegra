import { createI18n } from 'vue-i18n'

import EN from "./en.json";
import ES from "./es.json";

const i18n = createI18n({
    locale: "ES",
    legacy: false,
  messages: {
    EN: EN,
    ES: ES,
  }
})

export default i18n
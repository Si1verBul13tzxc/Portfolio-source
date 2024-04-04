import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationInEng from '../locales/en/translation.json'
import translationInCh from '../locales/ch/translation.json'

const resources = {
    en:{
        translation: translationInEng
    },
    ch:{
        translation:translationInCh
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        debug:true,
        fallbackLng: "en", // use en if selected language is not available
        interpolation: {
            escapeValue: false
        },
        ns: "translation", // namespaces help to divide huge translations into multiple small files.
        defaultNS: "translation"
    }
    )

export default i18n;
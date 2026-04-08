import i18next from "i18next";
import { initReactI18next} from "react-i18next";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export const languageRessources = {
    en: {translation: en},
    fr: {trnaslation: fr}
};

i18next.use(initReactI18next).init({
    compatibilityJSON: "v4",
    lng: "en",
    fallbackLng: "en",
    resources: languageRessources
});

export default i18next;
import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

const i18n = new I18n({
  fr: {
    welcome: "Bienvenue dans l'application",
    changeLang: "Changer de langue",
    profile: "Profil",
  },
  en: {
    welcome: "Welcome to the app",
    changeLang: "Change language",
    profile: "Profile",
  },
});

i18n.locale = (Localization as any).locale;
i18n.enableFallback = true; 
export default i18n;

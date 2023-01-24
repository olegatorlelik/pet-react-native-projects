import i18n from '@lomray/client-helpers-react-native/services/localization';
import resources from '@assets/locales/namespaces';
import { APP_LANGUAGES, DEFAULT_APP_LANGUAGE } from '@constants/index';

i18n.defaultLanguage = DEFAULT_APP_LANGUAGE;
i18n.supportLanguages = APP_LANGUAGES;

void i18n.init({
  resources,
});

export default i18n;

/* eslint-disable @typescript-eslint/naming-convention */
import type namespaces from '../assets/locales/namespaces';

declare module 'react-i18next' {
  type DefaultResourcesCustom = typeof namespaces['en'];

  interface Resources extends DefaultResourcesCustom {}

  interface I18nextProviderProps {
    initialI18nStore?: any;
    initialLanguage?: string;
  }
}

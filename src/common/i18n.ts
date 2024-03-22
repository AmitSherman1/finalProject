
interface I18nConfig {
  supportedLocales: {
    [key: string]: string;
  };
  fallbackLocale: string;
}

export type Languages = 'he' | 'ar';

const i18nConfig: I18nConfig = {
  supportedLocales: {
    he: 'עברית',
    ar: 'عربي',
  },
  fallbackLocale: 'he',
};


export {i18nConfig};

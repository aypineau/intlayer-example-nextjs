import { type IntlayerConfig, Locales } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.SPANISH, Locales.FRENCH],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    // applicationURL: "https://next-15-intlayer-template-xt83.vercel.app/",
    // clientId: "",
    // clientSecret:
    //   "",
    dictionaryPriorityStrategy: "distant_first",
    enabled: true,
  },
  dictionary: {
    importMode: "dynamic",
  },
  log: {
    mode: "verbose",
  },
};

export default config;

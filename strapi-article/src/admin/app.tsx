import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: ["fr", "ru"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Your CMS",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
    },
    theme: {
      light: {
        // colors: {
        //   //Background of some blocks
        //   neutral0: "#CCD9F1",
        //   //Background
        //   neutral100: "#DCEFEF",
        //   //Background of some blocks
        //   neutral150: "#3E6FC9",
        //   //Border
        //   neutral200: "#4DA8A8",
        //   //Some icon
        //   neutral500: "#6E93D6",
        //   //Some text
        //   neutral600: "#8950B1",
        //   //Background focus items
        //   primary100: "#5EBC70",
        //   //Background focus text + some icon
        //   primary600: "#A5A728",
        // },
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};

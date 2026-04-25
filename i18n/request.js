import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
    const supportedLocales = ["en", "ur"];
    const activeLocale = supportedLocales.includes(locale) ? locale : "en";

    return {
        locale: activeLocale,
        messages: (await import(`../src/app/data/${activeLocale}.json`)).default,
    };
});

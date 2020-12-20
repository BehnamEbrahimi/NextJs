import React from "react";

import homeDefault from "../public/static/locales/en/common.json";
import aboutDefault from "../public/static/locales/en/about.json";
import notFoundDefault from "../public/static/locales/en/404.json";
import headerDefault from "../public/static/locales/en/header.json";
import footerDefault from "../public/static/locales/en/footer.json";

export const HomeTranslationContext = React.createContext(homeDefault);
export const homeTranslationKeys = Object.keys(homeDefault);

export const AboutTranslationContext = React.createContext(aboutDefault);
export const aboutTranslationKeys = Object.keys(aboutDefault);

export const NotFoundTranslationContext = React.createContext(notFoundDefault);
export const notFoundTranslationKeys = Object.keys(notFoundDefault);

export const HeaderTranslationContext = React.createContext(headerDefault);
export const headerTranslationKeys = Object.keys(headerDefault);

export const FooterTranslationContext = React.createContext(footerDefault);
export const footerTranslationKeys = Object.keys(footerDefault);

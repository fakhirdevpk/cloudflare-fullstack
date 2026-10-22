// json ~ data
import jsonLabels from "../data/label.json";
import jsonMeta from "../data/meta-profile.json";
import jsonSocials from "../data/socials.json";
import jsonTestmonies from "../data/testimonies.json";
// json ~ config
import cfgBusiness from "../config/business.json";
import cfgSite from "../config/site.json";
// constants ~ data
export const dataUrls = jsonLabels.labels.default["list-links"];
export const dataMetaProfile = jsonMeta["data-profile"];
export const dataSocials = jsonSocials.socials;
export const dataTestmonies = jsonTestmonies.persons;
// constants ~ config
export const configBusiness = cfgBusiness.business;
export const configSiteToggle = cfgSite["components-toggle"];
export const configSiteHTTP = cfgSite.http;
export const configSiteServef = cfgSite.server;
// Constans ~ Names
export const titleHome = dataUrls.home.name;
export const titleLogin = dataUrls.login.name;
export const titleSignIn = dataUrls.sign.name;
export const titleAbout = dataUrls.about.name;
export const titleContact = dataUrls.contact.name;
// Constans ~ Pages
export const linkHome = dataUrls.home.url;
export const linkLogin = dataUrls.login.url;
export const linkSignIn = dataUrls.sign.url;
export const linkAbout = dataUrls.about.url;
export const linkContact = dataUrls.contact.url;

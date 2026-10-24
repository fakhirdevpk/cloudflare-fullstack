// constants ~ Servers
// -------------------------------------------------------
import cfg from "../config/site.json";
export const cfgToggle = cfg["components-toggle"];
export const cfgHTTP = cfg.http;
export const cfgSite = cfg.server;
// constants ~ Data
// -------------------------------------------------------
import business from "../data/business.json";
import data from "../data/data.json";
import labels from "../data/label.json";
// Constans ~ Names
export const dataUrls = labels.labels.default["list-links"];
export const navHome = dataUrls.home.name;
export const navLogin = dataUrls.login.name;
export const navSignIn = dataUrls.sign.name;
export const navAbout = dataUrls.about.name;
export const navContact = dataUrls.contact.name;
// Constans ~ Pages
export const urlHome = dataUrls.home.url;
export const urlLogin = dataUrls.login.url;
export const urlSignIn = dataUrls.sign.url;
export const urlAbout = dataUrls.about.url;
export const urlContact = dataUrls.contact.url;

// -------------------------------------------------------
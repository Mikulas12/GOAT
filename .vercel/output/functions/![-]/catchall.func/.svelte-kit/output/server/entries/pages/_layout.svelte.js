import { c as create_ssr_component, a as add_attribute, b as spread, e as escape_object, v as validate_component, d as escape, f as each, g as subscribe } from "../../chunks/ssr.js";
import { getToolbarSrc, isFilled, asLink } from "@prismicio/client";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
import { B as Bounded, P as PrismicLink, a as Button } from "../../chunks/Button.js";
const PrismicPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toolbarSrc;
  let { repositoryName: repositoryName2 } = $$props;
  let { routePrefix = "preview" } = $$props;
  let { routePrefixName = routePrefix } = $$props;
  if ($$props.repositoryName === void 0 && $$bindings.repositoryName && repositoryName2 !== void 0) $$bindings.repositoryName(repositoryName2);
  if ($$props.routePrefix === void 0 && $$bindings.routePrefix && routePrefix !== void 0) $$bindings.routePrefix(routePrefix);
  if ($$props.routePrefixName === void 0 && $$bindings.routePrefixName && routePrefixName !== void 0) $$bindings.routePrefixName(routePrefixName);
  toolbarSrc = getToolbarSrc(repositoryName2);
  return `${$$result.head += `<!-- HEAD_svelte-92dhp6_START --><script defer${add_attribute("src", toolbarSrc, 0)}><\/script><!-- HEAD_svelte-92dhp6_END -->`, ""}`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 448 512" },
      { width: "1.06em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 512 512" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 448 512" },
      { width: "1.06em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { settings } = $$props;
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  return `${validate_component(Bounded, "Bounded").$$render($$result, { as: "footer", class: "text-slate-600" }, {}, {
    default: () => {
      return `<div class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row"><div class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"><a href="/" class="text-xl font-extrabold tracking-tighter text-slate-700 transition-color duration-150 hover:text-yellow-500">${escape(settings.data.name)}</a> <span class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline" aria-hidden="true" data-svelte-h="svelte-gv9lxn">/</span> <p class="text-sm text-slate-700">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} ${escape(settings.data.name)}</p></div> <nav class="navigation" aria-label="Footer Navigation"><ul class="flex items-center gap-1">${each(settings.data.nav_item, ({ link, label }, index) => {
        return `<li>${validate_component(PrismicLink, "PrismicLink").$$render(
          $$result,
          {
            field: link,
            class: "block px-3 py-1 text-base font-semibold text-slate-600 transition-colors duration-150 hover:text-yellow-500"
          },
          {},
          {
            default: () => {
              return `${escape(label)}`;
            }
          }
        )}</li> ${index < settings.data.nav_item.length - 1 ? `<span class="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true" data-svelte-h="svelte-1ig611k">/
						</span>` : ``}`;
      })}</ul></nav> <div class="socials inline-flex justify-center sm:justify-end">${isFilled.link(settings.data.facebook_link) ? `${validate_component(PrismicLink, "PrismicLink").$$render(
        $$result,
        {
          field: settings.data.facebook_link,
          class: "p-2 text-2xl text-slate-700 transform transition-all duration-150 hover:scale-125 hover:text-yellow-500",
          "aria-label": settings.data.name + " on Facebook"
        },
        {},
        {
          default: () => {
            return `${validate_component(Facebook, "IconFacebook").$$render($$result, {}, {}, {})}`;
          }
        }
      )}` : ``} ${isFilled.link(settings.data.linkedin_link) ? `${validate_component(PrismicLink, "PrismicLink").$$render(
        $$result,
        {
          field: settings.data.linkedin_link,
          class: "p-2 text-2xl text-slate-700 transform transition-all duration-150 hover:scale-125 hover:text-yellow-500",
          "aria-label": settings.data.name + " on Linkedin"
        },
        {},
        {
          default: () => {
            return `${validate_component(Linkedin, "IconLinkedin").$$render($$result, {}, {}, {})}`;
          }
        }
      )}` : ``} ${isFilled.link(settings.data.instagram_link) ? `${validate_component(PrismicLink, "PrismicLink").$$render(
        $$result,
        {
          field: settings.data.instagram_link,
          class: "p-2 text-2xl text-slate-700 transform transition-all duration-150 hover:scale-125 hover:text-yellow-500",
          "aria-label": settings.data.name + " on Instagram"
        },
        {},
        {
          default: () => {
            return `${validate_component(Instagram, "IconInstagram").$$render($$result, {}, {}, {})}`;
          }
        }
      )}` : ``}</div></div>`;
    }
  })}`;
});
const NavBarLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { field } = $$props;
  let { label } = $$props;
  let { onLinkClick } = $$props;
  let { type } = $$props;
  const path = asLink(field);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.onLinkClick === void 0 && $$bindings.onLinkClick && onLinkClick !== void 0) $$bindings.onLinkClick(onLinkClick);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  isActive = path && $page.url.pathname.includes(path);
  $$unsubscribe_page();
  return `${type === "desktop" ? `${validate_component(PrismicLink, "PrismicLink").$$render(
    $$result,
    {
      class: "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900",
      field,
      "aria-current": isActive ? "page" : void 0
    },
    {},
    {
      default: () => {
        return `<span${add_attribute("class", `absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-6" : "translate-y-8"}`, 0)}></span> <span class="relative">${escape(label)}</span>`;
      }
    }
  )}` : `${validate_component(PrismicLink, "PrismicLink").$$render(
    $$result,
    {
      class: "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900",
      field,
      "aria-current": isActive ? "page" : void 0
    },
    {},
    {
      default: () => {
        return `<span${add_attribute("class", `absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-6" : "translate-y-16"}`, 0)}></span> <span class="relative">${escape(label)}</span>`;
      }
    }
  )}`}`;
});
const Baseline_menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Baseline_close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { settings } = $$props;
  let open = false;
  function onLinkClick() {
    open = false;
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  return `<header class="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 relative"><nav><div class="flex flex-col justify-between rounded-b-lg bg-white/50 backdrop-blur-md shadow-sm border-b border-slate-200 px-4 py-2 md:m4 md:flex-row md:items-center md:rounded-xl"><div class="flex items-center justify-between"><a href="/" aria-label="Homepage" class="text-xl font-extrabold tracking-tighter text-slate-900">${escape(settings.data.name)}</a> <button${add_attribute("aria-expanded", open, 0)} aria-label="Open Menu" class="block p-2 text-2xl text-slate-800 md:hidden">${validate_component(Baseline_menu, "IconMenu").$$render($$result, {}, {}, {})}</button></div>  <ul class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">${each(settings.data.nav_item, ({ label, link }) => {
    return `<li>${validate_component(NavBarLink, "NavBarLink").$$render(
      $$result,
      {
        field: link,
        label,
        onLinkClick,
        type: "desktop"
      },
      {},
      {}
    )} </li>`;
  })} ${isFilled.link(settings.data.cta_link) ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      linkField: settings.data.cta_link,
      label: settings.data.cta_label,
      class: "ml-3"
    },
    {},
    {}
  )}` : ``}</ul></div>  ${open ? ` <div class="fixed inset-0 z-[9998] bg-white md:hidden"></div>` : ``} <ul${add_attribute(
    "class",
    `fixed inset-0 z-[9999]
				flex flex-col items-end gap-4
				bg-white pr-4 pt-14 shadow-none
				transition-transform duration-300 ease-in-out
				md:hidden
				${open ? "translate-x-0" : "translate-x-[100%]"}`,
    0
  )}><li><button${add_attribute("aria-expanded", open, 0)} aria-label="Close Menu" class="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden">${validate_component(Baseline_close, "IconClose").$$render($$result, {}, {}, {})}</button></li> ${each(settings.data.nav_item, ({ label, link }) => {
    return `<li class="first:mt-8">${validate_component(NavBarLink, "NavBarLink").$$render(
      $$result,
      {
        field: link,
        label,
        onLinkClick,
        type: "mobile"
      },
      {},
      {}
    )} </li>`;
  })} ${isFilled.link(settings.data.cta_link) ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      linkField: settings.data.cta_link,
      label: settings.data.cta_label
    },
    {},
    {}
  )}` : ``}</ul></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1veofet_START -->${$$result.title = `<title>${escape($page.data.title)}</title>`, ""}${$page.data.meta_description ? `<meta name="description"${add_attribute("content", $page.data.meta_description, 0)}>` : ``}${$page.data.meta_title ? `<meta name="og:title"${add_attribute("content", $page.data.meta_title, 0)}>` : ``}${$page.data.meta_image ? `<meta name="og:image"${add_attribute("content", $page.data.meta_image, 0)}> <meta name="twitter:card" content="summary_large_image">` : ``}<!-- HEAD_svelte-1veofet_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, { settings: data.settings }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> <div class="background-gradient absolute inset-0 -z-50 max-h-screen"></div> <div class="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div> ${validate_component(Footer, "Footer").$$render($$result, { settings: data.settings }, {}, {})} ${validate_component(PrismicPreview, "PrismicPreview").$$render($$result, { repositoryName }, {}, {})}`;
});
export {
  Layout as default
};

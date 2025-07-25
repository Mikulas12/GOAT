import { c as create_ssr_component, u as compute_rest_props, b as spread, e as escape_object, w as escape_attribute_value, v as validate_component, a as add_attribute, d as escape } from "./ssr.js";
import clsx from "clsx";
import { asLinkAttrs } from "@prismicio/client";
import { B as Baseline_arrow_outward } from "./baseline-arrow-outward.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0) $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0) $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Bounded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag"]);
  let { tag = "section" } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(clsx(`px-4 py-10 md:px-6 md:py-14 lg:py-16`, $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `<div class="mx-auto w-full max-w-7xl">${slots.default ? slots.default({}) : ``}</div>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkField } = $$props;
  let { label } = $$props;
  let { showIcon = true } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.linkField === void 0 && $$bindings.linkField && linkField !== void 0) $$bindings.linkField(linkField);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.showIcon === void 0 && $$bindings.showIcon && showIcon !== void 0) $$bindings.showIcon(showIcon);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(PrismicLink, "PrismicLink").$$render(
    $$result,
    {
      field: linkField,
      class: `group text-slate-900 relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform eas-out hover:scale-105 ${className}`
    },
    {},
    {
      default: () => {
        return `<span${add_attribute("class", `absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-9`, 0)}></span> <span class="relative flex items-center justify-center gap-2">${escape(label)} ${showIcon ? `${validate_component(Baseline_arrow_outward, "IconArrow").$$render($$result, {}, {}, {})}` : ``}</span>`;
      }
    }
  )}`;
});
export {
  Bounded as B,
  PrismicLink as P,
  Button as a,
  is_void as i
};

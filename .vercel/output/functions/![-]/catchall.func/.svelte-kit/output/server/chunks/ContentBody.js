import { c as create_ssr_component, v as validate_component, f as each, d as escape } from "./ssr.js";
import { H as Heading, S as SliceZone, c as components } from "./index3.js";
import { B as Bounded } from "./Button.js";
function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
const ContentBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  const formattedDate = formatDate(page.data.date);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  return `${validate_component(Bounded, "Bounded").$$render($$result, { tag: "article" }, {}, {
    default: () => {
      return `<div class="rounded-2xl border-2 border-slate-800 bg-slate-100 px-4 py-10 md:px-8 md:py-20">${validate_component(Heading, "Heading").$$render($$result, { tag: "h1" }, {}, {
        default: () => {
          return `${escape(page.data.title)}`;
        }
      })} <div class="flex gap-4 text-yellow-400">${each(page.tags, (tag) => {
        return `<span class="text-xl font-bold">${escape(tag)} </span>`;
      })}</div> <p class="mt-8 border-b border-slate-600 text-xl font-medium text-slate-600">${escape(formattedDate)}</p> <div class="prose prose-lg mt-12 w-full max-w-none md:mt-20">${validate_component(SliceZone, "SliceZone").$$render($$result, { slices: page.data.slices, components }, {}, {})}</div></div>`;
    }
  })}`;
});
export {
  ContentBody as C
};

import { c as create_ssr_component, b as spread, e as escape_object } from "./ssr.js";
const Baseline_arrow_outward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/>`}<!-- HTML_TAG_END --></svg>`;
});
export {
  Baseline_arrow_outward as B
};

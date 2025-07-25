import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as ContentBody } from "../../../../../chunks/ContentBody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(ContentBody, "ContentBody").$$render($$result, { page: data.page }, {}, {})}`;
});
export {
  Page as default
};

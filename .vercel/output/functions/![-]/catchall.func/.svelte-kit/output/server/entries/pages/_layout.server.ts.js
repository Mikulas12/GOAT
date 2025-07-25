import { c as createClient } from "../../chunks/prismicio.js";
const prerender = "auto";
async function load() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    settings
  };
}
export {
  load,
  prerender
};

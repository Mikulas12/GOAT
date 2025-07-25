import { mapSliceZone, asText } from "@prismicio/client";
import { c as createClient } from "../../../../chunks/prismicio.js";
import "clsx";
const mapper = async ({ slice, context }) => {
  const { client } = context;
  const items = slice.primary.content_type === "Blog" ? await client.getAllByType("blogpost") : await client.getAllByType("project");
  return { slice, items };
};
const mappers = {
  content_index: mapper
};
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const page = await client.getByUID("page", params.uid);
  const slices = await mapSliceZone(page.data.slices, mappers, { client });
  return {
    slices,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url
  };
}
async function entries() {
  const client = createClient();
  const pages = await client.getAllByType("page");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
export {
  entries,
  load
};

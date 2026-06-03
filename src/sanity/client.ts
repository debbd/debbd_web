import { createClient } from "next-sanity";
import {createImageUrlBuilder} from '@sanity/image-url'
export const client = createClient({
  projectId: "hbma4hch",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});
const builder = createImageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
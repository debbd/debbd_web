import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { BlogComp } from "./blogComp";
import { CATEGORIES_QUERY, POSTS_QUERY } from "./query";

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, {}),
    client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}),
  ]);

  console.log(posts);

  return <BlogComp posts={posts} categories={categories} />;
}

import React from "react";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { BlogComp } from "../../blogComp";
import { CATEGORIES_QUERY, POSTS_BY_CATEGORY_QUERY } from "../../query";

type ArchivePagePropsType = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "category" && defined(slug.current)]{ "slug": slug.current }`
  )
  return slugs.map(({ slug }) => ({ slug }))
}

export default async function ArchivePage({ params }: ArchivePagePropsType) {
  const { slug } = await params;
  const [posts, categories] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_BY_CATEGORY_QUERY, {
      categorySlug: slug,
    }),

    client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}),
  ]);

  return <BlogComp posts={posts} categories={categories} currentCat={slug} />;
}

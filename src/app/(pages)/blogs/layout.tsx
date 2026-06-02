import { BlogHero } from "./BlogHero";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { UPCOMING_POSTS_QUERY } from "./query";

type LayoutPropsType = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutPropsType) {
  const posts = await client.fetch<SanityDocument[]>(UPCOMING_POSTS_QUERY, {});

  return (
    <>
      <div className="w-full mt-[64px] isolate ">
        <BlogHero posts={posts} />
        {children}
      </div>
    </>
  );
}

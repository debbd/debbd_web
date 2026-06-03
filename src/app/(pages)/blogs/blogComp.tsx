"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui";

import Image from "next/image";
import { Badge, Button } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { SanityDocument } from "next-sanity";
import { useRouter } from "next/navigation";

export const BlogComp = ({
  posts,
  categories,
  currentCat,
}: {
  posts: SanityDocument[];
  categories: SanityDocument[];
  currentCat: string;
}) => {
  const router = useRouter();

  return (
    <div className="mt-20 w-full px-5">
      <div className="secondary-layout-width mx-auto w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-read-24 font-medium">Blogs</h2>
          <Select
            defaultValue={currentCat ? currentCat : "all-categories"}
            onValueChange={(value) => {
              if (value != "all-categories") {
                router.push(`/blogs/category/${value}`);
              } else {
                router.push(`/blogs`);
              }
            }}
          >
            <SelectTrigger className="w-[150px] sm:w-[180px]">
              <SelectValue placeholder="Choose Categories" />
            </SelectTrigger>
            <SelectContent position="popper" align="end">
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value={"all-categories"}>All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat._id} value={cat.slug}>
                    {cat.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-20">
          {posts.length > 0 &&
            posts.map((post, i) => (
              <div className="w-full h-full flex flex-col" key={i}>
                <div className="relative rounded-lg overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light bg-noise-extra" />
                  <div className="w-full h-[200px] sm:h-[170px] relative z-[10] flex justify-between items-end">
                    <div className="w-full absolute flex justify-start items-center gap-2 p-3 flex-wrap">
                      {post.categories.length > 0 &&
                        post.categories.map((cat, i) => (
                          <Link href={`/blogs/category/${cat.slug}`} key={i}>
                            <Badge
                              variant="outline"
                              color="gray"
                              className="backdrop-blur-3xl! backdrop-brightness-50!"
                              radius="full"
                              size={"2"}
                            >
                              {cat.title}
                            </Badge>
                          </Link>
                        ))}
                    </div>
                    <div className="w-full shrink-0 h-full">
                      <Image
                        src={post.thumbnail ?? ""}
                        alt={post.image_caption}
                        width={300}
                        height={300}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full p-3 flex flex-col flex-1">
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-read-14 text-foreground-3 w-full">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </p>
                    <div className="shrink-0 flex justify-end items-center gap-2">
                      <p className="text-read-13 font-medium text-foreground-3 hidden sm:block">
                        Author
                      </p>
                      <Image
                        src={post.author.avatar ?? ""}
                        width={300}
                        height={300}
                        alt={post.author.name}
                        className="w-[24px] h-[24px] border border-brdcolor-800C rounded-full overflow-hidden object-contain object-center"
                      />
                    </div>
                  </div>
                  <h4 className="text-read-16 font-medium two_line_ellipsis mt-2">
                    {post.title}
                  </h4>
                  <p className="two_line_ellipsis text-read-14 font-medium text-foreground-2 mt-2">
                    {post.meta}
                  </p>
                  <div className="mt-auto">
                    <div className="mt-2 text-read-14 font-medium text-blue-600">
                      <Link
                        href={`/post/${post.slug}`}
                        className="flex justify-start items-center gap-1 underline underline-offset-4"
                      >
                        Read more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
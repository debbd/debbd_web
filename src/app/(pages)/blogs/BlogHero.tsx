"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Badge, Button } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { SanityDocument } from "next-sanity";
import Link from "next/link";
import { useSwiperManager } from "@/hooks";
export const BlogHero = ({ posts }: { posts: SanityDocument[] }) => {
  const { swiperRef } = useSwiperManager();
  return (
    <div className="bg-gradient-to-b from-background-950C via-background-950C to-surface-blue h-fit w-full">
      <div className="secondary-layout-width flex flex-col items-center w-full py-24 mx-auto">
        <p className="text-read-15 font-medium text-foreground-4">
          SCALE YOUR BUSINESS
        </p>
        <h1 className="text-center mt-5 default-heading-size font-medium max-w-[600px] w-full ">
          Build, Scale & Automate Your Business
        </h1>
        <p className="mt-5 text-read-15 font-medium text-foreground-2 text-center max-w-[500px] w-full">
          Explore how digital tools, marketing strategies, and custom software
          can accelerate your business growth. Get practical insights,
          real-world examples, and actionable methods you can apply immediately.
        </p>

        <div className="mt-24 secondary-layout-width w-full ">
          <div className="flex justify-between items-center">
            <h3 className="text-read-24 font-medium ">Upcoming</h3>
            <div className="shrink-0 flex justify-end items-center gap-3">
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                variant="soft"
                color="gray"
                className="flex! justify-center! items-center! w-[40px]! p-0! h-[40px]! rounded-[50%]!"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                variant="soft"
                color="gray"
                className="!flex !justify-center !items-center !w-[40px] !p-0 !h-[40px] !rounded-[50%]"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          <div className="w-full mt-5">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={false}
              onSlideChange={(swiper) => {
                // setSlideIndex(swiper.realIndex);
              }}
              className="h-[360px] "
            >
              {posts.length > 0 &&
                posts.map((post, i) => {
                  return (
                    <SwiperSlide
                      key={i}
                      className="backdrop-blur-lg w-full h-full rounded-xl p-2 overflow-hidden"
                    >
                      <Link href={`/blogs/${post.slug}`}>
                        <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light bg-noise" />
                        <div className="w-full h-full relative z-10">
                          <div className="w-full h-[200px] rounded-lg overflow-hidden backdrop-blur-2xl  flex justify-between items-center">
                            <div className=" w-full relative flex flex-col justify-between items-start h-full p-5">
                              <h4 className="text-read-24">{post.tagline}</h4>

                              {post.categories.length > 0 &&
                                post.categories.map((cat, i) => {
                                  return (
                                    <Link href={`/blogs/category/${cat.slug}`}>
                                      <Badge
                                        variant="outline"
                                        color="blue"
                                        radius="full"
                                        size={"3"}
                                      >
                                        {cat.title}
                                      </Badge>
                                    </Link>
                                  );
                                })}
                            </div>
                            <div className="w-[200px] shrink-0 h-full">
                              <Image
                                src={post.thumbnail ?? ""}
                                alt={post.image_caption}
                                width={300}
                                height={300}
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="w-full p-5">
                            <p className="text-read-14 text-foreground-3">
                              <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </time>
                            </p>
                            <h4 className="text-read-18 font-medium one_line_ellipsis mt-2">
                              {post.title}
                            </h4>
                            <p className="two_line_ellipsis text-read-15 font-medium text-foreground-2 mt-2">
                              {post.meta}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

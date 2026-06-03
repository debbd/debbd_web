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
    <div className="bg-gradient-to-b px-5 from-background-950C via-background-950C to-surface-blue h-fit w-full">
      <div className="secondary-layout-width flex flex-col items-center w-full py-12 sm:py-16 md:py-24 mx-auto">
        <p className="text-read-15 font-medium text-foreground-4">
          SCALE YOUR BUSINESS
        </p>
        <h1 className="text-center mt-5 default-heading-size font-medium max-w-[600px] w-full">
          Build, Scale & Automate Your Business
        </h1>
        <p className="mt-5 text-read-15 font-medium text-foreground-2 text-center max-w-[500px] w-full px-4 sm:px-0">
          Explore how digital tools, marketing strategies, and custom software
          can accelerate your business growth. Get practical insights,
          real-world examples, and actionable methods you can apply immediately.
        </p>

        <div className="mt-12 sm:mt-16 md:mt-24 secondary-layout-width w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-read-24 font-medium">Upcoming</h3>
            <div className="shrink-0 flex justify-end items-center gap-3">
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                variant="soft"
                color="gray"
                className="flex! justify-center! items-center! w-[36px]! sm:w-[40px]! p-0! h-[36px]! sm:h-[40px]! rounded-[50%]!"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                variant="soft"
                color="gray"
                className="!flex !justify-center !items-center !w-[36px] sm:!w-[40px] !p-0 !h-[36px] sm:!h-[40px] !rounded-[50%]"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          <div className="w-full mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 16 },
                768: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={false}
              className="h-[330px] sm:h-[360px]"
            >
              {posts.length > 0 &&
                posts.map((post, i) => (
                  <SwiperSlide
                    key={i}
                    className="backdrop-blur-lg w-full h-full rounded-xl p-2 overflow-hidden"
                  >
                    <Link href={`/post/${post.slug}`}>
                      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light bg-noise" />
                      <div className="w-full h-full relative z-10">

                        {/* Card image + tagline row */}
                        <div className="w-full h-[180px] sm:h-[200px] rounded-lg overflow-hidden backdrop-blur-2xl flex justify-between items-center">
                          <div className="w-full relative flex flex-col justify-between items-start h-full p-4 sm:p-5">
                            <h4 className="text-read-18 sm:text-read-24 line-clamp-2">
                              {post.tagline}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {post.categories.length > 0 &&
                                post.categories.map((cat, i) => (
                                  <Link href={`/blogs/category/${cat.slug}`} key={i}>
                                    <Badge
                                      variant="outline"
                                      color="blue"
                                      radius="full"
                                      size={"2"}
                                    >
                                      {cat.title}
                                    </Badge>
                                  </Link>
                                ))}
                            </div>
                          </div>
                          <div className="w-[130px] sm:w-[200px] shrink-0 h-full">
                            <Image
                              src={post.thumbnail ?? ""}
                              alt={post.image_caption}
                              width={300}
                              height={300}
                              className="object-cover object-center w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="w-full p-4 sm:p-5">
                          <p className="text-read-14 text-foreground-3">
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </time>
                          </p>
                          <h4 className="text-read-16 sm:text-read-18 font-medium one_line_ellipsis mt-2">
                            {post.title}
                          </h4>
                          <p className="two_line_ellipsis text-read-14 sm:text-read-15 font-medium text-foreground-2 mt-2">
                            {post.meta}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
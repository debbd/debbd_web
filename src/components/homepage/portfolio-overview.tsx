"use client";
import { Button } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AirFlowText } from "@/components/ui";
import { PORTFOLIO_DATA_BY_CATEGORY } from "@/constants";
import { usePortfolioCategorySliding } from "@/hooks";

type PortfolioCardType = {
  title: string;
  slug?: string;
  image_url: string;
};
export const PortfolioCard = ({
  title,
  slug,
  image_url,
}: PortfolioCardType) => {
  return (
    <div className="w-[350px] h-[430px] border p-5 border-brdcolor-800C bg-gradient-to-tl from-background-950C to-background-900C rounded-30C  relative overflow-hidden">
      <div className="flex justify-center items-start">
        <h4 className="text-read-36 text-foreground-4  w-full">{title}</h4>
        <Button
          variant="soft"
          color="gray"
          className="!flex !justify-center !items-center !w-[40px] !p-0 !h-[40px] !shrink-0 !rounded-[50%]"
        >
          <Plus size={20} />
        </Button>
      </div>
      <div className="absolute w-full bottom-0 left-0 h-[calc(100%-190px)] p-2">
        <Image
          src={"/images/homepage/portfolio-overview/demo_1.png"}
          width={900}
          height={900}
          className="w-full h-full rounded-[20px] object-cover object-center"
          alt={`${image_url}`}
        />
      </div>
    </div>
  );
};

export const PortfolioOverview = () => {
  const {
    moveOverflowButtonTo,
    categoryButtonsRef,
    overflowButtonRef,
    currentCategory,
    swiperRef,
  } = usePortfolioCategorySliding();

  useEffect(() => {
    moveOverflowButtonTo(0);
  }, []);

  return (
    <div className="w-full py-32 px-5 bg-gradient-to-t from-transparent to-background-925C ">
      <div className="global-layout-width mx-auto overflow-hidden">
        <div className="secondary-layout-width mx-auto">
          <div className="flex justify-center items-center">
            <h2 className="font-530 text-size-48-leading w-full ">
              Real examples of how we've <br /> helped companies succeed
            </h2>
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

          <div className="flex justify-start items-center gap-2 mt-8 w-fit relative z-10">
            <div
              ref={overflowButtonRef}
              className="bg-blue-600 -z-[1]  rounded-full absolute left-0 top-0 transition-all duration-500"
            ></div>
            {Object.keys(PORTFOLIO_DATA_BY_CATEGORY).map((item, i) => {
              return (
                <button
                  ref={(el) => {
                    categoryButtonsRef.current[i] = el;
                  }}
                  onClick={() => {
                    moveOverflowButtonTo(i);
                    swiperRef.current?.slideTo(0);
                  }}
                  className={`text-foreground-2 cursor-pointer  ${currentCategory === item ? "!text-default-white " : "hover:bg-background-900C"} transition-colors duration-500 bg-transparent  text-read-15 font-medium py-1.5 rounded-full px-4`}
                  key={i}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="w-full mt-10">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={50}
              slidesPerView={3}
              className="w-full !overflow-visible"
              allowTouchMove={false}
            >
              {PORTFOLIO_DATA_BY_CATEGORY[currentCategory].map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <AirFlowText
                      keyIndex={currentCategory}
                      initialY={20}
                      duration={0.1 * (i + 1)}
                    >
                      <PortfolioCard
                        title={item.title}
                        image_url={item.image}
                      />
                    </AirFlowText>
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

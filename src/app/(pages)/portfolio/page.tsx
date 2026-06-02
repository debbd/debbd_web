"use client";
import { PortfolioCard } from "@/components/homepage";
import { PORTFOLIO_DATA_BY_CATEGORY } from "@/constants";
import { usePortfolioCategorySliding } from "@/hooks";
import { AirFlowText } from "@/components/ui";
import { Button } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export default function PortfolioPage() {
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
    <div className="w-full flex justify-center items-center mt-[110px] px-5 pt-10 global-layout-width mx-auto overflow-hidden ">
      <div className="secondary-layout-width flex justify-between items-start gap-10 ">
        <div className="w-[350px] shrink-0">
          <h1 className="default-heading-size font-medium">
            Successful Things We’ve Built
          </h1>

          <div className="shrink-0 flex justify-start items-center  gap-3 mt-5">
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

        <div className="w-full ">
          <div className="flex justify-start items-center gap-5  relative z-10 flex-wrap max-w-[450px] w-full">
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

          <div className="w-full overflow-hidden mt-10">
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
}

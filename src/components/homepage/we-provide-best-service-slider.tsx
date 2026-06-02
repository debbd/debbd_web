"use client";
import { Badge, Button } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight, Component } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperManager } from "@/hooks";
import { useState } from "react";
import { SERVICE_SHOW_UP_DATA } from "@/constants";

export const WeProviderTheBestServiceSlider = () => {
  const { swiperRef } = useSwiperManager();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  return (
    <div className="from-background-925C w-full bg-gradient-to-b to-background-950C py-32 px-5">
      <div className="secondary-layout-width mx-auto">
        <div className="flex justify-start items-center">
          <Badge
            radius="full"
            color="gold"
            className="flex justify-center items-center gap-1 !px-2 !py-1"
          >
            <Component size={13} />
            <span>Services</span>
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-read-56 leading-[60px] text-left font-530 text-foreground mt-5 shrink-0">
            We Provide The <br /> Effective Services
          </h2>

          <div>
            <div className="shrink-0 flex justify-end items-center gap-3">
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                variant="soft"
                color="gray"
                className="!flex !justify-center !items-center !w-[40px] !p-0 !h-[40px] !rounded-[50%]"
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
        </div>
        <div className="w-full ">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={false}
            onSlideChange={(swiper) => {
              setSlideIndex(swiper.realIndex);
            }}
            className="h-[400px]  bg-background-900C cursor-grab w-full active:cursor-grabbing border mt-5 border-brdcolor-800C rounded-30C"
          >
            {SERVICE_SHOW_UP_DATA.map((item, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className=" !flex justify-center items-center p-5 "
                >
                  <div className="max-w-[700px] w-full">
                    <h3 className="text-read-36 font-medium text-left">
                      {item.title}
                    </h3>
                    <p className="text-read-16 text-foreground-2 mt-1 text-left">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex justify-center items-center mt-3 text-read-15">
            {slideIndex + 1} / {SERVICE_SHOW_UP_DATA.length}
          </div>
        </div>
      </div>
    </div>
  );
};

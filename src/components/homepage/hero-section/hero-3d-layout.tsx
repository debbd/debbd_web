"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import Image from "next/image";

export const Hero3DLayout = () => {
  return (
    <div className="w-full">
      <div className="hero_image_wrapper ">
        <div className="hero_canvas   p-1 ">
          <div className="w-full h-full rounded-tiny hero_canvas_image  relative ">
            <div className="w-full h-full rounded-tiny  relative ">
              <div className="w-full h-[400px] hero_3d_main_box mt-32 p-2 relative bg-background-950C/20">
                <div className="absolute w-[700px] h-[1px] bg-background-900C top-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-[700px] h-[1px] bg-background-900C bottom-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-[1px] h-[500px] bg-background-900C top-1/2 left-0 -translate-y-1/2"></div>
                <div className="absolute w-[1px] h-[500px] bg-background-900C top-1/2 right-0 -translate-y-1/2"></div>

                <div className="w-full h-full rounded-[20px] overflow-hidden ">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    className="w-full h-full"
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    modules={[Autoplay, EffectCreative]}
                  >
                    <SwiperSlide className="w-full h-full bg-background-900C">
                      <Image
                        src={"/images/hero/demo1.png"}
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover object-center"
                        alt="hero-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full bg-background-900C">
                      <Image
                        src={"/images/hero/demo2.png"}
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover object-center"
                        alt="hero-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full bg-background-900C">
                      <Image
                        src={"/images/hero/demo3.png"}
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover object-center"
                        alt="hero-image"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

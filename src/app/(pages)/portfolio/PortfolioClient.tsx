"use client";
import { PortfolioCard } from "@/components/PortfolioCard";

import { usePortfolioCategorySliding, usePortfolioData } from "@/hooks";
import { AirFlowText } from "@/components/ui";
import { Button } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { PortFolioDataType, PortfolioServiceType } from "@/types";

interface Props {
    serviceTypes: PortfolioServiceType[]
    portfolio: PortFolioDataType
}

export function PortfolioClient({ serviceTypes, portfolio }: Props) {
    const {
        moveOverflowButtonTo,
        categoryButtonsRef,
        overflowButtonRef,
        currentCategory,
        swiperRef,
    } = usePortfolioCategorySliding(portfolio, serviceTypes)

    useEffect(() => {
        if (serviceTypes.length > 0) {
            moveOverflowButtonTo(0)
        }
    }, [serviceTypes])

    return (
        <div className="w-full flex justify-center items-center mt-[110px] mb-20 px-5 pt-10 global-layout-width mx-auto overflow-hidden">
            <div className="secondary-layout-width flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 w-full">

                {/* Left: heading + nav arrows */}
                <div className="w-full lg:w-[350px] lg:shrink-0 flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-4">
                    <h1 className="default-heading-size font-medium max-w-[260px] lg:max-w-none">
                        Successful Things We've Built
                    </h1>

                    <div className="shrink-0 flex justify-start items-center gap-3 lg:mt-5">
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

                {/* Right: category pills + swiper */}
                <div className="w-full">
                    <div className="flex justify-start items-center gap-5 relative z-10 flex-wrap max-w-full lg:max-w-[450px] w-full">
                        <div
                            ref={overflowButtonRef}
                            className="bg-blue-600 -z-[1] rounded-full absolute left-0 top-0 transition-all duration-500"
                        ></div>
                        {serviceTypes.map((item, i) => (
                            <button
                                ref={(el) => {
                                    categoryButtonsRef.current[i] = el;
                                }}
                                onClick={() => {
                                    moveOverflowButtonTo(i);
                                    swiperRef.current?.slideTo(0);
                                }}
                                className={`text-foreground-2 cursor-pointer ${currentCategory === item.slug.current ? "!text-default-white" : "hover:bg-background-900C"} transition-colors duration-500 bg-transparent text-read-15 font-medium py-1.5 rounded-full px-4`}
                                key={i}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="w-full overflow-hidden mt-10">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                480: { slidesPerView: 1.5, spaceBetween: 24 },
                                640: { slidesPerView: 2, spaceBetween: 32 },
                                1024: { slidesPerView: 3, spaceBetween: 50 },
                            }}
                            className="w-full !overflow-visible"
                            allowTouchMove={false}
                        >
                            {portfolio?.[currentCategory]?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <AirFlowText
                                        keyIndex={currentCategory}
                                        initialY={20}
                                        duration={0.1 * (i + 1)}
                                    >
                                        <PortfolioCard
                                            title={item.companyName}
                                            image_url={item.companyImage?.asset?.url}
                                        />
                                    </AirFlowText>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    );
}
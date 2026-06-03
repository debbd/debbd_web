"use client"
import React, { useState } from "react";
import { HeroBgDesign } from "./hero-bg-design";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { Separator } from "@/components/ui";
import { Star } from "lucide-react";
import Link from "next/link";
import { Hero3DLayout } from "./hero-3d-layout";
import { COMPANY_IMAGES } from "@/constants";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
  const [getEmail, setGetEmail] = useState("")

  const pushWithEmail = (email: string) => {
    if (email.trim() !== "") {
      router.push(`/contact?email=${encodeURIComponent(email)}`)
      return
    }

    router.push("/contact")
  }

  return (
    <div className=" global-layout-width relative mx-auto w-full overflow-hidden">
      <HeroBgDesign />

      <div className="mt-40 w-full px-5 max-[540px]:mt-32">
        <h1 className="text-read-56 leading-14 font-550 max-[900px]:text-read-48 max-[900px]:leading-12 max-[560px]:text-read-36 max-[560px]:leading-10">
          Ready to take
          <br />
          your
          <span className="text-blue-600">
            {" "}
            Business <br /> Growth
          </span>
          <br />
          to the next level?
        </h1>
        <p className="text-read-18 mt-5 font-[450] text-foreground-4 max-[900px]:text-read-16">
          Our vision is to revolutionize the way brands and advertisers target.
          Reach
        </p>
        <div className="mt-5 flex items-center justify-start gap-4 ">
          <div className="border-brdcolor-800C flex w-fit shrink-0 max-[540px]:shrink items-center justify-center gap-2 overflow-hidden rounded-full border p-0.5 pr-1 max-[540px]:p-0 ">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              onChange={(e) => setGetEmail(e.target.value)}
              className="placeholder:text-foreground-3 text-read-15 w-full max-w-[300px] border-none px-3 py-2.5 font-medium outline-none placeholder:font-normal max-[900px]:py-2 max-[540px]:hidden"
            />
            <Button
              onClick={() => pushWithEmail(getEmail)}
              className="!text-read-15 !text-default-white mr-1 shrink-0 !cursor-pointer !bg-blue-600 !px-5 !py-5 !font-medium !transition-colors hover:!bg-blue-700 max-[900px]:py-4.5!"
              radius="full"
            >
              Book a meeting
            </Button>
          </div>
          <Button
            variant="surface"
            radius="full"
            className="!text-read-15 mr-1 shrink-0 !cursor-pointer !px-5 !py-5 max-[900px]:py-4.5! !font-medium !transition-colors"
          >
            Our Works
          </Button>
        </div>
      </div>

      <div className="px-5 mt-20 mb-40 max-[900px]:mb-28 max-[540px]:mt-14 max-[540px]:mb-14 ">
        <div className="flex justify-start items-start gap-10 w-fit max-[900px]:flex-col max-[900px]:gap-5!">
          <p className="text-read-14 text-foreground-4 shrink-0 font-medium">
            Trusted by industry leaders <br />
            Loved by customers
          </p>

          <Separator
            orientation="vertical"
            className="!w-[1px] !h-[60px] !bg-background-800C max-[900px]:h-[1px]! max-[900px]:w-full! max-[900px]:hidden"
          />

          <div className="w-fit">
            <div className="flex justify-start items-center relative h-[25px]">
              <Image
                src={"/images/avatars/pimage1.png"}
                width={100}
                height={100}
                className="w-[25px] h-[25px] absolute rounded-full shrink-0 object-cover left-0 top-0 object-center select-none"
                alt="profile-image"
              />
              <Image
                src={"/images/avatars/pimage2.png"}
                width={100}
                height={100}
                className="w-[25px] h-[25px] absolute rounded-full shrink-0 object-cover left-5 top-0 object-center select-none"
                alt="profile-image"
              />
              <Image
                src={"/images/avatars/pimage3.png"}
                width={100}
                height={100}
                className="w-[25px] h-[25px] absolute rounded-full shrink-0 object-cover left-10 top-0 object-center select-none"
                alt="profile-image"
              />
              <p className="text-read-14 text-foreground shrink-0 font-medium pl-[4.5rem]">
                100k+
              </p>
            </div>
            <p className="text-read-13 text-foreground-3 leading-4 mt-2">
              Thousands of users choose us <br /> for reliability, results, and
              real impact
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="!w-[0.5px] !h-[60px] !bg-background-800C max-[900px]:h-[1px]! max-[900px]:w-full! max-[900px]:hidden"
          />
          <div className="max-[540px]:relative max-[540px]:z-[9999]">
            <div className="flex justify-start items-center gap-2">
              <Star size={16} className="text-foreground fill-foreground" />
              <span className="text-read-14 font-medium">4.8</span>
            </div>
            <p className="text-read-13 text-foreground-3 leading-4 mt-2">
              Positive ratings by pulse user <br /> around the world!
            </p>
          </div>
        </div>
        <div className="w-full mt-6 overflow-hidden max-w-[700px] relative max-[900px]:mt-[200px] max-[540px]:mt-[400px]">
          <div className="w-[80px] h-full absolute top-0 left-0 z-10 bg-gradient-to-l from-transparent to-background-950C"></div>
          <div className="w-[80px] h-full absolute top-0 right-0 z-10 bg-gradient-to-r from-transparent to-background-950C"></div>
          <div className="company_logo_marquee justify-start items-center shrink-0 ">
            {Array.from({ length: 2 }).map((_, j) => {
              return COMPANY_IMAGES.map((image, i) => {
                return (
                  <React.Fragment key={`${i}`}>
                    <Image
                      src={`/company_images/dark/${image.src}`}
                      width={500}
                      height={300}
                      className=" w-[70px] shrink-0 object-contain mx-5 object-center  filter grayscale brightness-125 contrast-[5%]  dark:invert "
                      alt={image.alt}
                    />
                  </React.Fragment>
                );
              });
            })}
          </div>
        </div>
      </div>
      <Hero3DLayout />
    </div>
  );
};

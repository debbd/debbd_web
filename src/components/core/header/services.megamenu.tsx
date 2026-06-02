import { SERVICES, SERVICES_SLUGS } from "@deb/constants";
import { Button } from "@radix-ui/themes";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconBase } from "react-icons";
import { FaBullhorn, FaGoogle, FaMousePointer, FaCode } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

type ServicesShowUpDataType = {
  title: string;
  link: string;
  icon: typeof IconBase;
  bgAndFgColor: string;
  subItems: {
    label: string;
  }[];
};

const SERVICE_SHOW_UP_DATA: ServicesShowUpDataType[] = [
  {
    title: "SEO (Search Engine Optimization)",
    link: "/services/seo",
    icon: HiSpeakerphone,
    bgAndFgColor: "bg-blue-100 text-blue-900",
    subItems: [
      { label: "Audit SEO" },
      { label: "OnPage SEO" },
      { label: "OffPage SEO/BackLinks" },
      { label: "Technical SEO" },
      { label: "E-Commerce" },
    ],
  },
  {
    title: "SMM (Social Media Marketing)",
    link: "/services/smm",
    icon: FaBullhorn,
    bgAndFgColor: "bg-pink-100 text-pink-900",
    subItems: [
      { label: "Digital Marketing Strategy Development" },
      { label: "Social Media Brand Management" },
      { label: "Social Media Advertising" },
      { label: "SMM Content/Creative Management" },
      { label: "Marketing Analytics" },
      { label: "Email Marketing" },
    ],
  },
  {
    title: "Google Ads",
    link: "/services/google-ads",
    icon: FaGoogle,
    bgAndFgColor: "bg-yellow-100 text-yellow-900",
    subItems: [
      { label: "Google Search Ads" },
      { label: "Google Display Ads" },
      { label: "Google Ads Remarketing" },
      { label: "Programmatic Advertising" },
      { label: "Dynamic Search Ads" },
    ],
  },
  {
    title: "PPC Ads (Pay Per Click)",
    link: "/services/ppc",
    icon: FaMousePointer,
    bgAndFgColor: "bg-green-100 text-green-900",
    subItems: [
      { label: "Ecommerce PPC" },
      { label: "SEM (Search Engine Marketing)" },
      { label: "Performance Max PPC" },
      { label: "Google Shopping PPC" },
      { label: "Responsive Search PPC" },
    ],
  },
  {
    title: "Web Design & Development",
    link: "/services/web-development",
    icon: FaCode,
    bgAndFgColor: "bg-purple-100 text-purple-900",
    subItems: [
      { label: "Branding Website" },
      { label: "Custom Website Development" },
      { label: "WordPress Website Design" },
      { label: "E-Commerce Website Development" },
      { label: "Software Solutions" },
    ],
  },
];

export const ServicesMegaMenu = () => {
  return (
    <div className="secondary-layout-width w-full mx-auto h-[550px] flex justify-center items-start px-5 max-[774px]:flex-col">
      <div className="w-full p-2 h-full">
        <div className="w-full h-full grid to-background-925C  rounded-10C grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 p-5 overflow-y-auto hide-scrollbar max-[1086px]:grid-cols-1!">
          {SERVICE_SHOW_UP_DATA.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i}>
                <div className="flex justify-start items-start gap-3">
                  <div
                    className={`w-[30px] h-[30px] rounded-5C flex justify-center items-center ${item.bgAndFgColor} shrink-0`}
                  >
                    <Icon size={18} />
                  </div>
                  <Link href={item.link}>
                    <h3 className="text-read-16 font-450 hover:underline underline-offset-4">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <div className="pl-11 mt-2 leading-7">
                  {item.subItems.map((subItem, j) => {
                    return (
                      <div
                        key={j}
                        className="text-read-14 font-450 text-foreground-2"
                      >
                        {subItem.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[350px] shrink-0 h-[360px] mt-5">
        <div className="w-full h-full rounded-15C bg-background-900C p-5 relative overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              src={"/images/header/vibrant-color-gradient-on-black.png"}
              width={1000}
              height={1000}
              className="object-bottom object-cover w-full h-full -z-[5] rotate-[180deg] select-none"
              alt="get-a-proposal"
            />
          </div>

          <h4 className="text-read-48 font-530 leading-12 z-10 relative">
            Get A Proposal
          </h4>
          <p className="text-read-16 mt-5 font-450 relative z-10">
            Tell us your vision, and we’ll make a custom proposal to scale your
            business to the next level.
          </p>

          <div className="w-full absolute bottom-3 left-3 ">
            <Button
              variant="soft"
              className="!rounded-5C flex justify-center items-center gap-3"
            >
              <span>Get now</span>
              <Gem size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

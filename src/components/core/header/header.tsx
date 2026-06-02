"use client";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui";
import dynamic from "next/dynamic";

const DynamicServicesMegaMenu = dynamic(
  () => import("./services.megamenu").then((mod) => mod.ServicesMegaMenu),
  {
    ssr: false,
  }
);

const DynamicCompanyMegaMenu = dynamic(
  () => import("./company.megamenu").then((mod) => mod.CompanyMegaMenu),
  {
    ssr: false,
  }
);

type HeaderLinkType = {
  label: string;
  slug?: string;
  isMegaMenu?: boolean;
  MegaMenuComponent?: React.ReactNode;
};

const HEADER_LINKS: HeaderLinkType[] = [
  {
    label: "Services",
    isMegaMenu: true,
    MegaMenuComponent: <DynamicServicesMegaMenu />,
  },
  {
    label: "Blogs",
    slug: "blogs",
  },
  {
    label: "Portfolio",
    slug: "portfolio",
  },
  {
    label: "Company",
    isMegaMenu: true,
    MegaMenuComponent: <DynamicCompanyMegaMenu />,
  },
  {
    label: "Contact",
    slug: "contact",
  },
];

export const Header = () => {
  const navMenuTriggerStyle = navigationMenuTriggerStyle();
  return (
    <header className="fixed top-0 left-0 h-[64px] z-[9999999999999999999] w-full backdrop-blur-3xl">
      <div className="global-layout-width default-px mx-auto flex h-full items-center justify-center">
        <div className="flex w-full items-center justify-start gap-5">
          <Link href={"/"}>
            <Image
              src={"/deblogo.png"}
              width={600}
              height={400}
              className="w-[65px] object-contain object-center invert dark:invert-0"
              alt="Debbd"
            />
          </Link>
          <nav>
            <NavigationMenu>
              <NavigationMenuList>
                {HEADER_LINKS.map((item, i) => {
                  return (
                    <NavigationMenuItem>
                      {item.isMegaMenu ? (
                        <>
                          <NavigationMenuTrigger>
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="!rounded-15C">
                            {item.MegaMenuComponent && item.MegaMenuComponent}
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className={navMenuTriggerStyle}
                        >
                          <Link href={`${item.slug ?? "#"}`}>{item.label}</Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex shrink-0 items-center justify-end gap-4">
          <button className=" !text-read-14 !rounded-8C !text-default-white !cursor-pointer !px-0 !py-0 !font-medium !transition-colors">
            Book a meeting
          </button>
          <div className="flex justify-center items-center gap-4">
            <button className=" !text-read-14 !rounded-8C !text-default-white !cursor-pointer !px-0 !py-0 !font-medium !transition-colors">
              Login
            </button>
            <Button
              size={"2"}
              variant="solid"
              radius="full"
              className="!text-read-14 !bg-blue-600 hover:!bg-blue-700  !cursor-pointer !px-4 !py-1.5 !font-medium !transition-colors"
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

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
import { ServicesMegaMenu } from "./services.megamenu"
import { HeaderAuthButtons } from "./HeaderAuthButtons";
import { CompanyMegaMenu } from "./company.megamenu";
import { MobileMenu } from "./MobileMenu";
import { getServices } from "@/lib/getServices";

type HeaderLinkType = {
  label: string;
  slug?: string;
  isMegaMenu?: boolean;
  MegaMenuComponent?: React.ReactNode;
};

const HEADER_LINKS: HeaderLinkType[] = [
  {
    label: "Blogs",
    slug: "blogs",
  },
  {
    label: "Portfolio",
    slug: "portfolio",
  },
  {
    label: "Contact",
    slug: "contact",
  },
];

export const Header = async () => {
  const navMenuTriggerStyle = navigationMenuTriggerStyle();
  const services = await getServices()
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
          <nav className="max-[900px]:hidden!">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!rounded-15C">
                    <ServicesMegaMenu services={services} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {HEADER_LINKS.map((item, i) => {
                  return (
                    <NavigationMenuItem key={i}>

                      <NavigationMenuLink
                        asChild
                        className={navMenuTriggerStyle}
                      >
                        <Link href={`/${item.slug ?? "#"}`}>{item.label}</Link>
                      </NavigationMenuLink>

                    </NavigationMenuItem>
                  );
                })}

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!rounded-15C">
                    <CompanyMegaMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="shrink-0 max-[900px]:hidden!">
          <HeaderAuthButtons />
        </div>

        <MobileMenu services={services} />
      </div>
    </header>
  );
};

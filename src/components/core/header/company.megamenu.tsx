import { Separator } from "@/components/ui";
import { Button } from "@radix-ui/themes";
import Image from "next/image";

type SocialLinkType = {
  image: string;
  label: string;
  desc: string;
};

const SOCIAL_LINKS: SocialLinkType[] = [
  {
    image: "/images/social/facebook.svg",
    label: "Follow Us on Facebook",
    desc: "Stay updated with our latest news, tips, and community highlights.",
  },
  {
    image: "/images/social/linkedin.svg",
    label: "Connect on LinkedIn",
    desc: "Discover our professional journey and be part of our network.",
  },
];

type BasicLinkType = {
  label: string;
  link: string;
  desc?: string;
};

const LEGALS_LINKS: BasicLinkType[] = [
  {
    label: "Privacy Policy",
    link: "privacy-policy",
    desc: "Learn how we collect, use, and protect your personal information.",
  },
  {
    label: "Terms of Service",
    link: "terms-of-service",
    desc: "Understand the rules and conditions for using our services.",
  },
];

export const CompanyMegaMenu = () => {
  return (
    <div className="secondary-layout-width w-full mx-auto h-[400px] flex justify-center items-start p-5 gap-5">
      <div className="w-[300px] h-full">
        <h5 className="text-read-14 text-foreground-3 font-medium uppercase mb-6">
          Team
        </h5>
        <div className="border border-brdcolor-800C w-full h-[150px] rounded-10C"></div>
        <p className="text-read-14 font-medium text-foreground-2 mt-3">
          A passionate team of experts working together to deliver lasting
          impact.
        </p>
        <div className="mt-5">
          <Button variant="surface" className="!rounded-5C">
            About us
          </Button>
        </div>
      </div>

      <Separator
        className="h-full !bg-background-800C"
        orientation="vertical"
      />

      <div className="w-[250px] h-full">
        <h5 className="text-read-14 text-foreground-3 font-medium uppercase mb-6">
          Follow us
        </h5>

        <div>
          {SOCIAL_LINKS.map((item, i) => {
            return (
              <div
                key={i}
                className="flex justify-start items-start gap-3 mb-5"
              >
                <Image
                  src={`${item.image}`}
                  width={200}
                  height={200}
                  className="object-cover object-center w-[40px] h-[40px] rounded-8C shrink-0"
                  alt="icon"
                />
                <div>
                  <h6 className="text-read-14 text-foreground font-medium hover:underline  underline-offset-4 cursor-pointer">
                    {item.label}
                  </h6>
                  <p className="two_line_ellipsis text-read-13 text-foreground-3 mt-1  leading-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Separator
        className="h-full !bg-background-800C"
        orientation="vertical"
      />
      <div className="w-[250px] h-full">
        <h5 className="text-read-14 text-foreground-3 font-medium uppercase mb-4 px-3">
          Legals
        </h5>

        <div>
          {LEGALS_LINKS.map((item, i) => {
            return (
              <div
                key={i}
                className="hover:bg-background-800C transition-colors px-3 py-2 cursor-pointer rounded-8C"
              >
                <h6 className="text-read-14 font-medium">{item.label}</h6>
                <p className="text-read-13 text-foreground-3 leading-4 mt-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

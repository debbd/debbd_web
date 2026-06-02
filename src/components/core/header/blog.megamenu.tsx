import { LUCIDE_ICON_DEFAULT_SIZE, SERVICES } from "@deb/constants";
import { Badge, Button, Separator } from "@radix-ui/themes";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

type MegaMenuSingleBlogType = {
  title: string;
  image: string;
  desc: string;
  link: string;
};

type BlogMegaMenuDataType = {
  [key in SERVICES]: {
    featured: MegaMenuSingleBlogType;
    moreBlogsList?: {
      title: string;
      desc: string;
      link: string;
    }[];
  };
};

// simulating data is coming from database
const BLOG_MEGA_MENU_DATA: BlogMegaMenuDataType = {
  [SERVICES.SEOSMM]: {
    featured: {
      title: "Mastering SEO & Social Media for Explosive Online Growth",
      desc: "Explore the perfect blend of SEO and social media to skyrocket your digital presence and drive targeted traffic.",
      image: "",
      link: "/blogs/seo-social-growth",
    },
    moreBlogsList: [
      {
        title: "Top 5 SEO Trends You Can't Ignore in 2025",
        desc: "Discover the cutting-edge SEO strategies that are driving results this year.",
        link: "/blogs/seo-trends-2025",
      },
      {
        title: "Social Media Ads: How to Maximize ROI in 2025",
        desc: "Unlock the potential of paid social media advertising with these expert tips.",
        link: "/blogs/social-media-ads-roi",
      },
      {
        title: "Content Marketing That Ranks: Tips from SEO Pros",
        desc: "Craft content that not only engages but climbs search rankings effectively.",
        link: "/blogs/content-marketing-seo",
      },
    ],
  },
  [SERVICES.BRANDING_STRATEGY]: {
    featured: {
      title: "Building Brands That Stick: A Strategic Approach",
      desc: "Discover how strong branding and smart strategy combine to create unforgettable, impactful businesses.",
      image: "",
      link: "/blogs/branding-strategy",
    },
    moreBlogsList: [
      {
        title: "Brand Identity: Why It Matters More Than Ever",
        desc: "Learn how a strong identity builds trust and drives loyalty.",
        link: "/blogs/brand-identity-importance",
      },
      {
        title: "The Psychology Behind Memorable Brands",
        desc: "Explore how emotions shape brand perception and influence decisions.",
        link: "/blogs/branding-psychology",
      },
      {
        title: "From Strategy to Storytelling: Building Brand Narratives",
        desc: "Turn your brand vision into stories that connect and convert.",
        link: "/blogs/brand-storytelling-strategy",
      },
    ],
  },
  [SERVICES.SOFTWARE]: {
    featured: {
      title: "From Idea to Product: The Modern Software Development Journey",
      desc: "Step into the full lifecycle of software creation — from concept to launch — using the latest frameworks and agile processes.",
      image: "",
      link: "/blogs/software-development-journey",
    },
    moreBlogsList: [
      {
        title: "Agile vs. Waterfall: Which Method Is Right for You?",
        desc: "A practical guide to choosing the best development approach for your team.",
        link: "/blogs/agile-vs-waterfall",
      },
      {
        title: "How to Scale Your Web App Like a Pro",
        desc: "Proven techniques to make your software performant and scalable.",
        link: "/blogs/scaling-web-apps",
      },
      {
        title: "The Future of Software: Trends to Watch in 2025",
        desc: "Stay ahead with these transformative software development trends.",
        link: "/blogs/software-trends-2025",
      },
    ],
  },
  [SERVICES.DEMO]: {
    featured: {
      title: "From Idea to Product: The Modern Software Development Journey",
      desc: "Step into the full lifecycle of software creation — from concept to launch — using the latest frameworks and agile processes.",
      image: "",
      link: "/blogs/software-development-journey",
    },
    moreBlogsList: [
      {
        title: "Agile vs. Waterfall: Which Method Is Right for You?",
        desc: "A practical guide to choosing the best development approach for your team.",
        link: "/blogs/agile-vs-waterfall",
      },
      {
        title: "How to Scale Your Web App Like a Pro",
        desc: "Proven techniques to make your software performant and scalable.",
        link: "/blogs/scaling-web-apps",
      },
      {
        title: "The Future of Software: Trends to Watch in 2025",
        desc: "Stay ahead with these transformative software development trends.",
        link: "/blogs/software-trends-2025",
      },
    ],
  },
};

type BlogColors = "blue" | "gold" | "green" | "red";

type GetColorByBlogCategoryType = {
  [key in SERVICES]: BlogColors;
};

const getColorByBlogCategory: GetColorByBlogCategoryType = {
  [SERVICES.SEOSMM]: "blue",
  [SERVICES.BRANDING_STRATEGY]: "gold",
  [SERVICES.SOFTWARE]: "green",
  [SERVICES.DEMO]: "red",
};

export const BlogMegaMenu = () => {
  return (
    <>
      <div className="secondary-layout-width w-full mx-auto  h-[500px] p-5 pt-0 overflow-y-auto hide-scrollbar relative">
        <div className="py-5 px-5 flex justify-between items-center border border-brdcolor-800C bg-background-900C rounded-10C mt-2">
          <p>Explore All Blogs</p>
          <Button
            variant="surface"
            className="!rounded-full shrink-0 "
            color="gray"
          >
            <span>Explore</span>
            <ChevronRightIcon size={LUCIDE_ICON_DEFAULT_SIZE} />
          </Button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] w-full h-full gap-5">
          {Object.entries(BLOG_MEGA_MENU_DATA).map(([category, value], i) => {
            return (
              <React.Fragment key={i}>
                <div className="w-full h-fit ">
                  <div className="sticky bg-background-925C mb-2 z-20 top-0 py-5">
                    <h5 className="text-read-14 text-foreground-3 font-medium uppercase  ">
                      {category}
                    </h5>
                  </div>
                  <div>
                    <div>
                      <div className="w-full border border-brdcolor-800C rounded-10C h-[150px] relative">
                        <div className="absolute top-0 left-0 p-2 pt-1 w-fit h-fit">
                          <Badge variant="soft" color="yellow" size={"1"}>
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <div className="mb-5 mt-3">
                        <h5 className="text-read-14 font-medium two_line_ellipsis">
                          {value.featured.title}
                        </h5>
                        <p className="text-[12px] text-foreground-2 mt-1 three_line_ellipsis">
                          {value.featured.desc}
                        </p>
                      </div>
                      <Button
                        variant="surface"
                        className="!rounded-8C"
                        color={`${getColorByBlogCategory[category as keyof GetColorByBlogCategoryType]}`}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                  <div className="mt-10 mb-10">
                    {value.moreBlogsList?.map((item, j) => {
                      return (
                        <div key={j} className="group  mb-5">
                          <p className="text-read-13 hover:underline cursor-pointer underline-offset-4 decoration-foreground-3 font-450 text-foreground-4 group-hover:text-foreground transition-colors">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-foreground-3 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

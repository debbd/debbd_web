import { SERVICES } from "./global";

type SoftwareServiceDetailOverview = {
  title: string;
  desc: string;
};

export const SOFTWARE_SERVICE_DETAILS: SoftwareServiceDetailOverview[] = [
  {
    title: "Scalable Software Architecture",
    desc: "We design systems that grow with your business. From startups to enterprise-level apps, our software scales seamlessly to handle traffic, features, and performance - without sacrificing speed or reliability.",
  },
  {
    title: "AWS Cloud Solutions",
    desc: "Unlock the power of the cloud with AWS. We set up, manage, and optimize cloud infrastructure for secure, scalable, and cost-effective software delivery.",
  },
  {
    title: "WordPress Development",
    desc: "From custom themes to powerful plugins, we build fast, secure, and flexible WordPress solutions that give you full control over content, SEO, and performance.",
  },
  {
    title: "System Integration & Automation",
    desc: "Streamline your operations by connecting software, APIs, and platforms. We automate workflows and data flow so your business runs smarter, not harder.",
  },
];

type ServicesShowUpDataType = {
  title: string;
  desc: string;
};

export const SERVICE_SHOW_UP_DATA: ServicesShowUpDataType[] = [
  {
  title: "Search Engine Optimization (SEO)",
  desc: "Dominate search results and stay ahead of competitors with advanced SEO solutions that drive sustainable traffic, leads, and revenue."
},
{
  title: "Social Media Marketing (SMM)",
  desc: "Connect with your audience where they spend their time and turn engagement into measurable business growth through strategic social media marketing."
},
{
  title: "Branding & Strategy",
  desc: "Build a brand that people remember, trust, and choose. We combine creativity and strategy to position your business for long-term success."
},
{
  title: "Software Development",
  desc: "From startups to enterprises, we deliver high-performance software solutions that streamline operations, enhance customer experiences, and fuel growth."
}
];



type CompanyImagesDataType = {
  src: string;
  alt: string;
};

export const COMPANY_IMAGES: CompanyImagesDataType[] = [
  {
    src: "aequor.png",
    alt: "aequor logo",
  },
  {
    src: "funtech.png",
    alt: "funtech logo",
  },
  {
    src: "openai.png",
    alt: "openai logo",
  },
  {
    src: "prime.png",
    alt: "prime logo",
  },
  {
    src: "sonar.png",
    alt: "sonar logo",
  },
  {
    src: "startech.png",
    alt: "startech logo",
  },
  {
    src: "vercel.png",
    alt: "vercel logo",
  },
];

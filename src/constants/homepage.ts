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
    desc: "Boost your online visibility and reach the right audience with data-driven SEO strategies and impactful social media campaigns that drive engagement and conversions.",
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Boost your online visibility and reach the right audience with data-driven SEO strategies and impactful social media campaigns that drive engagement and conversions.",
  },
  {
    title: SERVICES.BRANDING_STRATEGY,
    desc: "We help you define your brand voice and create designs that resonate with your target market.",
  },
  {
    title: SERVICES.SOFTWARE,
    desc: "Turn your ideas into powerful digital solutions. From web apps to enterprise systems, we build scalable, secure software tailored to your business goals.",
  },
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

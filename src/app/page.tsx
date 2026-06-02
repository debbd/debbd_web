import {
  PortfolioOverview,
  SoftwareSection,
  HeroSection,
  DigitalMarketingSolutions,
  WeProviderTheBestServiceSlider,
} from "@/components/homepage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeProviderTheBestServiceSlider />
      <DigitalMarketingSolutions />
      <SoftwareSection />
      <PortfolioOverview />
      <div className="mt-64"></div>
    </>
  );
}

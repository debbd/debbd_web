import { LUCIDE_ICON_DEFAULT_SIZE } from "@/constants";
import { Badge, Button } from "@radix-ui/themes";
import { ArrowRight, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

export const DigitalMarketingSolutions = () => {
  return (
    <div className="w-full py-32 px-5 max-[670px]:py-20">
      <div className="secondary-layout-width mx-auto ">
        <div className="max-[860px]:flex max-[860px]:justify-center">
          <Badge
            radius="full"
            className="!px-2 !py-1 flex justify-center items-center gap-1"
          >
            <BadgeDollarSign size={LUCIDE_ICON_DEFAULT_SIZE} /> Digital Marketing
          </Badge>
        </div>

        <div className="flex justify-between items-end mt-5 max-[860px]:flex-col max-[860px]:items-center max-[860px]:gap-3">
          <h2 className="text-size-48-leading shrink-0 font-530 max-[860px]:text-center max-[900px]:text-read-48 max-[900px]:leading-12 max-[560px]:text-read-36 max-[560px]:leading-10">
            Bringing Innovative <br />
            Digital Marketing Solutions
          </h2>
          <Link href="/contact">
          <Button color="blue" variant="soft" radius="full" size={"3"}>
            Get Started <ArrowRight size={LUCIDE_ICON_DEFAULT_SIZE} />
          </Button>
          </Link>
        </div>

        <div className="w-full rounded-20C border border-brdcolor-800C mt-5 h-[350px] flex justify-center max-[860px]:flex-col max-[860px]:h-fit items-center overflow-hidden">
          <div className="flex justify-center items-center w-full h-full max-[690px]:flex-col">

            {/* Card 1 — SEO */}
            <div className="w-full h-full border-r p-5 border-brdcolor-800C flex flex-col justify-between max-[690px]:border-r-0 max-[690px]:border-b">
              <div>
                <h3 className="text-read-18 font-450 leading-5">
                  Search Engine Optimization
                </h3>
                <p className="text-read-15 font-450 text-foreground-2 mt-3">
                  Rank higher, get found faster, and outperform competitors on Google.
                </p>
              </div>
              <div className="w-full h-fit border-t max-[860px]:mt-5 border-brdcolor-800C flex justify-center items-center pt-3">
                <div className="w-full h-full px-3 border-brdcolor-800C border-r !pl-0">
                  <div className="relative text-read-24 font-450">
                    +312 <span className="absolute text-read-14">%</span>
                  </div>
                  <p className="text-read-13 text-foreground-2">Organic traffic</p>
                </div>
                <div className="w-full h-full px-3 border-brdcolor-800C">
                  <div className="relative text-read-24 font-450">
                    +87 <span className="absolute text-read-14">%</span>
                  </div>
                  <p className="text-read-13 text-foreground-2">Keyword rankings</p>
                </div>
              </div>
            </div>

            {/* Card 2 — Paid Ads */}
            <div className="w-full h-full border-r p-5 border-brdcolor-800C flex flex-col justify-between max-[690px]:border-r-0 max-[690px]:border-b">
              <div>
                <h3 className="text-read-18 font-450 leading-5">
                  Paid Advertising & PPC
                </h3>
                <p className="text-read-15 font-450 text-foreground-2 mt-3">
                  High-converting ad campaigns that turn every dollar into measurable ROI.
                </p>
              </div>
              <div className="w-full h-fit border-t max-[860px]:mt-5 border-brdcolor-800C flex justify-center items-center pt-3">
                <div className="w-full h-full px-3 border-brdcolor-800C border-r !pl-0">
                  <div className="relative text-read-24 font-450">
                    +226 <span className="absolute text-read-14">%</span>
                  </div>
                  <p className="text-read-13 text-foreground-2">Return on ad spend</p>
                </div>
                <div className="w-full h-full px-3 border-brdcolor-800C">
                  <div className="relative text-read-24 font-450">
                    −42 <span className="absolute text-read-14">%</span>
                  </div>
                  <p className="text-read-13 text-foreground-2">Cost per lead</p>
                </div>
              </div>
            </div>

            {/* Card 3 — Social */}
            <div className="w-full h-full p-5 border-brdcolor-800C flex flex-col justify-between max-[690px]:border-b">
              <div>
                <h3 className="text-read-18 font-450 leading-5">
                  Social Media Growth
                </h3>
                <p className="text-read-15 font-450 text-foreground-2 mt-3">
                  Build an engaged audience that trusts your brand and buys from you.
                </p>
              </div>
              <div className="w-full h-fit border-t max-[860px]:mt-5 border-brdcolor-800C flex justify-center items-center pt-3">
                <div className="w-full h-full px-3 border-brdcolor-800C border-r !pl-0">
                  <div className="relative text-read-24 font-450">
                    +180 <span className="absolute text-read-14">%</span>
                  </div>
                  <p className="text-read-13 text-foreground-2">Follower growth</p>
                </div>
                <div className="w-full h-full px-3 border-brdcolor-800C">
                  <div className="relative text-read-24 font-450">
                    +3.6 <span className="absolute text-read-14">x</span>
                  </div>
                  <p className="text-read-13 text-foreground-2">Engagement rate</p>
                </div>
              </div>
            </div>

          </div>

          {/* Blue highlight panel */}
          <div className="w-[400px] h-full bg-blue-950 max-[860px]:w-full flex flex-col justify-between p-5">
            <span className="text-read-56 font-450">$100M+</span>
            <div>
              <h4 className="text-read-18 font-450">Revenue Generated for Clients</h4>
              <p className="mt-2 text-blue-200 text-read-14">
                Across SEO, paid ads, and social — we've helped businesses of all sizes
                scale their digital presence and drive real, trackable revenue growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
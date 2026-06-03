
import { getServices, ServiceItem } from "@/lib/getServices";
import { Button } from "@radix-ui/themes";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const ServicesMegaMenu = ({services}: {services: ServiceItem[]} ) => {
  

  return (
    <div className="secondary-layout-width w-full mx-auto h-[550px] flex justify-center items-start px-5 max-[774px]:flex-col">
      <div className="w-full p-2 h-full">
        <div className="w-full h-full grid to-background-925C  rounded-10C grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 p-5 overflow-y-auto hide-scrollbar max-[1086px]:grid-cols-1!">
          {services.map((item, i) => {

            return (
              <div key={i}>
                <div className="flex justify-start items-start gap-3">
                  <div
                    className={`w-[30px] h-[30px] rounded-5C flex overflow-hidden justify-center items-center border border-brdcolor-800C bg-background-900C shrink-0`}
                  >
                    <Image
                      src={item.icon ?? ""}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-cover object-center"
                    />
                  </div>
                  <Link href={item.slug.current}>
                    <h3 className="text-read-16 font-450 hover:underline underline-offset-4">
                      {item.name}
                    </h3>
                  </Link>
                </div>
                <div className="pl-11 mt-2 leading-7">
                  {item?.tags?.map((subItem, j) => {
                    return (
                      <div
                        key={j}
                        className="text-read-14 font-450 text-foreground-2"
                      >
                        {subItem}
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

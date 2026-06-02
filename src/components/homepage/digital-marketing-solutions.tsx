import { LUCIDE_ICON_DEFAULT_SIZE } from "@/constants";
import { Badge, Button } from "@radix-ui/themes";
import { ArrowRight, BadgeDollarSign } from "lucide-react";

export const DigitalMarketingSolutions = () => {
  return (
    <div className="w-full py-32">
      <div className="secondary-layout-width mx-auto ">
        <Badge
          radius="full"
          className="!px-2 !py-1 flex justify-center items-center gap-1"
        >
          <BadgeDollarSign size={LUCIDE_ICON_DEFAULT_SIZE} /> Digital Marketing
        </Badge>
        <div className="flex justify-between items-end mt-5">
          <h2 className="text-size-48-leading shrink-0 font-530">
            Bringing Innovative <br />
            Digital Marketing Solutions
          </h2>

          <Button color="blue" variant="soft" radius="full" size={"3"}>
            Get Started <ArrowRight size={LUCIDE_ICON_DEFAULT_SIZE} />
          </Button>
        </div>
        <div className="w-full rounded-20C border border-brdcolor-800C mt-5 h-[350px] flex justify-center items-center overflow-hidden">
          <div className="flex justify-center items-center w-full h-full">
            {Array.from({ length: 3 }).map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-full border-r p-5 border-brdcolor-800C flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-read-18 font-450 leading-5">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-read-15 font-450 text-foreground-2 mt-3">
                      Lorem ipsum dolor
                    </p>
                  </div>

                  <div className="w-full h-fit border-t border-brdcolor-800C flex justify-center items-center pt-3">
                    {Array.from({ length: 2 }).map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={`w-full h-full px-3 border-brdcolor-800C ${i === 0 && "border-r !pl-0"}`}
                        >
                          <div className="relative text-read-24 font-450 ">
                            +226{" "}
                            <span className="absolute text-read-14">%</span>
                          </div>
                          <p className="text-read-13 text-foreground-2">
                            Top five ranks
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[400px] h-full bg-blue-950 flex flex-col justify-between p-5">
            <span className="text-read-56 font-450">100M+</span>
            <div>
              <h4 className="text-read-18 font-450">Investment</h4>
              <p className="mt-2 text-blue-200 text-read-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolorem doloribus odit quasi autem, possimus facere
                itaque libero necessitatibus aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Badge, Button } from "@radix-ui/themes";
import { Code } from "lucide-react";
import Image from "next/image";
import { SOFTWARE_SERVICE_DETAILS } from "@/constants";

export const SoftwareSection = () => {
  return (
    <div className="w-full py-32 px-5">
      <div className="secondary-layout-width mx-auto  ">
        <div className="flex justify-center items-center">
          <Badge
            radius="full"
            color="purple"
            className="flex justify-center items-center gap-1 !px-2 !py-1"
          >
            <Code size={13} />
            <span>Software</span>
          </Badge>
        </div>
        <h2 className="text-center mt-3 text-size-48-leading font-530">
          Your One-Stop <span className="text-purple-500">Solution</span> for{" "}
          <span className="text-purple-500">Digital</span> Success
        </h2>
        <div className="flex justify-center items-center mt-2">
          <p className="text-read-18 font-450 text-center max-w-[800px] w-full text-foreground-4">
            Everything you need, all in one place. From research and software
            design to development and scalability, we've got you covered.
          </p>
        </div>
        <div className="w-full h-[400px] flex justify-center items-center gap-5 mt-16">
          <div className="w-[450px] overflow-hidden h-full shrink-0 relative">
            <div className="w-full h-full rounded-[25px] overflow-hidden relative">
              <h3 className="text-read-48 leading-14 font-medium">
                Software Design & Development
              </h3>
              <h3 className="text-read-24 font-medium mt-5 text-purple-500">
                AI Powered Solutions
              </h3>
              <ul className="my-6 ml-6 text-foreground-4 list-disc [&>li]:mt-2 ">
                <li>Web Apps</li>
                <li>SAAS Products</li>
                <li>Mobile Apps</li>
              </ul>
              <Button variant="soft" color="purple" radius="full">
                Talk To Us
              </Button>
            </div>
          </div>
          <div className="w-full h-full relative">
            <div className="w-full h-full rounded-30C overflow-hidden">
              <div className="w-full h-full rounded-[25px] overflow-hidden bg-gradient-to-tl from-transparent via-background-950C/60 to-background-950C p-5 relative">
                <div className="absolute top-0 left-0 w-full h-full -z-[1]">
                  <Image
                    src={"/images/homepage/sass-template.png"}
                    width={900}
                    height={500}
                    className="object-cover object-center w-full h-full"
                    alt="sass-template"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-4 auto-cols-auto gap-8 mt-8">
          {SOFTWARE_SERVICE_DETAILS.map((item, i) => {
            return (
              <div key={i}>
                <h4 className="text-read-16 font-medium ">{item.title}</h4>
                <p className="text-read-14 text-foreground-2 three_line_ellipsis mt-1">
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

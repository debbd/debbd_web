import React from "react";
import { Badge, Button } from "@radix-ui/themes";
import { Code, Phone } from "lucide-react";
import Image from "next/image";
import { SOFTWARE_SERVICE_DETAILS } from "@/constants";
import Link from "next/link";

export const SoftwareSection = () => {
  return (
    <div className="w-full py-32 px-5 max-[670px]:py-20">
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
        <h2 className="text-center mt-3 text-size-48-leading font-530 max-[900px]:text-read-48 max-[900px]:leading-12 max-[560px]:text-read-36 max-[560px]:leading-10">
          Your One-Stop <span className="text-purple-500">Solution</span> for{" "}
          <span className="text-purple-500">Digital</span> Success
        </h2>
        <div className="flex justify-center items-center mt-2">
          <p className="text-read-18 font-450 text-center max-w-[800px] w-full text-foreground-4">
            Everything you need, all in one place. From research and software
            design to development and scalability, we've got you covered.
          </p>
        </div>
        <div className="w-full h-[400px] max-[1000px]:h-fit flex justify-center items-center gap-5 mt-16 max-[1000px]:mt-5 max-[1000px]:flex-col max-[1000px]:justify-start">
          <div className="w-[350px] overflow-hidden h-full shrink-0 relative max-[1000px]:w-full max-[1000px]:shrink">
            <div className="w-full h-full rounded-[25px] overflow-hidden relative ">

              <h3 className="text-read-24 font-medium mt-5 text-purple-500 max-[1000px]:text-center">
                AI Powered Solutions
              </h3>
              <ul className="my-6 ml-6 text-foreground-4 list-disc max-[1000px]:mt-1 max-[1000px]:mb-4 [&>li]:mt-2 max-[1000px]:mx-auto max-[1000px]:flex max-[1000px]:gap-8! max-[1000px]:justify-center">
                <li>Web Apps</li>
                <li>SAAS Products</li>
                <li>Mobile Apps</li>
              </ul>
              <div className="max-[1000px]:flex max-[1000px]:justify-center">
                <Link target="_blank" href={"https://wa.me/8801958909334?text=Hello%2C%20I%20want%20to%20discuss%20a%20project"}>
                  <Button variant="soft" color="purple" radius="full" size={"3"} >
                    <Phone size={18} /> Talk To Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full  rounded-3xl overflow-hidden max-[1000px]:h-[400px] max-[1000px]:shrink-0 max-[670px]:h-[300px] max-[490px]:h-[250px]">

            <Image
              src={"/images/homepage/sass-template.png"}
              width={900}
              height={500}
              className="object-cover object-center w-full h-full"
              alt="sass-template"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-4 auto-cols-auto gap-8 mt-8 max-[900px]:grid-cols-2 max-[530px]:grid-cols-1 ">
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

import { Button } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import Image from "next/image";

type PortfolioCardType = {
  title: string;
  slug?: string;
  image_url: string;
};
export const PortfolioCard = ({
  title,
  slug,
  image_url,
}: PortfolioCardType) => {
  return (
    <div className="w-[350px] h-[430px] border p-5 border-brdcolor-800C bg-gradient-to-tl from-background-950C to-background-900C rounded-30C  relative overflow-hidden">
      <div className="flex justify-center items-start">
        <h4 className="text-read-36 text-foreground-4  w-full">{title}</h4>
        <Button
          variant="soft"
          color="gray"
          className="!flex !justify-center !items-center !w-[40px] !p-0 !h-[40px] !shrink-0 !rounded-[50%]"
        >
          <Plus size={20} />
        </Button>
      </div>
      <div className="absolute w-full bottom-0 left-0 h-[calc(100%-190px)] p-2">
        <Image
          src={"/images/homepage/portfolio-overview/demo_1.png"}
          width={900}
          height={900}
          className="w-full h-full rounded-[20px] object-cover object-center"
          alt={`${image_url}`}
        />
      </div>
    </div>
  );
};
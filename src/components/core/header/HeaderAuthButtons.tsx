
import { Button } from "@radix-ui/themes";
import Link from "next/link";
export const HeaderAuthButtons = () => {
  return <div className="flex shrink-0 items-center justify-end gap-4">
    <Link href={"/contact"}>
      <Button
        size={"2"}
        variant="solid"
        radius="full"
        className="!text-read-14 !bg-blue-600 hover:!bg-blue-700  !cursor-pointer !px-4 !py-1.5 !font-medium !transition-colors"
      >
        Book a meeting
      </Button>
    </Link>
    {/* <button className="!text-read-14 !rounded-8C !text-default-white !cursor-pointer !px-0 !py-0 !font-medium !transition-colors">
                Book a meeting
              </button> */}
    {/* <div className="flex justify-center items-center gap-4">
                <button className=" !text-read-14 !rounded-8C !text-default-white !cursor-pointer !px-0 !py-0 !font-medium !transition-colors">
                  Login
                </button>
                <Button
                  size={"2"}
                  variant="solid"
                  radius="full"
                  className="!text-read-14 !bg-blue-600 hover:!bg-blue-700  !cursor-pointer !px-4 !py-1.5 !font-medium !transition-colors"
                >
                  Signup
                </Button>
              </div> */}
  </div>
}
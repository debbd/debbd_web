"use client"
import { Button } from "@radix-ui/themes"
import { ChevronLeft, ChevronRight, Equal } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetTrigger,
    SlideTransition,
} from "@/components/ui"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { ServiceItem } from "@/lib/getServices"
import { Facebook, LinkedIn } from "@/components/ui/icons"


type View = "main" | "services" | "company"

const COMPANY_LINKS = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Team", href: "/team" },
    { label: "Press", href: "/press" },
]

const NoiseButton = ({ children, ...props }: React.ComponentProps<"div"> & { children: React.ReactNode }) => {
    return <div className="relative" {...props}>
        <div className=" w-full rounded-full relative overflow-hidden h-10 flex items-center justify-between px-4 text-read-14 font-medium text-default-white">
            {children}
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-full opacity-50 mix-blend-overlay bg-noise transition-opacity duration-200" />
    </div>
}

export const MobileMenu = ({ services }: { services: ServiceItem[] }) => {

    const [view, setView] = useState<View>("main")
    const [direction, setDirection] = useState<1 | -1>(1)

    const navigate = (to: View, dir: 1 | -1) => {
        setDirection(dir)
        setView(to)
    }

    return <nav className="hidden max-[900px]:flex justify-center items-center w-fit">
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" color="gray">
                    <Equal size={24} />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-transparent! backdrop-blur-xl overflow-x-hidden overflow-y-auto">
                <div className="w-full">
                    <div className="w-full p-4">
                        <Image
                            src={"/deblogo.png"}
                            width={600}
                            height={400}
                            className="w-[50px] object-contain object-center invert dark:invert-0"
                            alt="Debbd"
                        />
                    </div>

                    <div className="mt-5 px-2 relative">
                        <SlideTransition id={view} direction={direction}>

                            {view === "main" && (
                                <div className="space-y-2">
                                    <NoiseButton onClick={() => navigate("services", 1)}>
                                        Services <ChevronRight size={18} />
                                    </NoiseButton>
                                    <NoiseButton>
                                        Blogs
                                    </NoiseButton>
                                    <NoiseButton>
                                        Portfolio
                                    </NoiseButton>
                                    <NoiseButton>
                                        Contact
                                    </NoiseButton>
                                    <NoiseButton onClick={() => navigate("company", 1)}>
                                        Company <ChevronRight size={18} />
                                    </NoiseButton>
                                </div>
                            )}

                            {view === "services" && (
                                <div className="w-full">
                                    <div className="w-full flex justify-between items-center px-3 text-foreground-4">
                                        All services
                                        <Button
                                            onClick={() => navigate("main", -1)}
                                            variant="soft"
                                            color="gray"
                                            className="px-2! py-1! rounded-full! font-geist-sans!"
                                        >
                                            <ChevronLeft size={18} /> Back
                                        </Button>
                                    </div>
                                    <div className="px-3 w-full mt-5">
                                        {services?.map((item, i) => (
                                            <Link href={""} key={i}>
                                                <div className="h-10 flex items-center justify-between px-4 backdrop-blur-lg relative mb-2">
                                                    <div className="pointer-events-none absolute rounded-full opacity-40 inset-0 mix-blend-soft-light bg-noise" />
                                                    <span className="one_line_ellipsis flex-1 min-w-0">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {view === "company" && (
                                <div className="w-full  ">
                                    <div className="w-full flex justify-between items-center px-3 text-foreground-4">
                                        Company
                                        <Button
                                            onClick={() => navigate("main", -1)}
                                            variant="soft"
                                            color="gray"
                                            className="px-2! py-1! rounded-full! font-geist-sans!"
                                        >
                                            <ChevronLeft size={18} /> Back
                                        </Button>
                                    </div>
                                    <div className="px-3 w-full mt-5">
                                        <div className="w-full h-full">
                                            <h5 className="text-read-15 text-foreground font-medium  mb-5">
                                                Team
                                            </h5>
                                            <div className="border border-brdcolor-800C w-full h-[150px] rounded-10C"></div>
                                            <p className="text-read-14 text-foreground-2 mt-3">
                                                A passionate team of experts working together to deliver lasting
                                                impact.
                                            </p>
                                            <div className="mt-5">
                                                <Button variant="surface" className="rounded-5C! font-geist-sans! px-3! py-1!" color="blue">
                                                    About us
                                                </Button>
                                            </div>

                                            <h5 className="text-read-15 text-foreground font-medium  my-5 border-t border-brdcolor-800C pt-5">
                                                Follow Us

                                            </h5>
                                            <div >
                                                <div className="w-full relative bg-blue-500/20 backdrop-blur-md p-3 gap-3 rounded-xl flex justify-start items-center overflow-hidden">
                                                    <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay bg-noise transition-opacity duration-200" />
                                                    <div className="w-[30px] h-[30px] shrink-0">

                                                        <Facebook />
                                                    </div>
                                                    <p className="text-read-13 text-foreground two_line_ellipsis w-full">Stay updated with our latest news, tips, and community highlights.</p>
                                                </div>

                                                <div className="w-full relative bg-sky-500/20 mt-2 backdrop-blur-md p-3 gap-3 rounded-xl flex justify-start items-center overflow-hidden">
                                                    <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay bg-noise transition-opacity duration-200" />
                                                    <div className="w-[30px] h-[30px] shrink-0">

                                                        <LinkedIn />
                                                    </div>
                                                    <p className="text-read-13 text-foreground two_line_ellipsis w-full">Discover our professional journey and be part of our network.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </SlideTransition>
                    </div>
                </div>

                <SheetFooter>
                    <div className="w-full flex-1">
                        <Button radius="full" size={"2"} color="gray" variant="soft" className="flex-1! w-full! py-2! rounded-full! font-geist-sans!">
                            Book a meeting
                        </Button>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Button radius="full" size={"2"} color="blue" variant="classic" className="flex-1! py-2! rounded-full! !bg-blue-600 hover:!bg-blue-700 font-geist-sans!">
                            Signup
                        </Button>
                        <Button radius="full" size={"2"} color="blue" variant="surface" className="flex-1! py-2! rounded-full! font-geist-sans!">
                            Login
                        </Button>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    </nav>
}
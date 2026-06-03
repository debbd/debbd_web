import { Gmail, WhatsApp } from "@/components/ui/icons";
import { LucideIcon, Phone } from "lucide-react"
import React from "react";



type LinksWithIcons = {
    label: string,
    url: string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;

}

const CONTACT_LINKS: LinksWithIcons[] = [
    {
        label: "Shoot us an email",
       url: "https://mail.google.com/mail/?view=cm&to=digitaldebup@gmail.com&su=Project Inquiry",
        icon: Gmail
    },
    {
        label: "WhatsApp",
        url: "https://wa.me/8801958909334?text=Hello%2C%20I%20want%20to%20discuss%20a%20project",
        icon: WhatsApp
    }
]

const CONTACT_NUMBERS: LinksWithIcons[] = [
    {
        label: "(+880) 1958-909334",
        url: "tel:+8801958909334",
        icon: Phone
    }
]



export const ContactDetailsLinks = () => {
    return <div className="w-full">
        <h3 className="text-read-18 font-medium">Chat with us</h3>
        <p className="text-read-15 font-medium text-foreground-2">Talk to our friendly team.</p>

        <div className="mt-5 flex flex-col gap-1.5">
            {
                CONTACT_LINKS.map((item, i) => {
                    const Icon = item.icon
                    return <a target="_blank" href={item.url} key={i}><div className="flex justify-start hover:underline underline-offset-4 items-center gap-2" >
                        <div className="w-[18px] h-[18px]">
                            <Icon />
                        </div>
                        <p className="text-read-15 font-medium">{item.label}</p>


                    </div></a>
                })
            }

        </div>

        <h3 className="text-read-18 font-medium mt-10">Call us</h3>
        <p className="text-read-15 font-medium text-foreground-2">Call our team Mon-Fri from 8am to 5pm</p>
        <div className="mt-5 flex flex-col gap-1.5">
            {
                CONTACT_NUMBERS.map((item, i) => {
                    const Icon = item.icon
                    return <a target="_blank" href={item.url} key={i}><div className="flex justify-start hover:underline underline-offset-4 items-center gap-2" >
                        <div className="w-[18px] h-[18px] *:size-[18px]!">
                            <Icon />
                        </div>
                        <p className="text-read-15 font-medium">{item.label}</p>


                    </div></a>
                })
            }
        </div>
    </div>
}
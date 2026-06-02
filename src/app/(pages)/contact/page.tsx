
import ContactForm from "./ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@yoursite.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
]

export default function ContactPage() {
  return (
    <div className="w-full flex justify-center px-5 pt-10 mt-[110px] global-layout-width mx-auto pb-20">
      <div className="secondary-layout-width w-full max-w-2xl">

        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
          <Mail size={12} /> Get in touch
        </span>

        <h1 className="default-heading-size font-medium mb-2">
          Let's work together
        </h1>
        <p className="text-muted-foreground text-[15px] mb-10">
          Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
        </p>

        <ContactForm />

        <div className="flex items-center gap-3 my-9 text-muted-foreground text-sm">
          <span className="flex-1 h-px bg-border" />
          or reach us directly
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-3 gap-3 max-[622px]:grid-cols-1">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-secondary rounded-xl p-4 flex flex-col gap-1.5"
            >
              <Icon size={20} className="text-blue-500" />
              <span className="text-xs text-muted-foreground font-medium">{label}</span>
              <span className="text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
"use client"

import { PhoneCodeInput } from "@/components/contact"
import { Field, FieldGroup, FieldLabel, Input, Textarea } from "@/components/ui"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { ServiceItem } from "@/lib/getServices"
import { client } from "@/sanity/client"
import { Button, Checkbox } from "@radix-ui/themes"
import { useEffect, useState } from "react"


export const ContactForm = () => {
    const [services, setServices] = useState<ServiceItem[]>([])

  useEffect(() => {
    client.fetch<ServiceItem[]>(`*[_type == "service"] {
      name,
      slug,
    }`).then(setServices)
  }, [])
    return <div className="w-full">
        <FieldGroup>

            <div className="grid grid-cols-2 gap-4">

                <Field>
                    <FieldLabel htmlFor="first_name" >First Name</FieldLabel>
                    <Input placeholder="Jhon" required id="first_name" className="backdrop-blur-sm" />
                </Field>

                <Field>
                    <FieldLabel htmlFor="last_name">Last Name</FieldLabel>
                    <Input placeholder="Doe" required id="last_name" className="backdrop-blur-sm" />
                </Field>
            </div>

            <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input placeholder="jhondoe@gmail.com" required id="email" className="backdrop-blur-sm" />
            </Field>

            <Field>
                <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                <InputGroup className="h-9! backdrop-blur-sm"  >
                    <InputGroupInput id="phone" placeholder="your number" />
                    <InputGroupAddon align="inline-start">
                        <PhoneCodeInput />
                    </InputGroupAddon>
                </InputGroup>

            </Field>

            <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea placeholder="Leave us a message" rows={6} />
            </Field>

            <Field>
                <FieldLabel htmlFor="service">Services</FieldLabel>
                {
                    services.map((item, i) => {
                        return <Field orientation="horizontal" key={i}>
                            <Checkbox id={item.slug.current} color="blue" variant="surface" />
                            <FieldLabel htmlFor={item.slug.current}>{item.name}</FieldLabel>
                        </Field>
                    })
                }

            </Field>

            <Field>
                <Button variant="surface" color="blue" size={"2"}>Send Message</Button>
            </Field>

        </FieldGroup>
    </div>
}
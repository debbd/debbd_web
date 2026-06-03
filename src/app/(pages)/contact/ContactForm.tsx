// components/contact/ContactForm.tsx
"use client"

import { PhoneCodeInput } from "@/components/contact"
import { Field, FieldGroup, FieldLabel, Input, Textarea } from "@/components/ui"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { ServiceItem } from "@/lib/getServices"
import { client } from "@/sanity/client"
import { sendContactEmail } from "@/app/actions/contact"
import { Button, Checkbox, Callout } from "@radix-ui/themes"
import { CheckCircle, AlertCircle } from "lucide-react"
import { useEffect, useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"

export const ContactForm = () => {
  const searchParams = useSearchParams();
  const getEmail = searchParams.get("email")
  const [services, setServices] = useState<ServiceItem[]>([])
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [phoneCode, setPhoneCode] = useState('')
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const [email, setEmail] = useState("")

  useEffect(() => {
    if(getEmail) {
      setEmail(getEmail);
    }
  }, [getEmail])

  useEffect(() => {
    client.fetch<ServiceItem[]>(`*[_type == "service"] { name, slug }`).then(setServices)
  }, [])

  const toggleService = (name: string) => {
    setSelectedServices(prev =>
      prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    startTransition(async () => {
      const res = await sendContactEmail({
        firstName: fd.get('first_name') as string,
        lastName: fd.get('last_name') as string,
        email: fd.get('email') as string,
        phone: `${phoneCode} ${fd.get('phone') ?? ''}`.trim(),
        message: fd.get('message') as string,
        services: selectedServices,
      })

      setResult(res)
      if (res.success) form.reset()
    })
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <FieldGroup>

          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="first_name">First Name</FieldLabel>
              <Input name="first_name" placeholder="John" required id="first_name" className="backdrop-blur-sm" />
            </Field>
            <Field>
              <FieldLabel htmlFor="last_name">Last Name</FieldLabel>
              <Input name="last_name" placeholder="Doe" required id="last_name" className="backdrop-blur-sm" />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input name="email" type="email" defaultValue={email} placeholder="johndoe@gmail.com" required id="email" className="backdrop-blur-sm" />
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">Phone number</FieldLabel>
            <InputGroup className="h-9! backdrop-blur-sm">
              <InputGroupInput name="phone" id="phone" placeholder="your number" />
              <InputGroupAddon align="inline-start">
                <PhoneCodeInput />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea name="message" placeholder="Leave us a message" rows={6} required />
          </Field>

          <Field>
            <FieldLabel>Services</FieldLabel>
            {services.map((item, i) => (
              <Field orientation="horizontal" key={i}>
                <Checkbox
                  id={item.slug.current}
                  color="blue"
                  variant="surface"
                  checked={selectedServices.includes(item.name)}
                  onCheckedChange={() => toggleService(item.name)}
                />
                <FieldLabel htmlFor={item.slug.current}>{item.name}</FieldLabel>
              </Field>
            ))}
          </Field>

          {/* Feedback */}
          {result && (
            result.success ? (
              <Callout.Root color="green" variant="surface">
                <Callout.Icon><CheckCircle size={16} /></Callout.Icon>
                <Callout.Text>Message sent! We'll get back to you soon.</Callout.Text>
              </Callout.Root>
            ) : (
              <Callout.Root color="red" variant="surface">
                <Callout.Icon><AlertCircle size={16} /></Callout.Icon>
                <Callout.Text>{result.error}</Callout.Text>
              </Callout.Root>
            )
          )}

          <Field>
            <Button
              type="submit"
              variant="surface"
              color="blue"
              size="2"
              radius="large"
              loading={isPending}
              disabled={isPending}
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </Button>
          </Field>

        </FieldGroup>
      </form>
    </div>
  )
}
// app/contact/ContactForm.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send } from "lucide-react"
import { useState } from "react"
import { Button } from "@radix-ui/themes"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // your submit logic here
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="fname">First name</Label>
        <Input id="fname" name="fname" placeholder="John" required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="lname">Last name</Label>
        <Input id="lname" name="lname" placeholder="Doe" required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>

      

      <div className="col-span-2 flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={10}
          className="resize-y"
          required
        />
      </div>

      <div className="col-span-2 mt-1">
        <Button type="submit" disabled={loading} size={"3"} variant="solid" radius="full" className="!bg-blue-600 hover:!bg-blue-700">
          <Send size={15} />
          {loading ? "Sending..." : "Send message"}
        </Button>
      </div>

    </form>
  )
}
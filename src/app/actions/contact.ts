// app/actions/contact.ts
'use server'

import { Resend } from 'resend'
import { ContactEmail } from '@/emails/contact-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
    services: string[]
}

export type ActionResult = {
    success: boolean
    error?: string
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
    const { firstName, lastName, email, phone, message, services } = data

    if (!firstName || !lastName || !email || !message) {
        return { success: false, error: 'Please fill in all required fields.' }
    }

    try {
        await resend.emails.send({
            from: `"DEB" <contact@debbd.com>`,
            to: 'digitaldebup@gmail.com',
            replyTo: email,
            subject: `New message from ${firstName} ${lastName}`,
            react: ContactEmail({ firstName, lastName, email, phone, message, services }),
        })

        return { success: true }
    } catch (err) {
        console.error('Resend error:', err)
        return { success: false, error: 'Failed to send message. Please try again.' }
    }
}
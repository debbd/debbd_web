
import * as React from 'react'

type ContactEmailProps = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  services: string[]
}

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  phone,
  message,
  services,
}: ContactEmailProps) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9' }}>
      
      {/* Header */}
      <div style={{ backgroundColor: '#1a1a2e', padding: '30px', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>New Contact Form Submission</h1>
      </div>

      {/* Body */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '0 0 8px 8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>

        {/* Name */}
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</p>
          <p style={{ margin: '4px 0 0', fontSize: '16px', color: '#111827', fontWeight: 'bold' }}>{firstName} {lastName}</p>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
          <p style={{ margin: '4px 0 0', fontSize: '16px', color: '#111827' }}>
            <a href={`mailto:${email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{email}</a>
          </p>
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</p>
          <p style={{ margin: '4px 0 0', fontSize: '16px', color: '#111827' }}>{phone || 'Not provided'}</p>
        </div>

        {/* Services */}
        {services.length > 0 && (
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '4px solid #3b82f6' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Interested Services</p>
            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {services.map((service, i) => (
                <span key={i} style={{ display: 'inline-block', backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: '999px', fontSize: '13px', fontWeight: '500' }}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Message */}
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</p>
          <p style={{ margin: '8px 0 0', fontSize: '15px', color: '#374151', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{message}</p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>
            Sent from the contact form at <strong>debbd.com</strong>
          </p>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#9ca3af' }}>
            {new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
          </p>
        </div>
      </div>
    </div>
  )
}
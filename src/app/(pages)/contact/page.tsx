import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactDetailsLinks } from './ContactDetailsLinks'

const GridBackground = () => {
    return <div className="absolute inset-0 -top-20 -z-10 h-full w-full 
  bg-white dark:bg-zinc-950
  [background-image:linear-gradient(to_right,_#e4e4e7_1px,_transparent_1px),_linear-gradient(to_bottom,_#e4e4e7_1px,_transparent_1px)] 
  dark:[background-image:linear-gradient(to_right,_#27272a_1px,_transparent_1px),_linear-gradient(to_bottom,_#27272a_1px,_transparent_1px)]
  [background-size:70px_70px]
  [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,_#000_30%,_transparent_70%)]"
    />
}

export default function ContactPage() {
    return (
        <div className='w-full'>

            <GridBackground />

            <div className='max-w-[900px] mx-auto h-[500px] mt-[64px] pt-32 '>
                <h1 className='default-heading-size text-center w-full'>Contact Our Team</h1>
                <p className='w-full text-center text-read-16 font-medium text-foreground-2 mt-5 max-w-[600px] w-full mx-auto'>Have a project in mind? Contact our team to discuss software development, SEO, digital marketing, and business growth solutions.</p>

                <div className='mt-28 w-full flex justify-center items-start pb-20 gap-16'>
                    <div className='w-full '>
                        <ContactForm />
                    </div>
                    <div className='max-w-[400px] w-full  '>
                        <ContactDetailsLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}



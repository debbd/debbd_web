// components/core/Footer.tsx
import Link from "next/link"
import { Facebook, LinkedIn } from "../ui/icons"


const footerLinks = {
  "Our Work": [
    { label: "Web Design", href: "#" },
    { label: "Development", href: "#" },
    { label: "Branding", href: "#" },
    { label: "Marketing", href: "#" },
  ],
  "Resources": [
    { label: "Blog", href: "/blogs" },
    { label: "Portfolio", href: "/portfolio" },

  ],
  "Company": [
    { label: "About Us", href: "/page/about-us" },
    { label: "Contact Us", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: LinkedIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export const Footer = () => {
  return (
    <footer className="bg-background-950C w-full">

      {/* CTA Banner */}
      <div className="secondary-layout-width mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/[0.06] p-8 sm:p-12">

          {/* Background decorative blobs */}
          <div className="pointer-events-none absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full bg-white/[0.03] blur-3xl" />
          <div className="pointer-events-none absolute right-32 bottom-0 w-[180px] h-[180px] rounded-full bg-white/[0.04] blur-2xl" />
         

          <div className="relative z-10 max-w-[480px]">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Ready to grow?
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-3">
              Turn your vision into a<br className="hidden sm:block" /> digital reality
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-[360px]">
              Partner with us to build powerful websites, memorable brands, and
              marketing systems that actually move the needle for your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Start a project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors"
              >
                Read our blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="secondary-layout-width mx-auto px-4 sm:px-6 mt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="secondary-layout-width mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-5 gap-y-2 text-xs text-white/30">
            <span>DEB © {new Date().getFullYear()}</span>
            <Link href="/page/terms-of-service" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
            <Link href="/page/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-white transition-colors"
              >
                <div className="w-[20px] h-[20px]">

                <Icon  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
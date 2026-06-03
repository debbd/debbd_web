import type { Metadata } from "next";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
// import global style
import "./styles/globals.css";
import "./styles/landing-page.style.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { HeaderProvider } from "@/components/core/header";
import { GlobalProvider } from "@/components/globalProvider";
import { Footer } from "@/components/core/Footer";
import { Suspense } from "react";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "DEB",
  description: "Empowering businesses with expert web development, digital marketing, SEO, and strategic consulting to boost online presence and drive growth. Your all-in-one solution for digital success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense>

          <ThemeProvider attribute="class" forcedTheme="dark" defaultTheme="dark">
            <Theme
              accentColor="blue"
              grayColor="slate"
              appearance="inherit"
              hasBackground={false}
            >
              <GlobalProvider>

                <HeaderProvider />
                {children}
                <Footer />
              </GlobalProvider>
            </Theme>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}

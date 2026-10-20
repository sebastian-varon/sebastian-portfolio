import type { Metadata, Viewport } from "next"
import { Geist, Instrument_Serif } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://varon-portfolio.vercel.app"),
  title: "Sebastian Varon · Full-stack & iOS developer",
  description:
    "Sebastian Varon builds web apps, iOS apps and the secure systems underneath them. React, Next.js, Node.js and iOS.",
  openGraph: {
    title: "Sebastian Varon · Full-stack & iOS developer",
    description: "Web apps, iOS apps and the secure systems underneath them.",
    url: "/",
    siteName: "Sebastian Varon",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  themeColor: "#111110",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}

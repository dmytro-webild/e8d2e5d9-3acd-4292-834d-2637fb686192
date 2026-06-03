import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'MPY Paint Jobs | Custom Bicycle Frame Painting & Refinishing',
  description: 'MPY Paint Jobs transforms bicycle frames into personalized masterpieces. Discover premium hand-painted designs, expert restorations, and one-of-a-kind finishes. Request a custom quote today!',
  openGraph: {
    "title": "MPY Paint Jobs | Custom Bicycle Frame Painting & Refinishing",
    "description": "MPY Paint Jobs transforms bicycle frames into personalized masterpieces. Discover premium hand-painted designs, expert restorations, and one-of-a-kind finishes. Request a custom quote today!",
    "url": "https://www.mpypaintjobs.com",
    "siteName": "MPY Paint Jobs",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/strong-shirtless-man-makes-acrobatic-figure-with-bmx-studio-isolated-dark-background_613910-9816.jpg",
        "alt": "Custom painted bicycle frame"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "MPY Paint Jobs | Custom Bicycle Frame Painting & Refinishing",
    "description": "MPY Paint Jobs transforms bicycle frames into personalized masterpieces. Discover premium hand-painted designs, expert restorations, and one-of-a-kind finishes. Request a custom quote today!",
    "images": [
      "http://img.b2bpic.net/free-photo/strong-shirtless-man-makes-acrobatic-figure-with-bmx-studio-isolated-dark-background_613910-9816.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

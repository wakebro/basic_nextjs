// import { NavLinks } from "./ui/doc__nav-links"

import Navigation from "@/components/navigation";
import { Metadata } from "next";

import "../styles/global.css"

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: "Loading..."
  },
  description: "The best movies on the best framework"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* <NavLinks /> */}
        <Navigation/>
        <main //style={{backgroundColor:'yellow'}}
        >{children}
        </main>
      </body>
    </html>
  )
} 
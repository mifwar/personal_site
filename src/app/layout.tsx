import '@/styles/globals.css';
import { Lato, Poppins } from 'next/font/google'

import { DarkMode } from "@/utils/darkMode";
import { MobileMode } from "@/utils/mobileMode";

const poppins = Poppins({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: ['100', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Miftahul Anwar',
  description: `Miftahul Anwar's personal site`,
}
 
export default function RootLayout({ children }) {
 return (
   <html lang="en" className={`${poppins.className} ${lato.className}`}>
      <DarkMode>
        <MobileMode>
          <body>{children}</body>
        </MobileMode>
      </DarkMode>
    </html>
  )
}

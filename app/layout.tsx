import type { Metadata } from "next"
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elite Cars — Vehículos Premium de Ocasión",
  description:
    "Selección rigurosa de vehículos premium de ocasión. Confianza total, transparencia absoluta.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${hankenGrotesk.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}

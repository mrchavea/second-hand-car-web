"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] font-body transition-all duration-300 ${
        scrolled ? "py-3 bg-white/96 backdrop-blur-lg border-b border-c-border" : "py-5 bg-white/90 backdrop-blur-xl border-b border-c-border"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between gap-10">
        <div className="font-display text-[1.7rem] tracking-[0.1em] text-c-text flex-shrink-0">
          LOGACAR
        </div>

        <ul className="hidden md:flex items-center gap-10 flex-1">
          {[
            { href: "#nosotros", label: "Quiénes somos" },
            { href: "#vehiculos", label: "Vehículos" },
            { href: "#testimonios", label: "Testimonios" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-c-text-2 hover:text-c-text transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block flex-shrink-0">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-c-text text-white text-sm font-semibold tracking-wide rounded-none transition-colors hover:bg-c-accent"
          >
            Contacto
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <button
          className="md:hidden text-c-text"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/97 backdrop-blur-xl border-b border-c-border px-10 py-6">
          <ul className="flex flex-col gap-4">
            {[
              { href: "#nosotros", label: "Quiénes somos" },
              { href: "#vehiculos", label: "Vehículos" },
              { href: "#testimonios", label: "Testimonios" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-c-text"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="#contacto"
                className="inline-block px-5 py-2.5 bg-c-text text-white text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

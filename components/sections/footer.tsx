import Link from "next/link"

const cols = [
  {
    title: "Empresa",
    links: [
      { href: "#nosotros", label: "Quiénes somos" },
      { href: "#vehiculos", label: "Vehículos" },
      { href: "#contacto", label: "Contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { href: "#", label: "Financiación" },
      { href: "#", label: "Seguros" },
      { href: "#", label: "Mantenimiento" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacidad" },
      { href: "#", label: "Términos" },
      { href: "#", label: "Cookies" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-c-surface border-t border-c-border py-24">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_repeat(3,1fr)] gap-8 md:gap-16 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-[2rem] tracking-[0.1em] text-c-text mb-4">
              LOGACAR
            </div>
            <p className="text-[0.85rem] text-c-text-3 font-body leading-[1.65] max-w-[220px]">
              Vehículos de ocasión. Confianza y transparencia desde 2009.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-c-text font-body mb-6">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-c-text-2 font-body hover:text-c-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-c-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem] text-c-text-3 font-body">
          <p>© 2025 Logacar. Todos los derechos reservados.</p>
          <p>+500 vehículos · 15 años · 4.9★ Google</p>
        </div>
      </div>
    </footer>
  )
}

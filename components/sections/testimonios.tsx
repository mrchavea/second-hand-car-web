const testimonials = [
  {
    text: '"Compré mi BMW Serie 7 aquí hace dos años. El proceso fue impecable, sin presiones ni sorpresas. Son profesionales de verdad."',
    author: "Carlos Mendez",
    location: "Madrid",
  },
  {
    text: '"La atención del equipo fue excepcional. Me asesoraron sobre opciones de financiación y mantenimiento. Muy recomendable."',
    author: "Elena García",
    location: "Barcelona",
  },
  {
    text: '"Dudé entre varios coches y me ayudaron a tomar la decisión correcta. Sin prisas, sin ventas agresivas. Perfectos."',
    author: "Javier López",
    location: "Valencia",
  },
]

export function Testimonios() {
  return (
    <section id="testimonios" className="py-24 border-t border-c-border">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="mb-24">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-c-text-3 font-body flex items-center gap-2.5 mb-4">
            <span className="w-4 h-px bg-c-accent inline-block" />
            Opiniones
          </p>
          <h2
            className="font-body font-bold tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Lo que dicen<br />nuestros clientes
          </h2>
        </div>

        {/* Grid with 1px gap using background trick */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-c-border border border-c-border"
        >
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-c-bg px-8 py-10 transition-colors hover:bg-c-surface"
            >
              <p className="text-[0.85rem] tracking-[3px] text-c-accent font-body mb-6">
                ★★★★★
              </p>
              <p className="text-[0.9rem] leading-[1.8] text-c-text-2 font-body italic mb-8 max-w-[65ch]">
                {t.text}
              </p>
              <p className="text-[0.875rem] font-semibold text-c-text font-body">{t.author}</p>
              <p className="text-[0.78rem] text-c-text-3 font-body mt-0.5">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

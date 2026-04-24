"use client"

export function Cta() {
  return (
    <section id="contacto" className="py-24 border-t border-c-border">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="bg-c-text grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center px-12 py-16">
          <div>
            <h2
              className="font-body font-bold text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              ¿Listo para tu<br />siguiente coche?
            </h2>
            <p className="text-[0.9rem] leading-[1.75] text-white/60 font-body max-w-md">
              Contacta con nuestro equipo y te guiaremos en cada paso del proceso. Sin obligaciones, solo asesoramiento honesto.
            </p>
          </div>

          <button
            className="font-body text-[0.875rem] font-bold tracking-wide bg-white text-c-text px-9 py-4 transition-all hover:bg-c-accent hover:text-white flex-shrink-0 self-start md:self-center cursor-pointer"
            onClick={() => alert("Formulario de contacto — próximamente")}
          >
            Solicitar asesoramiento
          </button>
        </div>
      </div>
    </section>
  )
}

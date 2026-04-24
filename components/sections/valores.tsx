const values = [
  {
    num: "01",
    title: "Servicio eficiente",
    desc: "Proceso ágil de principio a fin. Valoración, papeleo y entrega sin demoras innecesarias.",
  },
  {
    num: "02",
    title: "Selección exclusiva",
    desc: "Cada vehículo pasa por nuestra criba. No vendemos cantidad, vendemos criterio.",
  },
  {
    num: "03",
    title: "Trato cercano",
    desc: "Te conocemos por tu nombre, no por un número. Atención directa y honesta en cada paso.",
  },
  {
    num: "04",
    title: "Asesoría experta",
    desc: "Financiación, seguro, mantenimiento — todo bajo un mismo techo. Te guiamos, no te presionamos.",
  },
]

export function Valores() {
  return (
    <section id="nosotros" className="py-24 border-t border-c-border">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-c-text-3 font-body flex items-center gap-2.5 mb-4">
              <span className="w-4 h-px bg-c-accent inline-block" />
              Quiénes somos
            </p>
            <h2
              className="font-body font-bold leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Confianza<br />que se<br />
              <span className="text-c-accent">conduce</span>
            </h2>
            <p className="text-sm leading-[1.8] text-c-text-2 font-body max-w-sm">
              Nacimos para hacer la compra de un coche usado tan segura y satisfactoria como la de uno nuevo. Sin letra pequeña, sin presión, con el asesoramiento que mereces.
            </p>
          </div>

          <ol className="border-t border-c-border">
            {values.map((v) => (
              <li
                key={v.num}
                className="grid grid-cols-[44px_1fr] gap-4 py-8 border-b border-c-border"
              >
                <span className="font-display text-[1.6rem] text-c-border leading-none tracking-[0.06em]">
                  {v.num}
                </span>
                <div>
                  <h3 className="text-[0.9rem] font-semibold mb-1.5 text-c-text font-body">{v.title}</h3>
                  <p className="text-[0.875rem] leading-[1.7] text-c-text-2 font-body">{v.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

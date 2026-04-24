import Image from "next/image"

const cars = [
  {
    make: "BMW",
    name: "Serie 8 Coupé",
    km: "28.500 km",
    year: "2021",
    price: "89.900 €",
    badge: "Destacado",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=80&fit=crop&auto=format",
    alt: "BMW Serie 8 Coupé",
  },
  {
    make: "Porsche",
    name: "911 Carrera",
    km: "15.200 km",
    year: "2022",
    price: "145.900 €",
    badge: "En stock",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80&fit=crop&auto=format",
    alt: "Porsche 911 Carrera",
  },
  {
    make: "Audi",
    name: "R8 V10 Coupé",
    km: "32.100 km",
    year: "2020",
    price: "110.500 €",
    badge: null,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=700&q=80&fit=crop&auto=format",
    alt: "Audi R8 V10 Coupé",
  },
  {
    make: "Range Rover",
    name: "Sport SVR",
    km: "42.800 km",
    year: "2021",
    price: "78.900 €",
    badge: null,
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=700&q=80&fit=crop&auto=format",
    alt: "Range Rover Sport SVR",
  },
]

export function Catalogo() {
  return (
    <section id="vehiculos" className="py-24 bg-c-surface border-t border-c-border">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="flex items-end justify-between gap-10 mb-24 flex-wrap">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-c-text-3 font-body flex items-center gap-2.5 mb-4">
              <span className="w-4 h-px bg-c-accent inline-block" />
              Vehículos disponibles
            </p>
            <h2
              className="font-body font-bold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Selección{" "}
              <span className="text-c-accent">destacada</span>
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-[0.82rem] font-semibold text-c-text-2 font-body border-b border-c-border pb-0.5 hover:text-c-text hover:border-c-text transition-colors flex items-center gap-1.5"
          >
            Ver catálogo completo
            <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car) => (
            <article
              key={car.name}
              className="bg-c-bg border border-c-border rounded-none overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-c-text hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
            >
              <div className="relative w-full" style={{ paddingBottom: "66%" }}>
                <Image
                  src={car.img}
                  alt={car.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                {car.badge && (
                  <span className="absolute top-4 left-4 bg-c-text text-white text-[0.68rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1">
                    {car.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-c-accent font-body mb-1">
                  {car.make}
                </p>
                <h3 className="text-[1.1rem] font-bold text-c-text font-body mb-4">
                  {car.name}
                </h3>

                <div className="flex gap-5 text-[0.78rem] text-c-text-3 font-body mb-4">
                  <span className="flex items-center gap-1">
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {car.km}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {car.year}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-c-border pt-4">
                  <span className="text-[1.2rem] font-bold text-c-text font-body">{car.price}</span>
                  <span className="text-[0.78rem] font-semibold text-c-text-3 font-body flex items-center gap-1 transition-colors group-hover:text-c-text">
                    Ver ficha
                    <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

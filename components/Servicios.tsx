export default function Servicios() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center sm:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Servicios
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Soluciones especializadas para acompañar cada etapa de sus
            proyectos de confección, cuero y marroquinería.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">

          {/* Mantenimiento */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="h-56 bg-gray-100 sm:h-64">
              <img
                src="/images/servicios/mantenimiento.jpg"
                alt="Mantenimiento"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Mantenimiento
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Mantenimiento especializado para equipos y herramientas
                utilizadas en sus procesos.
              </p>
            </div>

          </div>

          {/* Consultoría */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="h-56 bg-gray-100 sm:h-64">
              <img
                src="/images/servicios/consultoria-tendencias.jpg"
                alt="Consultoría de Tendencias"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Consultoría de Tendencias
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Orientación sobre tendencias, materiales, acabados y
                soluciones para la industria.
              </p>
            </div>

          </div>

          {/* Personalización */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="h-56 bg-gray-100 sm:h-64">
              <img
                src="/images/servicios/personalizacion.jpg"
                alt="Servicio de Personalización"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Servicio de Personalización
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Soluciones personalizadas de acuerdo con las necesidades
                de cada proyecto.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
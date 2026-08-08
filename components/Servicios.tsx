export default function Servicios() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Servicios
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Soluciones especializadas para acompañar cada etapa de sus
            proyectos de confección, cuero y marroquinería.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-3">


          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="h-64 bg-gray-100">
              <img
                src="/images/servicios/mantenimiento.jpg"
                alt="Mantenimiento"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Mantenimiento
              </h3>

              <p className="mt-3 text-gray-600">
                Mantenimiento especializado para equipos y herramientas
                utilizadas en sus procesos.
              </p>
            </div>

          </div>


          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="h-64 bg-gray-100">
              <img
                src="/images/servicios/consultoria-tendencias.jpg"
                alt="Consultoría de Tendencias"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Consultoría de Tendencias
              </h3>

              <p className="mt-3 text-gray-600">
                Orientación sobre tendencias, materiales, acabados y
                soluciones para la industria.
              </p>
            </div>

          </div>


          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="h-64 bg-gray-100">
              <img
                src="/images/servicios/personalizacion.jpg"
                alt="Servicio de Personalización"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Servicio de Personalización
              </h3>

              <p className="mt-3 text-gray-600">
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
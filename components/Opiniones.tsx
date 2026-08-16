export default function Opiniones() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-10 text-center sm:mb-14">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-semibold text-slate-800">
            <span className="text-yellow-500">★</span>
            Clientes reales de Aaronmaq
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            La confianza de nuestros clientes es parte fundamental de
            nuestro compromiso con la calidad y el servicio.
          </p>

        </div>

        {/* Calificación */}
        <div className="mx-auto mb-10 max-w-md rounded-3xl border border-gray-200 bg-white px-6 py-7 text-center shadow-sm">

          <p className="text-sm font-medium text-gray-500">
            Calificación en Mercado Libre
          </p>

          <div className="mt-2 flex items-center justify-center gap-3">

            <span className="text-3xl font-bold text-slate-900">
              4.9
            </span>

            <span className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </span>

          </div>

          <p className="mt-2 text-sm text-gray-500">
            Opiniones de compradores reales
          </p>

        </div>

        {/* Opiniones */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* Opinión 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              “Excelente calidad y precio.”
            </p>

            <div className="mt-6 border-t border-gray-100 pt-5">

              <p className="font-semibold text-slate-900">
                Cliente de Mercado Libre
              </p>

              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                  ✓
                </span>

                Opinión publicada en Mercado Libre

              </div>

            </div>

          </div>

          {/* Opinión 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              “Excelente producto y calidad.”
            </p>

            <div className="mt-6 border-t border-gray-100 pt-5">

              <p className="font-semibold text-slate-900">
                Cliente de Mercado Libre
              </p>

              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                  ✓
                </span>

                Opinión publicada en Mercado Libre

              </div>

            </div>

          </div>

          {/* Opinión 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              “Gracias por la troqueladora, es espectacular 💯”
            </p>

            <div className="mt-6 border-t border-gray-100 pt-5">

              <p className="font-semibold text-slate-900">
                Cliente de Mercado Libre
              </p>

              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                  ✓
                </span>

                Opinión publicada en Mercado Libre

              </div>

            </div>

          </div>

        </div>

        {/* Enlace Mercado Libre */}
        <div className="mt-10 text-center sm:mt-12">

          <p className="mb-4 text-sm text-gray-500">
            Conoce más experiencias de nuestros clientes.
          </p>

          <a
            href="https://www.mercadolibre.com.co/remachadora-manual-con-base--3-troqueles--insumos/up/MCOU2419196611"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-yellow-500
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              shadow-lg
              transition
              hover:bg-yellow-400
              sm:w-auto
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Ver todas nuestras opiniones en Mercado Libre
            <span className="text-lg">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}
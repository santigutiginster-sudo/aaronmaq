export default function Opiniones() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center sm:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Opiniones de nuestros clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            La confianza de nuestros clientes es parte fundamental de
            nuestro compromiso con la calidad y el servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* Opinión 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              Aquí aparecerá una opinión real de uno de nuestros clientes.
            </p>

            <p className="mt-5 font-semibold text-slate-900 sm:mt-6">
              Cliente Aaronmaq
            </p>

          </div>

          {/* Opinión 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              Aquí aparecerá una opinión real de uno de nuestros clientes.
            </p>

            <p className="mt-5 font-semibold text-slate-900 sm:mt-6">
              Cliente Aaronmaq
            </p>

          </div>

          {/* Opinión 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              Aquí aparecerá una opinión real de uno de nuestros clientes.
            </p>

            <p className="mt-5 font-semibold text-slate-900 sm:mt-6">
              Cliente Aaronmaq
            </p>

          </div>

        </div>

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="#"
            className="
              inline-flex
              w-full
              justify-center
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
            Ver todas nuestras opiniones en Google
          </a>
        </div>

      </div>
    </section>
  );
}
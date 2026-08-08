export default function Opiniones() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Opiniones de nuestros clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            La confianza de nuestros clientes es parte fundamental de
            nuestro compromiso con la calidad y el servicio.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-3">


          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Aquí aparecerá una opinión real de uno de nuestros clientes.
            </p>

            <p className="mt-6 font-semibold text-slate-900">
              Cliente Aaronmaq
            </p>

          </div>


          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Aquí aparecerá una opinión real de uno de nuestros clientes.
            </p>

            <p className="mt-6 font-semibold text-slate-900">
              Cliente Aaronmaq
            </p>

          </div>


          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            <div className="text-xl tracking-wide text-yellow-500">
              ★★★★★
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Aquí aparecerá una opinión real de uno de nuestros clientes.
            </p>

            <p className="mt-6 font-semibold text-slate-900">
              Cliente Aaronmaq
            </p>

          </div>


        </div>


        <div className="mt-12 text-center">

          <a
            href="#"
            className="
              inline-flex
              rounded-xl
              bg-yellow-500
              px-8
              py-4
              font-semibold
              text-black
              shadow-lg
              transition
              hover:bg-yellow-400
            "
          >
            Ver todas nuestras opiniones en Google
          </a>

        </div>


      </div>
    </section>
  );
}
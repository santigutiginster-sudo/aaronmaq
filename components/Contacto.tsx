export default function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">

        <h2 className="text-3xl font-bold sm:text-4xl">
          Contáctanos
        </h2>

        <p className="mt-5 text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
          Estamos listos para ayudarte con soluciones en troqueles,
          remachadoras e insumos para la industria de confección,
          tapicería y marroquinería.
        </p>

        <div className="mt-7 space-y-4 text-base sm:mt-8 sm:text-lg">
          <p>
            <strong>Teléfono:</strong> Próximamente
          </p>

          <p>
            <strong>Correo:</strong> Próximamente
          </p>

          <p>
            <strong>Ubicación:</strong> Colombia
          </p>
        </div>

        <button
          type="button"
          className="
            mt-7
            w-full
            rounded-xl
            bg-yellow-500
            px-6
            py-3
            text-sm
            font-semibold
            text-black
            transition
            hover:bg-yellow-400
            sm:mt-8
            sm:w-auto
            sm:px-8
            sm:py-4
            sm:text-base
          "
        >
          Solicitar información
        </button>

      </div>
    </section>
  );
}
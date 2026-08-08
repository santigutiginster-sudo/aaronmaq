export default function Contacto() {
  return (
    <section id="contacto" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold">
            Contáctanos
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Estamos listos para ayudarte con soluciones en troqueles,
            remachadoras e insumos para la industria de confección,
            tapicería y marroquinería.
          </p>

          <div className="mt-8 space-y-4 text-lg">
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

          <button className="mt-8 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400">
            Solicitar información
          </button>
        </div>
      </div>
    </section>
  );
}
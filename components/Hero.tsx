export default function Hero() {
  return (
    <section
      className="relative min-h-[650px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Portada.empresarial.jpg')",
      }}
    >
      {/* Capa sutil para dar profundidad a la imagen */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Botones */}
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-6 pb-16">
        <div className="flex gap-4">

          <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition hover:bg-yellow-400">
            Ver catálogo
          </button>

          <button className="rounded-xl border border-white bg-black/20 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-white hover:text-black">
            Contactarnos
          </button>

        </div>
      </div>
    </section>
  );
}
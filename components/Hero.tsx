import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] bg-cover bg-center bg-no-repeat sm:min-h-[650px]"
      style={{
        backgroundImage: "url('/images/Portada.empresarial.jpg')",
      }}
    >
      {/* Capa sutil para dar profundidad a la imagen */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-4 pb-10 sm:min-h-[650px] sm:px-6 sm:pb-16">
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">

          <Link
            href="/catalogo"
            className="w-full rounded-xl bg-yellow-500 px-6 py-3 text-center text-sm font-semibold text-black shadow-lg transition hover:bg-yellow-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Ver catálogo
          </Link>

          <Link
            href="/#contacto"
            className="w-full rounded-xl border border-white bg-black/20 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Contactarnos
          </Link>

        </div>
      </div>
    </section>
  );
}
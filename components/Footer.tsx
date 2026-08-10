import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white text-slate-700">

      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* INFORMACIÓN */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Información
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/como-comprar" className="transition hover:text-black">
                  ¿Cómo comprar?
                </Link>
              </li>

              <li>
                <Link href="/rastrea-tu-pedido" className="transition hover:text-black">
                  Rastrea tu pedido
                </Link>
              </li>

              <li>
                <Link href="/cambios-devoluciones" className="transition hover:text-black">
                  Cambios y devoluciones
                </Link>
              </li>

              <li>
                <Link href="/terminos-condiciones" className="transition hover:text-black">
                  Términos y condiciones
                </Link>
              </li>

              <li>
                <Link href="/politica-privacidad" className="transition hover:text-black">
                  Política de privacidad
                </Link>
              </li>

              <li>
                <Link href="/contacto" className="transition hover:text-black">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* AARONMAQ */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-900">
              AARONMAQ
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-black">
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/catalogo" className="transition hover:text-black">
                  Catálogo
                </Link>
              </li>

              <li>
                <Link href="/nosotros" className="transition hover:text-black">
                  Sobre nosotros
                </Link>
              </li>

              <li>
                <Link href="/contacto" className="transition hover:text-black">
                  Contacto
                </Link>
              </li>

              <li>
                <Link href="/buscar" className="transition hover:text-black">
                  Buscar productos
                </Link>
              </li>

              <li>
                <Link href="/sitemap.xml" className="transition hover:text-black">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* VENDE CON NOSOTROS */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Vende con nosotros
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/distribuidores" className="transition hover:text-black">
                  ¿Quieres ser distribuidor?
                </Link>
              </li>

              <li>
                <Link href="/ventas-mayoristas" className="transition hover:text-black">
                  Ventas mayoristas
                </Link>
              </li>

              <li>
                <Link
                  href="/ventas-institucionales"
                  className="transition hover:text-black"
                >
                  Ventas institucionales
                </Link>
              </li>

              <li>
                <Link
                  href="/compra-empresarial"
                  className="font-semibold transition hover:text-black"
                >
                  Compra empresarial
                </Link>
              </li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div className="lg:text-right">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Síguenos
            </h3>

            <div className="flex items-center gap-5 lg:justify-end">

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="transition-transform duration-200 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="3"
                      y1="21"
                      x2="21"
                      y2="3"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFDC80" />
                      <stop offset="0.35" stopColor="#F77737" />
                      <stop offset="0.65" stopColor="#E1306C" />
                      <stop offset="1" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="url(#instagramGradient)"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="url(#instagramGradient)"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="#E1306C"
                  />
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="transition-transform duration-200 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="#1877F2"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              {/* TIKTOK */}
              <a
                href="#"
                aria-label="TikTok"
                className="transition-transform duration-200 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                >
                  <path
                    fill="#25F4EE"
                    d="M15 3c.4 2.1 1.6 3.6 3.7 4.2v3.1c-1.4-.1-2.6-.5-3.7-1.2v6.2c0 3.4-2.3 5.7-5.5 5.7C6.5 21 4 18.8 4 15.7c0-3.2 2.6-5.5 5.8-5.5.4 0 .8 0 1.2.1v3.2c-.4-.1-.7-.2-1.1-.2-1.3 0-2.5.9-2.5 2.4 0 1.4 1.1 2.3 2.4 2.3 1.4 0 2.2-.9 2.2-2.5V3H15Z"
                  />

                  <path
                    fill="#FE2C55"
                    transform="translate(1 0)"
                    d="M15 3c.4 2.1 1.6 3.6 3.7 4.2v3.1c-1.4-.1-2.6-.5-3.7-1.2v6.2c0 3.4-2.3 5.7-5.5 5.7C6.5 21 4 18.8 4 15.7c0-3.2 2.6-5.5 5.8-5.5.4 0 .8 0 1.2.1v3.2c-.4-.1-.7-.2-1.1-.2-1.3 0-2.5.9-2.5 2.4 0 1.4 1.1 2.3 2.4 2.3 1.4 0 2.2-.9 2.2-2.5V3H15Z"
                  />

                  <path
                    fill="#000000"
                    d="M14.2 3v10.4c0 1.6-.8 2.5-2.2 2.5-1.3 0-2.4-.9-2.4-2.3 0-1.5 1.2-2.4 2.5-2.4.4 0 .7.1 1.1.2V8.2c-.4-.1-.8-.1-1.2-.1C8.8 8.1 6.2 10.4 6.2 13.6c0 3.1 2.5 5.3 5.5 5.3 3.2 0 5.5-2.3 5.5-5.7V7c1.1.7 2.3 1.1 3.7 1.2V5.1C18.8 4.5 17.6 3.1 17.2 1h-3Z"
                  />
                </svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="#"
                aria-label="YouTube"
                className="transition-transform duration-200 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="#FF0000"
                >
                  <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.9 2.9 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.9 2.9 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.9 2.9 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8Z" />
                  <path
                    d="M10 15.5v-7l6 3.5-6 3.5Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* MERCADO LIBRE */}
              <a
                href="#"
                aria-label="Mercado Libre"
                className="transition-transform duration-200 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="#FFE600"
                  />

                  <path
                    d="M7 11.5c1.2-2.3 2.8-3.5 5-3.5s3.8 1.2 5 3.5"
                    stroke="#222"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M7.5 13.5c1.1 2 2.6 3 4.5 3s3.4-1 4.5-3"
                    stroke="#222"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* MÉTODOS DE PAGO */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-8 lg:flex-row lg:justify-between lg:px-8">

          <p className="text-sm font-medium text-slate-900">
            Métodos de pago
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* VISA */}
            <div className="flex h-8 items-center">
              <span className="text-lg font-black italic tracking-tight text-[#1434CB]">
                VISA
              </span>
            </div>

            {/* MASTERCARD */}
            <div className="flex h-8 items-center">
              <div className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-[#EB001B]" />
                <span className="-ml-3 h-6 w-6 rounded-full bg-[#F79E1B]/90" />
              </div>
            </div>

            {/* PSE */}
            <div className="flex h-8 items-center rounded-md bg-[#00AEEF] px-2.5">
              <span className="text-xs font-black tracking-tight text-white">
                PSE
              </span>
            </div>

            {/* MERCADO PAGO */}
            <div className="flex h-8 items-center rounded-md bg-[#009EE3] px-2.5">
              <span className="text-xs font-bold text-white">
                Mercado Pago
              </span>
            </div>

            {/* TRANSFERENCIA */}
            <div className="flex h-8 items-center rounded-md border border-slate-200 px-2.5">
              <svg
                viewBox="0 0 24 24"
                className="mr-1.5 h-4 w-4 text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 9h16M4 15h16" />
                <path d="M7 6v12M17 6v12" />
              </svg>

              <span className="text-xs font-medium text-slate-700">
                Transferencia
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* PARTE FINAL */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left lg:px-8">

          <p>
            © 2026 AARONMAQ. Todos los derechos reservados.
          </p>

          <p>
            Troqueles, remachadoras e insumos para confección.
          </p>

        </div>
      </div>

    </footer>
  );
}
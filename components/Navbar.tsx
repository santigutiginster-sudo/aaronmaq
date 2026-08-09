import Link from "next/link";
import Buscador from "./Buscador";
import Cuenta from "./Cuenta";
import Carrito from "./Carrito";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-wide transition hover:text-yellow-600 sm:text-3xl"
        >
          AARONMAQ
        </Link>

        {/* Menú escritorio */}
        <nav className="ml-10 hidden flex-1 items-center gap-8 text-sm text-slate-700 md:flex">
          <Link
            href="/"
            className="transition hover:text-yellow-600"
          >
            Inicio
          </Link>

          <Link
            href="/catalogo"
            className="transition hover:text-yellow-600"
          >
            Catálogo
          </Link>

          <Link
            href="/#nosotros"
            className="transition hover:text-yellow-600"
          >
            Nosotros
          </Link>

          <Link
            href="/#contacto"
            className="transition hover:text-yellow-600"
          >
            Contacto
          </Link>
        </nav>

        {/* Iconos */}
        <div className="ml-auto flex items-center justify-end gap-3 sm:gap-5">

          <Buscador />

          <Cuenta />

          <Carrito />

          {/* Colombia */}
          <span
            aria-label="Colombia"
            title="Colombia"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-base transition hover:border-yellow-600"
          >
            🇨🇴
          </span>
        </div>

      </div>

      {/* Menú móvil */}
      <nav className="flex items-center justify-center gap-5 border-t border-slate-100 px-3 py-3 text-xs text-slate-700 md:hidden">
        <Link
          href="/"
          className="transition hover:text-yellow-600"
        >
          Inicio
        </Link>

        <Link
          href="/catalogo"
          className="transition hover:text-yellow-600"
        >
          Catálogo
        </Link>

        <Link
          href="/#nosotros"
          className="transition hover:text-yellow-600"
        >
          Nosotros
        </Link>

        <Link
          href="/#contacto"
          className="transition hover:text-yellow-600"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
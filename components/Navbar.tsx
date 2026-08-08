import Link from "next/link";
import Buscador from "./Buscador";
import Cuenta from "./Cuenta";
import Carrito from "./Carrito";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">

        {/* Menú */}
        <nav className="flex flex-1 items-center gap-8 text-sm text-slate-700">
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

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide transition hover:text-yellow-600"
        >
          AARONMAQ
        </Link>

        {/* Iconos */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <Buscador />

          <Cuenta />

          <Carrito />

          {/* Colombia */}
          <span
            aria-label="Colombia"
            title="Colombia"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-base transition hover:border-yellow-600"
          >
            🇨🇴
          </span>
        </div>

      </div>
    </header>
  );
}

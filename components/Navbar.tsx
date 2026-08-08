import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-bold tracking-wide hover:text-yellow-600 transition"
        >
          AARONMAQ
        </Link>

        <nav className="flex gap-8 font-medium">

          <Link href="/" className="hover:text-yellow-600 transition">
            Inicio
          </Link>

          <Link href="/catalogo" className="hover:text-yellow-600 transition">
            Catálogo
          </Link>

          <Link href="/#nosotros" className="hover:text-yellow-600 transition">
            Nosotros
          </Link>

          <Link href="/#contacto" className="hover:text-yellow-600 transition">
            Contacto
          </Link>

          <Link href="/carrito" className="hover:text-yellow-600 transition">
            🛒 Carrito
          </Link>

        </nav>

      </div>
    </header>
  );
}
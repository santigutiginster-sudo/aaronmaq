import Link from "next/link";

export default function CarritoPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-32">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-yellow-600"
        >
          ← Volver al inicio
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Mi carrito
        </h1>

        <p className="mt-3 text-gray-600">
          Aquí aparecerán los productos que agregues a tu carrito.
        </p>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <div className="text-5xl">
            🛒
          </div>

          <h2 className="mt-5 text-2xl font-semibold text-slate-900">
            Tu carrito está vacío
          </h2>

          <p className="mt-2 text-gray-500">
            Explora nuestro catálogo y agrega tus productos.
          </p>
        </div>

      </div>
    </main>
  );
}

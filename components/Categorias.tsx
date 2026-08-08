import Link from "next/link";
import { categorias } from "@/data/categorias";

export default function Categorias() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Categorías
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Explora nuestras categorías de productos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(categorias).map(([slug, categoria]) => (

            <Link
              key={slug}
              href={`/catalogo/${slug}`}
              className="
                rounded-2xl
                border
                border-gray-200
                p-8
                shadow-sm
                transition
                hover:border-yellow-500
                hover:shadow-lg
              "
            >

              <h3 className="text-2xl font-semibold text-slate-900">
                {categoria.titulo}
              </h3>

              <p className="mt-3 text-gray-500">
                {categoria.descripcion}
              </p>

              <p className="mt-5 font-medium text-yellow-600">
                Ver categoría →
              </p>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}
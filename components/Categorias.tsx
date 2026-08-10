import Image from "next/image";
import Link from "next/link";
import { categorias } from "@/data/categorias";

const imagenesCategorias: Record<string, string> = {
  troqueles: "/categorias/troqueles-nuevo.png",
  ojales: "/categorias/ojales-nuevo.png",
  casquetes: "/categorias/casquetes-nuevo.png",
  broches: "/categorias/broches-nuevo.png",
  botones: "/categorias/botones-jean-nuevo.png",
  perlas: "/categorias/perlas-nuevo.png",
  remachadoras: "/categorias/remachadoras-nuevo.png",
};

export default function Categorias() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* TÍTULO */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Categorías
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Explora nuestras categorías de productos.
          </p>
        </div>

        {/* CATEGORÍAS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(categorias).map(([slug, categoria]) => (
            <Link
              key={slug}
              href={`/catalogo/${slug}`}
              className="
                group
                rounded-2xl
                border
                border-gray-200
                p-8
                text-center
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-yellow-500
                hover:shadow-lg
              "
            >

              {/* ICONO */}
              <div className="mb-5 flex justify-center">
                <div className="relative h-24 w-24">
                  <Image
                    src={imagenesCategorias[slug]}
                    alt={categoria.titulo}
                    fill
                    sizes="96px"
                    className="
                      object-contain
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>
              </div>

              {/* NOMBRE */}
              <h3 className="text-2xl font-semibold text-slate-900">
                {categoria.titulo}
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="mt-3 text-gray-500">
                {categoria.descripcion}
              </p>

              {/* ENLACE */}
              <p className="mt-5 font-medium text-yellow-600 transition group-hover:text-yellow-700">
                Ver categoría →
              </p>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
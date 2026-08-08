import Link from "next/link";
import { categorias } from "@/data/categorias";

interface Props {
  params: Promise<{
    categoria: string;
  }>;
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria: nombreCategoria } = await params;

  const categoria =
    categorias[nombreCategoria.toLowerCase() as keyof typeof categorias];

  if (!categoria) {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold text-slate-900">
            Categoría no encontrada
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-slate-600 transition hover:text-yellow-600"
        >
          <span className="text-2xl">←</span>
          <span className="font-medium">Volver a Catálogo</span>
        </Link>

        <h1 className="mt-8 text-5xl font-bold text-slate-900">
          {categoria.titulo}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          {categoria.descripcion}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categoria.subcategorias.map((item) => (

            <Link
              key={item}
              href={`/catalogo/${nombreCategoria}/${item
                .toLowerCase()
                .replaceAll(" ", "-")}`}
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

              <h2 className="text-2xl font-semibold text-slate-900">
                {item}
              </h2>

              <p className="mt-3 text-gray-500">
                Ver productos →
              </p>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}
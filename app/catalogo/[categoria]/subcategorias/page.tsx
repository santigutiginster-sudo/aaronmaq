import Link from "next/link";
import { categorias } from "@/data/categorias";

interface Props {
  params: Promise<{
    categoria: string;
  }>;
}

function crearSlug(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria: nombreCategoria } = await params;

  const claveCategoria = nombreCategoria.toLowerCase();

  const categoria =
    categorias[
      claveCategoria as keyof typeof categorias
    ];

  if (!categoria) {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold text-slate-900">
            Categoría no encontrada
          </h1>

          <Link
            href="/catalogo"
            className="mt-6 inline-block text-yellow-600 hover:underline"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* VOLVER */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-slate-600 transition hover:text-yellow-600"
        >
          <span className="text-2xl">←</span>

          <span className="font-medium">
            Volver a Catálogo
          </span>
        </Link>

        {/* TÍTULO */}
        <h1 className="mt-8 text-5xl font-bold text-slate-900">
          {categoria.titulo}
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          {categoria.descripcion}
        </p>

        {/* SUBCATEGORÍAS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categoria.subcategorias.map((item) => {
            const slug = crearSlug(item);

            return (
              <Link
                key={item}
                href={`/catalogo/${nombreCategoria}/${slug}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-500
                  hover:shadow-lg
                "
              >

                <h2 className="text-2xl font-semibold text-slate-900">
                  {item}
                </h2>

                <p className="mt-3 text-gray-500 transition group-hover:text-yellow-600">
                  Ver productos →
                </p>

              </Link>
            );
          })}

        </div>
      </div>
    </main>
  );
}
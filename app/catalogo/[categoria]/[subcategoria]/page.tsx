import Link from "next/link";
import { productos } from "@/data/productos";
import ProductoCard from "@/components/ProductoCard";

interface Props {
  params: Promise<{
    categoria: string;
    subcategoria: string;
  }>;
}

export default async function SubcategoriaPage({ params }: Props) {
  const { categoria, subcategoria } = await params;

  const nombreCategoria = categoria
    .toLowerCase()
    .replaceAll("-", " ");

  const nombreSubcategoria = subcategoria
    .toLowerCase()
    .replaceAll("-", " ");

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.categoria.toLowerCase() === nombreCategoria &&
      producto.subcategoria.toLowerCase() === nombreSubcategoria
  );

  return (
    <main className="min-h-screen bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Flecha para volver */}
        <Link
          href={`/catalogo/${categoria}`}
          className="inline-flex items-center gap-2 text-slate-600 transition hover:text-yellow-600"
        >
          <span className="text-2xl">←</span>

          <span className="font-medium">
            Volver a {nombreCategoria}
          </span>
        </Link>

        {/* Título */}
        <h1 className="mt-8 text-5xl font-bold capitalize text-slate-900">
          {nombreSubcategoria}
        </h1>

        {/* Descripción */}
        <p className="mt-4 text-lg text-gray-600">
          Productos disponibles para esta referencia.
        </p>

        {/* Productos */}
        {productosFiltrados.length === 0 ? (
          <p className="mt-10 text-xl text-red-600">
            No hay productos disponibles.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productosFiltrados.map((producto) => (
              <ProductoCard
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
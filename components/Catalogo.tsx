"use client";

import { productos } from "../data/productos";
import { useCart } from "../context/CartContext";

export default function Catalogo() {
  const { agregarProducto } = useCart();

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Catálogo de Productos
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Descubre nuestra línea de troqueles, remachadoras e insumos para la
            industria de la confección, tapicería y marroquinería.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gray-100">
                <span className="text-gray-400">
                  Imagen próximamente
                </span>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                {producto.categoria}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {producto.nombre}
              </h3>

              <p className="mt-2 text-gray-500">
                Código: {producto.codigo}
              </p>

              {producto.precio > 0 ? (
                <p className="mt-6 text-3xl font-bold text-yellow-600">
                  ${producto.precio.toLocaleString("es-CO")}
                </p>
              ) : (
                <p className="mt-6 text-xl font-bold text-gray-500">
                  Precio próximamente
                </p>
              )}

              <button
                onClick={() =>
                  agregarProducto({
                    id: producto.id,
                    nombre: producto.nombre,
                    codigo: producto.codigo,
                    precio: producto.precio,
                  })
                }
                disabled={producto.precio <= 0}
                className="mt-8 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
              >
                {producto.precio > 0
                  ? "Agregar al carrito"
                  : "Precio próximamente"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
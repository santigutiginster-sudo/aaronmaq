"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const {
    cart,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
  } = useCart();

  const total = cart.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-yellow-600"
        >
          ← Volver al inicio
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Mi carrito
        </h1>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-5 text-2xl font-semibold text-slate-900">
              Tu carrito está vacío
            </h2>

            <p className="mt-2 text-gray-500">
              Explora nuestro catálogo y agrega tus productos.
            </p>

            <Link
              href="/catalogo"
              className="mt-6 inline-flex rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Ver catálogo
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">
            <div className="space-y-4">
              {cart.map((producto) => (
                <div
                  key={producto.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {producto.nombre}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Código: {producto.codigo}
                      </p>

                      <p className="mt-3 font-semibold text-yellow-600">
                        ${producto.precio.toLocaleString("es-CO")} COP
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => disminuirCantidad(producto.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold transition hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="min-w-8 text-center font-semibold">
                        {producto.cantidad}
                      </span>

                      <button
                        onClick={() => aumentarCantidad(producto.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold transition hover:bg-gray-100"
                      >
                        +
                      </button>

                      <button
                        onClick={() => eliminarProducto(producto.id)}
                        className="ml-2 text-sm font-semibold text-red-500 transition hover:text-red-700"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-100 pt-4 text-right">
                    <span className="text-sm text-gray-500">
                      Subtotal:{" "}
                    </span>

                    <span className="font-bold text-slate-900">
                      $
                      {(producto.precio * producto.cantidad).toLocaleString(
                        "es-CO"
                      )}{" "}
                      COP
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Resumen de compra
              </h2>

              <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-600">
                  Productos
                </span>

                <span className="font-semibold">
                  {cart.reduce(
                    (total, producto) => total + producto.cantidad,
                    0
                  )}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-yellow-600">
                  ${total.toLocaleString("es-CO")} COP
                </span>
              </div>

              <button
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-xl bg-gray-300 px-6 py-3 font-semibold text-gray-500"
              >
                Pagar con Mercado Pago
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Estamos preparando el pago seguro.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
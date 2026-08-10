"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Carrito() {
  const { cart } = useCart();

  const total = cart.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  const cantidadProductos = cart.reduce(
    (cantidad, producto) => cantidad + producto.cantidad,
    0
  );

  const envioGratis = 250000;
  const porcentaje = Math.min((total / envioGratis) * 100, 100);
  const faltante = Math.max(envioGratis - total, 0);

  return (
    <div className="relative">
      <Link
        href="/carrito"
        aria-label="Carrito"
        className="relative flex text-slate-600 transition hover:text-yellow-600"
      >
        <span className="text-2xl">🛒</span>

        {cantidadProductos > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-500 px-1 text-xs font-bold text-black">
            {cantidadProductos}
          </span>
        )}
      </Link>

      {cart.length > 0 && (
        <div className="absolute right-0 top-10 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-900">
            Mi carrito
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Te faltan{" "}
            <strong>
              ${faltante.toLocaleString("es-CO")}
            </strong>{" "}
            para completar el envío gratis.
          </p>

          <div className="mt-5">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-yellow-500 transition-all"
                style={{ width: `${porcentaje}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>
                ${total.toLocaleString("es-CO")}
              </span>

              <span>
                $250.000
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {cart.map((producto) => (
              <div
                key={producto.id}
                className="flex items-center justify-between border-b border-gray-100 pb-3"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {producto.nombre}
                  </p>

                  <p className="text-sm text-gray-500">
                    Cantidad: {producto.cantidad}
                  </p>
                </div>

                <p className="font-semibold text-yellow-600">
                  $
                  {(
                    producto.precio * producto.cantidad
                  ).toLocaleString("es-CO")}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/carrito"
            className="mt-6 block w-full rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
          >
            Ver carrito
          </Link>
        </div>
      )}
    </div>
  );
}
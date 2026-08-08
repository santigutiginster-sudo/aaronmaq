"use client";

import { useState } from "react";

export default function Carrito() {
  const [abierto, setAbierto] = useState(false);

  const total = 0;
  const envioGratis = 250000;
  const porcentaje = Math.min((total / envioGratis) * 100, 100);
  const faltante = Math.max(envioGratis - total, 0);

  return (
    <>
      <button
        type="button"
        aria-label="Carrito"
        onClick={() => setAbierto(!abierto)}
        className="text-slate-600 transition hover:text-yellow-600"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 4h2l2.5 11a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.5L21 8H6" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
      </button>

      {abierto && (
        <div className="absolute right-6 top-16 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

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

          {/* Barra de progreso */}
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

          {/* Carrito vacío */}
          <div className="mt-8 text-center">
            <div className="text-4xl">
              🛒
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Tu carrito está vacío.
            </p>
          </div>

        </div>
      )}
    </>
  );
}

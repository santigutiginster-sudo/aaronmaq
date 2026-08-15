"use client";

import { useState } from "react";
import { productos } from "../data/productos";

export default function Buscador() {
  const [abierto, setAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const resultados = productos.filter((producto) => {
    const texto = busqueda.toLowerCase().trim();

    if (!texto) return false;

    return (
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto) ||
      producto.codigo?.toLowerCase().includes(texto) ||
      producto.material?.toLowerCase().includes(texto) ||
      producto.acabado?.toLowerCase().includes(texto) ||
      producto.uso?.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto) ||
      producto.medida?.toLowerCase().includes(texto)
    );
  });

  return (
    <>
      <button
        type="button"
        aria-label="Buscar"
        onClick={() => setAbierto(!abierto)}
        className="text-slate-600 transition hover:text-yellow-600"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
      </button>

      {abierto && (
        <div className="absolute left-0 right-0 top-20 border-t border-slate-200 bg-white px-6 py-5 shadow-sm">
          <div className="mx-auto max-w-7xl">
            <input
              type="text"
              autoFocus
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full rounded-lg border border-slate-300 px-5 py-3 text-sm outline-none focus:border-yellow-600"
            />

            {busqueda && (
              <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                {resultados.length > 0 ? (
                  resultados.map((producto) => (
                    <div
                      key={producto.id}
                      className="border-b border-slate-100 px-5 py-4 last:border-b-0 hover:bg-slate-50"
                    >
                      <p className="font-semibold text-slate-800">
                        {producto.nombre}
                      </p>

                      <div className="mt-1 text-sm text-slate-500">
                        Código: {producto.codigo ?? "No disponible"}
                      </div>

                      <div className="mt-2 text-sm text-slate-600">
                        {producto.categoria}
                        {producto.medida && ` · ${producto.medida}`}
                        {producto.material && ` · ${producto.material}`}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="px-5 py-4 text-sm text-slate-500">
                    No encontramos productos para "{busqueda}".
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
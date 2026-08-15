"use client";

import Link from "next/link";
import RastrearPedido from "@/components/RastrearPedido";

export default function PedidosPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10">
      <div className="mx-auto w-full max-w-3xl">

        {/* ENCABEZADO */}

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Mis pedidos
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Consulta el estado y seguimiento de tus pedidos.
          </p>
        </div>

        {/* PEDIDO */}

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

          {/* CABECERA */}

          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Pedido
              </p>

              <h2 className="mt-1 text-lg font-bold text-slate-900">
                #0001
              </h2>
            </div>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
              En preparación
            </span>

          </div>

          {/* DATOS */}

          <div className="px-5 py-4">

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {/* FECHA */}

              <div>
                <p className="text-xs text-gray-400">
                  Fecha
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  Pendiente
                </p>
              </div>

              {/* TOTAL */}

              <div>
                <p className="text-xs text-gray-400">
                  Total
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  Pendiente
                </p>
              </div>

              {/* TRANSPORTADORA */}

              <div>
                <p className="text-xs text-gray-400">
                  Transportadora
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  Inter Rapidísimo
                </p>
              </div>

            </div>

            {/* RASTREO */}

            <div className="mt-5 border-t border-gray-100 pt-5">

              <RastrearPedido
                transportadora="Inter Rapidísimo"
                guia="123456789"
              />

            </div>

          </div>
        </div>

        {/* CATÁLOGO */}

        <div className="mt-6 text-center">

          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
          >
            VER CATÁLOGO
          </Link>

        </div>

      </div>
    </main>
  );
}
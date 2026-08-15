"use client";

import Link from "next/link";

export default function PedidosPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Mis pedidos
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Aquí podrás consultar tus pedidos realizados en Aaronmaq.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3h12v18H6z" />
              <path d="M9 7h6" />
              <path d="M9 11h6" />
              <path d="M9 15h4" />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-slate-900">
            Aún no tienes pedidos
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            Cuando realices una compra en Aaronmaq, aquí podrás consultar la
            información y el estado de tus pedidos.
          </p>

          <div className="mt-6">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              VER CATÁLOGO
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
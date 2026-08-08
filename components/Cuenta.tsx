"use client";

import { useState } from "react";

export default function Cuenta() {
  const [abierta, setAbierta] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Mi cuenta"
        onClick={() => setAbierta(!abierta)}
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
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1-3.2 3.3-5 7-5s6 1.8 7 5" />
        </svg>
      </button>

      {abierta && (
        <div className="absolute right-20 top-16 z-50 w-64 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
          <h3 className="text-lg font-bold text-slate-900">
            Mi cuenta
          </h3>

          <button className="mt-4 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black">
            CREAR CUENTA
          </button>

          <button className="mt-3 w-full rounded-lg border border-slate-300 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-yellow-600 hover:text-yellow-600">
            INICIAR SESIÓN
          </button>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <svg
              width="30"
              height="30"
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
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Crear cuenta
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Para utilizar Aaronmaq debes iniciar sesión con una cuenta de
            Google.
          </p>

          <div className="mt-7">
            <Link
              href="/cuenta?modo=registro"
              className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              CONTINUAR
            </Link>
          </div>

          <p className="mt-5 text-xs leading-5 text-gray-400">
            Tu cuenta será gestionada de forma segura mediante Supabase y
            Google.
          </p>
        </div>
      </div>
    </main>
  );
}
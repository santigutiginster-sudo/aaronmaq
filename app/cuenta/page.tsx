"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export default function CuentaPage() {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const iniciarConGoogle = async () => {
    setError("");
    setCargando(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/cuenta`,
      },
    });

    if (error) {
      console.error(error);
      setError("No fue posible iniciar sesión con Google.");
      setCargando(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-5 py-12">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

          <div className="mb-6">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
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
              Mi cuenta
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Inicia sesión con Google para continuar en Aaronmaq.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={iniciarConGoogle}
            disabled={cargando}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {cargando ? (
              "CONECTANDO..."
            ) : (
              <>
                <span className="text-lg font-bold">G</span>
                CONTINUAR CON GOOGLE
              </>
            )}
          </button>

          <p className="mt-6 text-xs leading-5 text-gray-400">
            Para utilizar Aaronmaq necesitas una cuenta de Google.
          </p>
        </div>
      </div>
    </main>
  );
}
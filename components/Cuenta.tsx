"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface Usuario {
  nombre: string;
  correo: string;
  inicial: string;
}

export default function Cuenta() {
  const [abierta, setAbierta] = useState(false);
  const [mostrarGoogle, setMostrarGoogle] = useState(false);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [iniciandoGoogle, setIniciandoGoogle] = useState(false);
  const [errorGoogle, setErrorGoogle] = useState("");

  useEffect(() => {
    const supabase = createClient();

    const cargarUsuario = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const user = session.user;

        const nombre =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split("@")[0] ||
          "Usuario";

        const correo = user.email || "";

        const inicial = nombre.charAt(0).toUpperCase();

        setUsuario({
          nombre,
          correo,
          inicial,
        });
      } else {
        setUsuario(null);
      }
    };

    cargarUsuario();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          const user = session.user;

          const nombre =
            user.user_metadata?.full_name ||
            user.user_metadata?.name ||
            user.email?.split("@")[0] ||
            "Usuario";

          const correo = user.email || "";

          const inicial = nombre.charAt(0).toUpperCase();

          setUsuario({
            nombre,
            correo,
            inicial,
          });
        } else {
          setUsuario(null);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const iniciarConGoogle = async () => {
    setIniciandoGoogle(true);
    setErrorGoogle("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Error iniciando sesión con Google:", error);
      setErrorGoogle(
        "No se pudo iniciar sesión con Google. Inténtalo nuevamente."
      );
      setIniciandoGoogle(false);
    }
  };

  const cerrarSesion = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    setUsuario(null);
    setAbierta(false);
    setMostrarGoogle(false);

    window.location.href = "/";
  };

  return (
    <div className="relative">
      {/* BOTÓN DE USUARIO */}

      <button
        type="button"
        aria-label="Mi cuenta"
        onClick={() => {
          setAbierta(!abierta);
          setMostrarGoogle(false);
          setErrorGoogle("");
        }}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-white
          text-sm
          font-semibold
          text-slate-700
          transition
          hover:text-yellow-600
        "
      >
        {usuario ? (
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-purple-700
              text-white
            "
          >
            {usuario.inicial}
          </span>
        ) : (
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
        )}
      </button>

      {/* MENÚ */}

      {abierta && (
        <div
          className="
            absolute
            right-0
            top-11
            z-50
            w-72
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-xl
          "
        >
          {usuario ? (
            <>
              {/* INFORMACIÓN DEL USUARIO */}

              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-purple-700
                      font-semibold
                      text-white
                    "
                  >
                    {usuario.inicial}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-slate-900">
                      {usuario.nombre}
                    </h3>

                    <p className="truncate text-xs text-gray-500">
                      {usuario.correo}
                    </p>
                  </div>
                </div>
              </div>

              {/* MI CUENTA */}

              <Link
                href="/cuenta"
                onClick={() => setAbierta(false)}
                className="
                  mt-4
                  block
                  w-full
                  rounded-lg
                  bg-slate-900
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-yellow-500
                  hover:text-black
                "
              >
                MI CUENTA
              </Link>

              {/* MIS PEDIDOS */}

              <Link
                href="/pedidos"
                onClick={() => setAbierta(false)}
                className="
                  mt-3
                  block
                  w-full
                  rounded-lg
                  border
                  border-slate-300
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-yellow-600
                  hover:text-yellow-600
                "
              >
                MIS PEDIDOS
              </Link>

              {/* RASTREAR PEDIDO */}

              <Link
                href="/rastreo"
                onClick={() => setAbierta(false)}
                className="
                  mt-3
                  block
                  w-full
                  rounded-lg
                  border
                  border-slate-300
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-yellow-600
                  hover:text-yellow-600
                "
              >
                RASTREAR PEDIDO
              </Link>

              {/* CERRAR SESIÓN */}

              <button
                type="button"
                onClick={cerrarSesion}
                className="
                  mt-3
                  w-full
                  rounded-lg
                  border
                  border-red-200
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  text-red-600
                  transition
                  hover:bg-red-50
                "
              >
                CERRAR SESIÓN
              </button>
            </>
          ) : (
            <>
              {/* TÍTULO */}

              <h3 className="text-lg font-bold text-slate-900">
                MI CUENTA
              </h3>

              {!mostrarGoogle ? (
                <>
                  {/* INICIAR SESIÓN */}

                  <button
                    type="button"
                    onClick={() => {
                      setMostrarGoogle(true);
                      setErrorGoogle("");
                    }}
                    className="
                      mt-4
                      w-full
                      rounded-lg
                      bg-slate-900
                      py-2.5
                      text-center
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-yellow-500
                      hover:text-black
                    "
                  >
                    INICIAR SESIÓN
                  </button>

                  {/* INVITADO */}

                  <Link
                    href="/checkout"
                    onClick={() => setAbierta(false)}
                    className="
                      mt-4
                      block
                      w-full
                      rounded-lg
                      border
                      border-slate-300
                      py-2.5
                      text-center
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-600
                      hover:text-yellow-600
                    "
                  >
                    INVITADO
                  </Link>

                  {/* SEPARADOR */}

                  <div className="my-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200" />

                    <span className="text-xs font-medium text-slate-400">
                      o
                    </span>

                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  {/* RASTREAR PEDIDO */}

                  <Link
                    href="/rastreo"
                    onClick={() => setAbierta(false)}
                    className="
                      block
                      w-full
                      rounded-lg
                      border
                      border-slate-300
                      py-2.5
                      text-center
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-600
                      hover:text-yellow-600
                    "
                  >
                    RASTREAR PEDIDO
                  </Link>
                </>
              ) : (
                <>
                  {/* INICIO DE SESIÓN */}

                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-700">
                      ¿Ya tienes una cuenta?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Ingresa de forma segura utilizando tu cuenta de Google.
                    </p>
                  </div>

                  {/* GOOGLE */}

                  <button
                    type="button"
                    onClick={iniciarConGoogle}
                    disabled={iniciandoGoogle}
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-lg
                      border
                      border-slate-300
                      bg-white
                      py-2.5
                      text-sm
                      font-semibold
                      text-slate-700
                      shadow-sm
                      transition
                      hover:border-slate-400
                      hover:bg-slate-50
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    <span className="flex h-5 w-5 items-center justify-center text-base font-bold">
                      G
                    </span>

                    {iniciandoGoogle
                      ? "CONECTANDO..."
                      : "INGRESAR CON GOOGLE"}
                  </button>

                  {/* ERROR */}

                  {errorGoogle && (
                    <div className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-600">
                      {errorGoogle}
                    </div>
                  )}

                  {/* VOLVER */}

                  <button
                    type="button"
                    onClick={() => {
                      setMostrarGoogle(false);
                      setErrorGoogle("");
                    }}
                    className="
                      mt-3
                      w-full
                      py-2
                      text-xs
                      font-medium
                      text-slate-500
                      transition
                      hover:text-slate-900
                    "
                  >
                    ← VOLVER
                  </button>

                  {/* INVITADO */}

                  <Link
                    href="/checkout"
                    onClick={() => setAbierta(false)}
                    className="
                      mt-1
                      block
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      py-2.5
                      text-center
                      text-xs
                      font-semibold
                      text-slate-600
                      transition
                      hover:border-yellow-600
                      hover:text-yellow-600
                    "
                  >
                    CONTINUAR COMO INVITADO
                  </Link>

                  {/* RASTREAR */}

                  <Link
                    href="/rastreo"
                    onClick={() => setAbierta(false)}
                    className="
                      mt-3
                      block
                      w-full
                      text-center
                      text-xs
                      font-medium
                      text-slate-500
                      transition
                      hover:text-yellow-600
                    "
                  >
                    RASTREAR PEDIDO
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
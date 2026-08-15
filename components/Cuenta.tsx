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
  const [usuario, setUsuario] = useState<Usuario | null>(null);

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

  const cerrarSesion = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    setUsuario(null);
    setAbierta(false);

    window.location.href = "/";
  };

  return (
    <div className="relative">

      {/* BOTÓN DE USUARIO */}

      <button
        type="button"
        aria-label="Mi cuenta"
        onClick={() => setAbierta(!abierta)}
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
              <h3 className="text-lg font-bold text-slate-900">
                Mi cuenta
              </h3>

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
                INICIAR SESIÓN
              </Link>
            </>
          )}

        </div>
      )}
    </div>
  );
}

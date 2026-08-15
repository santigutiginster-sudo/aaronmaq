"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Perfil {
  user_id: string;
  full_name: string;
  phone: string;
  address: string;
  city: string;
}

export default function CuentaPage() {
  const [perfil, setPerfil] = useState<Perfil>({
    user_id: "",
    full_name: "",
    phone: "",
    address: "",
    city: "",
  });

  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarPerfil = async () => {
      const supabase = createClient();

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("No se pudo obtener la información del usuario.");
        setCargando(false);
        return;
      }

      const { data, error: perfilError } = await supabase
        .from("profiles")
        .select("user_id, full_name, phone, address, city")
        .eq("user_id", user.id)
        .maybeSingle();

      if (perfilError) {
        console.error("Error cargando perfil:", perfilError);
        setError("No se pudo cargar la información de tu cuenta.");
        setCargando(false);
        return;
      }

      setPerfil({
        user_id: user.id,
        full_name:
          data?.full_name ||
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          "",
        phone: data?.phone || "",
        address: data?.address || "",
        city: data?.city || "",
      });

      setCargando(false);
    };

    cargarPerfil();
  }, []);

  const cambiarCampo = (
    campo: keyof Perfil,
    valor: string
  ) => {
    setPerfil((actual) => ({
      ...actual,
      [campo]: valor,
    }));

    setMensaje("");
    setError("");
  };

  const guardarDatos = async () => {
    setMensaje("");
    setError("");
    setGuardando(true);

    const supabase = createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setError("Tu sesión no está disponible.");
      setGuardando(false);
      return;
    }

    const { error: guardarError } = await supabase
      .from("profiles")
      .upsert(
        {
          user_id: user.id,
          full_name: perfil.full_name,
          phone: perfil.phone,
          address: perfil.address,
          city: perfil.city,
        },
        {
          onConflict: "user_id",
        }
      );

    if (guardarError) {
      console.error("Error guardando perfil:", guardarError);
      setError(
        "No se pudieron guardar los datos. Revisa los permisos de Supabase."
      );
      setGuardando(false);
      return;
    }

    setMensaje("Tus datos fueron guardados correctamente.");
    setGuardando(false);
  };

  if (cargando) {
    return (
      <main className="min-h-screen bg-white px-5 py-12">
        <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center">
          <p className="text-sm text-gray-500">
            Cargando tu información...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-5 py-12">
      <div className="mx-auto w-full max-w-2xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Mi cuenta
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Guarda tus datos de envío para facilitar tus próximas compras.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* INFORMACIÓN DEL USUARIO */}

          <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-6">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xl font-semibold text-white">
              {perfil.full_name
                ? perfil.full_name.charAt(0).toUpperCase()
                : "U"}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-slate-900">
                {perfil.full_name || "Usuario"}
              </h2>

              <p className="truncate text-sm text-gray-500">
                Sesión iniciada con Google
              </p>
            </div>

          </div>

          {/* INFORMACIÓN DE ENVÍO */}

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Información de envío
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Estos datos podrán utilizarse para preparar y enviar tus pedidos.
            </p>
          </div>

          <div className="mt-6 space-y-5">

            {/* NOMBRE */}

            <div>
              <label
                htmlFor="full_name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Nombre completo
              </label>

              <input
                id="full_name"
                type="text"
                value={perfil.full_name}
                onChange={(e) =>
                  cambiarCampo("full_name", e.target.value)
                }
                placeholder="Oscar Gutierrez"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* TELÉFONO */}

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Teléfono
              </label>

              <input
                id="phone"
                type="tel"
                value={perfil.phone}
                onChange={(e) =>
                  cambiarCampo("phone", e.target.value)
                }
                placeholder="300 123 4567"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* DIRECCIÓN */}

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Dirección
              </label>

              <input
                id="address"
                type="text"
                value={perfil.address}
                onChange={(e) =>
                  cambiarCampo("address", e.target.value)
                }
                placeholder="Calle 10 # 20-30"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* CIUDAD */}

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ciudad
              </label>

              <input
                id="city"
                type="text"
                value={perfil.city}
                onChange={(e) =>
                  cambiarCampo("city", e.target.value)
                }
                placeholder="Bogotá"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

          </div>

          {/* MENSAJE */}

          {mensaje && (
            <div className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
              {mensaje}
            </div>
          )}

          {error && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* BOTÓN */}

          <button
            type="button"
            onClick={guardarDatos}
            disabled={guardando}
            className="mt-6 w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {guardando ? "GUARDANDO..." : "GUARDAR DATOS"}
          </button>

        </div>

      </div>
    </main>
  );
}
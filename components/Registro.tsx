"use client";

import { useState } from "react";

export default function Registro() {
  const [registroAbierto, setRegistroAbierto] = useState(false);
  const [formularioAbierto, setFormularioAbierto] = useState(false);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [sexo, setSexo] = useState("");
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false);

  const manejarRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !correo || !sexo || !aceptaPoliticas) {
      return;
    }

    alert("¡Registro recibido! Pronto conectaremos tu descuento del 15%.");

    setNombre("");
    setCorreo("");
    setSexo("");
    setAceptaPoliticas(false);
  };

  return (
    <>
      {/* BOTÓN FLOTANTE DE REGISTRO */}
      <button
        type="button"
        onClick={() => setRegistroAbierto(!registroAbierto)}
        aria-label="Obtener descuento de bienvenida"
        className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition hover:scale-110 hover:bg-yellow-600"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8" />
          <path d="M2 8h20v4H2z" />
          <path d="M12 8v13" />
          <path d="M12 8H7.5a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8Z" />
          <path d="M12 8h4.5a2.5 2.5 0 1 0 0-5C14 3 12 8 12 8Z" />
        </svg>

        {/* Notificación */}
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-md">
          1
        </span>
      </button>

      {/* TARJETA */}
      {registroAbierto && (
        <div className="fixed bottom-36 right-6 z-50 w-72 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

          {/* CERRAR */}
          <button
            type="button"
            onClick={() => {
              setRegistroAbierto(false);
              setFormularioAbierto(false);
            }}
            aria-label="Cerrar"
            className="absolute right-3 top-2 text-lg text-slate-400 transition hover:text-slate-700"
          >
            ×
          </button>

          {!formularioAbierto ? (
            /* INVITACIÓN */
            <div className="text-center">
              <div className="text-3xl">
                🎁
              </div>

              <h3 className="mt-2 text-lg font-bold text-slate-900">
                ¡Tenemos un regalo para ti!
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Regístrate y recibe
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-600">
                15% OFF
              </p>

              <p className="mt-1 text-xs text-slate-500">
                en tu primera compra.
              </p>

              <button
                type="button"
                onClick={() => setFormularioAbierto(true)}
                className="mt-4 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
              >
                REGISTRARME
              </button>
            </div>
          ) : (
            /* FORMULARIO */
            <div>
              <div className="text-center">
                <div className="text-2xl">
                  🎁
                </div>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Obtén tu 15% OFF
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Completa tus datos para recibir tu beneficio.
                </p>
              </div>

              <form
                onSubmit={manejarRegistro}
                className="mt-4 space-y-3"
              >
                {/* NOMBRE */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    Nombre
                  </label>

                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs outline-none transition focus:border-yellow-600"
                  />
                </div>

                {/* CORREO */}
                <div>
                  <label
                    htmlFor="correo"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    Correo electrónico
                  </label>

                  <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="tucorreo@email.com"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs outline-none transition focus:border-yellow-600"
                  />
                </div>

                {/* SEXO */}
                <div>
                  <p className="mb-1.5 text-xs font-medium text-slate-700">
                    Sexo
                  </p>

                  <div className="flex gap-5">
                    <label className="flex cursor-pointer items-center gap-1.5 text-xs text-slate-600">
                      <input
                        type="radio"
                        name="sexo"
                        value="Mujer"
                        checked={sexo === "Mujer"}
                        onChange={(e) => setSexo(e.target.value)}
                        className="h-3.5 w-3.5 accent-yellow-600"
                      />
                      Mujer
                    </label>

                    <label className="flex cursor-pointer items-center gap-1.5 text-xs text-slate-600">
                      <input
                        type="radio"
                        name="sexo"
                        value="Hombre"
                        checked={sexo === "Hombre"}
                        onChange={(e) => setSexo(e.target.value)}
                        className="h-3.5 w-3.5 accent-yellow-600"
                      />
                      Hombre
                    </label>
                  </div>
                </div>

                {/* POLÍTICAS */}
                <div className="flex items-start gap-2">
                  <input
                    id="politicas"
                    type="checkbox"
                    checked={aceptaPoliticas}
                    onChange={(e) =>
                      setAceptaPoliticas(e.target.checked)
                    }
                    required
                    className="mt-0.5 h-3.5 w-3.5 accent-yellow-600"
                  />

                  <label
                    htmlFor="politicas"
                    className="text-[10px] leading-4 text-slate-500"
                  >
                    Acepto las políticas de privacidad y tratamiento
                    de datos personales de AARONMAQ.{" "}

                    <a
                      href="/politica-privacidad"
                      className="font-semibold text-slate-700 underline hover:text-yellow-600"
                    >
                      Conoce más aquí.
                    </a>
                  </label>
                </div>

                {/* ENVIAR */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-slate-900 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  ENVIAR
                </button>
              </form>

              {/* TÉRMINOS */}
              <a
                href="/terminos-y-condiciones"
                className="mt-4 block text-center text-[10px] font-semibold text-slate-500 underline transition hover:text-yellow-600"
              >
                VER TÉRMINOS Y CONDICIONES
              </a>

              {/* VOLVER */}
              <button
                type="button"
                onClick={() => setFormularioAbierto(false)}
                className="mt-2 w-full text-xs text-slate-400 transition hover:text-slate-700"
              >
                Volver
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

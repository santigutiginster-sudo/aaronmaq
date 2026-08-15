"use client";

import { useState } from "react";
import Link from "next/link";

interface Mensaje {
  id: number;
  tipo: "bot" | "usuario";
  texto: string;
}

interface Opcion {
  texto: string;
  accion: string;
}

/*
|--------------------------------------------------------------------------
| RUTAS DEL CATÁLOGO
|--------------------------------------------------------------------------
|
| Aquí se encuentran las rutas que utiliza el chatbot.
| Si alguna ruta cambia en el proyecto, solo se modifica aquí.
|
*/

const RUTAS = {
  remachadoraManual:
    "/catalogo/remachadoras/subcategorias/manual",

  remachadoraElectronica:
    "/catalogo/remachadoras/subcategorias/electronica",

  troqueladora:
    "/catalogo/troqueles",

  broches:
    "/catalogo/troqueles/subcategorias/broches",

  ojaletes:
    "/catalogo/troqueles/subcategorias/ojaletes",

  remaches:
    "/catalogo/troqueles/subcategorias/remaches",
};

/*
|--------------------------------------------------------------------------
| OPCIONES INICIALES
|--------------------------------------------------------------------------
*/

const opcionesIniciales: Opcion[] = [
  {
    texto: "⚙️ Necesito una máquina",
    accion: "maquina",
  },
  {
    texto: "🧰 Necesito un troquel",
    accion: "troquel",
  },
  {
    texto: "🔘 Necesito trabajar broches",
    accion: "broches",
  },
  {
    texto: "👁️ Necesito trabajar ojaletes",
    accion: "ojaletes",
  },
  {
    texto: "🔩 Necesito trabajar remaches",
    accion: "remaches",
  },
  {
    texto: "🛒 Necesito ayuda para comprar",
    accion: "comprar",
  },
];

export default function Chatbot() {
  /*
  |--------------------------------------------------------------------------
  | ESTADOS
  |--------------------------------------------------------------------------
  */

  const [abierto, setAbierto] = useState(false);

  const [mensaje, setMensaje] = useState("");

  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      tipo: "bot",
      texto:
        "¡Hola! 👋 Soy el asistente de Aaronmaq. Puedo ayudarte a encontrar la máquina, troquel o insumo que necesitas.",
    },
  ]);

  const [mostrarOpciones, setMostrarOpciones] =
    useState(true);

  const [tipoActual, setTipoActual] = useState<
    "inicio" | "maquinas" | "troqueles"
  >("inicio");

  /*
  |--------------------------------------------------------------------------
  | AGREGAR MENSAJE
  |--------------------------------------------------------------------------
  */

  function agregarMensaje(
    tipo: "bot" | "usuario",
    texto: string
  ) {
    setMensajes((actuales) => [
      ...actuales,
      {
        id: Date.now() + Math.random(),
        tipo,
        texto,
      },
    ]);
  }

  /*
  |--------------------------------------------------------------------------
  | REINICIAR CONVERSACIÓN
  |--------------------------------------------------------------------------
  */

  function reiniciarConversacion() {
    setMensajes([
      {
        id: Date.now(),
        tipo: "bot",
        texto:
          "¡Hola! 👋 Soy el asistente de Aaronmaq. Puedo ayudarte a encontrar la máquina, troquel o insumo que necesitas.",
      },
    ]);

    setTipoActual("inicio");
    setMostrarOpciones(true);
    setMensaje("");
  }

  /*
  |--------------------------------------------------------------------------
  | MOSTRAR MÁQUINAS
  |--------------------------------------------------------------------------
  */

  function mostrarMaquinas() {
    setTipoActual("maquinas");
    setMostrarOpciones(false);

    agregarMensaje(
      "usuario",
      "Necesito una máquina"
    );

    setTimeout(() => {
      agregarMensaje(
        "bot",
        "Claro ⚙️. ¿Qué tipo de máquina estás buscando?"
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);
    }, 300);
  }

  /*
  |--------------------------------------------------------------------------
  | SELECCIONAR MÁQUINA
  |--------------------------------------------------------------------------
  */

  function seleccionarMaquina(nombre: string) {
    setMostrarOpciones(false);

    agregarMensaje("usuario", nombre);

    if (nombre === "Troqueladora") {
      agregarMensaje(
        "bot",
        "Perfecto 🧰. Te llevaré directamente a la sección de troqueladoras."
      );

      return;
    }

    if (nombre === "Otra máquina") {
      agregarMensaje(
        "bot",
        "Claro 👍. Cuéntame qué proceso necesitas realizar y te ayudaré a identificar la máquina adecuada."
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 300);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | MOSTRAR TROQUELES
  |--------------------------------------------------------------------------
  */

  function mostrarTroqueles() {
    setTipoActual("troqueles");
    setMostrarOpciones(false);

    agregarMensaje(
      "usuario",
      "Necesito un troquel"
    );

    setTimeout(() => {
      agregarMensaje(
        "bot",
        "Perfecto 🧰. ¿Qué producto deseas trabajar?"
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);
    }, 300);
  }

  /*
  |--------------------------------------------------------------------------
  | SELECCIONAR TROQUEL
  |--------------------------------------------------------------------------
  */

  function seleccionarTroquel(nombre: string) {
    setMostrarOpciones(false);

    agregarMensaje("usuario", nombre);

    if (nombre === "Otro producto") {
      agregarMensaje(
        "bot",
        "Claro 👍. Dime qué producto necesitas colocar y te ayudaré a encontrar el troquel adecuado."
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 300);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | SELECCIONAR NECESIDAD INICIAL
  |--------------------------------------------------------------------------
  */

  function seleccionarNecesidad(
    accion: string
  ) {
    if (accion === "maquina") {
      mostrarMaquinas();
      return;
    }

    if (accion === "troquel") {
      mostrarTroqueles();
      return;
    }

    if (accion === "broches") {
      setTipoActual("troqueles");
      setMostrarOpciones(false);

      agregarMensaje(
        "usuario",
        "Necesito trabajar broches"
      );

      setTimeout(() => {
        agregarMensaje(
          "bot",
          "🔘 Claro. Te mostraré las opciones para trabajar broches."
        );

        setTimeout(() => {
          setMostrarOpciones(true);
        }, 200);
      }, 300);

      return;
    }

    if (accion === "ojaletes") {
      setTipoActual("troqueles");
      setMostrarOpciones(false);

      agregarMensaje(
        "usuario",
        "Necesito trabajar ojaletes"
      );

      setTimeout(() => {
        agregarMensaje(
          "bot",
          "👁️ Claro. Te mostraré las opciones para trabajar ojaletes."
        );

        setTimeout(() => {
          setMostrarOpciones(true);
        }, 200);
      }, 300);

      return;
    }

    if (accion === "remaches") {
      setTipoActual("troqueles");
      setMostrarOpciones(false);

      agregarMensaje(
        "usuario",
        "Necesito trabajar remaches"
      );

      setTimeout(() => {
        agregarMensaje(
          "bot",
          "🔩 Claro. Te mostraré las opciones para trabajar remaches."
        );

        setTimeout(() => {
          setMostrarOpciones(true);
        }, 200);
      }, 300);

      return;
    }

    if (accion === "comprar") {
      setMostrarOpciones(false);

      agregarMensaje(
        "usuario",
        "Necesito ayuda para comprar"
      );

      setTimeout(() => {
        agregarMensaje(
          "bot",
          "🛒 Claro. Cuéntame qué producto estás buscando y te ayudaré a encontrarlo para que puedas comprarlo directamente."
        );
      }, 400);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | ANALIZAR MENSAJE ESCRITO
  |--------------------------------------------------------------------------
  */

  function analizarMensaje(texto: string) {
    const textoNormalizado = texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    /*
    | REMACHADORA MANUAL
    */

    if (
      textoNormalizado.includes(
        "remachadora manual"
      )
    ) {
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "⚙️ Encontré la remachadora manual. Te llevaré directamente a esa sección."
      );

      return;
    }

    /*
    | REMACHADORA ELECTRÓNICA
    */

    if (
      textoNormalizado.includes(
        "remachadora electronica"
      ) ||
      textoNormalizado.includes(
        "remachadora electrica"
      )
    ) {
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "⚡ Encontré la remachadora electrónica. Te llevaré directamente a esa sección."
      );

      return;
    }

    /*
    | REMACHADORA EN GENERAL
    */

    if (
      textoNormalizado.includes(
        "remachadora"
      )
    ) {
      setTipoActual("maquinas");
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "⚙️ Claro. ¿Qué tipo de remachadora estás buscando?"
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);

      return;
    }

    /*
    | TROQUELADORA
    */

    if (
      textoNormalizado.includes(
        "troqueladora"
      )
    ) {
      setTipoActual("maquinas");
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "🧰 Claro. Te ayudaré a encontrar la troqueladora adecuada."
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);

      return;
    }

    /*
    | TROQUEL
    */

    if (
      textoNormalizado.includes("troquel")
    ) {
      mostrarTroqueles();
      return;
    }

    /*
    | MÁQUINA
    */

    if (
      textoNormalizado.includes("maquina")
    ) {
      mostrarMaquinas();
      return;
    }

    /*
    | BROCHES
    */

    if (
      textoNormalizado.includes("broche")
    ) {
      setTipoActual("troqueles");
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "🔘 Claro. Te ayudaré a encontrar lo necesario para trabajar broches."
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);

      return;
    }

    /*
    | OJALETES
    */

    if (
      textoNormalizado.includes("ojalete")
    ) {
      setTipoActual("troqueles");
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "👁️ Claro. Te ayudaré a encontrar lo necesario para trabajar ojaletes."
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);

      return;
    }

    /*
    | REMACHES
    */

    if (
      textoNormalizado.includes("remache")
    ) {
      setTipoActual("troqueles");
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "🔩 Claro. Te ayudaré a encontrar lo necesario para trabajar remaches."
      );

      setTimeout(() => {
        setMostrarOpciones(true);
      }, 200);

      return;
    }

    /*
    | COMPRA
    */

    if (
      textoNormalizado.includes("comprar") ||
      textoNormalizado.includes("precio") ||
      textoNormalizado.includes("pagar")
    ) {
      setMostrarOpciones(false);

      agregarMensaje(
        "bot",
        "🛒 Claro. Dime qué producto estás buscando y te ayudaré a encontrarlo para que puedas comprarlo directamente."
      );

      return;
    }

    /*
    | NO ENTENDIDO
    */

    agregarMensaje(
      "bot",
      "Entiendo 👍. Cuéntame qué necesitas: una máquina, una remachadora, un troquel, algo para broches, ojaletes, remaches u otro producto."
    );

    setTipoActual("inicio");
    setMostrarOpciones(true);
  }

  /*
  |--------------------------------------------------------------------------
  | ENVIAR MENSAJE
  |--------------------------------------------------------------------------
  */

  function enviarMensaje() {
    const texto = mensaje.trim();

    if (!texto) return;

    agregarMensaje(
      "usuario",
      texto
    );

    setMensaje("");
    setMostrarOpciones(false);

    setTimeout(() => {
      analizarMensaje(texto);
    }, 400);
  }

  /*
  |--------------------------------------------------------------------------
  | WHATSAPP
  |--------------------------------------------------------------------------
  */

  function abrirWhatsApp() {
    window.open(
      "https://wa.me/573208108023",
      "_blank",
      "noopener,noreferrer"
    );
  }

  /*
  |--------------------------------------------------------------------------
  | VOLVER AL INICIO
  |--------------------------------------------------------------------------
  */

  function volverInicio() {
    setTipoActual("inicio");
    setMostrarOpciones(true);

    agregarMensaje(
      "bot",
      "Claro 👍. ¿Qué estás buscando?"
    );
  }

  /*
  |--------------------------------------------------------------------------
  | INTERFAZ
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {/* =====================================================
          VENTANA DEL CHAT
      ===================================================== */}

      {abierto && (
        <div
          className="
            fixed
            bottom-24
            right-4
            z-[60]
            flex
            w-[calc(100vw-2rem)]
            max-w-[390px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-2xl
            sm:right-6
          "
        >
          {/* =================================================
              ENCABEZADO
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              bg-slate-900
              px-5
              py-4
              text-white
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500
                  text-xl
                "
              >
                🤖
              </div>

              <div>
                <p className="text-sm font-bold">
                  Asistente Aaronmaq
                </p>

                <p className="text-xs text-gray-300">
                  Te ayudamos a encontrar lo que necesitas
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setAbierto(false)
              }
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-xl
                text-gray-300
                transition
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Cerrar chatbot"
            >
              ×
            </button>
          </div>

          {/* =================================================
              MENSAJES
          ================================================= */}

          <div
            className="
              flex
              max-h-[400px]
              min-h-[300px]
              flex-col
              gap-3
              overflow-y-auto
              bg-gray-50
              p-4
            "
          >
            {mensajes.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  item.tipo === "usuario"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    leading-5
                    ${
                      item.tipo === "usuario"
                        ? "rounded-br-md bg-yellow-500 text-black"
                        : "rounded-bl-md bg-white text-slate-700 shadow-sm"
                    }
                  `}
                >
                  {item.texto}
                </div>
              </div>
            ))}

            {/* =================================================
                OPCIONES INICIALES
            ================================================= */}

            {mostrarOpciones &&
              tipoActual === "inicio" && (
                <div className="mt-1 grid gap-2">
                  {opcionesIniciales.map(
                    (opcion) => (
                      <button
                        key={opcion.accion}
                        type="button"
                        onClick={() =>
                          seleccionarNecesidad(
                            opcion.accion
                          )
                        }
                        className="
                          rounded-xl
                          border
                          border-gray-200
                          bg-white
                          px-3
                          py-2.5
                          text-left
                          text-sm
                          font-medium
                          text-slate-700
                          transition
                          hover:border-yellow-500
                          hover:bg-yellow-50
                        "
                      >
                        {opcion.texto}
                      </button>
                    )
                  )}
                </div>
              )}

            {/* =================================================
                OPCIONES DE MÁQUINAS
            ================================================= */}

            {mostrarOpciones &&
              tipoActual === "maquinas" && (
                <div className="mt-1 grid gap-2">
                  <p className="px-1 text-xs font-semibold text-gray-500">
                    ¿Qué tipo de máquina estás buscando?
                  </p>

                  <Link
                    href={
                      RUTAS.remachadoraManual
                    }
                    onClick={() => {
                      setMostrarOpciones(
                        false
                      );

                      agregarMensaje(
                        "usuario",
                        "⚙️ Remachadora manual"
                      );
                    }}
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    ⚙️ Remachadora manual
                  </Link>

                  <Link
                    href={
                      RUTAS.remachadoraElectronica
                    }
                    onClick={() => {
                      setMostrarOpciones(
                        false
                      );

                      agregarMensaje(
                        "usuario",
                        "⚡ Remachadora electrónica"
                      );
                    }}
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    ⚡ Remachadora electrónica
                  </Link>

                  <Link
                    href={RUTAS.troqueladora}
                    onClick={() => {
                      setMostrarOpciones(
                        false
                      );

                      agregarMensaje(
                        "usuario",
                        "🧰 Troqueladora"
                      );
                    }}
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    🧰 Troqueladora
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      seleccionarMaquina(
                        "Otra máquina"
                      )
                    }
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    🔎 Otra máquina
                  </button>

                  <button
                    type="button"
                    onClick={volverInicio}
                    className="
                      mt-1
                      text-xs
                      font-semibold
                      text-yellow-700
                      hover:underline
                    "
                  >
                    ← Volver a opciones
                  </button>
                </div>
              )}

            {/* =================================================
                OPCIONES DE TROQUELES
            ================================================= */}

            {mostrarOpciones &&
              tipoActual === "troqueles" && (
                <div className="mt-1 grid gap-2">
                  <p className="px-1 text-xs font-semibold text-gray-500">
                    ¿Qué producto deseas trabajar?
                  </p>

                  <Link
                    href={RUTAS.broches}
                    onClick={() => {
                      setMostrarOpciones(
                        false
                      );

                      agregarMensaje(
                        "usuario",
                        "🔘 Broches"
                      );
                    }}
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    🔘 Broches
                  </Link>

                  <Link
                    href={RUTAS.ojaletes}
                    onClick={() => {
                      setMostrarOpciones(
                        false
                      );

                      agregarMensaje(
                        "usuario",
                        "👁️ Ojaletes"
                      );
                    }}
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    👁️ Ojaletes
                  </Link>

                  <Link
                    href={RUTAS.remaches}
                    onClick={() => {
                      setMostrarOpciones(
                        false
                      );

                      agregarMensaje(
                        "usuario",
                        "🔩 Remaches"
                      );
                    }}
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    🔩 Remaches
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      seleccionarTroquel(
                        "Otro producto"
                      )
                    }
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-50
                    "
                  >
                    🔎 Otro producto
                  </button>

                  <button
                    type="button"
                    onClick={volverInicio}
                    className="
                      mt-1
                      text-xs
                      font-semibold
                      text-yellow-700
                      hover:underline
                    "
                  >
                    ← Volver a opciones
                  </button>
                </div>
              )}
          </div>

          {/* =================================================
              PARTE INFERIOR
          ================================================= */}

          <div className="border-t border-gray-200 bg-white p-3">

            {/* REINICIAR */}

            <button
              type="button"
              onClick={reiniciarConversacion}
              className="
                mb-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-3
                py-2.5
                text-xs
                font-semibold
                text-slate-600
                transition
                hover:border-yellow-500
                hover:bg-yellow-50
                hover:text-slate-900
              "
            >
              🔄️ Reiniciar conversación
            </button>

            {/* WHATSAPP */}

            <button
              type="button"
              onClick={abrirWhatsApp}
              className="
                mb-3
                w-full
                rounded-xl
                bg-green-500
                px-3
                py-2.5
                text-xs
                font-bold
                text-white
                transition
                hover:bg-green-600
              "
            >
              💬 Hablar directamente con Aaronmaq
            </button>

            {/* INPUT */}

            <div className="flex gap-2">
              <input
                type="text"
                value={mensaje}
                onChange={(e) =>
                  setMensaje(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    enviarMensaje();
                  }
                }}
                placeholder="Escribe lo que necesitas..."
                className="
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-gray-300
                  px-3
                  py-2.5
                  text-sm
                  text-slate-900
                  outline-none
                  transition
                  focus:border-yellow-500
                  focus:ring-2
                  focus:ring-yellow-100
                "
              />

              <button
                type="button"
                onClick={enviarMensaje}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-500
                  text-lg
                  text-black
                  transition
                  hover:bg-yellow-400
                  active:scale-95
                "
                aria-label="Enviar mensaje"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          BOTÓN FLOTANTE
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          setAbierto(
            (estado) => !estado
          )
        }
        className="
          fixed
          bottom-5
          right-20
          z-[60]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-slate-900
          text-2xl
          text-white
          shadow-lg
          transition
          hover:scale-110
          hover:bg-slate-800
          active:scale-95
          sm:right-24
        "
        aria-label={
          abierto
            ? "Cerrar asistente"
            : "Abrir asistente"
        }
      >
        {abierto ? "×" : "🤖"}
      </button>
    </>
  );
}
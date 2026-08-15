"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const {
    cart,
    compraDirecta,
  } = useCart();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [especificaciones, setEspecificaciones] =
    useState("");
  const [aceptaPrivacidad, setAceptaPrivacidad] =
    useState(false);

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  /*
   * =====================================================
   * PRODUCTOS QUE SE VAN A COMPRAR
   * =====================================================
   *
   * Si existe una compra directa:
   *
   * ⚡ Comprar ahora
   *
   * utilizamos únicamente ese producto.
   *
   * Si no existe compra directa:
   *
   * 🛒 Carrito
   *
   * utilizamos el carrito normal.
   */

  const productosCompra = compraDirecta
    ? [compraDirecta]
    : cart;

  /*
   * =====================================================
   * TOTAL
   * =====================================================
   */

  const total = productosCompra.reduce(
    (suma, producto) =>
      suma +
      producto.precio * producto.cantidad,
    0
  );

  /*
   * =====================================================
   * CONTINUAR AL PAGO
   * =====================================================
   */

  async function continuarAlPago() {
    setError("");

    /*
     * VALIDACIONES
     */

    if (!nombre.trim()) {
      setError("Ingresa tu nombre completo.");
      return;
    }

    if (!correo.trim()) {
      setError("Ingresa tu correo electrónico.");
      return;
    }

    if (!telefono.trim()) {
      setError("Ingresa tu teléfono.");
      return;
    }

    if (!ciudad.trim()) {
      setError("Ingresa la ciudad de entrega.");
      return;
    }

    if (!direccion.trim()) {
      setError("Ingresa la dirección de entrega.");
      return;
    }

    if (!aceptaPrivacidad) {
      setError(
        "Debes aceptar el tratamiento de datos personales y la política de privacidad."
      );
      return;
    }

    if (productosCompra.length === 0) {
      setError("No hay productos para comprar.");
      return;
    }

    try {
      setCargando(true);

      /*
       * =================================================
       * WOMPI
       * =================================================
       */

      const respuesta = await fetch(
        "/api/crear-pago-wompi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: productosCompra.map(
              (producto) => ({
                id: producto.id,
                cantidad: producto.cantidad,
              })
            ),

            nombre,
            correo,
            telefono,
            ciudad,
            direccion,
            especificaciones,
            aceptaPrivacidad,
          }),
        }
      );

      const data = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(
          data.error ||
            "No fue posible iniciar el pago con Wompi."
        );
      }

      /*
       * =================================================
       * URL DE WOMPI
       * =================================================
       */

      if (!data.checkoutUrl) {
        throw new Error(
          "Wompi no devolvió la dirección de pago."
        );
      }

      /*
       * =================================================
       * REDIRECCIÓN
       * =================================================
       */

      window.location.href =
        data.checkoutUrl;
    } catch (error) {
      console.error(
        "Error iniciando pago Wompi:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al iniciar el pago con Wompi."
      );

      setCargando(false);
    }
  }

  /*
   * =====================================================
   * SIN PRODUCTOS
   * =====================================================
   */

  if (productosCompra.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-3xl text-center">

          <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">

            <div className="text-5xl">
              🛒
            </div>

            <h1 className="mt-5 text-3xl font-bold text-slate-900">
              No hay productos para comprar
            </h1>

            <p className="mt-3 text-gray-500">
              Agrega un producto al carrito o utiliza
              Comprar ahora.
            </p>

            <Link
              href="/catalogo"
              className="
                mt-6
                inline-flex
                rounded-xl
                bg-yellow-500
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-yellow-400
              "
            >
              Ver catálogo
            </Link>

          </div>
        </div>
      </main>
    );
  }

  /*
   * =====================================================
   * CHECKOUT
   * =====================================================
   */

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* VOLVER */}

        <Link
          href="/carrito"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-500
            transition
            hover:text-yellow-600
          "
        >
          ← Volver
        </Link>

        {/* TÍTULO */}

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Finalizar compra
        </h1>

        <p className="mt-2 text-gray-500">
          Completa tus datos para continuar con el pago.
        </p>

        {/* INDICADOR DE COMPRA DIRECTA */}

        {compraDirecta && (
          <div
            className="
              mt-6
              rounded-xl
              border
              border-yellow-200
              bg-yellow-50
              px-4
              py-3
              text-sm
              font-medium
              text-yellow-800
            "
          >
            ⚡ Estás realizando una compra directa.
          </div>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* =================================================
              DATOS DEL CLIENTE
          ================================================= */}

          <section
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            "
          >

            <h2 className="text-2xl font-bold text-slate-900">
              Datos del comprador
            </h2>

            <div className="mt-6 space-y-5">

              {/* NOMBRE */}

              <div>
                <label
                  htmlFor="nombre"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Nombre completo
                </label>

                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) =>
                    setNombre(e.target.value)
                  }
                  placeholder="Tu nombre completo"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />
              </div>

              {/* CORREO */}

              <div>
                <label
                  htmlFor="correo"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Correo electrónico
                </label>

                <input
                  id="correo"
                  type="email"
                  value={correo}
                  onChange={(e) =>
                    setCorreo(e.target.value)
                  }
                  placeholder="correo@ejemplo.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />
              </div>

              {/* TELÉFONO */}

              <div>
                <label
                  htmlFor="telefono"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Teléfono
                </label>

                <input
                  id="telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) =>
                    setTelefono(e.target.value)
                  }
                  placeholder="300 000 0000"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />
              </div>

              {/* CIUDAD */}

              <div>
                <label
                  htmlFor="ciudad"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Ciudad
                </label>

                <input
                  id="ciudad"
                  type="text"
                  value={ciudad}
                  onChange={(e) =>
                    setCiudad(e.target.value)
                  }
                  placeholder="Bogotá, Medellín, Cali..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />
              </div>

              {/* DIRECCIÓN */}

              <div>
                <label
                  htmlFor="direccion"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Dirección de entrega
                </label>

                <input
                  id="direccion"
                  type="text"
                  value={direccion}
                  onChange={(e) =>
                    setDireccion(e.target.value)
                  }
                  placeholder="Dirección completa"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />
              </div>

              {/* ESPECIFICACIONES */}

              <div>
                <label
                  htmlFor="especificaciones"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Especificaciones de la dirección

                  <span className="ml-2 font-normal text-gray-400">
                    (opcional)
                  </span>
                </label>

                <textarea
                  id="especificaciones"
                  value={especificaciones}
                  onChange={(e) =>
                    setEspecificaciones(e.target.value)
                  }
                  rows={3}
                  placeholder="Ej: Conjunto residencial, Torre 2, apartamento 304, interior, piso, local..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />

                <p className="mt-2 text-xs text-gray-500">
                  Puedes indicar torre, apartamento,
                  conjunto, interior, piso, local u otra
                  información útil para la entrega.
                </p>
              </div>

              {/* PRIVACIDAD */}

              <label
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  bg-gray-50
                  p-4
                "
              >

                <input
                  type="checkbox"
                  checked={aceptaPrivacidad}
                  onChange={(e) =>
                    setAceptaPrivacidad(
                      e.target.checked
                    )
                  }
                  className="
                    mt-1
                    h-4
                    w-4
                    accent-yellow-500
                  "
                />

                <span className="text-sm leading-5 text-gray-600">
                  Acepto el tratamiento de mis datos
                  personales y la política de privacidad.
                </span>

              </label>

              {/* ERROR */}

              {error && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    p-4
                    text-sm
                    font-medium
                    text-red-700
                  "
                >
                  {error}
                </div>
              )}

            </div>
          </section>

          {/* =================================================
              RESUMEN
          ================================================= */}

          <aside
            className="
              h-fit
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            "
          >

            <h2 className="text-2xl font-bold text-slate-900">
              Resumen de compra
            </h2>

            <div className="mt-6 space-y-4">

              {productosCompra.map((producto) => (

                <div
                  key={producto.id}
                  className="
                    border-b
                    border-gray-100
                    pb-4
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div className="min-w-0">

                      <p className="font-semibold text-slate-900">
                        {producto.nombre}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Cantidad: {producto.cantidad}
                      </p>

                    </div>

                    <p
                      className="
                        shrink-0
                        font-semibold
                        text-slate-900
                      "
                    >
                      $
                      {(
                        producto.precio *
                        producto.cantidad
                      ).toLocaleString("es-CO")}{" "}
                      COP
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* TOTAL */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-gray-200
                pt-5
              "
            >

              <span className="text-lg font-semibold text-slate-900">
                Total
              </span>

              <span className="text-2xl font-bold text-yellow-600">
                $
                {total.toLocaleString("es-CO")}{" "}
                COP
              </span>

            </div>

            {/* BOTÓN */}

            <button
              type="button"
              onClick={continuarAlPago}
              disabled={cargando}
              className={`
                mt-6
                w-full
                rounded-xl
                px-6
                py-4
                text-base
                font-bold
                transition
                ${
                  cargando
                    ? "cursor-not-allowed bg-gray-300 text-gray-500"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"
                }
              `}
            >
              {cargando
                ? "Conectando con Wompi..."
                : "Continuar al pago"}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Serás dirigido a Wompi para completar
              tu pago de forma segura.
            </p>

          </aside>

        </div>
      </div>
    </main>
  );
}
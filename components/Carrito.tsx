"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Carrito() {
  const { cart } = useCart();

  const [abierto, setAbierto] = useState(false);

  const carritoRef = useRef<HTMLDivElement>(null);

  const total = cart.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  );

  const cantidadProductos = cart.reduce(
    (cantidad, producto) =>
      cantidad + producto.cantidad,
    0
  );

  /*
   * ==========================================
   * CERRAR AL HACER CLIC FUERA
   * ==========================================
   */

  useEffect(() => {
    function manejarClickFuera(event: MouseEvent) {
      if (
        carritoRef.current &&
        !carritoRef.current.contains(
          event.target as Node
        )
      ) {
        setAbierto(false);
      }
    }

    document.addEventListener(
      "mousedown",
      manejarClickFuera
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        manejarClickFuera
      );
    };
  }, []);

  return (
    <div
      ref={carritoRef}
      className="relative"
    >

      {/* ==========================================
          ICONO DEL CARRITO
      ========================================== */}

      <button
        type="button"
        aria-label="Abrir carrito"
        aria-expanded={abierto}
        onClick={() =>
          setAbierto((estado) => !estado)
        }
        className="
          relative
          flex
          text-slate-600
          transition
          hover:text-yellow-600
        "
      >

        <span className="text-2xl">
          🛒
        </span>

        {/* CONTADOR */}

        {cantidadProductos > 0 && (
          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-5
              min-w-5
              items-center
              justify-center
              rounded-full
              bg-yellow-500
              px-1
              text-xs
              font-bold
              text-black
            "
          >
            {cantidadProductos}
          </span>
        )}

      </button>


      {/* ==========================================
          VENTANA DEL CARRITO
      ========================================== */}

      {abierto && (
        <div
          className="
            absolute
            right-0
            top-12
            z-50
            w-[340px]
            max-w-[calc(100vw-24px)]
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-2xl
          "
        >

          {/* ======================================
              CABECERA
          ====================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-100
              px-5
              py-4
            "
          >

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                Tus productos
              </h2>

              <p className="mt-0.5 text-xs text-gray-500">
                {cantidadProductos}{" "}
                {cantidadProductos === 1
                  ? "producto"
                  : "productos"}
              </p>

            </div>

            {/* BOTÓN CERRAR */}

            <button
              type="button"
              onClick={() =>
                setAbierto(false)
              }
              aria-label="Cerrar carrito"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-xl
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-slate-900
              "
            >
              ×
            </button>

          </div>


          {/* ======================================
              CARRITO VACÍO
          ====================================== */}

          {cart.length === 0 ? (

            <div className="px-5 py-8 text-center">

              <div className="text-4xl">
                🛒
              </div>

              <p className="mt-3 text-sm font-medium text-slate-700">
                Tu carrito está vacío.
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Agrega productos desde nuestro catálogo.
              </p>

              <Link
                href="/catalogo"
                onClick={() =>
                  setAbierto(false)
                }
                className="
                  mt-5
                  inline-flex
                  rounded-xl
                  bg-yellow-500
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-yellow-400
                "
              >
                Ver catálogo
              </Link>

            </div>

          ) : (

            <>

              {/* ==================================
                  LISTA DE PRODUCTOS
              ================================== */}

              <div className="max-h-72 overflow-y-auto">

                {cart.map((producto) => (

                  <div
                    key={producto.id}
                    className="
                      border-b
                      border-gray-100
                      px-5
                      py-4
                    "
                  >

                    <div className="flex items-start justify-between gap-4">

                      {/* INFORMACIÓN */}

                      <div className="min-w-0">

                        <p
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-900
                          "
                        >
                          {producto.nombre}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Cantidad: {producto.cantidad}
                        </p>

                      </div>


                      {/* SUBTOTAL */}

                      <p
                        className="
                          shrink-0
                          text-sm
                          font-bold
                          text-yellow-600
                        "
                      >
                        $
                        {(
                          producto.precio *
                          producto.cantidad
                        ).toLocaleString("es-CO")}
                      </p>

                    </div>

                  </div>

                ))}

              </div>


              {/* ==================================
                  RESUMEN
              ================================== */}

              <div className="px-5 py-4">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    Total
                  </span>

                  <span
                    className="
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    $
                    {total.toLocaleString("es-CO")}
                    <span className="ml-1 text-xs font-medium text-gray-500">
                      COP
                    </span>
                  </span>

                </div>


                {/* ==================================
                    FINALIZAR COMPRA
                ================================== */}

                <Link
                  href="/checkout"
                  onClick={() =>
                    setAbierto(false)
                  }
                  className="
                    mt-4
                    block
                    w-full
                    rounded-xl
                    bg-yellow-500
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-bold
                    text-black
                    transition
                    hover:bg-yellow-400
                    active:scale-[0.98]
                  "
                >
                  Finalizar compra
                </Link>


                {/* ==================================
                    VER CARRITO
                ================================== */}

                <Link
                  href="/carrito"
                  onClick={() =>
                    setAbierto(false)
                  }
                  className="
                    mt-2
                    block
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    text-slate-700
                    transition
                    hover:border-yellow-500
                    hover:bg-yellow-50
                  "
                >
                  Ver carrito
                </Link>

              </div>

            </>

          )}

        </div>
      )}

    </div>
  );
}
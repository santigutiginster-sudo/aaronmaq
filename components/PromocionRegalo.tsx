"use client";

import { useState } from "react";

export default function PromocionRegalo() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      {/* Botón flotante de regalo */}
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        aria-label="Promoción de bienvenida"
        className="
          fixed
          bottom-[88px]
          right-4
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-yellow-500
          text-2xl
          shadow-xl
          transition
          hover:scale-110
          hover:bg-yellow-400
          sm:bottom-24
          sm:right-6
        "
      >
        🎁
      </button>

      {/* Ventana de promoción */}
      {abierto && (
        <div
          className="
            fixed
            bottom-[155px]
            left-4
            right-4
            z-50
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-2xl
            sm:bottom-40
            sm:left-auto
            sm:right-6
            sm:w-80
            sm:p-6
          "
        >
          <div className="text-center">

            <div className="text-5xl">
              🎁
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              ¡Tenemos un regalo para ti!
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Regístrate en AARONMAQ y recibe un{" "}
              <span className="font-bold text-yellow-600">
                10% de descuento
              </span>{" "}
              en tu primera compra.
            </p>

            <div className="mt-5 rounded-xl bg-yellow-50 p-4">

              <p className="text-3xl font-bold text-yellow-600">
                10% OFF
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Descuento de bienvenida
              </p>

            </div>

            <button
              type="button"
              onClick={() => setAbierto(false)}
              className="
                mt-5
                w-full
                rounded-xl
                bg-slate-900
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-yellow-500
                hover:text-black
              "
            >
              Cerrar
            </button>

          </div>
        </div>
      )}
    </>
  );
}
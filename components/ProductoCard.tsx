"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Producto } from "@/data/productos";

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  const {
    agregarProducto,
    comprarAhora: guardarCompraDirecta,
  } = useCart();

  const [cantidad, setCantidad] = useState(1);

  // Evitamos errores si precio viene como undefined
  const precio = producto.precio ?? 0;

  // Evitamos errores si codigo viene como undefined
  const codigo = producto.codigo ?? "";

  function cambiarCantidad(nuevaCantidad: number) {
    if (nuevaCantidad < 1) return;

    setCantidad(nuevaCantidad);
  }

  /*
   * =====================================================
   * AGREGAR AL CARRITO
   * =====================================================
   */

  function agregarSeleccionado() {
    if (precio <= 0) return;

    for (let i = 0; i < cantidad; i++) {
      agregarProducto({
        id: producto.id,
        nombre: producto.nombre,
        codigo: codigo,
        precio: precio,
      });
    }

    setCantidad(1);
  }

  /*
   * =====================================================
   * COMPRAR AHORA
   * =====================================================
   */

  function comprarAhora() {
    if (precio <= 0) return;

    guardarCompraDirecta({
      id: producto.id,
      nombre: producto.nombre,
      codigo: codigo,
      precio: precio,
    });

    window.location.href = "/checkout";
  }

  /*
   * =====================================================
   * URL DEL PRODUCTO
   * =====================================================
   */

  const urlProducto = `/catalogo/${producto.categoria}/subcategorias/${producto.subcategoria}/${producto.tipo}/${producto.id}`;

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* =================================================
          PRODUCTO CLICKEABLE
      ================================================= */}

      <Link
        href={urlProducto}
        className="block"
      >
        {/* =================================================
            IMAGEN
        ================================================= */}

        <div
          className="
            relative
            h-40
            sm:h-44
            lg:h-52
            w-full
            overflow-hidden
            bg-gray-50
          "
        >
          {producto.imagen ? (
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
              className="
                object-contain
                object-center
                p-4
                sm:p-5
                lg:p-6
                transition
                duration-300
                hover:scale-105
              "
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-400">
              Sin imagen
            </div>
          )}
        </div>

        {/* =================================================
            NOMBRE
        ================================================= */}

        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <h2
            className="
              min-h-[44px]
              text-center
              text-base
              font-bold
              leading-5
              text-slate-900
              transition
              hover:text-yellow-600
              sm:min-h-[48px]
              sm:text-lg
              sm:leading-6
            "
          >
            {producto.nombre}
          </h2>
        </div>
      </Link>

      {/* =================================================
          INFORMACIÓN
      ================================================= */}

      <div className="px-3 pb-4 pt-1 sm:px-4 sm:pb-5 sm:pt-2">

        {/* =================================================
            PRECIO
        ================================================= */}

        {precio > 0 ? (
          <p className="mt-2 text-center text-lg font-bold text-yellow-600 sm:text-xl">
            ${precio.toLocaleString("es-CO")} COP
          </p>
        ) : (
          <p className="mt-2 text-center text-base font-semibold text-gray-500 sm:text-lg">
            Precio próximamente
          </p>
        )}

        {/* =================================================
            CANTIDAD
        ================================================= */}

        {precio > 0 && (
          <div className="mt-4 sm:mt-5">
            <div
              className="
                mx-auto
                flex
                h-10
                max-w-[140px]
                items-center
                justify-between
                rounded-xl
                border
                border-gray-200
                bg-white
                px-2
                sm:h-11
                sm:max-w-[150px]
              "
            >

              {/* MENOS */}

              <button
                type="button"
                onClick={() =>
                  cambiarCantidad(cantidad - 1)
                }
                disabled={cantidad <= 1}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  text-xl
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-gray-100
                  disabled:cursor-not-allowed
                  disabled:text-gray-300
                "
                aria-label="Disminuir cantidad"
              >
                −
              </button>

              {/* CANTIDAD */}

              <span className="min-w-[30px] text-center font-bold text-slate-900">
                {cantidad}
              </span>

              {/* MÁS */}

              <button
                type="button"
                onClick={() =>
                  cambiarCantidad(cantidad + 1)
                }
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  text-xl
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-yellow-100
                "
                aria-label="Aumentar cantidad"
              >
                +
              </button>

            </div>
          </div>
        )}

        {/* =================================================
            AGREGAR AL CARRITO
        ================================================= */}

        {precio > 0 && (
          <button
            type="button"
            onClick={agregarSeleccionado}
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-yellow-500
              px-3
              py-2.5
              text-sm
              font-bold
              text-black
              transition
              hover:bg-yellow-400
              active:scale-[0.98]
              sm:mt-4
              sm:px-4
              sm:py-3
            "
          >
            🛒 Agregar al carrito
          </button>
        )}

        {/* =================================================
            VER PRODUCTO
        ================================================= */}

        <Link
          href={urlProducto}
          className="
            mt-2.5
            block
            w-full
            rounded-xl
            border
            border-gray-300
            px-3
            py-2.5
            text-center
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:border-yellow-500
            hover:bg-yellow-50
            sm:mt-3
            sm:px-4
            sm:py-3
          "
        >
          Ver producto
        </Link>

        {/* =================================================
            COMPRAR AHORA
        ================================================= */}

        {precio > 0 && (
          <button
            type="button"
            onClick={comprarAhora}
            className="
              mt-2.5
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-900
              px-3
              py-2.5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-slate-800
              active:scale-[0.98]
              sm:mt-3
              sm:px-4
              sm:py-3
            "
          >
            ⚡ Comprar ahora
          </button>
        )}

      </div>
    </div>
  );
}
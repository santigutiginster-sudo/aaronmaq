"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { productos } from "@/data/productos";
import { useCart } from "@/context/CartContext";

interface Props {
  params: Promise<{
    categoria: string;
    tipo: string;
    producto: string;
  }>;
}

export default function ProductoDetalle({ params }: Props) {
  const { categoria, tipo, producto: productoParam } = use(params);

  const {
    agregarProducto,
    comprarAhora,
  } = useCart();

  const [cantidad, setCantidad] = useState(1);

  // =====================================================
  // BUSCAR PRODUCTO
  // =====================================================

  const productoEncontrado = productos.find(
    (item) => item.id === Number(productoParam)
  );

  // =====================================================
  // SI NO EXISTE
  // =====================================================

  if (!productoEncontrado) {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Producto no encontrado
          </h1>

          <p className="mt-4 text-gray-500">
            No encontramos el producto solicitado.
          </p>

          <Link
            href="/catalogo"
            className="
              mt-6
              inline-block
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
            Volver al catálogo
          </Link>

        </div>
      </main>
    );
  }

  // =====================================================
  // PRODUCTO
  // =====================================================

  const producto = productoEncontrado;

  // =====================================================
  // VALORES SEGUROS
  // =====================================================
  //
  // Evitamos errores de TypeScript cuando alguno
  // de estos campos pueda venir como undefined.
  //

  const precio = producto.precio ?? 0;
  const codigo = producto.codigo ?? "";
  const nombre = producto.nombre ?? "Producto";
  const imagen = producto.imagen ?? "";
  const descripcion =
    producto.descripcion ??
    "Producto de calidad AARONMAQ.";

  const categoriaProducto =
    producto.categoria ?? categoria;

  const subcategoriaProducto =
    producto.subcategoria ?? "";

  const material =
    producto.material ?? "No especificado";

  const medida =
    producto.medida ?? "";

  const acabado =
    producto.acabado ?? "";

  const uso =
    producto.uso ?? "No especificado";

  // =====================================================
  // AUMENTAR CANTIDAD
  // =====================================================

  function aumentar() {
    setCantidad((actual) => actual + 1);
  }

  // =====================================================
  // DISMINUIR CANTIDAD
  // =====================================================

  function disminuir() {
    setCantidad((actual) =>
      actual > 1 ? actual - 1 : 1
    );
  }

  // =====================================================
  // AGREGAR AL CARRITO
  // =====================================================

  function agregarAlCarrito() {
    if (precio <= 0) {
      return;
    }

    for (let i = 0; i < cantidad; i++) {
      agregarProducto({
        id: producto.id,
        nombre: nombre,
        codigo: codigo,
        precio: precio,
      });
    }
  }

  // =====================================================
  // COMPRAR AHORA
  // =====================================================
  //
  // IMPORTANTE:
  // Esta función NO abre el carrito.
  //
  // Guarda el producto como compra directa y después
  // lleva al cliente directamente al checkout.
  //

  function comprarProductoAhora() {
    if (precio <= 0) {
      return;
    }

    comprarAhora({
      id: producto.id,
      nombre: nombre,
      codigo: codigo,
      precio: precio,
    });

    window.location.href = "/checkout";
  }

  // =====================================================
  // URL PARA VOLVER
  // =====================================================

  const urlVolver =
    `/catalogo/${categoria}/subcategorias/${tipo}`;

  // =====================================================
  // PÁGINA
  // =====================================================

  return (
    <main className="min-h-screen bg-white py-10">

      <div className="mx-auto max-w-6xl px-6">

        {/* =================================================
            VOLVER
        ================================================= */}

        <Link
          href={urlVolver}
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
          <span className="text-xl">
            ←
          </span>

          Volver a productos
        </Link>

        {/* =================================================
            PRODUCTO
        ================================================= */}

        <div className="mt-8 grid gap-10 lg:grid-cols-2">

          {/* =================================================
              IMAGEN GRANDE
          ================================================= */}

          <div
            className="
              flex
              min-h-[500px]
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-gray-50
              p-8
            "
          >

            {imagen ? (

              <div className="relative h-[430px] w-full">

                <Image
                  src={imagen}
                  alt={nombre}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-contain
                  "
                />

              </div>

            ) : (

              <div
                className="
                  flex
                  h-[430px]
                  items-center
                  justify-center
                  text-gray-400
                "
              >
                Imagen próximamente
              </div>

            )}

          </div>

          {/* =================================================
              INFORMACIÓN
          ================================================= */}

          <div className="flex flex-col justify-center">

            {/* CATEGORÍA */}

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-yellow-600
              "
            >
              {categoriaProducto}

              {subcategoriaProducto
                ? ` / ${subcategoriaProducto}`
                : ""}
            </p>

            {/* NOMBRE */}

            <h1
              className="
                mt-3
                text-4xl
                font-bold
                leading-tight
                text-slate-900
              "
            >
              {nombre}
            </h1>

            {/* PRECIO */}

            <div className="mt-6">

              {precio > 0 ? (

                <p
                  className="
                    text-3xl
                    font-bold
                    text-yellow-600
                  "
                >
                  $
                  {precio.toLocaleString("es-CO")}

                  <span
                    className="
                      ml-2
                      text-base
                      font-medium
                    "
                  >
                    COP
                  </span>
                </p>

              ) : (

                <p
                  className="
                    text-2xl
                    font-bold
                    text-gray-500
                  "
                >
                  Precio próximamente
                </p>

              )}

            </div>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-6
                text-base
                leading-7
                text-gray-600
              "
            >
              {descripcion}
            </p>

            {/* =================================================
                CANTIDAD
            ================================================= */}

            {precio > 0 && (

              <div className="mt-8">

                <p
                  className="
                    mb-3
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Cantidad
                </p>

                <div
                  className="
                    flex
                    h-14
                    w-44
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-1
                  "
                >

                  {/* MENOS */}

                  <button
                    type="button"
                    onClick={disminuir}
                    disabled={cantidad <= 1}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-lg
                      text-2xl
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

                  <span
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    {cantidad}
                  </span>

                  {/* MÁS */}

                  <button
                    type="button"
                    onClick={aumentar}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-lg
                      text-2xl
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
                BOTONES
            ================================================= */}

            <div className="mt-8 space-y-3">

              {/* =================================================
                  AGREGAR AL CARRITO
              ================================================= */}

              {precio > 0 && (

                <button
                  type="button"
                  onClick={agregarAlCarrito}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-yellow-500
                    px-6
                    py-4
                    text-base
                    font-bold
                    text-black
                    transition
                    hover:bg-yellow-400
                    active:scale-[0.98]
                  "
                >
                  🛒 Agregar al carrito
                </button>

              )}

              {/* =================================================
                  COMPRAR AHORA
              ================================================= */}

              {precio > 0 && (

                <button
                  type="button"
                  onClick={comprarProductoAhora}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-900
                    px-6
                    py-4
                    text-base
                    font-bold
                    text-white
                    transition
                    hover:bg-slate-800
                    active:scale-[0.98]
                  "
                >
                  ⚡ Comprar ahora
                </button>

              )}

            </div>

            {/* =================================================
                INFORMACIÓN ADICIONAL
            ================================================= */}

            <div
              className="
                mt-8
                border-t
                border-gray-200
                pt-6
              "
            >

              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                  text-sm
                "
              >

                {/* MATERIAL */}

                <div>

                  <p className="text-gray-400">
                    Material
                  </p>

                  <p
                    className="
                      mt-1
                      font-semibold
                      text-slate-900
                    "
                  >
                    {material}
                  </p>

                </div>

                {/* MEDIDA */}

                {medida && (

                  <div>

                    <p className="text-gray-400">
                      Medida
                    </p>

                    <p
                      className="
                        mt-1
                        font-semibold
                        text-slate-900
                      "
                    >
                      {medida}
                    </p>

                  </div>

                )}

                {/* ACABADO */}

                {acabado && (

                  <div>

                    <p className="text-gray-400">
                      Acabado
                    </p>

                    <p
                      className="
                        mt-1
                        font-semibold
                        text-slate-900
                      "
                    >
                      {acabado}
                    </p>

                  </div>

                )}

                {/* USO */}

                <div>

                  <p className="text-gray-400">
                    Uso
                  </p>

                  <p
                    className="
                      mt-1
                      font-semibold
                      text-slate-900
                    "
                  >
                    {uso}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
"use client";

import { useCart } from "@/context/CartContext";

interface Producto {
  id: number;
  nombre: string;
  codigo: string;
  descripcion: string;
  material?: string;
  acabado?: string;
  uso?: string;
  colores?: string[];
  precio: number;
}

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  const { agregarProducto } = useCart();

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        p-8
        shadow-sm
        transition
        hover:shadow-xl
        hover:border-yellow-500
      "
    >

      <div
        className="
          h-48
          rounded-xl
          bg-gray-100
          flex
          items-center
          justify-center
          text-gray-400
        "
      >
        Imagen próximamente
      </div>


      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        {producto.nombre}
      </h2>


      <p className="mt-3 text-gray-600">
        Código: {producto.codigo}
      </p>


      <p className="mt-3 text-gray-600">
        {producto.descripcion}
      </p>


      {producto.material && (
        <p className="mt-2 text-gray-600">
          Material: {producto.material}
        </p>
      )}


      {producto.acabado && (
        <p className="mt-2 text-gray-600">
          Acabado: {producto.acabado}
        </p>
      )}


      {producto.uso && (
        <p className="mt-2 text-gray-600">
          Uso: {producto.uso}
        </p>
      )}


      {producto.colores && (
        <div className="mt-4">

          <p className="font-semibold text-slate-900">
            Colores:
          </p>

          <div className="mt-2 flex flex-wrap gap-2">

            {producto.colores.map((color) => (
              <span
                key={color}
                className="
                  rounded-full
                  bg-gray-100
                  px-3
                  py-1
                  text-sm
                "
              >
                {color}
              </span>
            ))}

          </div>

        </div>
      )}


      <p className="mt-6 text-xl font-bold text-yellow-600">
        Precio próximamente
      </p>


      <button
        onClick={() =>
          agregarProducto({
            id: producto.id,
            nombre: producto.nombre,
            codigo: producto.codigo,
            precio: producto.precio,
          })
        }
        className="
          mt-6
          w-full
          rounded-xl
          bg-yellow-500
          px-6
          py-3
          font-semibold
          text-black
          hover:bg-yellow-400
        "
      >
        Agregar al carrito
      </button>


    </div>
  );
}
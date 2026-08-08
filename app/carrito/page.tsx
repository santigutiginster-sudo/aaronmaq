"use client";

import { useCart } from "@/context/CartContext";


export default function CarritoPage() {


  const { cart } = useCart();



  return (

    <main className="min-h-screen bg-white py-20">


      <div className="mx-auto max-w-5xl px-6">


        <h1 className="text-5xl font-bold text-slate-900">
          Tu pedido
        </h1>



        {cart.length === 0 ? (


          <p className="mt-10 text-xl text-gray-600">
            No tienes productos agregados todavía.
          </p>



        ) : (



          <div className="mt-10 space-y-5">



            {cart.map((producto) => (



              <div

                key={producto.id}

                className="
                  rounded-2xl
                  border
                  border-gray-200
                  p-6
                  shadow-sm
                "

              >



                <h2 className="text-2xl font-bold text-slate-900">
                  {producto.nombre}
                </h2>




                <p className="mt-2 text-gray-600">
                  Código: {producto.codigo}
                </p>




                <p className="mt-2 text-gray-600">
                  Producto agregado al pedido
                </p>




              </div>



            ))}



          </div>



        )}



      </div>



    </main>

  );

}
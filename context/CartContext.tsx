"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";


type Product = {
  id: number;
  nombre: string;
  codigo: string;
  precio: number;
};



type CartContextType = {

  cart: Product[];

  agregarProducto: (product: Product) => void;

};



const CartContext = createContext<CartContextType | null>(null);



export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [cart, setCart] = useState<Product[]>([]);



  function agregarProducto(product: Product) {


    console.log("Producto agregado:", product);


    setCart((productosActuales) => [

      ...productosActuales,

      product,

    ]);

  }



  return (

    <CartContext.Provider

      value={{

        cart,

        agregarProducto,

      }}

    >

      {children}


    </CartContext.Provider>

  );

}



export function useCart() {


  const context = useContext(CartContext);



  if (!context) {

    throw new Error(
      "useCart debe estar dentro de CartProvider"
    );

  }



  return context;

}
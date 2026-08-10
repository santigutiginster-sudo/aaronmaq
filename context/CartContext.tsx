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
  cantidad: number;
};

type CartContextType = {
  cart: Product[];
  agregarProducto: (product: Omit<Product, "cantidad">) => void;
  aumentarCantidad: (id: number) => void;
  disminuirCantidad: (id: number) => void;
  eliminarProducto: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Product[]>([]);

  function agregarProducto(product: Omit<Product, "cantidad">) {
    setCart((productosActuales) => {
      const productoExiste = productosActuales.find(
        (item) => item.id === product.id
      );

      if (productoExiste) {
        return productosActuales.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        );
      }

      return [
        ...productosActuales,
        {
          ...product,
          cantidad: 1,
        },
      ];
    });
  }

  function aumentarCantidad(id: number) {
    setCart((productosActuales) =>
      productosActuales.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      )
    );
  }

  function disminuirCantidad(id: number) {
    setCart((productosActuales) =>
      productosActuales
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cantidad: item.cantidad - 1,
              }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }

  function eliminarProducto(id: number) {
    setCart((productosActuales) =>
      productosActuales.filter((item) => item.id !== id)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarProducto,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
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
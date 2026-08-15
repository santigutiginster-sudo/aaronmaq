"use client";

import {
  createContext,
  useContext,
  useEffect,
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

  // ==========================================
  // CARRITO NORMAL
  // ==========================================

  agregarProducto: (
    product: Omit<Product, "cantidad">
  ) => void;

  aumentarCantidad: (id: number) => void;

  disminuirCantidad: (id: number) => void;

  eliminarProducto: (id: number) => void;

  // ==========================================
  // COMPRA DIRECTA
  // ==========================================

  compraDirecta: Product | null;

  comprarAhora: (
    product: Omit<Product, "cantidad">,
    cantidad?: number
  ) => void;

  limpiarCompraDirecta: () => void;
};

const CartContext =
  createContext<CartContextType | null>(null);

const STORAGE_KEY = "aaronmaq_compra_directa";

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ==========================================
  // CARRITO NORMAL
  // ==========================================

  const [cart, setCart] = useState<Product[]>([]);

  // ==========================================
  // COMPRA DIRECTA
  // ==========================================

  const [compraDirecta, setCompraDirecta] =
    useState<Product | null>(null);

  // ==========================================
  // RECUPERAR COMPRA DIRECTA
  // ==========================================
  //
  // Esto permite que la compra sobreviva cuando
  // pasamos de la página del producto al checkout.
  //

  useEffect(() => {
    try {
      const compraGuardada =
        sessionStorage.getItem(STORAGE_KEY);

      if (!compraGuardada) {
        return;
      }

      const productoGuardado: Product =
        JSON.parse(compraGuardada);

      if (
        productoGuardado &&
        typeof productoGuardado.id === "number" &&
        typeof productoGuardado.nombre === "string" &&
        typeof productoGuardado.precio === "number" &&
        typeof productoGuardado.cantidad === "number"
      ) {
        setCompraDirecta(productoGuardado);
      }
    } catch (error) {
      console.error(
        "Error recuperando compra directa:",
        error
      );

      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // ==========================================
  // AGREGAR PRODUCTO AL CARRITO
  // ==========================================

  function agregarProducto(
    product: Omit<Product, "cantidad">
  ) {
    setCart((productosActuales) => {
      const productoExiste =
        productosActuales.find(
          (item) => item.id === product.id
        );

      if (productoExiste) {
        return productosActuales.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cantidad:
                  item.cantidad + 1,
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

  // ==========================================
  // AUMENTAR CANTIDAD
  // ==========================================

  function aumentarCantidad(id: number) {
    setCart((productosActuales) =>
      productosActuales.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad:
                item.cantidad + 1,
            }
          : item
      )
    );
  }

  // ==========================================
  // DISMINUIR CANTIDAD
  // ==========================================

  function disminuirCantidad(id: number) {
    setCart((productosActuales) =>
      productosActuales
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cantidad:
                  item.cantidad - 1,
              }
            : item
        )
        .filter(
          (item) => item.cantidad > 0
        )
    );
  }

  // ==========================================
  // ELIMINAR PRODUCTO
  // ==========================================

  function eliminarProducto(id: number) {
    setCart((productosActuales) =>
      productosActuales.filter(
        (item) => item.id !== id
      )
    );
  }

  // ==========================================
  // COMPRAR AHORA
  // ==========================================
  //
  // IMPORTANTE:
  //
  // NO agregamos el producto al carrito normal.
  //
  // Guardamos únicamente la compra directa.
  //
  // También guardamos la información en
  // sessionStorage para que NO se pierda
  // al pasar al checkout.
  //

  function comprarAhora(
    product: Omit<Product, "cantidad">,
    cantidad: number = 1
  ) {
    const cantidadFinal =
      Number.isFinite(cantidad) && cantidad > 0
        ? Math.floor(cantidad)
        : 1;

    const nuevaCompraDirecta: Product = {
      ...product,
      cantidad: cantidadFinal,
    };

    // Estado React
    setCompraDirecta(
      nuevaCompraDirecta
    );

    // Persistencia durante la compra
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          nuevaCompraDirecta
        )
      );
    } catch (error) {
      console.error(
        "No se pudo guardar la compra directa:",
        error
      );
    }
  }

  // ==========================================
  // LIMPIAR COMPRA DIRECTA
  // ==========================================

  function limpiarCompraDirecta() {
    setCompraDirecta(null);

    try {
      sessionStorage.removeItem(
        STORAGE_KEY
      );
    } catch (error) {
      console.error(
        "No se pudo limpiar la compra directa:",
        error
      );
    }
  }

  // ==========================================
  // PROVIDER
  // ==========================================

  return (
    <CartContext.Provider
      value={{
        cart,

        agregarProducto,

        aumentarCantidad,

        disminuirCantidad,

        eliminarProducto,

        compraDirecta,

        comprarAhora,

        limpiarCompraDirecta,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ==========================================
// HOOK useCart
// ==========================================

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe estar dentro de CartProvider"
    );
  }

  return context;
}
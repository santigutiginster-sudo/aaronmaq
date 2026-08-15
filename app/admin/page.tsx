"use client";

import { useMemo, useState } from "react";

type Pestaña = "pedidos" | "venta" | "inventario";

type EstadoPedido =
  | "registrado"
  | "preparado"
  | "despachado";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  tipo: "Máquina" | "Troquel" | "Insumo";
};

type ProductoVenta = Producto & {
  cantidad: number;
};

type Cliente = {
  nombre: string;
  telefono: string;
  ciudad: string;
  direccion: string;
};

export default function AdminPage() {
  const [pestaña, setPestaña] =
    useState<Pestaña>("venta");

  const [busqueda, setBusqueda] =
    useState("");

  const [productosVenta, setProductosVenta] =
    useState<ProductoVenta[]>([]);

  const [medioPago, setMedioPago] =
    useState("WhatsApp");

  const [ventaRegistrada, setVentaRegistrada] =
    useState(false);

  const [estadoPedido, setEstadoPedido] =
    useState<EstadoPedido>("registrado");

  const [transportadora, setTransportadora] =
    useState("Inter Rapidísimo");

  const [numeroGuia, setNumeroGuia] =
    useState("");

  const [cliente, setCliente] =
    useState<Cliente>({
      nombre: "",
      telefono: "",
      ciudad: "",
      direccion: "",
    });

  const [mostrarDatosCliente, setMostrarDatosCliente] =
    useState(false);

  const [numeroPedido, setNumeroPedido] =
    useState("");

  /*
   * =====================================================
   * CATÁLOGO INTERNO DE AARONMAQ
   * =====================================================
   *
   * Este catálogo es independiente de la página pública.
   *
   * El empleado NO necesita ver imágenes,
   * descripciones ni la estructura de la tienda.
   *
   * Solo:
   *
   * PRODUCTO
   * STOCK
   * PRECIO
   *
   * Los precios que todavía no conocemos quedan en 0.
   */

  const productos: Producto[] = [
    /*
     * =====================================================
     * MÁQUINAS
     * =====================================================
     */

    {
      id: 1,
      nombre: "Máquina troqueladora",
      precio: 125000,
      stock: 10,
      tipo: "Máquina",
    },

    

    /*
     * =====================================================
     * TROQUELES
     * =====================================================
     */

    {
      id: 100,
      nombre: "Ojalete #3",
      precio: 0,
      stock: 9,
      tipo: "Troquel",
    },

    {
      id: 101,
      nombre: "Ojalete #4",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 102,
      nombre: "Ojalete #5",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 103,
      nombre: "Ojalete #6",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 104,
      nombre: "Ojalete 1/4",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 105,
      nombre: "Ojalete 5/16",
      precio: 0,
      stock: 2,
      tipo: "Troquel",
    },

    {
      id: 106,
      nombre: "Ojalete 3/8",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 107,
      nombre: "Ojalete 1/2",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 108,
      nombre: "Ojalete 5/8",
      precio: 0,
      stock: 7,
      tipo: "Troquel",
    },

    {
      id: 109,
      nombre: "Ojalete 3/4",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 110,
      nombre: "Ojalete 1 1/2 metálico",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 111,
      nombre: "Ojalete 1 1/2 plástico",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 112,
      nombre: "Ojalete 1 1/2 teflón",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 113,
      nombre: "Ojalete #6 inox",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 114,
      nombre: "Ojalete 1/4 inox",
      precio: 0,
      stock: 4,
      tipo: "Troquel",
    },

    {
      id: 115,
      nombre: "Ojalete 5/16 inox",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 116,
      nombre: "Ojalete 3/8 inox",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 117,
      nombre: "Remache #4",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 118,
      nombre: "Remache #6",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 119,
      nombre: "Remache #7",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 120,
      nombre: "Remache #8",
      precio: 0,
      stock: 2,
      tipo: "Troquel",
    },

    {
      id: 121,
      nombre: "Remache #9",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 122,
      nombre: "Remache #10",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 123,
      nombre: "Remache #12",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 124,
      nombre: "Remache #15",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 125,
      nombre: "Remache hongo #9",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 126,
      nombre: "Remache hongo #10",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 127,
      nombre: "Remache hongo #12",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 128,
      nombre: "Broche semi cazuela",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 129,
      nombre: "Broche billetera",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 130,
      nombre: "Broche semi americano",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 131,
      nombre: "Broche americano inox",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 132,
      nombre: "Broche cazuela",
      precio: 0,
      stock: 6,
      tipo: "Troquel",
    },

    {
      id: 133,
      nombre: "Broche americano",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 134,
      nombre: "Broche americano tapa plas#15",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 135,
      nombre: "Broche americano tapa plas#17",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 136,
      nombre: "Broche scovl #16",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 137,
      nombre: "Broche scovl #15",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 138,
      nombre: "Broche multi",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 139,
      nombre: "Puntera metálica",
      precio: 0,
      stock: 9,
      tipo: "Troquel",
    },

    {
      id: 140,
      nombre: "Forrador confección #16",
      precio: 0,
      stock: 8,
      tipo: "Troquel",
    },

    {
      id: 141,
      nombre: "Forrador confección #18",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 142,
      nombre: "Forrador confección #20",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 143,
      nombre: "Forrador confección #24",
      precio: 0,
      stock: 4,
      tipo: "Troquel",
    },

    {
      id: 144,
      nombre: "Forrador confección #30",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 145,
      nombre: "Forrador confección #36",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 146,
      nombre: "Perla #6",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 147,
      nombre: "Perla #8",
      precio: 0,
      stock: 2,
      tipo: "Troquel",
    },

    {
      id: 148,
      nombre: "Perla #10",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 149,
      nombre: "Tache circon",
      precio: 0,
      stock: 2,
      tipo: "Troquel",
    },

    {
      id: 150,
      nombre: "Tache cono",
      precio: 0,
      stock: 6,
      tipo: "Troquel",
    },

    {
      id: 151,
      nombre: "Tache semi cono",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 152,
      nombre: "Tache flor",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 153,
      nombre: "Tache piramidal",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 154,
      nombre: "Tache estrella",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 155,
      nombre: "Forrador de tapicería #24",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 156,
      nombre: "Forrador de tapicería #30",
      precio: 0,
      stock: 7,
      tipo: "Troquel",
    },

    {
      id: 157,
      nombre: "Forrador de tapicería #36",
      precio: 0,
      stock: 6,
      tipo: "Troquel",
    },

    {
      id: 158,
      nombre: "Forrador de gorra",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 159,
      nombre: "Eje electric machine",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 160,
      nombre: "Ojalete de lujo #300",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 161,
      nombre: "Ojalete de lujo #400",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 162,
      nombre: "Ojalete de lujo #500",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 163,
      nombre: "Ojalete de lujo #600",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 164,
      nombre: "Ojalete de lujo #800",
      precio: 0,
      stock: 7,
      tipo: "Troquel",
    },

    {
      id: 165,
      nombre: "Ojalete de lujo #1000",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 166,
      nombre: "Ojalete de lujo #1200",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 167,
      nombre: "Botón de jean #15",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 168,
      nombre: "Botón de jean #17",
      precio: 0,
      stock: 3,
      tipo: "Troquel",
    },

    {
      id: 169,
      nombre: "Botón de jean #20",
      precio: 0,
      stock: 8,
      tipo: "Troquel",
    },

    {
      id: 170,
      nombre: "Tache de jean #8",
      precio: 0,
      stock: 4,
      tipo: "Troquel",
    },

    {
      id: 171,
      nombre: "Tache de jean #9.5",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 172,
      nombre: "Tache de jean tipo levis",
      precio: 0,
      stock: 9,
      tipo: "Troquel",
    },

    {
      id: 173,
      nombre: "Perforador #2",
      precio: 0,
      stock: 9,
      tipo: "Troquel",
    },

    {
      id: 174,
      nombre: "Perforador #3",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 175,
      nombre: "Perforador #4",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 176,
      nombre: "Perforador #5",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 177,
      nombre: "Perforador #6",
      precio: 0,
      stock: 0,
      tipo: "Troquel",
    },

    {
      id: 178,
      nombre: "Perforador #7",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 179,
      nombre: "Perforador #8",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 180,
      nombre: "Perforador #9",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 181,
      nombre: "Perforador #10",
      precio: 0,
      stock: 5,
      tipo: "Troquel",
    },

    {
      id: 182,
      nombre: "Sacabocados para máquina #1",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 183,
      nombre: "Sacabocados para máquina #2",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 184,
      nombre: "Sacabocados para máquina #3",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 185,
      nombre: "Sacabocados para máquina #4",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 186,
      nombre: "Sacabocados para máquina #5",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 187,
      nombre: "Sacabocados para máquina #6",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 188,
      nombre: "Sacabocados para máquina #7",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 189,
      nombre: "Sacabocados para máquina #8",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 190,
      nombre: "Sacabocados para máquina #9",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 191,
      nombre: "Sacabocados para máquina #10",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 192,
      nombre: "Sacabocados para máquina #11",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 193,
      nombre: "Sacabocados para máquina #12",
      precio: 0,
      stock: 10,
      tipo: "Troquel",
    },

    {
      id: 194,
      nombre: "Resorte delgado",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    {
      id: 195,
      nombre: "Resorte grueso",
      precio: 0,
      stock: 1,
      tipo: "Troquel",
    },

    /*
     * =====================================================
     * INSUMOS
     * =====================================================
     *
     * Aquí colocamos los productos que se venden como
     * material/insumo y no necesariamente como troquel.
     */

    {
      id: 300,
      nombre: "Millar",
      precio: 60000,
      stock: 20,
      tipo: "Insumo",
    },

    {
      id: 301,
      nombre: "Paquete de 100 unidades",
      precio: 35000,
      stock: 15,
      tipo: "Insumo",
    },
  ];

  /*
   * =====================================================
   * BÚSQUEDA
   * =====================================================
   *
   * El empleado puede escribir cualquier parte del nombre.
   *
   * Ejemplo:
   *
   * ojalete
   * broche
   * jean
   * perforador
   * sacabocados
   * máquina
   */

  const productosFiltrados = useMemo(() => {
    const texto =
      busqueda.trim().toLowerCase();

    if (!texto) {
      return productos;
    }

    return productos.filter(
      (producto) =>
        producto.nombre
          .toLowerCase()
          .includes(texto)
    );
  }, [busqueda]);

  /*
   * =====================================================
   * AGREGAR PRODUCTO
   * =====================================================
   */

  function agregarProducto(
    producto: Producto
  ) {
    setVentaRegistrada(false);

    setProductosVenta((actuales) => {
      const existente =
        actuales.find(
          (item) =>
            item.id === producto.id
        );

      if (existente) {
        if (
          existente.cantidad >=
          producto.stock
        ) {
          return actuales;
        }

        return actuales.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad:
                  item.cantidad + 1,
              }
            : item
        );
      }

      return [
        ...actuales,
        {
          ...producto,
          cantidad: 1,
        },
      ];
    });
  }

  /*
   * =====================================================
   * CAMBIAR CANTIDAD
   * =====================================================
   */

  function cambiarCantidad(
    id: number,
    cantidad: number
  ) {
    if (cantidad <= 0) {
      eliminarProducto(id);
      return;
    }

    setProductosVenta((actuales) =>
      actuales.map((producto) => {
        if (producto.id !== id) {
          return producto;
        }

        const nuevaCantidad =
          Math.min(
            cantidad,
            producto.stock
          );

        return {
          ...producto,
          cantidad: nuevaCantidad,
        };
      })
    );
  }

  /*
   * =====================================================
   * ELIMINAR
   * =====================================================
   */

  function eliminarProducto(id: number) {
    setProductosVenta((actuales) =>
      actuales.filter(
        (producto) =>
          producto.id !== id
      )
    );
  }

  /*
   * =====================================================
   * TOTAL
   * =====================================================
   */

  const total =
    productosVenta.reduce(
      (suma, producto) =>
        suma +
        producto.precio *
          producto.cantidad,
      0
    );

  /*
   * =====================================================
   * PRODUCTOS SIN PRECIO
   * =====================================================
   */

  const hayProductosSinPrecio =
    productosVenta.some(
      (producto) =>
        producto.precio <= 0
    );

  /*
   * =====================================================
   * FORMATO PRECIO
   * =====================================================
   */

  function formatoPrecio(
    valor: number
  ) {
    return `$${valor.toLocaleString(
      "es-CO"
    )}`;
  }

  /*
   * =====================================================
   * CLIENTE
   * =====================================================
   */

  function actualizarCliente(
    campo: keyof Cliente,
    valor: string
  ) {
    setCliente((actual) => ({
      ...actual,
      [campo]: valor,
    }));
  }

  /*
   * =====================================================
   * REGISTRAR VENTA
   * =====================================================
   */

  function registrarVenta() {
    if (
      productosVenta.length === 0
    ) {
      return;
    }

    if (hayProductosSinPrecio) {
      alert(
        "Hay productos sin precio. Primero debes colocar el precio antes de registrar la venta."
      );

      return;
    }

    const nuevoNumero =
      `AARONMAQ-${String(
        Math.floor(
          Math.random() * 999999
        )
      ).padStart(6, "0")}`;

    setNumeroPedido(
      nuevoNumero
    );

    setEstadoPedido(
      "registrado"
    );

    setVentaRegistrada(true);
  }

  /*
   * =====================================================
   * PREPARAR
   * =====================================================
   */

  function prepararPedido() {
    setEstadoPedido(
      "preparado"
    );
  }

  /*
   * =====================================================
   * DESPACHAR
   * =====================================================
   */

  function despacharPedido() {
    if (
      !numeroGuia.trim()
    ) {
      alert(
        "Ingresa el número de guía antes de despachar."
      );

      return;
    }

    setEstadoPedido(
      "despachado"
    );
  }

  /*
   * =====================================================
   * IMPRIMIR
   * =====================================================
   */

  function imprimirEtiqueta() {
    window.print();
  }

  /*
   * =====================================================
   * WHATSAPP
   * =====================================================
   */

  function enviarGuiaWhatsApp() {
    if (
      !cliente.telefono ||
      !numeroGuia
    ) {
      alert(
        "Falta el teléfono del cliente o el número de guía."
      );

      return;
    }

    const telefono =
      cliente.telefono.replace(
        /\D/g,
        ""
      );

    const numeroColombia =
      telefono.startsWith("57")
        ? telefono
        : `57${telefono}`;

    const mensaje =
      `Hola ${cliente.nombre || ""}, te informamos que tu pedido de AARONMAQ fue despachado.\n\n` +
      `Pedido: ${numeroPedido}\n` +
      `Transportadora: ${transportadora}\n` +
      `Guía: ${numeroGuia}\n\n` +
      `Puedes consultar el estado de tu envío con la transportadora.`;

    const url =
      `https://wa.me/${numeroColombia}?text=${encodeURIComponent(
        mensaje
      )}`;

    window.open(
      url,
      "_blank"
    );
  }

  /*
   * =====================================================
   * NUEVA VENTA
   * =====================================================
   */

  function nuevaVenta() {
    setProductosVenta(
      []
    );

    setBusqueda("");

    setMedioPago(
      "WhatsApp"
    );

    setVentaRegistrada(
      false
    );

    setEstadoPedido(
      "registrado"
    );

    setTransportadora(
      "Inter Rapidísimo"
    );

    setNumeroGuia("");

    setNumeroPedido("");

    setCliente({
      nombre: "",
      telefono: "",
      ciudad: "",
      direccion: "",
    });

    setMostrarDatosCliente(
      false
    );

    setPestaña(
      "venta"
    );
  }

  /*
   * =====================================================
   * CAMBIAR PESTAÑA
   * =====================================================
   */

  function cambiarPestaña(
    nuevaPestaña: Pestaña
  ) {
    setPestaña(
      nuevaPestaña
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =================================================
          IMPRESIÓN
      ================================================= */}

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }

          .etiqueta-impresion,
          .etiqueta-impresion * {
            visibility: visible;
          }

          .etiqueta-impresion {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 80mm;
            padding: 5mm;
            background: white;
            color: black;
          }

          @page {
            size: 80mm auto;
            margin: 0;
          }
        }
      `}</style>

      {/* =================================================
          ENCABEZADO
      ================================================= */}

      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">

          <div>

            <h1 className="text-2xl font-bold text-slate-900">
              AARONMAQ
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Panel de administración
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">
              E
            </div>

            <div className="hidden sm:block">

              <p className="text-sm font-semibold text-slate-900">
                Empleado
              </p>

              <p className="text-xs text-gray-500">
                Operador
              </p>

            </div>

          </div>

        </div>

      </header>

      {/* =================================================
          CONTENIDO
      ================================================= */}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* =================================================
            PESTAÑAS
        ================================================= */}

        <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">

          <div className="grid grid-cols-3 gap-2">

            <button
              type="button"
              onClick={() =>
                cambiarPestaña(
                  "pedidos"
                )
              }
              className={`rounded-xl px-3 py-4 font-bold transition ${
                pestaña === "pedidos"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >

              <span className="block text-xl">
                📦
              </span>

              <span className="mt-1 block text-sm sm:text-base">
                Pedidos
              </span>

            </button>

            <button
              type="button"
              onClick={() =>
                cambiarPestaña(
                  "venta"
                )
              }
              className={`rounded-xl px-3 py-4 font-bold transition ${
                pestaña === "venta"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >

              <span className="block text-xl">
                ＋
              </span>

              <span className="mt-1 block text-sm sm:text-base">
                Nueva venta
              </span>

            </button>

            <button
              type="button"
              onClick={() =>
                cambiarPestaña(
                  "inventario"
                )
              }
              className={`rounded-xl px-3 py-4 font-bold transition ${
                pestaña === "inventario"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >

              <span className="block text-xl">
                📊
              </span>

              <span className="mt-1 block text-sm sm:text-base">
                Inventario
              </span>

            </button>

          </div>

        </div>

        {/* =================================================
            NUEVA VENTA
        ================================================= */}

        {pestaña === "venta" && (

          <section className="mt-6">

            <div className="mb-6">

              <h2 className="text-2xl font-bold text-slate-900">
                Nueva venta
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Busca el producto, agrégalo y
                registra el pedido.
              </p>

            </div>

            {/* =================================================
                PEDIDO YA REGISTRADO
            ================================================= */}

            {ventaRegistrada ? (

              <div className="space-y-6">

                {/* CONFIRMACIÓN */}

                <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-3xl text-white">
                        ✓
                      </div>

                      <div>

                        <h2 className="text-xl font-bold text-green-800">
                          Pedido registrado
                        </h2>

                        <p className="mt-1 font-mono text-sm text-green-700">
                          {numeroPedido}
                        </p>

                      </div>

                    </div>

                    <div className="text-left sm:text-right">

                      <p className="text-sm text-green-700">
                        Total
                      </p>

                      <p className="text-2xl font-bold text-green-800">
                        {formatoPrecio(
                          total
                        )}
                      </p>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    FLUJO DEL PEDIDO
                ================================================= */}

                <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

                  <div className="space-y-4">

                    {/* PASO 1 */}

                    <div className="rounded-2xl border border-green-300 bg-white p-5 shadow-sm">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                          ✓
                        </div>

                        <div>

                          <h3 className="font-bold text-slate-900">
                            Pedido registrado
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Venta y pago registrados.
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        ALISTAR
                    ================================================= */}

                    <div
                      className={`rounded-2xl border bg-white p-5 shadow-sm ${
                        estadoPedido ===
                        "registrado"
                          ? "border-yellow-400"
                          : "border-green-300"
                      }`}
                    >

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${
                            estadoPedido !==
                            "registrado"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {estadoPedido !==
                          "registrado"
                            ? "✓"
                            : "2"}
                        </div>

                        <div className="flex-1">

                          <h3 className="font-bold text-slate-900">
                            Alistar pedido
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Estos son exactamente los productos que debe sacar el empleado.
                          </p>

                        </div>

                        {estadoPedido ===
                          "registrado" && (

                          <button
                            type="button"
                            onClick={
                              prepararPedido
                            }
                            className="rounded-xl bg-yellow-500 px-5 py-3 font-bold text-black hover:bg-yellow-400"
                          >
                            📦 Pedido listo
                          </button>

                        )}

                      </div>

                      {/* LISTA DE ALISTAMIENTO */}

                      <div className="mt-5 border-t border-gray-100 pt-5">

                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">
                          Productos del pedido
                        </p>

                        <div className="space-y-2">

                          {productosVenta.map(
                            (producto) => (

                              <div
                                key={
                                  producto.id
                                }
                                className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
                              >

                                <div>

                                  <p className="font-semibold text-slate-900">
                                    {producto.nombre}
                                  </p>

                                  <p className="text-xs text-gray-500">
                                    {producto.tipo}
                                  </p>

                                </div>

                                <div className="rounded-lg bg-white px-4 py-2 text-lg font-bold shadow-sm">
                                  x
                                  {
                                    producto.cantidad
                                  }
                                </div>

                              </div>

                            )
                          )}

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        DESPACHO
                    ================================================= */}

                    <div
                      className={`rounded-2xl border bg-white p-5 shadow-sm ${
                        estadoPedido ===
                        "preparado"
                          ? "border-yellow-400"
                          : estadoPedido ===
                            "despachado"
                          ? "border-green-300"
                          : "border-gray-200"
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${
                            estadoPedido ===
                            "despachado"
                              ? "bg-green-500 text-white"
                              : estadoPedido ===
                                "preparado"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {estadoPedido ===
                          "despachado"
                            ? "✓"
                            : "3"}
                        </div>

                        <div>

                          <h3 className="font-bold text-slate-900">
                            Despachar pedido
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Coloca la guía cuando entregues el paquete.
                          </p>

                        </div>

                      </div>

                      {estadoPedido ===
                        "preparado" && (

                        <div className="mt-5 border-t border-gray-100 pt-5">

                          <div className="grid gap-3 sm:grid-cols-2">

                            <div>

                              <label className="mb-1 block text-xs font-bold text-gray-500">
                                Transportadora
                              </label>

                              <select
                                value={
                                  transportadora
                                }
                                onChange={(
                                  e
                                ) =>
                                  setTransportadora(
                                    e
                                      .target
                                      .value
                                  )
                                }
                                className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-yellow-500"
                              >

                                <option>
                                  Inter Rapidísimo
                                </option>

                                <option>
                                  Servientrega
                                </option>

                                <option>
                                  Coordinadora
                                </option>

                                <option>
                                  Envia
                                </option>

                              </select>

                            </div>

                            <div>

                              <label className="mb-1 block text-xs font-bold text-gray-500">
                                Número de guía
                              </label>

                              <input
                                type="text"
                                value={
                                  numeroGuia
                                }
                                onChange={(
                                  e
                                ) =>
                                  setNumeroGuia(
                                    e
                                      .target
                                      .value
                                  )
                                }
                                placeholder="Ej: 123456789"
                                className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-yellow-500"
                              />

                            </div>

                          </div>

                          <button
                            type="button"
                            onClick={
                              despacharPedido
                            }
                            className="mt-4 w-full rounded-xl bg-yellow-500 px-5 py-4 font-bold text-black hover:bg-yellow-400"
                          >
                            🚚 Confirmar despacho
                          </button>

                        </div>

                      )}

                      {estadoPedido ===
                        "despachado" && (

                        <div className="mt-5 space-y-3">

                          <div className="rounded-xl bg-green-50 p-4">

                            <p className="font-bold text-green-800">
                              ✓ Pedido despachado
                            </p>

                            <p className="mt-1 text-sm text-green-700">
                              {
                                transportadora
                              }
                            </p>

                            <p className="font-mono text-sm text-green-700">
                              Guía:{" "}
                              {
                                numeroGuia
                              }
                            </p>

                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">

                            <button
                              type="button"
                              onClick={
                                imprimirEtiqueta
                              }
                              className="rounded-xl bg-slate-900 px-4 py-4 font-bold text-white hover:bg-slate-800"
                            >
                              🖨️ Imprimir
                            </button>

                            <button
                              type="button"
                              onClick={
                                enviarGuiaWhatsApp
                              }
                              className="rounded-xl bg-green-500 px-4 py-4 font-bold text-white hover:bg-green-600"
                            >
                              📲 Enviar guía
                            </button>

                          </div>

                        </div>

                      )}

                    </div>

                  </div>

                  {/* =================================================
                      RESUMEN DERECHO
                  ================================================= */}

                  <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                    <h3 className="text-lg font-bold text-slate-900">
                      Resumen
                    </h3>

                    <div className="mt-5 space-y-3">

                      {productosVenta.map(
                        (producto) => (

                          <div
                            key={
                              producto.id
                            }
                            className="flex justify-between gap-3 border-b border-gray-100 pb-3"
                          >

                            <div>

                              <p className="font-semibold text-slate-900">
                                {
                                  producto.nombre
                                }
                              </p>

                              <p className="text-sm text-gray-500">
                                x
                                {
                                  producto.cantidad
                                }
                              </p>

                            </div>

                            <p className="font-bold">

                              {producto.precio >
                              0
                                ? formatoPrecio(
                                    producto.precio *
                                      producto.cantidad
                                  )
                                : "Pendiente"}

                            </p>

                          </div>

                        )
                      )}

                    </div>

                    <div className="mt-5 flex justify-between border-t border-gray-200 pt-5">

                      <span className="font-semibold">
                        Total
                      </span>

                      <span className="text-xl font-bold text-yellow-600">
                        {formatoPrecio(
                          total
                        )}
                      </span>

                    </div>

                    <div className="mt-4 rounded-xl bg-gray-50 p-4">

                      <p className="text-xs font-bold uppercase text-gray-400">
                        Pago
                      </p>

                      <p className="mt-1 font-semibold">
                        {medioPago} ✓
                      </p>

                    </div>

                    <div className="mt-4 rounded-xl bg-gray-50 p-4">

                      <p className="text-xs font-bold uppercase text-gray-400">
                        Cliente
                      </p>

                      <p className="mt-1 font-semibold">
                        {cliente.nombre ||
                          "Sin nombre"}
                      </p>

                      <p className="text-sm text-gray-500">
                        {cliente.telefono ||
                          "Sin teléfono"}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {cliente.ciudad ||
                          "Sin ciudad"}
                      </p>

                      <p className="text-sm text-gray-500">
                        {cliente.direccion ||
                          "Sin dirección"}
                      </p>

                    </div>

                  </aside>

                </div>

                <div className="text-center">

                  <button
                    type="button"
                    onClick={
                      nuevaVenta
                    }
                    className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-slate-700 hover:bg-gray-50"
                  >
                    + Nueva venta
                  </button>

                </div>

              </div>

            ) : (

              /* =================================================
                 CREAR VENTA
              ================================================= */

              <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

                {/* =================================================
                    BUSCAR PRODUCTO
                ================================================= */}

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                  <div>

                    <h3 className="text-lg font-bold text-slate-900">
                      Agregar productos
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Escribe el nombre y toca el producto.
                    </p>

                  </div>

                  <div className="mt-5">

                    <input
                      type="text"
                      value={
                        busqueda
                      }
                      onChange={(
                        e
                      ) =>
                        setBusqueda(
                          e.target.value
                        )
                      }
                      placeholder="🔎 Buscar producto..."
                      autoFocus
                      className="w-full rounded-xl border border-gray-300 px-4 py-4 text-base outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    />

                  </div>

                  {/* CONTADOR */}

                  <div className="mt-4 flex items-center justify-between">

                    <p className="text-xs font-semibold text-gray-400">
                      {
                        productosFiltrados.length
                      }{" "}
                      productos encontrados
                    </p>

                    {busqueda && (
                      <button
                        type="button"
                        onClick={() =>
                          setBusqueda(
                            ""
                          )
                        }
                        className="text-xs font-bold text-yellow-600"
                      >
                        Limpiar
                      </button>
                    )}

                  </div>

                  {/* =================================================
                      PRODUCTOS
                  ================================================= */}

                  <div className="mt-4 max-h-[650px] space-y-2 overflow-y-auto pr-1">

                    {productosFiltrados.map(
                      (producto) => {

                        const agregado =
                          productosVenta.find(
                            (item) =>
                              item.id ===
                              producto.id
                          );

                        const sinStock =
                          producto.stock <=
                          0;

                        const agotadoPorVenta =
                          agregado !==
                            undefined &&
                          agregado.cantidad >=
                            producto.stock;

                        return (

                          <button
                            key={
                              producto.id
                            }
                            type="button"
                            onClick={() =>
                              agregarProducto(
                                producto
                              )
                            }
                            disabled={
                              sinStock ||
                              agotadoPorVenta
                            }
                            className="group flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-left transition hover:border-yellow-400 hover:bg-yellow-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50"
                          >

                            <div className="min-w-0">

                              <p className="font-semibold text-slate-900">
                                {
                                  producto.nombre
                                }
                              </p>

                              <div className="mt-1 flex flex-wrap items-center gap-2">

                                <span
                                  className={`text-xs font-semibold ${
                                    sinStock
                                      ? "text-red-500"
                                      : producto.stock <=
                                        3
                                      ? "text-orange-500"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Stock:{" "}
                                  {
                                    producto.stock
                                  }
                                </span>

                                <span className="text-gray-300">
                                  •
                                </span>

                                <span className="text-xs text-gray-400">
                                  {
                                    producto.tipo
                                  }
                                </span>

                              </div>

                            </div>

                            <div className="ml-4 shrink-0 text-right">

                              {producto.precio >
                              0 ? (

                                <p className="font-bold text-slate-900">
                                  {formatoPrecio(
                                    producto.precio
                                  )}
                                </p>

                              ) : (

                                <p className="text-xs font-bold text-orange-500">
                                  Precio pendiente
                                </p>

                              )}

                              {sinStock ? (

                                <p className="mt-1 text-xs font-bold text-red-500">
                                  Agotado
                                </p>

                              ) : agregado ? (

                                <p className="mt-1 text-xs font-bold text-green-600">
                                  ✓ x
                                  {
                                    agregado.cantidad
                                  }
                                </p>

                              ) : (

                                <p className="mt-1 text-xs font-bold text-yellow-600">
                                  + Agregar
                                </p>

                              )}

                            </div>

                          </button>

                        );
                      }
                    )}

                    {productosFiltrados.length ===
                      0 && (

                      <div className="rounded-xl bg-gray-50 p-8 text-center">

                        <div className="text-3xl">
                          🔎
                        </div>

                        <p className="mt-3 font-semibold text-gray-600">
                          No encontramos ese producto.
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          Prueba con otro nombre.
                        </p>

                      </div>

                    )}

                  </div>

                </div>

                {/* =================================================
                    VENTA ACTUAL
                ================================================= */}

                <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <h3 className="text-lg font-bold text-slate-900">
                      Venta actual
                    </h3>

                    {productosVenta.length >
                      0 && (

                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                        {
                          productosVenta.length
                        }{" "}
                        productos
                      </span>

                    )}

                  </div>

                  {/* PRODUCTOS SELECCIONADOS */}

                  {productosVenta.length ===
                  0 ? (

                    <div className="mt-5 rounded-xl bg-gray-50 p-6 text-center">

                      <div className="text-3xl">
                        🛒
                      </div>

                      <p className="mt-3 text-sm font-semibold text-gray-600">
                        No hay productos
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Busca un producto y agrégalo.
                      </p>

                    </div>

                  ) : (

                    <div className="mt-5 space-y-4">

                      {productosVenta.map(
                        (producto) => (

                          <div
                            key={
                              producto.id
                            }
                            className="border-b border-gray-100 pb-4"
                          >

                            <div className="flex justify-between gap-3">

                              <div className="min-w-0">

                                <p className="font-semibold text-slate-900">
                                  {
                                    producto.nombre
                                  }
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                  Stock disponible:{" "}
                                  {
                                    producto.stock
                                  }
                                </p>

                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  eliminarProducto(
                                    producto.id
                                  )
                                }
                                className="text-xs font-semibold text-red-500 hover:text-red-700"
                              >
                                Quitar
                              </button>

                            </div>

                            <div className="mt-3 flex items-center justify-between">

                              <div className="flex items-center rounded-xl border border-gray-200">

                                <button
                                  type="button"
                                  onClick={() =>
                                    cambiarCantidad(
                                      producto.id,
                                      producto.cantidad -
                                        1
                                    )
                                  }
                                  className="h-10 w-10 text-lg font-bold hover:bg-gray-50"
                                >
                                  −
                                </button>

                                <span className="flex h-10 w-10 items-center justify-center border-x border-gray-200 font-bold">
                                  {
                                    producto.cantidad
                                  }
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    cambiarCantidad(
                                      producto.id,
                                      producto.cantidad +
                                        1
                                    )
                                  }
                                  disabled={
                                    producto.cantidad >=
                                    producto.stock
                                  }
                                  className="h-10 w-10 text-lg font-bold hover:bg-gray-50 disabled:opacity-30"
                                >
                                  +
                                </button>

                              </div>

                              <p className="font-bold">

                                {producto.precio >
                                0
                                  ? formatoPrecio(
                                      producto.precio *
                                        producto.cantidad
                                    )
                                  : "Pendiente"}

                              </p>

                            </div>

                          </div>

                        )
                      )}

                    </div>

                  )}

                  {/* =================================================
                      MEDIO DE PAGO
                  ================================================= */}

                  <div className="mt-5">

                    <p className="mb-2 text-sm font-semibold text-slate-900">
                      Medio de pago
                    </p>

                    <div className="grid grid-cols-3 gap-2">

                      {[
                        "WhatsApp",
                        "Efectivo",
                        "Transferencia",
                      ].map(
                        (
                          medio
                        ) => (

                          <button
                            key={
                              medio
                            }
                            type="button"
                            onClick={() =>
                              setMedioPago(
                                medio
                              )
                            }
                            className={`rounded-xl border px-2 py-3 text-xs font-bold transition ${
                              medioPago ===
                              medio
                                ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                                : "border-gray-200 text-gray-500 hover:bg-gray-50"
                            }`}
                          >
                            {
                              medio
                            }
                          </button>

                        )
                      )}

                    </div>

                  </div>

                  {/* =================================================
                      DATOS CLIENTE
                  ================================================= */}

                  <div className="mt-5">

                    <button
                      type="button"
                      onClick={() =>
                        setMostrarDatosCliente(
                          !mostrarDatosCliente
                        )
                      }
                      className="flex w-full items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-left"
                    >

                      <span className="font-bold">
                        👤 Datos del cliente
                      </span>

                      <span>
                        {mostrarDatosCliente
                          ? "▲"
                          : "▼"}
                      </span>

                    </button>

                    {mostrarDatosCliente && (

                      <div className="mt-3 space-y-3">

                        <input
                          type="text"
                          value={
                            cliente.nombre
                          }
                          onChange={(
                            e
                          ) =>
                            actualizarCliente(
                              "nombre",
                              e.target.value
                            )
                          }
                          placeholder="Nombre"
                          className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-yellow-500"
                        />

                        <input
                          type="text"
                          value={
                            cliente.telefono
                          }
                          onChange={(
                            e
                          ) =>
                            actualizarCliente(
                              "telefono",
                              e.target.value
                            )
                          }
                          placeholder="Teléfono / WhatsApp"
                          className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-yellow-500"
                        />

                        <input
                          type="text"
                          value={
                            cliente.ciudad
                          }
                          onChange={(
                            e
                          ) =>
                            actualizarCliente(
                              "ciudad",
                              e.target.value
                            )
                          }
                          placeholder="Ciudad"
                          className="w-full rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-yellow-500"
                        />

                        <textarea
                          value={
                            cliente.direccion
                          }
                          onChange={(
                            e
                          ) =>
                            actualizarCliente(
                              "direccion",
                              e.target.value
                            )
                          }
                          placeholder="Dirección"
                          rows={2}
                          className="w-full resize-none rounded-xl border border-gray-300 px-3 py-3 outline-none focus:border-yellow-500"
                        />

                      </div>

                    )}

                  </div>

                  {/* =================================================
                      TOTAL
                  ================================================= */}

                  <div className="mt-6 border-t border-gray-200 pt-5">

                    <div className="flex items-center justify-between">

                      <span className="text-lg font-semibold text-slate-900">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-yellow-600">
                        {formatoPrecio(
                          total
                        )}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      REGISTRAR
                  ================================================= */}

                  <button
                    type="button"
                    onClick={
                      registrarVenta
                    }
                    disabled={
                      productosVenta.length ===
                        0 ||
                      hayProductosSinPrecio
                    }
                    className="mt-5 w-full rounded-xl bg-yellow-500 px-5 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    ✓ Registrar venta
                  </button>

                  {hayProductosSinPrecio &&
                    productosVenta.length >
                      0 && (

                      <p className="mt-3 rounded-xl bg-orange-50 p-3 text-center text-xs font-semibold text-orange-700">
                        Hay productos sin precio. Debes colocar sus precios antes de registrar.
                      </p>

                    )}

                </aside>

              </div>

            )}

          </section>

        )}

        {/* =================================================
            PEDIDOS
        ================================================= */}

        {pestaña ===
          "pedidos" && (

          <section className="mt-6">

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

              <div className="flex flex-col items-center text-center">

                <div className="text-4xl">
                  📦
                </div>

                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Pedidos
                </h2>

                <p className="mt-2 max-w-md text-gray-500">
                  Aquí quedarán los pedidos registrados, incluyendo los que entren por WhatsApp y los pagos de la tienda.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    cambiarPestaña(
                      "venta"
                    )
                  }
                  className="mt-5 rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400"
                >
                  + Nueva venta
                </button>

              </div>

            </div>

          </section>

        )}

        {/* =================================================
            INVENTARIO
        ================================================= */}

        {pestaña ===
          "inventario" && (

          <section className="mt-6">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Inventario
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Catálogo interno de productos.
                  </p>

                </div>

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
                  {
                    productos.length
                  }{" "}
                  productos
                </span>

              </div>

              <div className="mt-6">

                <input
                  type="text"
                  value={
                    busqueda
                  }
                  onChange={(
                    e
                  ) =>
                    setBusqueda(
                      e.target.value
                    )
                  }
                  placeholder="🔎 Buscar producto..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">

                <div className="hidden grid-cols-[1fr_120px_140px] bg-gray-50 px-4 py-3 text-xs font-bold uppercase text-gray-400 sm:grid">

                  <span>
                    Producto
                  </span>

                  <span>
                    Tipo
                  </span>

                  <span className="text-right">
                    Stock
                  </span>

                </div>

                <div className="divide-y divide-gray-100">

                  {productosFiltrados.map(
                    (producto) => (

                      <div
                        key={
                          producto.id
                        }
                        className="grid gap-2 px-4 py-4 sm:grid-cols-[1fr_120px_140px] sm:items-center"
                      >

                        <div>

                          <p className="font-semibold text-slate-900">
                            {
                              producto.nombre
                            }
                          </p>

                          {producto.precio >
                            0 ? (

                            <p className="text-xs text-gray-400">
                              {formatoPrecio(
                                producto.precio
                              )}
                            </p>

                          ) : (

                            <p className="text-xs font-semibold text-orange-500">
                              Precio pendiente
                            </p>

                          )}

                        </div>

                        <div>

                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
                            {
                              producto.tipo
                            }
                          </span>

                        </div>

                        <div className="text-left sm:text-right">

                          <span
                            className={`font-bold ${
                              producto.stock ===
                              0
                                ? "text-red-500"
                                : producto.stock <=
                                  3
                                ? "text-orange-500"
                                : "text-green-600"
                            }`}
                          >
                            {
                              producto.stock
                            }{" "}
                            und
                          </span>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </section>

        )}

      </div>

      {/* =================================================
          ETIQUETA DE IMPRESIÓN
          80 MM
      ================================================= */}

      {ventaRegistrada && (

        <div className="etiqueta-impresion hidden">

          <div
            style={{
              fontFamily:
                "Arial, sans-serif",
              fontSize:
                "11px",
              lineHeight:
                "1.35",
            }}
          >

            <div
              style={{
                textAlign:
                  "center",
                fontWeight:
                  "bold",
                fontSize:
                  "18px",
                marginBottom:
                  "4px",
              }}
            >
              AARONMAQ
            </div>

            <div
              style={{
                textAlign:
                  "center",
                fontWeight:
                  "bold",
                marginBottom:
                  "10px",
              }}
            >
              PEDIDO
              <br />
              {
                numeroPedido
              }
            </div>

            <hr />

            <p>
              <strong>
                CLIENTE
              </strong>
              <br />
              {cliente.nombre ||
                "Cliente"}
            </p>

            <p>
              <strong>
                TEL:
              </strong>{" "}
              {cliente.telefono ||
                "-"}
            </p>

            <p>
              <strong>
                CIUDAD:
              </strong>{" "}
              {cliente.ciudad ||
                "-"}
            </p>

            <p>
              <strong>
                DIRECCIÓN:
              </strong>
              <br />
              {cliente.direccion ||
                "-"}
            </p>

            <hr />

            <p>
              <strong>
                PRODUCTOS
              </strong>
            </p>

            {productosVenta.map(
              (producto) => (

                <div
                  key={
                    producto.id
                  }
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    gap:
                      "5px",
                    marginBottom:
                      "5px",
                  }}
                >

                  <span>
                    {
                      producto.nombre
                    }
                  </span>

                  <strong>
                    x
                    {
                      producto.cantidad
                    }
                  </strong>

                </div>

              )
            )}

            <hr />

            <p>
              <strong>
                TRANSPORTADORA
              </strong>
              <br />
              {
                transportadora
              }
            </p>

            <p>
              <strong>
                GUÍA
              </strong>
              <br />
              {
                numeroGuia ||
                "Pendiente"
              }
            </p>

            <hr />

            <div
              style={{
                textAlign:
                  "center",
                fontWeight:
                  "bold",
                fontSize:
                  "10px",
              }}
            >
              AARONMAQ
              <br />
              Gracias por su compra
            </div>

          </div>

        </div>

      )}

    </main>
  );
}
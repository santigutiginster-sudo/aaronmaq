import { NextResponse } from "next/server";
import crypto from "crypto";
import { productos } from "@/data/productos";

export async function POST(request: Request) {
  try {
    /*
     * ==========================================
     * CONFIGURACIÓN WOMPI
     * ==========================================
     */

    const publicKey = process.env.WOMPI_PUBLIC_KEY;
    const integritySecret =
      process.env.WOMPI_INTEGRITY_SECRET;

    if (!publicKey) {
      return NextResponse.json(
        {
          error:
            "No existe WOMPI_PUBLIC_KEY en .env.local",
        },
        { status: 500 }
      );
    }

    if (!integritySecret) {
      return NextResponse.json(
        {
          error:
            "No existe WOMPI_INTEGRITY_SECRET en .env.local",
        },
        { status: 500 }
      );
    }

    /*
     * ==========================================
     * RECIBIR DATOS DEL CHECKOUT
     * ==========================================
     */

    const body = await request.json();

    const {
      items,
      nombre,
      correo,
      telefono,
      ciudad,
      direccion,
      especificaciones,
      aceptaPrivacidad,
    } = body;

    /*
     * ==========================================
     * VALIDACIONES
     * ==========================================
     */

    if (!aceptaPrivacidad) {
      return NextResponse.json(
        {
          error:
            "Debes aceptar el tratamiento de datos personales y la política de privacidad.",
        },
        { status: 400 }
      );
    }

    if (
      !nombre?.trim() ||
      !correo?.trim() ||
      !telefono?.trim() ||
      !ciudad?.trim() ||
      !direccion?.trim()
    ) {
      return NextResponse.json(
        {
          error:
            "Completa todos los datos obligatorios.",
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          error: "El carrito está vacío.",
        },
        { status: 400 }
      );
    }

    /*
     * ==========================================
     * VALIDAR PRODUCTOS
     *
     * IMPORTANTE:
     * No confiamos en los precios enviados
     * desde el navegador.
     * ==========================================
     */

    let total = 0;

    const productosWompi = [];

    for (const item of items) {
      const producto = productos.find(
        (producto) => producto.id === item.id
      );

      if (!producto) {
        return NextResponse.json(
          {
            error: `No se encontró el producto con ID ${item.id}.`,
          },
          { status: 400 }
        );
      }

      const cantidad = Number(item.cantidad);

      if (
        !Number.isInteger(cantidad) ||
        cantidad <= 0
      ) {
        return NextResponse.json(
          {
            error: "Cantidad de producto inválida.",
          },
          { status: 400 }
        );
      }

      if (
        typeof producto.precio !== "number" ||
        producto.precio <= 0
      ) {
        return NextResponse.json(
          {
            error: `El producto "${producto.nombre}" no tiene un precio válido.`,
          },
          { status: 400 }
        );
      }

      total += producto.precio * cantidad;

      productosWompi.push({
        id: producto.id,
        nombre: producto.nombre,
        cantidad,
        precio: producto.precio,
      });
    }

    /*
     * ==========================================
     * CONVERTIR A CENTAVOS
     *
     * Wompi utiliza centavos de COP.
     *
     * Ejemplo:
     *
     * $100.000 COP
     * =
     * 10.000.000 centavos
     * ==========================================
     */

    const amountInCents = Math.round(
      total * 100
    );

    /*
     * ==========================================
     * REFERENCIA ÚNICA
     * ==========================================
     */

    const referencia =
      `AARONMAQ-${Date.now()}-${crypto
        .randomBytes(4)
        .toString("hex")
        .toUpperCase()}`;

    /*
     * ==========================================
     * FIRMA DE INTEGRIDAD
     *
     * referencia
     * +
     * monto en centavos
     * +
     * COP
     * +
     * secreto de integridad
     *
     * SHA-256
     * ==========================================
     */

    const cadenaIntegridad =
      `${referencia}${amountInCents}COP${integritySecret}`;

    const firmaIntegridad =
      crypto
        .createHash("sha256")
        .update(cadenaIntegridad)
        .digest("hex");

    /*
     * ==========================================
     * CREAR CHECKOUT WOMPI
     *
     * PRUEBA MÍNIMA
     *
     * En esta primera prueba solamente
     * enviamos los parámetros obligatorios
     * del Web Checkout de Wompi.
     * ==========================================
     */

    const parametros = new URLSearchParams({
      "public-key": publicKey,

      currency: "COP",

      "amount-in-cents":
        String(amountInCents),

      reference: referencia,

      "signature:integrity":
        firmaIntegridad,
    });

    const checkoutUrl =
      `https://checkout.wompi.co/p/?${parametros.toString()}`;

    /*
     * ==========================================
     * RESPUESTA
     * ==========================================
     */

    return NextResponse.json({
      success: true,

      provider: "wompi",

      reference: referencia,

      amountInCents,

      total,

      checkoutUrl,

      customer: {
        nombre: nombre.trim(),
        correo: correo.trim(),
        telefono: telefono.trim(),
        ciudad: ciudad.trim(),
        direccion: direccion.trim(),
        especificaciones:
          especificaciones?.trim() || "",
      },

      items: productosWompi,
    });
  } catch (error) {
    console.error(
      "Error creando pago Wompi:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Error interno al crear el pago con Wompi.",
      },
      { status: 500 }
    );
  }
}
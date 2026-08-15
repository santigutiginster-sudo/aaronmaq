import { NextResponse } from "next/server";
import crypto from "crypto";
import { productos } from "@/data/productos";

export async function POST(request: Request) {
  try {
    const publicKey = process.env.WOMPI_PUBLIC_KEY;
    const integritySecret = process.env.WOMPI_INTEGRITY_SECRET;

    if (!publicKey) {
      return NextResponse.json(
        {
          error: "No existe WOMPI_PUBLIC_KEY en .env.local",
        },
        { status: 500 }
      );
    }

    if (!integritySecret) {
      return NextResponse.json(
        {
          error: "No existe WOMPI_INTEGRITY_SECRET en .env.local",
        },
        { status: 500 }
      );
    }

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

    if (!aceptaPrivacidad) {
      return NextResponse.json(
        {
          error:
            "Debes aceptar el tratamiento de datos personales y la política de privacidad.",
        },
        { status: 400 }
      );
    }

    if (!nombre || !correo || !telefono || !ciudad || !direccion) {
      return NextResponse.json(
        {
          error: "Completa todos los datos obligatorios.",
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
     * IMPORTANTE:
     * No confiamos en los precios enviados desde el navegador.
     * Buscamos nuevamente los productos en nuestro archivo
     * oficial de productos.
     */

    let total = 0;

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

      if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return NextResponse.json(
          {
            error: "Cantidad de producto inválida.",
          },
          { status: 400 }
        );
      }

      if (!producto.precio || producto.precio <= 0) {
        return NextResponse.json(
          {
            error: `El producto "${producto.nombre}" no tiene un precio válido.`,
          },
          { status: 400 }
        );
      }

      total += Number(producto.precio) * cantidad;
    }

    if (!Number.isInteger(total) || total <= 0) {
      return NextResponse.json(
        {
          error: "El total de la compra no es válido.",
        },
        { status: 400 }
      );
    }

    /*
     * Wompi maneja los valores en centavos.
     *
     * Ejemplo:
     * $45.000 COP = 4.500.000 centavos
     */

    const amountInCents = total * 100;

    /*
     * Generamos una referencia única para esta compra.
     */

    const reference = `AARONMAQ-${Date.now()}`;

    /*
     * Firma de integridad Wompi.
     *
     * El orden debe ser:
     *
     * referencia + monto en centavos + moneda + secreto
     */

    const cadenaIntegridad =
      `${reference}${amountInCents}COP${integritySecret}`;

    const integritySignature = crypto
      .createHash("sha256")
      .update(cadenaIntegridad)
      .digest("hex");

    /*
     * URL a la que Wompi regresará después del pago.
     *
     * Esta página la crearemos posteriormente para mostrar
     * el resultado de la transacción.
     */

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const redirectUrl = `${baseUrl}/pago/respuesta`;

    /*
     * Construimos la URL de Web Checkout de Wompi.
     */

    const params = new URLSearchParams();

    params.set("public-key", publicKey);
    params.set("currency", "COP");
    params.set("amount-in-cents", String(amountInCents));
    params.set("reference", reference);
    params.set("signature:integrity", integritySignature);
    params.set("redirect-url", redirectUrl);

    /*
     * Datos del comprador.
     */

    params.set("customer-data:email", correo);
    params.set("customer-data:full-name", nombre);
    params.set("customer-data:phone-number", telefono);

    /*
     * Datos de envío.
     */

    params.set("shipping-address:address-line-1", direccion);
    params.set(
      "shipping-address:address-line-2",
      especificaciones || ""
    );
    params.set("shipping-address:country", "CO");
    params.set("shipping-address:city", ciudad);
    params.set("shipping-address:phone-number", telefono);
    params.set("shipping-address:name", nombre);

    const checkoutUrl = `https://checkout.wompi.co/p/?${params.toString()}`;

    /*
     * Por ahora devolvemos la URL de Wompi.
     *
     * Posteriormente aquí conectaremos la creación del pedido
     * en Supabase.
     */

    return NextResponse.json({
      success: true,
      reference,
      amountInCents,
      total,
      checkoutUrl,
    });
  } catch (error) {
    console.error("Error creando checkout Wompi:", error);

    return NextResponse.json(
      {
        error: "Error interno al crear el pago con Wompi.",
      },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const items = body.items;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "El carrito está vacío." },
        { status: 400 }
      );
    }

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: items.map((item: any) => ({
          id: String(item.id),
          title: String(item.nombre),
          quantity: Number(item.cantidad),
          currency_id: "COP",
          unit_price: Number(item.precio),
        })),
        back_urls: {
          success: "https://aaronmaq.vercel.app",
          failure: "https://aaronmaq.vercel.app",
          pending: "https://aaronmaq.vercel.app",
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({
      id: response.id,
      init_point: response.init_point,
    });
  } catch (error) {
    console.error("Error creando preferencia:", error);

    return NextResponse.json(
      { error: "No se pudo crear la preferencia de pago." },
      { status: 500 }
    );
  }
}
"use client";

import { useState } from "react";

export default function DistribuidorPage() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviarSolicitud(e: React.FormEvent) {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !empresa.trim() ||
      !correo.trim() ||
      !telefono.trim() ||
      !ciudad.trim()
    ) {
      return;
    }

    const texto = `
Hola, quiero solicitar información como distribuidor de Aaronmaq.

Nombre: ${nombre}
Empresa: ${empresa}
Correo: ${correo}
Teléfono: ${telefono}
Ciudad: ${ciudad}

Productos o cantidades que me interesan:
${mensaje || "No especificado"}
    `.trim();

    const whatsappUrl = `https://wa.me/573208108023?text=${encodeURIComponent(
      texto
    )}`;

    window.open(whatsappUrl, "_blank");

    setEnviado(true);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
              Programa para distribuidores
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Compra en grandes cantidades con Aaronmaq
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Si compras troqueles, insumos o productos de Aaronmaq en grandes
              cantidades, podemos atender tu solicitud de manera personalizada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solicitud"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                Solicitar información
              </a>

              <a
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-gray-50"
              >
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                📦
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Compras por volumen
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Pensado para clientes que necesitan adquirir cantidades
                importantes de productos.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                🤝
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Atención personalizada
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Cuéntanos qué productos necesitas y las cantidades que
                manejas para revisar tu solicitud.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                🚚
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Soluciones para tu negocio
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Una opción pensada para talleres, comercios, empresas y
                clientes que requieren compras recurrentes o de mayor volumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}

      <section
        id="solicitud"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Solicitud de distribuidor
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Cuéntanos qué necesitas
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Déjanos tus datos y la información sobre los productos o
              cantidades que estás buscando. Revisaremos tu solicitud para
              brindarte atención personalizada.
            </p>

            <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <p className="text-sm leading-6 text-yellow-900">
                <strong>Importante:</strong> las condiciones comerciales para
                compras por volumen serán revisadas de acuerdo con cada
                solicitud.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            {enviado ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  Solicitud preparada
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Se abrió WhatsApp con la información de tu solicitud para
                  que puedas enviarla a Aaronmaq.
                </p>

                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                  className="mt-6 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-gray-50"
                >
                  Realizar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={enviarSolicitud} className="space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Nombre completo
                  </label>

                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre completo"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Empresa o negocio
                  </label>

                  <input
                    id="empresa"
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Nombre de la empresa o negocio"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="correo"
                      className="mb-2 block text-sm font-semibold text-slate-900"
                    >
                      Correo electrónico
                    </label>

                    <input
                      id="correo"
                      type="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="mb-2 block text-sm font-semibold text-slate-900"
                    >
                      Teléfono
                    </label>

                    <input
                      id="telefono"
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="300 000 0000"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="ciudad"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Ciudad
                  </label>

                  <input
                    id="ciudad"
                    type="text"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    placeholder="Ciudad donde se encuentra tu negocio"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    ¿Qué productos o cantidades necesitas?
                  </label>

                  <textarea
                    id="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    rows={5}
                    placeholder="Ejemplo: necesito troqueles e insumos para compras frecuentes en cantidades grandes..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-bold text-black transition hover:bg-yellow-400"
                >
                  SOLICITAR INFORMACIÓN
                </button>

                <p className="text-center text-xs leading-5 text-gray-400">
                  Al enviar la solicitud se abrirá WhatsApp con los datos
                  ingresados.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
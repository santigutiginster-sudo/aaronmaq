"use client";

import Image from "next/image";

export default function Contacto() {
  const mapsUrl =
    "https://www.google.com/maps/place/Cl.+43+Sur+%2352c-24,+Bogot%C3%A1/@4.5964703,-74.140779,17z/data=!3m1!4b1!4m9!1m2!2m1!1sCl.+43+Sur+%2358s+-23!3m5!1s0x8e3f9eda9ccd170d:0x311af81af765ecd9!8m2!3d4.596465!4d-74.1359081!16s%2Fg%2F11csg1tm89";

  const whatsappUrl =
    "https://wa.me/573208108023?text=Hola%20AARONMAQ%20%F0%9F%91%8B%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n";

  return (
    <section
      id="contacto"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 sm:py-12 md:py-14"
    >
      <div className="mx-auto max-w-5xl">

        {/* TÍTULO */}
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
          Contáctanos
        </h2>

        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-gray-300 sm:mt-4 sm:text-sm md:text-base">
          Estamos listos para ayudarte con soluciones en troqueles,
          remachadoras e insumos para la industria de confección,
          tapicería y marroquinería.
        </p>

        {/* INFORMACIÓN */}
        <div className="mt-5 grid gap-6 sm:mt-6 md:grid-cols-2 md:gap-8">

          {/* DATOS */}
          <div className="space-y-3 text-xs sm:space-y-4 sm:text-sm md:text-base">

            {/* TELÉFONO */}
            <div>
              <p className="font-semibold text-white">
                📞 Teléfono
              </p>

              <a
                href="tel:+573208108023"
                className="mt-1 inline-block text-gray-300 transition hover:text-yellow-400"
              >
                320 810 8023
              </a>
            </div>

            {/* CORREO */}
            <div>
              <p className="font-semibold text-white">
                📧 Correo
              </p>

              <p className="mt-1 break-words text-gray-300">
                aaronmaq2020@gmail.com
              </p>
            </div>

            {/* UBICACIÓN */}
            <div>
              <p className="font-semibold text-white">
                📍 Ubicación
              </p>

              <p className="mt-1 text-gray-300">
                Cl. 43 Sur #52C-24
                <br />
                Bogotá, Colombia
              </p>
            </div>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-1
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-green-500
                px-4
                py-2.5
                text-xs
                font-bold
                text-white
                transition
                hover:bg-green-600
                sm:w-auto
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>

          {/* LOCAL */}
          <div className="min-w-0">

            <p className="mb-2 text-sm font-semibold sm:text-base">
              🏪 Visítanos
            </p>

            {/* FOTO DEL LOCAL */}
            <div className="flex justify-center">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  block
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-700
                "
              >
                <Image
                  src="/images/local/aaronmaq-local.1.jpeg"
                  alt="Local AARONMAQ"
                  width={1669}
                  height={2048}
                  className="
                    block
                    h-auto
                    w-full
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>
            </div>

            {/* MAPS */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-yellow-500
                px-4
                py-2.5
                text-xs
                font-bold
                text-black
                transition
                hover:bg-yellow-400
                sm:py-3
                sm:text-sm
              "
            >
              📍 Cómo llegar a nuestro local
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
import Link from "next/link";
import { productos } from "@/data/productos";
import ProductoCard from "@/components/ProductoCard";

interface Props {
  params: Promise<{
    categoria: string;
    subcategoria: string;
  }>;
}

interface Tipo {
  nombre: string;
  slug: string;
  descripcion: string;
  icono: string;
}

/*
 * =====================================================
 * TIPOS / SUBNIVELES POR SUBCATEGORÍA
 * =====================================================
 */

const tiposPorSubcategoria: Record<string, Tipo[]> = {
  /*
   * =====================================================
   * BOTÓN DE JEAN
   * =====================================================
   */

  "boton jean": [
    {
      nombre: "#15",
      slug: "15",
      descripcion:
        "Botón de jean referencia #15 para aplicaciones de confección.",
      icono: "🔘",
    },
    {
      nombre: "#17",
      slug: "17",
      descripcion:
        "Botón de jean referencia #17 para aplicaciones de confección.",
      icono: "🔘",
    },
    {
      nombre: "#20",
      slug: "20",
      descripcion:
        "Botón de jean referencia #20 para aplicaciones de confección.",
      icono: "🔘",
    },
  ],

  /*
   * =====================================================
   * BROCHE
   * =====================================================
   */

  broche: [
    {
      nombre: "Metálicos",
      slug: "metalicos",
      descripcion:
        "Broches metálicos para confección, prendas y diferentes aplicaciones.",
      icono: "⚙️",
    },
    {
      nombre: "Plásticos",
      slug: "plasticos",
      descripcion:
        "Broches plásticos para confección y diferentes aplicaciones.",
      icono: "🔘",
    },
  ],

  /*
   * =====================================================
   * FORRADOR
   * =====================================================
   */

  forrador: [
    {
      nombre: "Confección",
      slug: "confeccion",
      descripcion:
        "Forradores para confección en diferentes referencias.",
      icono: "🧵",
    },
    {
      nombre: "Tapicería",
      slug: "tapiceria",
      descripcion:
        "Forradores para aplicaciones de tapicería.",
      icono: "🛋️",
    },
    {
      nombre: "Gorra",
      slug: "gorra",
      descripcion:
        "Forradores para aplicaciones de gorra.",
      icono: "🧢",
    },
  ],

  /*
   * =====================================================
   * OJALES
   * =====================================================
   */

  ojales: [
    {
      nombre: "Estándar",
      slug: "estandar",
      descripcion:
        "Ojales estándar para diferentes aplicaciones de confección.",
      icono: "⭕",
    },
    {
      nombre: "Inox",
      slug: "inox",
      descripcion:
        "Ojales en acero inoxidable para aplicaciones especiales.",
      icono: "🔩",
    },
    {
      nombre: "De lujo",
      slug: "de-lujo",
      descripcion:
        "Ojales de lujo en diferentes referencias.",
      icono: "✨",
    },
  ],

  /*
   * =====================================================
   * TACHE
   * =====================================================
   */

  tache: [
    {
      nombre: "Taches",
      slug: "taches",
      descripcion:
        "Taches para diferentes aplicaciones y acabados.",
      icono: "◆",
    },
    {
      nombre: "Taches de Jean",
      slug: "taches-de-jean",
      descripcion:
        "Taches de jean en diferentes referencias y estilos.",
      icono: "👖",
    },
  ],
};

/*
 * =====================================================
 * NORMALIZAR
 * =====================================================
 */

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, " ")
    .trim();
}

/*
 * =====================================================
 * EQUIVALENCIAS DE PRODUCTOS
 * =====================================================
 */

function coincidenSubcategorias(
  productoSubcategoria: string,
  nombreSubcategoria: string
) {
  const producto = normalizar(productoSubcategoria);
  const actual = normalizar(nombreSubcategoria);

  if (producto === actual) {
    return true;
  }

  const equivalencias: Record<string, string[]> = {
    /*
     * BOTÓN DE JEAN
     */

    "boton jean": [
      "boton jean",
      "botones jean",
      "botones de jean",
    ],

    /*
     * BROCHE
     */

    broche: [
      "broche",
      "broches",
    ],

    /*
     * PERLA
     */

    perla: [
      "perla",
      "perlas",
    ],

    /*
     * REMACHE
     */

    remache: [
      "remache",
      "remaches",
    ],

    /*
     * PERFORADORES
     */

    perforadores: [
      "perforador",
      "perforadores",
    ],

    /*
     * SACABOCADOS
     */

    sacabocados: [
      "sacabocados",
      "saca bocados",
    ],

    /*
     * PUNTERA
     */

    puntera: [
      "puntera",
      "punteras",
    ],

    /*
     * TACHE
     */

    tache: [
      "tache",
      "taches",
    ],

    /*
     * FORRADOR
     */

    forrador: [
      "forrador",
      "forradores",
    ],
  };

  return equivalencias[actual]?.includes(producto) ?? false;
}

/*
 * =====================================================
 * PÁGINA
 * =====================================================
 */

export default async function SubcategoriaPage({
  params,
}: Props) {
  const {
    categoria,
    subcategoria,
  } = await params;

  const nombreCategoria = normalizar(categoria);
  const nombreSubcategoria = normalizar(subcategoria);

  const tipos =
    tiposPorSubcategoria[nombreSubcategoria];

  /*
   * =====================================================
   * SUBCATEGORÍAS CON SEGUNDO NIVEL
   * =====================================================
   */

  if (tipos) {
    return (
      <main className="min-h-screen bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">

          {/* VOLVER */}

          <Link
            href={`/catalogo/${categoria}`}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-gray-500
              transition
              hover:text-yellow-600
            "
          >
            <span className="text-xl">
              ←
            </span>

            Volver a {nombreCategoria}
          </Link>

          {/* ENCABEZADO */}

          <div className="mt-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              {nombreCategoria}
            </p>

            <h1 className="mt-2 text-4xl font-bold capitalize text-slate-900">
              {nombreSubcategoria}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Selecciona el tipo de producto que deseas consultar.
            </p>

          </div>

          {/* TIPOS */}

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {tipos.map((tipo) => (
              <Link
                key={tipo.slug}
                href={`/catalogo/${categoria}/subcategorias/${subcategoria}/${tipo.slug}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-10
                  text-center
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-500
                  hover:shadow-xl
                "
              >

                {/* ICONO */}

                <div
                  className="
                    mx-auto
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-4xl
                    transition
                    group-hover:bg-yellow-100
                  "
                >
                  {tipo.icono}
                </div>

                {/* NOMBRE */}

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {tipo.nombre}
                </h2>

                {/* DESCRIPCIÓN */}

                <p className="mx-auto mt-3 max-w-md text-gray-500">
                  {tipo.descripcion}
                </p>

                {/* ENLACE */}

                <p className="mt-6 text-sm font-semibold text-yellow-600">
                  Ver productos →
                </p>

              </Link>
            ))}

          </div>
        </div>
      </main>
    );
  }

  /*
   * =====================================================
   * SUBCATEGORÍAS SIN SEGUNDO NIVEL
   * =====================================================
   */

  const productosFiltrados = productos.filter(
    (producto) =>
      normalizar(producto.categoria) ===
        nombreCategoria &&
      coincidenSubcategorias(
        producto.subcategoria,
        nombreSubcategoria
      )
  );

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* VOLVER */}

        <Link
          href={`/catalogo/${categoria}`}
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-500
            transition
            hover:text-yellow-600
          "
        >
          <span className="text-xl">
            ←
          </span>

          Volver a {nombreCategoria}
        </Link>

        {/* ENCABEZADO */}

        <div className="mt-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
            {nombreCategoria}
          </p>

          <h1 className="mt-2 text-4xl font-bold capitalize text-slate-900">
            {nombreSubcategoria}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Productos disponibles.
          </p>

        </div>

        {/* PRODUCTOS */}

        {productosFiltrados.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">

            <h2 className="text-xl font-semibold text-slate-900">
              No hay productos disponibles
            </h2>

            <p className="mt-3 text-gray-500">
              No encontramos productos para esta subcategoría.
            </p>

          </div>
        ) : (
          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {productosFiltrados.map((producto) => (
              <ProductoCard
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
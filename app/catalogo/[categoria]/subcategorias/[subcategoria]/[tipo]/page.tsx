import Link from "next/link";
import { productos } from "@/data/productos";
import ProductoCard from "@/components/ProductoCard";

interface Props {
  params: Promise<{
    categoria: string;
    subcategoria: string;
    tipo: string;
  }>;
}

/*
 * =====================================================
 * NOMBRES VISIBLES DE LOS TIPOS
 * =====================================================
 */

const nombresTipo: Record<string, string> = {
  /*
   * BOTÓN DE JEAN
   */

  "15": "#15",
  "17": "#17",
  "20": "#20",

  /*
   * BROCHES
   */

  metalicos: "Metálicos",
  plasticos: "Plásticos",

  /*
   * FORRADORES
   */

  confeccion: "Confección",
  tapiceria: "Tapicería",
  gorra: "Gorra",

  /*
   * OJALES
   */

  estandar: "Estándar",
  inox: "Inox",
  "de-lujo": "De lujo",

  /*
   * TACHES
   */

  taches: "Taches",
  "taches-de-jean": "Taches de Jean",
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
 * EQUIVALENCIAS DE SUBCATEGORÍAS
 * =====================================================
 */

function coincidenSubcategorias(
  productoSubcategoria: string,
  nombreSubcategoria: string
) {
  const producto = normalizar(productoSubcategoria);
  const actual = normalizar(nombreSubcategoria);

  /*
   * Coincidencia directa
   */

  if (producto === actual) {
    return true;
  }

  /*
   * Equivalencias
   */

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
     * FORRADOR
     */

    forrador: [
      "forrador",
      "forradores",
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

    perforador: [
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
  };

  return (
    equivalencias[actual]?.includes(producto) ??
    false
  );
}

/*
 * =====================================================
 * PRODUCTO PERTENECE AL TIPO
 * =====================================================
 *
 * Aquí decidimos qué productos aparecen cuando
 * el usuario entra a un tipo específico.
 */

function productoPerteneceAlTipo(
  producto: (typeof productos)[number],
  tipo: string
) {
  const nombreProducto = normalizar(
    producto.nombre
  );

  const tipoNormalizado = normalizar(tipo);

  /*
   * =====================================================
   * BOTÓN DE JEAN
   * =====================================================
   *
   * Ejemplo:
   *
   * Botón de Jean
   *      ↓
   *     #15
   *
   * Entonces buscamos la medida del producto.
   */

  if (
    tipoNormalizado === "15" ||
    tipoNormalizado === "17" ||
    tipoNormalizado === "20"
  ) {
    return (
      normalizar(producto.medida ?? "") ===
      `#${tipoNormalizado}`
    );
  }

  /*
   * =====================================================
   * BROCHES
   * =====================================================
   */

  if (
    tipoNormalizado === "metalicos" ||
    tipoNormalizado === "plasticos"
  ) {
    return (
      normalizar(producto.tipo ?? "") ===
      tipoNormalizado
    );
  }

  /*
   * =====================================================
   * FORRADORES
   * =====================================================
   *
   * Aquí utilizamos el campo "tipo" del producto.
   *
   * tipo: confeccion
   * tipo: tapiceria
   * tipo: gorra
   */

  if (
    tipoNormalizado === "confeccion" ||
    tipoNormalizado === "tapiceria" ||
    tipoNormalizado === "gorra"
  ) {
    return (
      normalizar(producto.tipo ?? "") ===
      tipoNormalizado
    );
  }

  /*
   * =====================================================
   * OJALES
   * =====================================================
   */

  if (tipoNormalizado === "estandar") {
    return (
      nombreProducto.startsWith("ojalete") &&
      !nombreProducto.includes("inox") &&
      !nombreProducto.includes("lujo")
    );
  }

  if (tipoNormalizado === "inox") {
    return (
      nombreProducto.startsWith("ojalete") &&
      nombreProducto.includes("inox")
    );
  }

  if (tipoNormalizado === "de lujo") {
    return (
      nombreProducto.includes(
        "ojalete de lujo"
      )
    );
  }

  /*
   * =====================================================
   * TACHES
   * =====================================================
   */

  if (tipoNormalizado === "taches") {
    return (
      nombreProducto.startsWith("tache") &&
      !nombreProducto.includes("jean")
    );
  }

  if (
    tipoNormalizado === "taches de jean"
  ) {
    return nombreProducto.includes(
      "tache de jean"
    );
  }

  /*
   * =====================================================
   * SI NO ENCONTRAMOS EL TIPO
   * =====================================================
   */

  return false;
}

/*
 * =====================================================
 * PÁGINA
 * =====================================================
 */

export default async function TipoPage({
  params,
}: Props) {
  const {
    categoria,
    subcategoria,
    tipo,
  } = await params;

  const nombreCategoria =
    normalizar(categoria);

  const nombreSubcategoria =
    normalizar(subcategoria);

  const nombreTipo =
    normalizar(tipo);

  /*
   * =====================================================
   * TÍTULO DEL TIPO
   * =====================================================
   */

  const tituloTipo =
    nombresTipo[tipo.toLowerCase()] ??
    tipo
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letra) =>
        letra.toUpperCase()
      );

  /*
   * =====================================================
   * FILTRAR PRODUCTOS
   * =====================================================
   */

  const productosFiltrados =
    productos.filter((producto) => {
      /*
       * -----------------------------------------------
       * CATEGORÍA
       * -----------------------------------------------
       */

      const coincideCategoria =
        normalizar(producto.categoria) ===
        nombreCategoria;

      /*
       * -----------------------------------------------
       * SUBCATEGORÍA
       * -----------------------------------------------
       */

      const coincideSubcategoria =
        coincidenSubcategorias(
          producto.subcategoria,
          nombreSubcategoria
        );

      /*
       * -----------------------------------------------
       * TIPO
       * -----------------------------------------------
       */

      const coincideTipo =
        productoPerteneceAlTipo(
          producto,
          nombreTipo
        );

      return (
        coincideCategoria &&
        coincideSubcategoria &&
        coincideTipo
      );
    });

  /*
   * =====================================================
   * INTERFAZ
   * =====================================================
   */

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* =================================================
            VOLVER
        ================================================= */}

        <Link
          href={`/catalogo/${categoria}/subcategorias/${subcategoria}`}
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

          Volver a {nombreSubcategoria}
        </Link>

        {/* =================================================
            ENCABEZADO
        ================================================= */}

        <div className="mt-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
            {nombreCategoria}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            {tituloTipo}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Productos disponibles en esta referencia.
          </p>

        </div>

        {/* =================================================
            PRODUCTOS
        ================================================= */}

        {productosFiltrados.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">

            <h2 className="text-xl font-semibold text-slate-900">
              No hay productos disponibles
            </h2>

            <p className="mt-3 text-gray-500">
              No encontramos productos para esta
              referencia.
            </p>

          </div>
        ) : (
          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {productosFiltrados.map(
              (producto) => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                />
              )
            )}
          </div>
        )}

      </div>
    </main>
  );
}
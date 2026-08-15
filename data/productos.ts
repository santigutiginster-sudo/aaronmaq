export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  subcategoria: string;
  tipo?: string;
  codigo?: string;
  medida?: string;
  material?: string;
  acabado?: string;
  colores?: string[];
  uso?: string;
  precio?: number;
  descripcion: string;
  imagen?: string;
}

export const productos: Producto[] = [
  // =====================================================
  // TROQUELES - BROCHE - METÁLICOS
  // =====================================================

  {
    id: 1,
    nombre: "Broche Americano",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-001",
    medida: "15 mm",
    material: "Metal",
    acabado: "Niquel",
    uso: "Confección y prendas",
    precio: 44000,
    descripcion:
      "Broche americano metálico de 15 mm para aplicaciones de confección.",
    imagen: "/images/troqueles/brocheamericano.png",
  },

  {
    id: 2,
    nombre: "Broche Americano Tapa Plástica #15",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-002",
    medida: "#15 y #17",
    material: "Metal y plástico",
    acabado: "Niquel",
    uso: "Confección y prendas",
    precio: 45000,
    descripcion:
      "Broche americano con tapa plástica en referencias #15 y #17.",
    imagen: "/images/troqueles/broche.americano.tapaplastica.jpeg",
  },

  {
    id: 3,
    nombre: "Broche Semiamericano",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-003",
    material: "Metal",
    acabado: "Niquel",
    uso: "Confección y prendas",
    precio: 39000,
    descripcion:
      "Broche semiamericano metálico para diferentes aplicaciones de confección.",
    imagen: "/images/troqueles/brochesemiamericano.jpeg",
  },

  {
    id: 4,
    nombre: "Broche Escobil #15",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-004",
    medida: "#15 y #16",
    material: "Metal",
    acabado: "Niquel",
    uso: "Confección y prendas",
    precio: 41000,
    descripcion:
      "Broche Escobil metálico en referencias #15",
    imagen: "/images/troqueles/brocheescobil15.jpeg",
  },

  {
    id: 5,
    nombre: "Broche Cazuela",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-005",
    material: "Metal",
    acabado: "Niquel",
    uso: "Confección y prendas",
    precio: 38000,
    descripcion:
      "Broche metálico tipo cazuela para aplicaciones de confección.",
    imagen: "/images/troqueles/broche.cazuela.png",
  },

  {
    id: 6,
    nombre: "Broche Semicazuela",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-006",
    material: "Metal",
    acabado: "Niquel",
    uso: "Confección y prendas",
    precio: 36000,
    descripcion:
      "Broche metálico tipo semicazuela para aplicaciones de confección.",
    imagen: "/images/troqueles/broche%20.semicazuela..png",
  },

  {
    id: 7,
    nombre: "Broche Billetera",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "metalicos",
    codigo: "BR-MET-007",
    material: "Metal",
    acabado: "Niquel",
    uso: "Marroquinería y accesorios",
    precio: 36000,
    descripcion:
      "Broche metálico tipo billetera para diferentes aplicaciones.",
  },

  // =====================================================
  // TROQUELES - BROCHE - PLÁSTICOS
  // =====================================================

  {
    id: 8,
    nombre: "Broche Multiusos",
    categoria: "troqueles",
    subcategoria: "broche",
    tipo: "plasticos",
    codigo: "BR-PLA-001",
    material: "Plástico",
    acabado: "Mate",
    uso: "Confección, prendas y diferentes aplicaciones",
    precio: 39000,
    descripcion:
      "Broche plástico multiusos para diferentes aplicaciones.",
    imagen: "/images/troqueles/broche.multiusos.jpeg",
  },

  // =====================================================
  // TROQUELES - CASQUETES - CONFECCIÓN
  // =====================================================

  {
    id: 9,
    nombre: "Casquete #16",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "confeccion",
    codigo: "TC-016",
    medida: "#16",
    material: "Metal",
    uso: "Confección",
    precio: 51000,
    descripcion:
      "Troquel para casquete de confección referencia #16.",
  },

  {
    id: 10,
    nombre: "Casquete #18",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "confeccion",
    codigo: "TC-018",
    medida: "#18",
    material: "Metal",
    uso: "Confección",
    precio: 53000,
    descripcion:
      "Troquel para casquete de confección referencia #18.",
  },

  {
    id: 11,
    nombre: "Casquete #20",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "confeccion",
    codigo: "TC-020",
    medida: "#20",
    material: "Metal",
    uso: "Confección",
    precio: 55000,
    descripcion:
      "Troquel para casquete de confección referencia #20.",
  },

  {
    id: 12,
    nombre: "Casquete #24",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "confeccion",
    codigo: "TC-024",
    medida: "#24",
    material: "Metal",
    uso: "Confección",
    precio: 57000,
    descripcion:
      "Troquel para casquete de confección referencia #24.",
  },

  {
    id: 13,
    nombre: "Casquete #30",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "confeccion",
    codigo: "TC-030",
    medida: "#30",
    material: "Metal",
    uso: "Confección",
    precio: 61000,
    descripcion:
      "Troquel para casquete de confección referencia #30.",
  },

  {
    id: 14,
    nombre: "Casquete #36",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "confeccion",
    codigo: "TC-036",
    medida: "#36",
    material: "Metal",
    uso: "Confección",
    precio: 66000,
    descripcion:
      "Troquel para casquete de confección referencia #36.",
  },

  // =====================================================
  // TROQUELES - CASQUETES - TAPICERÍA
  // =====================================================

  {
    id: 15,
    nombre: "Casquete #24",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "tapiceria",
    codigo: "TT-024",
    medida: "#24",
    material: "Metal",
    uso: "Tapicería",
    precio: 57000,
    descripcion:
      "Troquel para casquete de tapicería referencia #24.",
  },

  {
    id: 16,
    nombre: "Casquete #30",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "tapiceria",
    codigo: "TT-030",
    medida: "#30",
    material: "Metal",
    uso: "Tapicería",
    precio: 61000,
    descripcion:
      "Troquel para casquete de tapicería referencia #30.",
  },

  {
    id: 17,
    nombre: "Casquete #36",
    categoria: "troqueles",
    subcategoria: "casquetes",
    tipo: "tapiceria",
    codigo: "TT-036",
    medida: "#36",
    material: "Metal",
    uso: "Tapicería",
    precio: 66000,
    descripcion:
      "Troquel para casquete de tapicería referencia #36.",
  },

  // =====================================================
  // OJALES - ESTÁNDAR
  // =====================================================

  {
    id: 18,
    nombre: "Ojalete #3",
    categoria: "ojales",
    subcategoria: "#3",
    tipo: "estandar",
    medida: "#3",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia #3.",
  },

  {
    id: 19,
    nombre: "Ojalete #4",
    categoria: "ojales",
    subcategoria: "#4",
    tipo: "estandar",
    medida: "#4",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia #4.",
  },

  {
    id: 20,
    nombre: "Ojalete #5",
    categoria: "ojales",
    subcategoria: "#5",
    tipo: "estandar",
    medida: "#5",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia #5.",
  },

  {
    id: 21,
    nombre: "Ojalete #6",
    categoria: "ojales",
    subcategoria: "#6",
    tipo: "estandar",
    medida: "#6",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia #6.",
  },

  {
    id: 22,
    nombre: "Ojalete 1/4",
    categoria: "ojales",
    subcategoria: "1/4",
    tipo: "estandar",
    medida: "1/4",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia 1/4.",
  },

  {
    id: 23,
    nombre: "Ojalete 5/16",
    categoria: "ojales",
    subcategoria: "5/16",
    tipo: "estandar",
    medida: "5/16",
    material: "Metal",
    uso: "Confección y marroquinería",
    descripcion:
      "Ojalete referencia 5/16.",
  },

  {
    id: 24,
    nombre: "Ojalete 3/8",
    categoria: "ojales",
    subcategoria: "3/8",
    tipo: "estandar",
    medida: "3/8",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia 3/8.",
  },

  {
    id: 25,
    nombre: "Ojalete 1/2",
    categoria: "ojales",
    subcategoria: "1/2",
    tipo: "estandar",
    medida: "1/2",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia 1/2.",
  },

  {
    id: 26,
    nombre: "Ojalete 5/8",
    categoria: "ojales",
    subcategoria: "5/8",
    tipo: "estandar",
    medida: "5/8",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia 5/8.",
  },

  {
    id: 27,
    nombre: "Ojalete 3/4",
    categoria: "ojales",
    subcategoria: "3/4",
    tipo: "estandar",
    medida: "3/4",
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete referencia 3/4.",
  },

  {
    id: 28,
    nombre: 'Ojalete 1 1/2 metálico',
    categoria: "ojales",
    subcategoria: "1 1/2",
    tipo: "estandar",
    medida: '1 1/2"',
    material: "Metal",
    uso: "Confección y accesorios",
    descripcion:
      'Ojalete metálico de 1 1/2".',
  },

  {
    id: 29,
    nombre: 'Ojalete 1 1/2 plástico',
    categoria: "ojales",
    subcategoria: "1 1/2",
    tipo: "estandar",
    medida: '1 1/2"',
    material: "Plástico",
    uso: "Confección y accesorios",
    descripcion:
      'Ojalete plástico de 1 1/2".',
  },

  {
    id: 30,
    nombre: 'Ojalete 1 1/2 teflón',
    categoria: "ojales",
    subcategoria: "1 1/2",
    tipo: "estandar",
    medida: '1 1/2"',
    material: "Teflón",
    uso: "Confección y accesorios",
    descripcion:
      'Ojalete de teflón de 1 1/2".',
  },

  // =====================================================
  // OJALES - INOX
  // =====================================================

  {
    id: 31,
    nombre: "Ojalete #6 inox",
    categoria: "ojales",
    subcategoria: "#6",
    tipo: "inox",
    medida: "#6",
    material: "Acero inoxidable",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete inoxidable referencia #6.",
  },

  {
    id: 32,
    nombre: "Ojalete 1/4 inox",
    categoria: "ojales",
    subcategoria: "1/4",
    tipo: "inox",
    medida: "1/4",
    material: "Acero inoxidable",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete inoxidable referencia 1/4.",
  },

  {
    id: 33,
    nombre: "Ojalete 5/16 inox",
    categoria: "ojales",
    subcategoria: "5/16",
    tipo: "inox",
    medida: "5/16",
    material: "Acero inoxidable",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete inoxidable referencia 5/16.",
  },

  {
    id: 34,
    nombre: "Ojalete 3/8 inox",
    categoria: "ojales",
    subcategoria: "3/8",
    tipo: "inox",
    medida: "3/8",
    material: "Acero inoxidable",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete inoxidable referencia 3/8.",
  },

  // =====================================================
  // OJALES - DE LUJO
  // =====================================================

  {
    id: 35,
    nombre: "Ojalete de lujo #300",
    categoria: "ojales",
    subcategoria: "#300",
    tipo: "de-lujo",
    medida: "#300",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #300.",
  },

  {
    id: 36,
    nombre: "Ojalete de lujo #400",
    categoria: "ojales",
    subcategoria: "#400",
    tipo: "de-lujo",
    medida: "#400",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #400.",
  },

  {
    id: 37,
    nombre: "Ojalete de lujo #500",
    categoria: "ojales",
    subcategoria: "#500",
    tipo: "de-lujo",
    medida: "#500",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #500.",
  },

  {
    id: 38,
    nombre: "Ojalete de lujo #600",
    categoria: "ojales",
    subcategoria: "#600",
    tipo: "de-lujo",
    medida: "#600",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #600.",
  },

  {
    id: 39,
    nombre: "Ojalete de lujo #800",
    categoria: "ojales",
    subcategoria: "#800",
    tipo: "de-lujo",
    medida: "#800",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #800.",
  },

  {
    id: 40,
    nombre: "Ojalete de lujo #1000",
    categoria: "ojales",
    subcategoria: "#1000",
    tipo: "de-lujo",
    medida: "#1000",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #1000.",
  },

  {
    id: 41,
    nombre: "Ojalete de lujo #1200",
    categoria: "ojales",
    subcategoria: "#1200",
    tipo: "de-lujo",
    medida: "#1200",
    uso: "Confección y accesorios",
    descripcion:
      "Ojalete de lujo referencia #1200.",
  },

  // =====================================================
  // TROQUELES - BOTON JEAN
  // =====================================================

  {
    id: 42,
    nombre: "Botón de Jean #15",
    categoria: "troqueles",
    subcategoria: "boton jean",
    tipo: "15",
    medida: "#15",
    material: "Metal",
    uso: "Confección y prendas",
    precio: 36000,
    descripcion:
      "Troquel para botón de jean referencia #15.",
  },

  {
    id: 43,
    nombre: "Botón de Jean #17",
    categoria: "troqueles",
    subcategoria: "boton jean",
    tipo: "17",
    medida: "#17",
    material: "Metal",
    uso: "Confección y prendas",
    precio: 36000,
    descripcion:
      "Troquel para botón de jean referencia #17.",
  },

  {
    id: 44,
    nombre: "Botón de Jean #20",
    categoria: "troqueles",
    subcategoria: "boton jean",
    tipo: "20",
    medida: "#20",
    material: "Metal",
    uso: "Confección y prendas",
    precio: 38000,
    descripcion:
      "Troquel para botón de jean referencia #20.",
  },

  // =====================================================
  // TROQUELES - REMACHE
  // =====================================================

  {
    id: 45,
    nombre: "Remache #4",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#4",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #4.",
  },

  {
    id: 46,
    nombre: "Remache #6",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#6",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #6.",
  },

  {
    id: 47,
    nombre: "Remache #7",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#7",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #7.",
  },

  {
    id: 48,
    nombre: "Remache #8",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#8",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #8.",
  },

  {
    id: 49,
    nombre: "Remache #9",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#9",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #9.",
  },

  {
    id: 50,
    nombre: "Remache #10",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#10",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #10.",
  },

  {
    id: 51,
    nombre: "Remache #12",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#12",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #12.",
  },

  {
    id: 52,
    nombre: "Remache #15",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "estandar",
    medida: "#15",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache referencia #15.",
  },

  {
    id: 53,
    nombre: "Remache Hongo #9",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "hongo",
    medida: "#9",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache hongo referencia #9.",
  },

  {
    id: 54,
    nombre: "Remache Hongo #10",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "hongo",
    medida: "#10",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache hongo referencia #10.",
  },

  {
    id: 55,
    nombre: "Remache Hongo #12",
    categoria: "troqueles",
    subcategoria: "remache",
    tipo: "hongo",
    medida: "#12",
    uso: "Confección y marroquinería",
    descripcion:
      "Troquel para remache hongo referencia #12.",
  },

  // =====================================================
  // TROQUELES - PUNTERA
  // =====================================================

  {
    id: 56,
    nombre: "Puntera Metálica",
    categoria: "troqueles",
    subcategoria: "puntera",
    tipo: "metalica",
    material: "Metal",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel para puntera metálica.",
  },

  // =====================================================
  // TROQUELES - FORRADOR - CONFECCIÓN
  // =====================================================

  {
    id: 57,
    nombre: "Forrador Confección #16",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "confeccion",
    medida: "#16",
    uso: "Confección",
    descripcion:
      "Forrador para confección referencia #16.",
  },

  {
    id: 58,
    nombre: "Forrador Confección #18",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "confeccion",
    medida: "#18",
    uso: "Confección",
    descripcion:
      "Forrador para confección referencia #18.",
  },

  {
    id: 59,
    nombre: "Forrador Confección #20",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "confeccion",
    medida: "#20",
    uso: "Confección",
    descripcion:
      "Forrador para confección referencia #20.",
  },

  {
    id: 60,
    nombre: "Forrador Confección #24",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "confeccion",
    medida: "#24",
    uso: "Confección",
    descripcion:
      "Forrador para confección referencia #24.",
  },

  {
    id: 61,
    nombre: "Forrador Confección #30",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "confeccion",
    medida: "#30",
    uso: "Confección",
    descripcion:
      "Forrador para confección referencia #30.",
  },

  {
    id: 62,
    nombre: "Forrador Confección #36",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "confeccion",
    medida: "#36",
    uso: "Confección",
    descripcion:
      "Forrador para confección referencia #36.",
  },

  // =====================================================
  // TROQUELES - FORRADOR - TAPICERÍA
  // =====================================================

  {
    id: 63,
    nombre: "Forrador de Tapicería #24",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "tapiceria",
    medida: "#24",
    uso: "Tapicería",
    descripcion:
      "Forrador para tapicería referencia #24.",
  },

  {
    id: 64,
    nombre: "Forrador de Tapicería #30",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "tapiceria",
    medida: "#30",
    uso: "Tapicería",
    descripcion:
      "Forrador para tapicería referencia #30.",
  },

  {
    id: 65,
    nombre: "Forrador de Tapicería #36",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "tapiceria",
    medida: "#36",
    uso: "Tapicería",
    descripcion:
      "Forrador para tapicería referencia #36.",
  },

  // =====================================================
  // TROQUELES - FORRADOR - GORRA
  // =====================================================

  {
    id: 66,
    nombre: "Forrador de Gorra",
    categoria: "troqueles",
    subcategoria: "forrador",
    tipo: "gorra",
    uso: "Gorra",
    descripcion:
      "Forrador para aplicaciones de gorra.",
  },

  // =====================================================
  // TROQUELES - PERLA
  // =====================================================

  {
    id: 67,
    nombre: "Perla #6",
    categoria: "troqueles",
    subcategoria: "perla",
    medida: "6 mm",
    material: "Plástico",
    uso: "Confección y accesorios",
    precio: 36000,
    descripcion:
      "Troquel para perla de 6 mm.",
  },

  {
    id: 68,
    nombre: "Perla #8",
    categoria: "troqueles",
    subcategoria: "perla",
    medida: "8 mm",
    material: "Plástico",
    uso: "Confección y accesorios",
    precio: 36000,
    descripcion:
      "Troquel para perla de 8 mm.",
    imagen: "/images/troqueles/perla%20%238.jpeg",
  },

  {
    id: 69,
    nombre: "Perla #10",
    categoria: "troqueles",
    subcategoria: "perla",
    medida: "10 mm",
    material: "Plástico",
    uso: "Confección y accesorios",
    precio: 38000,
    descripcion:
      "Troquel para perla de 10 mm.",
  },

  // =====================================================
  // TROQUELES - TACHE
  // =====================================================

  {
    id: 70,
    nombre: "Tache Circon",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches",
    uso: "Confección y accesorios",
    descripcion:
      "Troquel para tache tipo circon.",
  },

  {
    id: 71,
    nombre: "Tache Cono",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches",
    uso: "Confección y accesorios",
    descripcion:
      "Troquel para tache tipo cono.",
  },

  {
    id: 72,
    nombre: "Tache Semi Cono",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches",
    uso: "Confección y accesorios",
    descripcion:
      "Troquel para tache tipo semi cono.",
  },

  {
    id: 73,
    nombre: "Tache Flor",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches",
    uso: "Confección y accesorios",
    descripcion:
      "Troquel para tache tipo flor.",
  },

  {
    id: 74,
    nombre: "Tache Piramidal",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches",
    uso: "Confección y accesorios",
    descripcion:
      "Troquel para tache tipo piramidal.",
  },

  {
    id: 75,
    nombre: "Tache Estrella",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches",
    uso: "Confección y accesorios",
    descripcion:
      "Troquel para tache tipo estrella.",
  },

  // =====================================================
  // TROQUELES - TACHE DE JEAN
  // =====================================================

  {
    id: 76,
    nombre: "Tache de Jean #8",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches-de-jean",
    medida: "#8",
    uso: "Confección y prendas",
    descripcion:
      "Tache de jean referencia #8.",
  },

  {
    id: 77,
    nombre: "Tache de Jean #9",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches-de-jean",
    medida: "#9",
    uso: "Confección y prendas",
    descripcion:
      "Tache de jean referencia #9.",
  },

  {
    id: 78,
    nombre: "Tache de Jean Tipo Levis",
    categoria: "troqueles",
    subcategoria: "tache",
    tipo: "taches-de-jean",
    uso: "Confección y prendas",
    descripcion:
      "Tache de jean tipo Levis.",
  },

  // =====================================================
  // TROQUELES - PERFORADORES
  // =====================================================

  {
    id: 79,
    nombre: "Perforador #2",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#2",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #2.",
  },

  {
    id: 80,
    nombre: "Perforador #3",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#3",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #3.",
  },

  {
    id: 81,
    nombre: "Perforador #4",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#4",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #4.",
  },

  {
    id: 82,
    nombre: "Perforador #5",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#5",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #5.",
  },

  {
    id: 83,
    nombre: "Perforador #6",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#6",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #6.",
  },

  {
    id: 84,
    nombre: "Perforador #7",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#7",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #7.",
  },

  {
    id: 85,
    nombre: "Perforador #8",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#8",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #8.",
  },

  {
    id: 86,
    nombre: "Perforador #9",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#9",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #9.",
  },

  {
    id: 87,
    nombre: "Perforador #10",
    categoria: "troqueles",
    subcategoria: "perforadores",
    medida: "#10",
    uso: "Confección y diferentes aplicaciones",
    descripcion:
      "Troquel perforador referencia #10.",
  },

  // =====================================================
  // TROQUELES - SACABOCADOS
  // =====================================================

  {
    id: 88,
    nombre: "Sacabocados para máquina #1",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#1",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #1.",
  },

  {
    id: 89,
    nombre: "Sacabocados para máquina #2",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#2",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #2.",
  },

  {
    id: 90,
    nombre: "Sacabocados para máquina #3",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#3",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #3.",
  },

  {
    id: 91,
    nombre: "Sacabocados para máquina #4",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#4",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #4.",
  },

  {
    id: 92,
    nombre: "Sacabocados para máquina #5",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#5",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #5.",
  },

  {
    id: 93,
    nombre: "Sacabocados para máquina #6",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#6",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #6.",
  },

  {
    id: 94,
    nombre: "Sacabocados para máquina #7",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#7",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #7.",
  },

  {
    id: 95,
    nombre: "Sacabocados para máquina #8",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#8",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #8.",
  },

  {
    id: 96,
    nombre: "Sacabocados para máquina #9",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#9",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #9.",
  },

  {
    id: 97,
    nombre: "Sacabocados para máquina #10",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#10",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #10.",
  },

  {
    id: 98,
    nombre: "Sacabocados para máquina #11",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#11",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #11.",
  },

  {
    id: 99,
    nombre: "Sacabocados para máquina #12",
    categoria: "troqueles",
    subcategoria: "sacabocados",
    medida: "#12",
    uso: "Máquinas",
    descripcion:
      "Sacabocados para máquina referencia #12.",
  },

  // =====================================================
  // OTROS PRODUCTOS
  // =====================================================

  {
    id: 100,
    nombre: "Eje Electric Machine",
    categoria: "remachadoras",
    subcategoria: "electrónica",
    tipo: "electrica",
    uso: "Máquinas",
    descripcion:
      "Eje para Electric Machine.",
  },
];
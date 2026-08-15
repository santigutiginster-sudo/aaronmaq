import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Opiniones from "../components/Opiniones";
import Contacto from "../components/Contacto";
import WhatsApp from "../components/WhatsApp";
import PromocionRegalo from "../components/PromocionRegalo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <Servicios />

      <Nosotros />

      <Opiniones />

      <Contacto />

      <WhatsApp />

      <PromocionRegalo />
    </main>
  );
}
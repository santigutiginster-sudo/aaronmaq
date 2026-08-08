import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Opiniones from "../components/Opiniones";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <Servicios />

      <Nosotros />

      <Opiniones />

      <Contacto />

    </main>
  );
}
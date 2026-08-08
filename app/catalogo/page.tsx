import Navbar from "../../components/Navbar";
import Categorias from "../../components/Categorias";
import Catalogo from "../../components/Catalogo";

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Categorias />
      <Catalogo />
    </main>
  );
}
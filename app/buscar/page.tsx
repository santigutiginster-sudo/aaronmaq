export default function BuscarPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Buscar productos
        </h1>

        <p className="mt-3 text-gray-600">
          Encuentra fácilmente los productos de AARONMAQ.
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-600"
          />
        </div>
      </div>
    </main>
  );
}
"use client";

interface RastrearPedidoProps {
  transportadora: string;
  guia: string;
}

export default function RastrearPedido({
  transportadora,
  guia,
}: RastrearPedidoProps) {
  const rastrearEnvio = () => {
    if (transportadora === "Inter Rapidísimo") {
      window.open(
        "https://interrapidisimo.com/",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (transportadora === "Servientrega") {
      window.open(
        "https://www.servientrega.com/",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (transportadora === "Envía") {
      window.open(
        "https://www.envia.co/",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (transportadora === "Coordinadora") {
      window.open(
        "https://coordinadora.com/",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (transportadora === "TCC") {
      window.open(
        "https://www.tcc.com.co/",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

        <div>
          <p className="text-[11px] uppercase tracking-wide text-gray-400">
            Transportadora
          </p>

          <p className="text-sm font-semibold text-slate-900">
            {transportadora}
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-wide text-gray-400">
            Guía
          </p>

          <p className="text-sm font-semibold text-slate-900">
            {guia}
          </p>
        </div>

      </div>

      <button
        type="button"
        onClick={rastrearEnvio}
        className="rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
      >
        RASTREAR ENVÍO
      </button>

    </div>
  );
}
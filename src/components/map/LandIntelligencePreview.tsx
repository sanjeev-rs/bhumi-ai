import {
  Layers3,
  Plus,
  Minus,
  LocateFixed,
  Satellite,
} from "lucide-react";

const layers = [
  "Administrative Boundaries",
  "Land Use / Land Cover",
  "Agriculture",
  "Forest",
  "Water Bodies",
  "Urban Areas",
  "Infrastructure",
  "Climate Risk",
  "Land Disputes",
];

export default function LandIntelligencePreview() {
  return (
    <section
      id="features"
      className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"
    >
      {/* Section heading */}
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#183D2B]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#71815B]">
              Explore India
            </span>
          </div>

          <h2 className="font-serif text-4xl tracking-tight text-[#101713] md:text-5xl">
            India Land
            <span className="italic text-[#183D2B]"> Intelligence Map.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#707770]">
            Explore land, environment, infrastructure and climate
            intelligence across India in one connected view.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-full border border-[#183D2B]/15 px-5 py-3 text-xs font-medium text-[#183D2B] transition hover:bg-[#183D2B] hover:text-white">
          Explore Full Map
          <span>→</span>
        </button>
      </div>

      {/* Map */}
      <div className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-[#101713]/10 bg-[#D9DDD4]">
        
        {/* Map background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(24,61,43,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(24,61,43,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* India-like land mass visual */}
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[330px] -translate-x-1/2 -translate-y-1/2 rotate-[3deg]">
          
          <div className="absolute inset-0 clip-india bg-[#72866B] opacity-90" />

          <div className="absolute left-[18%] top-[25%] h-32 w-28 rounded-[45%] bg-[#A5B56F]/70 blur-sm" />

          <div className="absolute right-[15%] top-[37%] h-36 w-32 rounded-[50%] bg-[#D1B66C]/70 blur-sm" />

          <div className="absolute left-[35%] top-[55%] h-28 w-36 rounded-[50%] bg-[#849D67]/70 blur-sm" />

          <div className="absolute right-[20%] bottom-[18%] h-24 w-28 rounded-[50%] bg-[#B9A16A]/60 blur-sm" />
        </div>

        {/* Intelligence nodes */}
        <MapNode className="left-[45%] top-[29%]" />
        <MapNode className="left-[51%] top-[40%]" />
        <MapNode className="left-[43%] top-[53%]" />
        <MapNode className="left-[55%] top-[61%]" />
        <MapNode className="left-[38%] top-[67%]" />

        {/* Map controls */}
        <div className="absolute left-5 top-5 w-64 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md">
          
          <div className="mb-4 flex items-center gap-2">
            <Layers3 size={16} className="text-[#183D2B]" />

            <span className="text-xs font-semibold text-[#101713]">
              Map Layers
            </span>
          </div>

          <div className="space-y-3">
            {layers.map((layer, index) => (
              <div
                key={layer}
                className="flex items-center gap-3 text-[11px] text-[#5E655F]"
              >
                <span
                  className={`h-3 w-3 rounded-full border ${
                    index === 1
                      ? "border-[#183D2B] bg-[#183D2B]"
                      : "border-[#A8AEA8] bg-white"
                  }`}
                />

                {layer}
              </div>
            ))}
          </div>
        </div>

        {/* Zoom */}
        <div className="absolute bottom-5 left-5 flex flex-col overflow-hidden rounded-xl bg-white shadow-xl">
          <button className="flex h-10 w-10 items-center justify-center border-b border-[#101713]/10">
            <Plus size={17} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center">
            <Minus size={17} />
          </button>
        </div>

        {/* Locate */}
        <button className="absolute bottom-5 left-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xl">
          <LocateFixed size={17} />
        </button>

        {/* Satellite */}
        <button className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs shadow-xl">
          <Satellite size={15} />
          Satellite View
        </button>

        {/* India label */}
        <div className="absolute right-8 top-8 rounded-full bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#183D2B] backdrop-blur-md">
          INDIA
        </div>
      </div>
    </section>
  );
}

function MapNode({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative">
        <span className="absolute -inset-2 animate-ping rounded-full bg-[#E8F0E5] opacity-40" />
        <span className="relative block h-3 w-3 rounded-full border-2 border-white bg-[#183D2B] shadow-lg" />
      </div>
    </div>
  );
}
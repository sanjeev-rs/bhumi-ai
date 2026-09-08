import {
  ArrowRight,
  Sparkles,
  MapPin,
  Leaf,
  Building2,
  CloudSun,
  Scale,
} from "lucide-react";

const topics = [
  {
    label: "Land Use Change",
    icon: MapPin,
  },
  {
    label: "Policy Impact",
    icon: Scale,
  },
  {
    label: "Climate Risk",
    icon: CloudSun,
  },
  {
    label: "Agricultural Trends",
    icon: Leaf,
  },
  {
    label: "Urban Planning",
    icon: Building2,
  },
];

export default function AskBhumi() {
  return (
    <section className="relative mx-auto mt-16 max-w-[1380px] px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-[28px] bg-[#14281D] p-7 text-white shadow-2xl lg:p-10">
        
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#71815B]/20 blur-3xl" />
        <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-[#183D2B] blur-3xl" />

        <div className="relative z-10">
          
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            
            <div>
              <div className="mb-3 flex items-center gap-3">
                <Sparkles size={19} className="text-[#DCE5D5]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9C8B7]">
                  Ask Bhumi.AI
                </span>
              </div>

              <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
                Intelligence for
                <span className="italic text-[#B9C8B7]"> better decisions.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#AEB9B0]">
                Get evidence-backed insights from land data,
                research and policy using natural language.
              </p>
            </div>

            <div className="hidden text-right lg:block">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#71815B]">
                BHUMI INTELLIGENCE ENGINE
              </p>

              <p className="mt-2 text-xs text-[#87958B]">
                Data + Research + Policy
              </p>
            </div>
          </div>

          {/* Search box */}
          <div className="mt-8">
            <div className="flex min-h-[72px] items-center rounded-2xl bg-white p-2 shadow-xl">
              
              <div className="flex flex-1 items-center px-4">
                <input
                  type="text"
                  placeholder="Ask about land, climate, agriculture, urban growth..."
                  className="w-full bg-transparent text-sm text-[#101713] outline-none placeholder:text-[#9BA29D]"
                />
              </div>

              <button
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#183D2B] text-white transition hover:bg-[#101713]"
                aria-label="Ask Bhumi"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          {/* Topics */}
          <div className="mt-5 flex flex-wrap gap-2">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <button
                  key={topic.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-[#D3DBD4] transition hover:border-white/20 hover:bg-white/10"
                >
                  <Icon size={13} />
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
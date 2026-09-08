import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden rounded-[28px] bg-[#F7F5EF]">
      
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[-15%] h-[700px] w-[700px] rounded-full bg-[#DDE3D8] blur-3xl opacity-60" />

        <div className="absolute bottom-[-25%] left-[15%] h-[600px] w-[800px] rounded-full bg-[#E6E0D2] blur-3xl opacity-50" />

        <div className="absolute right-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#C9D4C5] blur-3xl opacity-30" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#183D2B 1px, transparent 1px), linear-gradient(90deg, #183D2B 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-center px-8 pb-20 pt-32 lg:px-12">
        
        <div className="max-w-[650px]">
          
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-7 bg-[#183D2B]" />

            <span className="text-[10px] font-medium tracking-[0.38em] text-[#42604E]">
              DATA × RESEARCH × POLICY × IMPACT
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[64px] leading-[0.91] tracking-[-0.035em] text-[#101713] sm:text-[76px] lg:text-[88px]">
            Smarter Land
            <br />
            Brighter{" "}
            <span className="italic text-[#183D2B]">
              India.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[540px] text-[17px] leading-7 text-[#59615B]">
            An AI-powered platform that connects land data,
            research and policy to enable evidence-based
            decisions for a sustainable future.
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-5">
            <button className="group flex items-center gap-4">
              
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#183D2B] text-white shadow-lg transition group-hover:scale-105">
                <Play size={17} fill="currentColor" />
              </span>

              <span className="text-sm font-medium text-[#101713]">
                Watch Our Story
              </span>
            </button>

            <div className="hidden h-8 w-px bg-[#101713]/10 sm:block" />

            <a
              href="#features"
              className="hidden items-center gap-2 text-sm text-[#59615B] transition hover:text-[#183D2B] sm:flex"
            >
              Discover BHUMI
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Transition line */}
          <div className="mt-14 flex items-center gap-4">
            <span className="h-px w-12 bg-[#183D2B]" />

            <div className="text-[8px] leading-4 tracking-[0.3em] text-[#7B8178]">
              <div>FROM FRAGMENTED DATA</div>
              <div>TO A GREATER TOMORROW.</div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-10 flex flex-wrap items-center gap-y-6">
            
            <Stat number="700+" label="Datasets Integrated" />
            
            <Divider />

            <Stat number="50K+" label="Research Papers" />

            <Divider />

            <Stat number="750+" label="Policy Documents" />

            <Divider />

            <Stat number="28+" label="Data Sources" />

          </div>
        </div>

        {/* Right visual space */}
        <div className="hidden flex-1 lg:block">
          <div className="relative h-[600px]">
            
            {/* India intelligence visual placeholder */}
            <div className="absolute right-0 top-[8%] h-[520px] w-[520px] rounded-full border border-[#183D2B]/10 bg-white/10 backdrop-blur-[2px]">
              
              <div className="absolute inset-[35px] rounded-full border border-[#183D2B]/10" />

              <div className="absolute inset-[90px] rounded-full border border-[#183D2B]/10" />

              {/* Intelligence nodes */}
              <div className="absolute left-[48%] top-[25%] h-3 w-3 rounded-full bg-[#183D2B] shadow-[0_0_30px_8px_rgba(24,61,43,0.25)]" />

              <div className="absolute left-[30%] top-[48%] h-2.5 w-2.5 rounded-full bg-[#71815B]" />

              <div className="absolute right-[25%] top-[52%] h-2.5 w-2.5 rounded-full bg-[#71815B]" />

              <div className="absolute left-[48%] bottom-[22%] h-2 w-2 rounded-full bg-[#183D2B]" />

              {/* Connecting lines */}
              <div className="absolute left-[31%] top-[48%] h-px w-[100px] rotate-[-25deg] bg-[#183D2B]/20" />

              <div className="absolute right-[28%] top-[51%] h-px w-[110px] rotate-[20deg] bg-[#183D2B]/20" />

              <div className="absolute bottom-[24%] left-[48%] h-[120px] w-px bg-[#183D2B]/15" />
            </div>

            {/* Vertical labels */}
            <div className="absolute right-[2%] top-[30%] space-y-3 text-[8px] tracking-[0.4em] text-[#71815B]">
              <p>PEOPLE</p>
              <p>LAND</p>
              <p>DATA</p>
              <p>INSIGHTS</p>
              <p>POLICY</p>
              <p>IMPACT</p>
            </div>

            {/* Quote */}
            <div className="absolute bottom-[8%] right-[15%] max-w-[220px]">
              <p className="font-serif text-xl italic leading-6 text-[#36453B]">
                “Evidence today.
                <br />
                A more sustainable
                <br />
                tomorrow.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="min-w-[90px]">
      <div className="font-serif text-2xl text-[#101713]">
        {number}
      </div>

      <div className="mt-1 text-[10px] text-[#7B8178]">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-5 hidden h-9 w-px bg-[#101713]/15 sm:block" />
  );
}
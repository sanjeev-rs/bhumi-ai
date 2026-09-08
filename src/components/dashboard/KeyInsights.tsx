"use client";

import {
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  ShieldAlert,
  FileText,
} from "lucide-react";

const insights = [
  {
    value: "12.4%",
    title: "Agricultural Land Decrease",
    period: "2018 — 2024",
    type: "down",
    change: "−2.1%",
  },
  {
    value: "8.6%",
    title: "Urban Area Increase",
    period: "2018 — 2024",
    type: "up",
    change: "+1.8%",
  },
  {
    value: "27",
    title: "High Climate Risk Districts",
    period: "Across India",
    type: "risk",
    change: "+4 since 2020",
  },
  {
    value: "1,240",
    title: "Research Papers Mapped",
    period: "Land & Environment",
    type: "research",
    change: "+32%",
  },
];

const distribution = [
  { name: "Agriculture", value: 52 },
  { name: "Forest", value: 21 },
  { name: "Urban", value: 12 },
  { name: "Others", value: 15 },
];

export default function KeyInsights() {
  return (
    <section
      id="analytics"
      className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-12"
    >
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#183D2B]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#71815B]">
              India Overview
            </span>
          </div>

          <h2 className="font-serif text-4xl tracking-tight text-[#101713] md:text-5xl">
            Key <span className="italic text-[#183D2B]">Insights.</span>
          </h2>

          <p className="mt-3 text-sm text-[#7B8178]">
            Real data. Meaningful insights.
          </p>
        </div>

        <button className="hidden items-center gap-2 text-xs font-medium text-[#183D2B] md:flex">
          View All
          <ArrowUpRight size={15} />
        </button>
      </div>

      {/* Dashboard */}
      <div className="rounded-[28px] border border-[#101713]/10 bg-white/70 p-5 shadow-sm backdrop-blur-md lg:p-7">
        
        {/* Dashboard controls */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#183D2B] px-4 py-2 text-[10px] font-medium text-white">
              India Overview
            </span>

            <span className="rounded-full border border-[#101713]/10 px-4 py-2 text-[10px] text-[#6F776F]">
              2020 — 2024
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9AA09A]">
            BHUMI DATA INTELLIGENCE
          </span>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {insights.map((item) => (
            <InsightCard key={item.title} {...item} />
          ))}
        </div>

        {/* Charts */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
          <LandUseTrend />

          <LandDistribution distribution={distribution} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* KPI CARD */
/* -------------------------------- */

function InsightCard({
  value,
  title,
  period,
  type,
  change,
}: {
  value: string;
  title: string;
  period: string;
  type: string;
  change: string;
}) {
  const Icon =
    type === "down"
      ? TrendingDown
      : type === "up"
        ? TrendingUp
        : type === "risk"
          ? ShieldAlert
          : FileText;

  return (
    <div className="group rounded-2xl border border-[#101713]/10 bg-[#FBFAF6] p-5 transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-serif text-3xl text-[#101713]">
            {value}
          </p>

          <p className="mt-2 text-xs font-medium leading-5 text-[#39413C]">
            {title}
          </p>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EEE7] text-[#183D2B]">
          <Icon size={15} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-[9px] text-[#9AA09A]">
          {period}
        </span>

        <span
          className={`text-[9px] font-medium ${
            type === "down"
              ? "text-[#71815B]"
              : type === "risk"
                ? "text-[#8A6E35]"
                : "text-[#183D2B]"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* LAND USE TREND */
/* -------------------------------- */

function LandUseTrend() {
  return (
    <div className="rounded-2xl border border-[#101713]/10 bg-[#FBFAF6] p-5">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl text-[#101713]">
            Land Use Trend
          </h3>

          <p className="mt-1 text-[10px] text-[#8A918A]">
            Percentage change across India
          </p>
        </div>

        <button className="rounded-full border border-[#101713]/10 px-3 py-2 text-[9px] text-[#687068]">
          Select Indicator
        </button>
      </div>

      {/* Chart */}
      <div className="relative mt-8 h-[270px] overflow-hidden">
        
        {/* Grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[80, 60, 40, 20, 0].map((value) => (
            <div
              key={value}
              className="flex items-center gap-3"
            >
              <span className="w-7 text-[8px] text-[#A1A69F]">
                {value}%
              </span>

              <div className="h-px flex-1 bg-[#101713]/[0.06]" />
            </div>
          ))}
        </div>

        {/* Chart lines */}
        <svg
          className="absolute left-10 right-0 top-0 h-full w-[calc(100%-40px)]"
          viewBox="0 0 600 250"
          preserveAspectRatio="none"
        >
          {/* Agriculture */}
          <polyline
            points="0,62 100,76 200,88 300,96 400,102 500,108 600,112"
            fill="none"
            stroke="#183D2B"
            strokeWidth="3"
          />

          {/* Urban */}
          <polyline
            points="0,192 100,185 200,177 300,165 400,151 500,138 600,132"
            fill="none"
            stroke="#71815B"
            strokeWidth="3"
          />

          {/* Forest */}
          <polyline
            points="0,218 100,215 200,211 300,208 400,206 500,204 600,202"
            fill="none"
            stroke="#8E9B8B"
            strokeWidth="2"
          />

          {/* Agriculture dots */}
          {[0, 100, 200, 300, 400, 500, 600].map((x, index) => {
            const y = [62, 76, 88, 96, 102, 108, 112][index];

            return (
              <circle
                key={`agri-${x}`}
                cx={x}
                cy={y}
                r="4"
                fill="#183D2B"
              />
            );
          })}

          {/* Urban dots */}
          {[0, 100, 200, 300, 400, 500, 600].map((x, index) => {
            const y = [192, 185, 177, 165, 151, 138, 132][index];

            return (
              <circle
                key={`urban-${x}`}
                cx={x}
                cy={y}
                r="4"
                fill="#71815B"
              />
            );
          })}
        </svg>

        {/* Years */}
        <div className="absolute bottom-0 left-10 right-0 flex justify-between">
          {["2018", "2019", "2020", "2021", "2022", "2023", "2024"].map(
            (year) => (
              <span
                key={year}
                className="text-[8px] text-[#9AA09A]"
              >
                {year}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-5">
        <Legend
          label="Agriculture"
          symbol="bg-[#183D2B]"
        />

        <Legend
          label="Urban"
          symbol="bg-[#71815B]"
        />

        <Legend
          label="Forest"
          symbol="bg-[#8E9B8B]"
        />

        <Legend
          label="Others"
          symbol="bg-[#C1C5BD]"
        />
      </div>
    </div>
  );
}

/* -------------------------------- */
/* LAND DISTRIBUTION */
/* -------------------------------- */

function LandDistribution({
  distribution,
}: {
  distribution: {
    name: string;
    value: number;
  }[];
}) {
  const circumference = 2 * Math.PI * 70;

  let offset = 0;

  const segments = distribution.map((item) => {
    const length = (item.value / 100) * circumference;

    const segment = {
      ...item,
      length,
      offset,
    };

    offset += length;

    return segment;
  });

  return (
    <div className="rounded-2xl border border-[#101713]/10 bg-[#FBFAF6] p-5">
      
      <div>
        <h3 className="font-serif text-xl text-[#101713]">
          Land Distribution
        </h3>

        <p className="mt-1 text-[10px] text-[#8A918A]">
          India — 2024
        </p>
      </div>

      {/* Donut */}
      <div className="relative mx-auto mt-8 h-[190px] w-[190px]">
        <svg
          viewBox="0 0 180 180"
          className="h-full w-full -rotate-90"
        >
          <circle
            cx="90"
            cy="90"
            r="70"
            fill="none"
            stroke="#E5E7E1"
            strokeWidth="18"
          />

          {segments.map((segment, index) => (
            <circle
              key={segment.name}
              cx="90"
              cy="90"
              r="70"
              fill="none"
              stroke={
                index === 0
                  ? "#183D2B"
                  : index === 1
                    ? "#71815B"
                    : index === 2
                      ? "#A08A55"
                      : "#B8BCB4"
              }
              strokeWidth="18"
              strokeDasharray={`${segment.length} ${circumference}`}
              strokeDashoffset={-segment.offset}
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A918A]">
            Total Area
          </span>

          <span className="font-serif text-2xl text-[#101713]">
            3.28M
          </span>

          <span className="text-[9px] text-[#8A918A]">
            sq. km.
          </span>
        </div>
      </div>

      {/* Distribution list */}
      <div className="mt-6 space-y-3">
        {distribution.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  index === 0
                    ? "bg-[#183D2B]"
                    : index === 1
                      ? "bg-[#71815B]"
                      : index === 2
                        ? "bg-[#A08A55]"
                        : "bg-[#B8BCB4]"
                }`}
              />

              <span className="text-[10px] text-[#687068]">
                {item.name}
              </span>
            </div>

            <span className="text-[10px] font-medium text-[#101713]">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* LEGEND */
/* -------------------------------- */

function Legend({
  label,
  symbol,
}: {
  label: string;
  symbol: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${symbol}`} />

      <span className="text-[9px] text-[#7B8178]">
        {label}
      </span>
    </div>
  );
}
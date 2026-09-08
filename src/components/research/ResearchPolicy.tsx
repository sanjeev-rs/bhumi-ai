"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  FlaskConical,
  Landmark,
  MapPinned,
} from "lucide-react";

const researchItems = [
  {
    title: "Impact of Urban Expansion on Agricultural Land",
    location: "Tamil Nadu",
    date: "Sep 12, 2025",
    type: "Research Paper",
    icon: MapPinned,
  },
  {
    title: "Land Governance and Climate Resilience",
    location: "India",
    date: "Sep 10, 2025",
    type: "Research Paper",
    icon: FlaskConical,
  },
  {
    title: "GIS-Based Land Use Change Detection",
    location: "India",
    date: "Sep 08, 2025",
    type: "Case Study",
    icon: MapPinned,
  },
  {
    title: "National Geospatial Policy 2022 — Key Highlights",
    location: "India",
    date: "Sep 05, 2025",
    type: "Policy Document",
    icon: Landmark,
  },
];

const projects = [
  {
    title: "Urban Expansion Analysis",
    location: "Coimbatore",
    progress: 70,
  },
  {
    title: "Climate Risk Mapping",
    location: "Tamil Nadu",
    progress: 50,
  },
  {
    title: "Land Dispute Hotspot Identification",
    location: "India",
    progress: 40,
  },
];

export default function ResearchPolicy() {
  return (
    <section
      id="research"
      className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-12"
    >
      {/* Section heading */}
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#183D2B]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#71815B]">
              Knowledge & Intelligence
            </span>
          </div>

          <h2 className="font-serif text-4xl tracking-tight text-[#101713] md:text-5xl">
            Research{" "}
            <span className="italic text-[#183D2B]">& Policy.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#7B8178]">
            Discover research, policy documents and ongoing work
            shaping India's land and environmental future.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 text-xs font-medium text-[#183D2B]">
          Explore Knowledge Hub
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Main grid */}
      <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        <ResearchCard />

        <ProjectsCard />
      </div>
    </section>
  );
}

/* ================================================= */
/* RESEARCH CARD */
/* ================================================= */

function ResearchCard() {
  return (
    <div className="overflow-hidden rounded-[26px] border border-[#101713]/10 bg-white/70 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#101713]/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E9EEE8] text-[#183D2B]">
            <BookOpen size={17} />
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#101713]">
              Recent Research & Policy
            </h3>

            <p className="mt-0.5 text-[9px] text-[#8B928B]">
              Latest knowledge mapped by BHUMI
            </p>
          </div>
        </div>

        <button className="hidden items-center gap-1 text-[10px] font-medium text-[#183D2B] sm:flex">
          View All
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-[#101713]/10 px-6 pt-4">
        <button className="rounded-t-lg border-b-2 border-[#183D2B] px-3 pb-3 text-[10px] font-medium text-[#183D2B]">
          Research Papers
        </button>

        <button className="px-3 pb-3 text-[10px] text-[#929991]">
          Policy Documents
        </button>

        <button className="hidden px-3 pb-3 text-[10px] text-[#929991] sm:block">
          Case Studies
        </button>
      </div>

      {/* Research list */}
      <div className="divide-y divide-[#101713]/[0.07] px-6">
        {researchItems.map((item) => {
          const Icon = item.icon;

          return (
            <ResearchItem
              key={item.title}
              title={item.title}
              location={item.location}
              date={item.date}
              type={item.type}
              Icon={Icon}
            />
          );
        })}
      </div>

      {/* Bottom */}
      <div className="border-t border-[#101713]/10 px-6 py-4">
        <button className="flex items-center gap-2 text-[10px] font-medium text-[#183D2B]">
          Browse all research
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

/* ================================================= */
/* RESEARCH ITEM */
/* ================================================= */

function ResearchItem({
  title,
  location,
  date,
  type,
  Icon,
}: {
  title: string;
  location: string;
  date: string;
  type: string;
  Icon: typeof FileText;
}) {
  return (
    <button className="group flex w-full items-center gap-4 py-5 text-left transition">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#101713]/10 bg-[#FBFAF6] text-[#5F695F] transition group-hover:border-[#183D2B]/20 group-hover:bg-[#E9EEE8] group-hover:text-[#183D2B]">
        <Icon size={16} strokeWidth={1.6} />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-xs font-medium text-[#29312B] transition group-hover:text-[#183D2B]">
          {title}
        </h4>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[9px] text-[#8B928B]">
            {location}
          </span>

          <span className="h-1 w-1 rounded-full bg-[#B9BDB8]" />

          <span className="text-[9px] text-[#8B928B]">
            {type}
          </span>
        </div>
      </div>

      <span className="hidden shrink-0 text-[9px] text-[#9BA19B] sm:block">
        {date}
      </span>

      <ArrowRight
        size={14}
        className="shrink-0 text-[#A5AAA5] transition group-hover:translate-x-1 group-hover:text-[#183D2B]"
      />
    </button>
  );
}

/* ================================================= */
/* PROJECTS */
/* ================================================= */

function ProjectsCard() {
  return (
    <div className="rounded-[26px] border border-[#101713]/10 bg-[#183D2B] p-6 text-white shadow-sm">
      
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#AEBEAA]">
            Active Intelligence
          </p>

          <h3 className="mt-2 font-serif text-2xl">
            Ongoing Projects
          </h3>

          <p className="mt-2 text-xs leading-5 text-[#B4C0B6]">
            Explore active land intelligence initiatives
            across regions and themes.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <FlaskConical size={18} />
        </div>
      </div>

      {/* Projects */}
      <div className="mt-8 space-y-7">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            location={project.location}
            progress={project.progress}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-white/10 pt-5">
        <button className="flex items-center gap-2 text-[10px] font-medium text-[#D8E1D7] transition hover:text-white">
          View all projects
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

/* ================================================= */
/* PROJECT ITEM */
/* ================================================= */

function ProjectItem({
  title,
  location,
  progress,
}: {
  title: string;
  location: string;
  progress: number;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xs font-medium text-white">
            {title}
          </h4>

          <div className="mt-1 flex items-center gap-1.5 text-[9px] text-[#AAB8AC]">
            <MapPinned size={10} />
            {location}
          </div>
        </div>

        <span className="text-[10px] font-medium text-[#D5DFD4]">
          {progress}%
        </span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#AFC1A8] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
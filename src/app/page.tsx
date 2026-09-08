import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5EF] p-3 sm:p-4">
      <div className="relative overflow-hidden rounded-[28px]">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
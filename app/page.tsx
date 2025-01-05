import Hero from "@/components/main/Hero";
import Features from "@/components/main/Features";
import Testimonials from "@/components/main/Testimonials";
import Stats from "@/components/main/Stats";
import CTA from "@/components/main/CTA";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full">
        <Hero />
        <Skills />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
      </div>
    </main>
  );
}


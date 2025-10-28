import Hero from "@/components/Hero";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AutoSlideshow from "@/components/AutoSlideshow";
import CTASection from "@/components/CTASection";

const slides = [
  {
    src: "/slides/agents.jpg",
    alt: "Agentic workflows",
    title: "From Prompt to Portfolio",
    blurb: "Multi-agent execution that turns strategies into positions.",
    ctaLabel: "Deep dive",
    href: "/blog/from-prompt-to-portfolio",
  },
  {
    src: "/slides/wallets.jpg",
    alt: "Wallet orchestration",
    title: "Wallet Orchestration, Simplified",
    blurb: "Bring your own wallet. Smart routing, safe execution.",
    ctaLabel: "How it works",
    href: "/blog/wallet-orchestration",
  },
  {
    src: "/slides/defi.jpg",
    alt: "DeFi pipeline",
    title: "Stablecoin-First Strategy Engine",
    blurb: "On-chain signals, off-chain intelligence.",
    ctaLabel: "Read the post",
    href: "/blog/stablecoin-first-engine",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HorizontalScrollSection />
        <HowItWorks />
        <Roadmap />
        <CTASection />
        <section className="px-4 sm:px-6 lg:px-12 py-12">
          <div className="mx-auto max-w-[1400px]">
            <AutoSlideshow slides={slides} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

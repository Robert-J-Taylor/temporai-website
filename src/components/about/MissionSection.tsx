import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/about-mission.jpg"
            alt="TemporAI vision representation"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-white/90">
            TemporAI was founded on a simple belief: intelligence should serve
            time, not consume it. We build autonomous agents that collaborate
            like real teams — strategists, analysts, and executors — each
            working in sync to manage attention, capital, and opportunity.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Our mission is to bring foresight and freedom back to decision
            making — through explainable AI systems that act within human-set
            constraints, and in partnership with licensed financial
            institutions. Because the future of finance isn't replacing people
            with algorithms — it's amplifying human agency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

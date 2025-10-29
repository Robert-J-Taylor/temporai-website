import Image from "next/image";
import { motion } from "framer-motion";
import { vision, values } from "../../../content/about";

export default function VisionValuesSection() {
  return (
    <section
      id="vision"
      className="bg-white dark:bg-neutral-900 py-20 px-6 md:px-12 lg:px-20"
      aria-labelledby="vision-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text (left) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="vision-heading"
            className="text-4xl md:text-5xl font-semibold text-[#0B1B2B] dark:text-white"
          >
            Vision & Values
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#1E242B]/80 dark:text-neutral-300">
            {vision}
          </p>

          {/* Values grid */}
          <ul
            role="list"
            className="mt-8 grid gap-4 sm:grid-cols-2"
            aria-label="Core values"
          >
            {values.map((v) => (
              <li key={v.title}>
                <div className="h-full rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-[#0B1B2B] dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#1E242B]/70 dark:text-neutral-400">
                    {v.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image (right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden order-first md:order-last"
        >
          <Image
            src="/about-vision.jpg"
            alt="TemporAI values and collaboration"
            fill
            className="object-cover"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}

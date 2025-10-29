"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MissionSection from "@/components/about/MissionSection";
import VisionValuesSection from "@/components/about/VisionValuesSection";
import {
  team,
  partners,
  type Person,
  type Partner,
} from "../../../content/about";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


// Team Section
function Team() {
  return (
    <section aria-labelledby="team-heading" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] dark:text-white mb-6"
            >
              Human Team
            </h2>
          </motion.div>

          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member: Person, index: number) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="rounded-2xl shadow-sm border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-4">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-[#19B4A8]/10 border-2 border-[#19B4A8]/20 flex items-center justify-center">
                        <span className="text-xl font-semibold text-[#19B4A8]">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
              </div>
                    )}
            </div>

                  <h3 className="text-xl font-semibold text-[#0B1B2B] dark:text-white mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#1E242B]/60 dark:text-neutral-400 mb-3">
                    {member.role}
                  </p>
                  
                  {member.bio && (
                    <p className="text-sm text-[#1E242B]/80 dark:text-neutral-300 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                  
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#19B4A8]/10 hover:bg-[#19B4A8]/20 text-[#19B4A8] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19B4A8]"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
              </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
            </div>
    </section>
  );
}



// Partners Section
function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="py-16 sm:py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="text-sm text-[#1E242B]/60 dark:text-neutral-400 uppercase tracking-wider mb-4">
              Ecosystem we build with
            </p>
            <h2
              id="partners-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] dark:text-white"
            >
              Partners
            </h2>
          </motion.div>

          <ul role="list" className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner: Partner, index: number) => (
              <motion.li key={index} variants={fadeInUp}>
                <Link
                  href={partner.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl shadow-sm border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19B4A8]"
                >
                  <div className="flex items-center justify-center h-10">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded font-mono text-sm font-semibold text-[#1E242B] dark:text-neutral-300">
                        {partner.name.split(' ').map(w => w[0]).join('')}
              </div>
                    )}
            </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        </div>
      </section>
  );
}


// Main About Page Component
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TemporAI",
            url: typeof window !== 'undefined' ? window.location.origin : 'https://temporai.com',
            sameAs: [
              "https://www.linkedin.com/company/temporai",
              "https://twitter.com/temporai"
            ],
            employee: team.map(member => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.role,
              url: member.linkedin
            }))
          })
        }}
      />

      <Navbar />
      <main className="bg-[#F4F6F8] dark:bg-neutral-950 min-h-screen">
        <MissionSection />
        <VisionValuesSection />
        <Team />
        <Partners />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
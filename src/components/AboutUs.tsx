export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            What you get
          </h2>
          <p className="section-description max-w-3xl mx-auto">
            An AI co‑pilot that plans, explains, and executes under guardrails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Conversational planning</h3>
            <p className="text-gray-300">
              Tell us your goal in plain English: "75% liquid / 25% vaults; cap per‑protocol at 25%."
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Co‑pilot execution</h3>
            <p className="text-gray-300">
              Plan → confirm → 1‑click execution. Optional autonomy under explicit caps.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Portfolio‑Level Intents (PLI)</h3>
            <p className="text-gray-300">
              Set portfolio targets and constraints—no per‑swap micromanagement.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Explainability</h3>
            <p className="text-gray-300">
              Clear rationale bullets and alternatives; every step logged and replayable.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Cross-chain</h3>
            <p className="text-gray-300">
              Bridge, swap, and allocate across chains.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Built to expand</h3>
            <p className="text-gray-300">
              Start with stablecoins; extend to RWAs as they mature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

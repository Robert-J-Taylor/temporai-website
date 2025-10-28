export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join the future of DeFi with our AI-powered co-pilot. Experience the power of intelligent portfolio management.
        </p>
        <a
          href="/getstarted"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#6cb3e3] bg-white rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get Started Now
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}


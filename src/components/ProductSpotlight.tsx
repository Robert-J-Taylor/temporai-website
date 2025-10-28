export default function ProductSpotlight() {
  return (
    <section id="product-spotlight" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Product Spotlight
          </h2>
          <p className="section-description max-w-3xl mx-auto">
            Experience the future of DeFi portfolio management with our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                AI-Powered Portfolio Management
              </h3>
              <p className="text-lg text-gray-600">
                Our advanced AI analyzes market conditions, risk factors, and your preferences to create optimal DeFi strategies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Risk Assessment</h4>
                  <p className="text-gray-600">AI evaluates protocol risks and suggests optimal allocation strategies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automated Execution</h4>
                  <p className="text-gray-600">One-click execution of complex DeFi strategies across multiple protocols.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Full Transparency</h4>
                  <p className="text-gray-600">Complete audit trail and explanations for every decision and transaction.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#6cb3e3]/30 hover:scale-105 group">
                <span className="relative z-10">Try Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#b9aad2] to-[#6cb3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-primary-200">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Overview</h4>
                  <p className="text-gray-600">Real-time performance tracking</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-600">Total Value</span>
                    <span className="font-semibold text-gray-900">$125,430</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-600">24h Change</span>
                    <span className="font-semibold text-green-600">+2.4%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-600">APY</span>
                    <span className="font-semibold text-gray-900">12.8%</span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Risk Level: Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

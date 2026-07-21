import React from 'react'

function CPD() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell reveal-on-scroll overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#e8efe8] bg-[linear-gradient(135deg,_#fdfcf8_0%,_#f8f4eb_100%)] p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 opacity-[0.35]" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/%3E%3C/svg%3E")',
              backgroundSize: '140px 140px',
            }} />
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#ffb7b2]/70 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#efedf4] blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-[280px] rounded-[2rem] border border-[#e8efe8] bg-white/80 p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                  <img src="/assets/cpd2.png" alt="CPD accreditation" className="mx-auto h-44 w-auto" />
                  <span className="mt-4 block rounded-full bg-[#292524] px-4 py-2 text-center text-sm font-semibold text-white">
                    14 CPD Hours
                  </span>
                </div>
              </div>

              <div className="space-y-5 text-center lg:text-left">
                <span className="eyebrow">Continuing Professional Development</span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#292524] sm:text-4xl lg:text-[2.5rem]">
                  Grow with intention, not urgency.
                </h2>
                <p className="mx-auto max-w-2xl text-sm leading-7 text-[#78716c] sm:text-base lg:mx-0">
                  Commit to lifelong learning and professional growth through CPD. Enhance your skills, knowledge, and competencies to stay current in your field and maintain professional standards.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <a
                    href="https://www.cpdstandards.com/become-accredited/events-conferences/"
                    className="rounded-full bg-[#292524] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1f1c1a]"
                  >
                    Learn more
                  </a>
                  <a
                    href="/registration"
                    className="rounded-full border border-[#d8d0c7] bg-white/80 px-5 py-3 text-sm font-semibold text-[#292524] transition-colors duration-300 hover:bg-[#efedf4]"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CPD
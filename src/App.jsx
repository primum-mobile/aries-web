export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0c11] text-[#e4e4e7]">
      <header className="sticky top-0 z-30 border-b border-white/6 bg-[#0b0e13]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <span className="text-lg leading-none text-[#f4f4f5]">♈</span>
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#9aa0aa]">Aries</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-[#9aa0aa] transition hover:text-white">Features</a>
            <a href="#screens" className="text-sm text-[#9aa0aa] transition hover:text-white">Screens</a>
            <a href="#pricing" className="text-sm text-[#9aa0aa] transition hover:text-white">Pricing</a>
            <a href="#faq" className="text-sm text-[#9aa0aa] transition hover:text-white">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/primum-mobile/aries"
              className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#d1d5db] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/[0.06] md:inline-flex"
            >
              Source
            </a>
            <a
              href="#pricing"
              className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-[#101217] transition hover:-translate-y-0.5"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(0,255,170,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-wide text-[#b2b7c0] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00ff99]" />
                Modern astrology software for serious practice
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#f4f4f5] md:text-7xl">
                Astrology is the
                <span className="block text-[#888d97]">shell script of the universe.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#a3a8b3] md:text-xl">
                Aries is a fast, keyboard-driven astrology app for practitioners who want precision,
                beautiful charts, and an interface that feels modern instead of inherited.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#101217] transition hover:-translate-y-0.5"
                >
                  Get the Mac build
                </a>
                <a
                  href="https://github.com/primum-mobile/aries"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#d4d4d8] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  Build from source
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['Synastry', 'Drag charts together'],
                  ['Directions', 'Morinus power preserved'],
                  ['Returns', 'Exact stepping workflow'],
                  ['Mac-first', 'Fluid, minimal UI'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                    <div className="text-sm font-medium text-[#f4f4f5]">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-[#8f95a0]">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/8 bg-[#14181f] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                <img
                  src="/screens/hero-radix.png"
                  alt="Aries — ARPANET radix chart"
                  className="block w-full rounded-[1.6rem] border border-white/8"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-10">
          <div className="rounded-[2rem] border border-[#b88b4a]/20 bg-[linear-gradient(180deg,rgba(184,139,74,0.12),rgba(184,139,74,0.04))] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#b88b4a]/25 bg-black/20">
                <img
                  src="/screens/observatory.jpg"
                  alt="Ottoman observatory — historical astronomical instruments"
                  className="block h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[#c5a36d]">Inheritance</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5] md:text-4xl">Built with modern software taste and the memory of older astronomical craft.</h2>
                <p className="mt-4 text-sm leading-8 text-[#b7bcc6] md:text-base">
                  Aries does not aestheticize astrology as vague mysticism. The visual language is darker, quieter, more technical — closer to an instrument panel than a lifestyle brand — while still carrying a sense of historical depth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Why Aries</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5] md:text-5xl">Built for working astrologers, not software archaeologists.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Fast by design',
                body: 'A fluid sidebar workflow, keyboard-first navigation, and time-stepping that feels immediate instead of bureaucratic.',
              },
              {
                title: 'Morinus depth, modern shell',
                body: 'Primary directions, circumambulations, returns, synastry, composites, and advanced forecasting techniques remain intact.',
              },
              {
                title: 'Charts with restraint',
                body: 'A scientific visual language, subtle contrast, dignity color systems, and layouts designed to stay readable under pressure.',
              },
              {
                title: 'Open source core',
                body: 'Buy the ready-to-use Mac app, or compile it yourself from source if that is your preferred path.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-lg font-medium text-[#f4f4f5]">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="screens" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-16">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/8 bg-[#151922] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Screen</div>
                  <div className="mt-1 text-2xl font-medium text-[#f4f4f5]">Chart workspace</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#b7bcc6] shadow-sm">Designed for focus</div>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#10141a]">
                <img
                  src="/screens/classic-radix.jpg"
                  alt="Aries — classic Morinus radix with Placidus houses"
                  className="block w-full"
                />
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Workflow</div>
                <div className="mt-2 text-2xl font-medium text-[#f4f4f5]">Everything important is close at hand.</div>
                <div className="mt-6 space-y-4">
                  {[
                    'Drag one chart over another to create synastry.',
                    'Convert comparisons into composite or Davison in one move.',
                    'Step time with the keyboard and jump exact returns quickly.',
                    'Open transits or derived charts as their own working objects.',
                  ].map((line) => (
                    <div key={line} className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00ff99]" />
                      <p className="text-sm leading-7 text-[#a3a8b3]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#0f1319_0%,#0a0d12_100%)] p-6 text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-white/40">Positioning</div>
                <div className="mt-2 text-2xl font-medium">A traditionalist power tool with modern taste.</div>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Aries is for astrologers who care about forecasting depth, technical credibility, and software that does not look like a relic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Distribution</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5]">Open source, but not obligated to make your life difficult.</h3>
              <p className="mt-4 text-sm leading-7 text-[#9aa0aa]">
                Buy the finished build for convenience. Or compile Aries yourself from source. Same core, different threshold.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#f4f4f5_0%,#d6d7db_100%)] p-8 text-[#101217] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-black/40">For practitioners</div>
                <div className="mt-4 text-4xl font-semibold tracking-[-0.05em]">€79</div>
                <div className="mt-2 text-black/60">Mac app build</div>
                <div className="mt-6 space-y-3 text-sm text-black/75">
                  <div>Ready-to-use desktop build</div>
                  <div>Fast updates</div>
                  <div>Designed distribution experience</div>
                  <div>No compiling required</div>
                </div>
                <a href="#" className="mt-8 inline-flex rounded-full bg-[#101217] px-5 py-3 text-sm font-medium text-white">Buy Aries</a>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-[#151922] p-8 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">For developers</div>
                <div className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#f4f4f5]">Free</div>
                <div className="mt-2 text-[#9aa0aa]">Source on GitHub</div>
                <div className="mt-6 space-y-3 text-sm text-[#9aa0aa]">
                  <div>Compile it yourself</div>
                  <div>Inspect the code</div>
                  <div>Track issues and development</div>
                  <div>Contribute if useful</div>
                </div>
                <a href="https://github.com/primum-mobile/aries" className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-[#f4f4f5] shadow-sm">View source</a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">FAQ</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5] md:text-5xl">A few direct answers.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Is Aries open source?', 'Yes. The source is public. The paid build is a convenience distribution for people who want the finished app without compiling.'],
              ['Who is it for?', 'Practicing astrologers, especially users who care about traditional techniques, forecasting depth, and a more refined interface.'],
              ['Why not just use the repo?', 'Most users do not want a code repository as their storefront. The site is for buying and understanding the app. The repo is for developers.'],
              ['What platforms are supported?', 'This page is currently positioned around the Mac build. You can adjust platform language later once releases expand.'],
            ].map(([q, a]) => (
              <div key={q} className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-lg font-medium text-[#f4f4f5]">{q}</div>
                <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#8f95a0] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>Aries — modern astrology software for serious practice.</div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Download</a>
            <a href="https://github.com/primum-mobile/aries" className="hover:text-white">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

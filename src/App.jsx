const REPO = "https://github.com/primum-mobile/aries";

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
              <div className="text-[11px] text-[#6f7782]">Morinus 10.x</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#lineage" className="text-sm text-[#9aa0aa] transition hover:text-white">Lineage</a>
            <a href="#features" className="text-sm text-[#9aa0aa] transition hover:text-white">Features</a>
            <a href="#keyboard" className="text-sm text-[#9aa0aa] transition hover:text-white">Keyboard</a>
            <a href="#download" className="text-sm text-[#9aa0aa] transition hover:text-white">Download</a>
            <a href="#faq" className="text-sm text-[#9aa0aa] transition hover:text-white">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={REPO}
              className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#d1d5db] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/[0.06] md:inline-flex"
            >
              Source
            </a>
            <a
              href="#download"
              className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-[#101217] transition hover:-translate-y-0.5"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(0,255,170,0.06),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-wide text-[#b2b7c0] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00ff99]" />
                Morinus 10.x — release name <span className="text-white">Aries</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#f4f4f5] md:text-6xl">
                Traditional astrology software,
                <span className="block text-[#888d97]">rebuilt on Python 3.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#a3a8b3]">
                Aries is the 10.x release of Morinus — the open-source astrology program first written by
                Robert Nagy and continued by a chain of contributors since. This version migrates the codebase
                from Python 2 to Python 3, modernizes the GUI, and adds a keyboard-driven interaction model
                for exploratory work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#101217] transition hover:-translate-y-0.5"
                >
                  Download for macOS
                </a>
                <a
                  href={REPO}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#d4d4d8] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  Build from source
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['Python 3', 'Migrated from Py2'],
                  ['Swiss Ephemeris', 'High-precision engine'],
                  ['Keyboard-driven', 'Time stepping with arrow keys'],
                  ['GPL v3', 'Free and open source'],
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
                  alt="Aries — radix chart with sidebar navigation"
                  className="block w-full rounded-[1.6rem] border border-white/8"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="lineage" className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-10">
          <div className="rounded-[2rem] border border-[#b88b4a]/20 bg-[linear-gradient(180deg,rgba(184,139,74,0.12),rgba(184,139,74,0.04))] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#b88b4a]/25 bg-black/20">
                <img
                  src="/screens/observatory.jpg"
                  alt="Astronomers at the Istanbul observatory of Taqi al-Din, 16th century"
                  className="block h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[#c5a36d]">Lineage</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5] md:text-4xl">A continuation, not a rewrite from scratch.</h2>
                <p className="mt-4 text-sm leading-8 text-[#b7bcc6] md:text-base">
                  Morinus has passed through several hands since Robert Nagy wrote the first versions.
                  Aries is the 10.x release in that sequence — modernizing the software without discarding
                  the techniques and calculations its earlier authors built up.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#b7bcc6]">
                  <li><span className="font-medium text-[#f4f4f5]">Robert Nagy</span> — original author, up to 6.x</li>
                  <li><span className="font-medium text-[#f4f4f5]">Roberto Luporini</span> — 7.x (2013)</li>
                  <li><span className="font-medium text-[#f4f4f5]">Elías D. Molins</span> — 8.x (2013)</li>
                  <li><span className="font-medium text-[#f4f4f5]">Shin Ji-Hyeon / James Ren</span> — 9.x (2025)</li>
                  <li><span className="font-medium text-[#f4f4f5]">Max Lange</span> — 10.x, <em>Aries</em> (2026–)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">What's in this release</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5] md:text-5xl">Python 3 base, modern GUI, same astrology.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Python 3 migration',
                body: 'The full codebase has been moved off Python 2. Calculation correctness and technique coverage are preserved from previous versions.',
              },
              {
                title: 'Sidebar workspace',
                body: 'Navigation is unified into a single sidebar across chart types, tables, and time-lord views. No more nested menus to hunt through.',
              },
              {
                title: 'Keyboard time stepping',
                body: 'Arrow keys step time on almost every chart. Modifier keys change the step size. Shift + ↑/↓ jumps through moon phases on transit charts.',
              },
              {
                title: 'Secondary ring modes',
                body: 'Cmd + G cycles the secondary ring between Dodecatemoria, Arabic Parts, Fixed Stars, and Antiscia without leaving the chart.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-lg font-medium text-[#f4f4f5]">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Charts</div>
              <div className="mt-3 text-lg font-medium text-[#f4f4f5]">Natal, transits, revolutions, synastry, mundane.</div>
              <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">
                Natal and progressed charts, Solar and Lunar Revolutions, Synastry, and Mundane charts.
                Transit Search is available as a separate engine (shortcut <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-[#e4e4e7]">S</kbd>).
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Techniques</div>
              <div className="mt-3 text-lg font-medium text-[#f4f4f5]">The traditional set, intact.</div>
              <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">
                Profections (including Continuous Profections), Firdaria, Decennials, Zodiacal Releasing,
                Circumambulations, Directions, Time Lords. Fixed stars, Arabic Parts, Antiscia, Dodecatemoria
                as extended objects.
              </p>
            </div>
          </div>
        </section>

        <section id="keyboard" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-16">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/8 bg-[#151922] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Screen</div>
                  <div className="mt-1 text-2xl font-medium text-[#f4f4f5]">Classic Morinus chart</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#b7bcc6] shadow-sm">Placidus houses</div>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#10141a]">
                <img
                  src="/screens/classic-radix.jpg"
                  alt="Aries — Morinus chart view with Placidus houses and dashed aspect lines"
                  className="block w-full"
                />
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Keyboard</div>
                <div className="mt-2 text-2xl font-medium text-[#f4f4f5]">Time is a first-class input.</div>
                <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">
                  A lot of traditional astrology involves asking "what did this look like slightly earlier or
                  later?" Aries treats that as a keyboard gesture rather than a dialog.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {[
                    ['←  →', 'Step time back / forward'],
                    ['Shift + ← →', 'Alternate step size'],
                    ['Shift + ↑ ↓', 'Jump moon phases (transits)'],
                    ['R', 'Solar Revolution'],
                    ['L', 'Lunar Revolution'],
                    ['S', 'Transit Search'],
                    ['Cmd + G', 'Cycle secondary ring mode'],
                  ].map(([keys, text]) => (
                    <div key={keys} className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                      <kbd className="font-mono text-xs tracking-wide text-[#e4e4e7]">{keys}</kbd>
                      <span className="text-right text-[#9aa0aa]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#0f1319_0%,#0a0d12_100%)] p-6 text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-white/40">UX model</div>
                <div className="mt-2 text-lg font-medium">Charts are objects you move through, not static prints.</div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  The intended workflow is continuous: step forward, inspect a transition, drop into a Solar
                  Revolution, come back, check a Continuous Profection. Everything stays on the keyboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Distribution</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5]">Open source. Sold as a convenience build for Mac.</h3>
              <p className="mt-4 text-sm leading-7 text-[#9aa0aa]">
                Morinus is GPL v3. The full source is on GitHub — you can clone it and compile Aries yourself
                at no cost. The paid Mac build exists for practitioners who would rather not deal with a
                Python toolchain, Swiss Ephemeris compilation, and app bundling.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">
                Same software, same license. Different threshold.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#f4f4f5_0%,#d6d7db_100%)] p-8 text-[#101217] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-black/40">For practitioners</div>
                <div className="mt-4 text-4xl font-semibold tracking-[-0.05em]">€79</div>
                <div className="mt-2 text-black/60">Morinus.app for macOS</div>
                <div className="mt-6 space-y-3 text-sm text-black/75">
                  <div>Ready-to-run Apple silicon build</div>
                  <div>Swiss Ephemeris bundled</div>
                  <div>No Python toolchain required</div>
                  <div>Update notifications on new releases</div>
                </div>
                <a href="#" className="mt-8 inline-flex rounded-full bg-[#101217] px-5 py-3 text-sm font-medium text-white">Buy Aries</a>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-[#151922] p-8 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">For developers</div>
                <div className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#f4f4f5]">Free</div>
                <div className="mt-2 text-[#9aa0aa]">Source on GitHub, GPL v3</div>
                <div className="mt-6 space-y-3 text-sm text-[#9aa0aa]">
                  <div>Clone, compile, modify</div>
                  <div>Track issues and development</div>
                  <div>Contribute packaging or fixes</div>
                  <div>Linux &amp; Windows build from here</div>
                </div>
                <a href={REPO} className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-[#f4f4f5] shadow-sm">View source</a>
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
              [
                'Is this a new program?',
                'No. It is the 10.x release of Morinus, the same open-source program Robert Nagy originally wrote and several maintainers have continued since. Aries is the codename for this release, similar to how past versions had their own identity.',
              ],
              [
                'What is actually new versus Morinus 9.x?',
                'The Python 2 → 3 migration, a rewritten GUI with sidebar navigation, continuous keyboard-driven time stepping, secondary ring modes for Fixed Stars / Arabic Parts / Antiscia / Dodecatemoria, and lunation-phase navigation on transit charts.',
              ],
              [
                'What platforms are supported?',
                'macOS has a tested application bundle. Linux and Windows should build from source — the code is cross-platform Python + wxPython — but packaged installers for those systems are not ready yet.',
              ],
              [
                'Is it really free?',
                'Yes. Morinus has always been GPL v3. Source is on GitHub, and anyone can inspect, build, modify, or redistribute it under the license.',
              ],
              [
                'How do I report a bug or ask for a feature?',
                'Open an issue on the GitHub repository. Pull requests are also welcome, especially for Windows/Linux packaging, UI refinement, and restoring or extending traditional techniques.',
              ],
              [
                'Why is the design so dark and restrained?',
                'The program is an instrument. Loud color and decorative imagery would get in the way of reading charts. The visual language is closer to a scientific tool than to lifestyle-branded astrology.',
              ],
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
          <div>
            Morinus — GPL v3. Continued by Max Lange (10.x, <em>Aries</em>).
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#keyboard" className="hover:text-white">Keyboard</a>
            <a href="#download" className="hover:text-white">Download</a>
            <a href={REPO} className="hover:text-white">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

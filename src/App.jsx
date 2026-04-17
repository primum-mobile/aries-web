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
                Morinus 10.x — codename <span className="text-white">Aries</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#f4f4f5] md:text-6xl">
                The full traditional toolkit,
                <span className="block text-[#888d97]">in a single program.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#a3a8b3]">
                Natal, transits, revolutions, synastry, and mundane charts. Primary Directions, Continuous
                Profections, Firdaria, Decennials, Zodiacal Releasing, Circumambulations, Time Lords. Fixed
                stars, Arabic Parts, Antiscia, Dodecatemoria. All in one keyboard-driven workspace, running
                on Swiss Ephemeris.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#101217] transition hover:-translate-y-0.5"
                >
                  Get Aries for Mac
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#d4d4d8] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  See what's inside
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['Primary Directions', 'Speculum & keys'],
                  ['Zodiacal Releasing', 'Hellenistic timing'],
                  ['Continuous Profections', 'Year-lord stepping'],
                  ['Transit Search', 'Exact aspect finder'],
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
            <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">What's inside</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5] md:text-5xl">Every technique a traditional astrologer actually uses.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Charts</div>
              <div className="mt-3 text-lg font-medium text-[#f4f4f5]">From radix to mundane, eclipses included.</div>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#a3a8b3]">
                <li>Natal</li>
                <li>Transits</li>
                <li>Solar Revolutions</li>
                <li>Lunar Revolutions</li>
                <li>Secondary Progressions</li>
                <li>Minor &amp; Tertiary Progressions</li>
                <li>Synastry</li>
                <li>Composites &amp; Davison</li>
                <li>Mundane charts</li>
                <li>Eclipses &amp; ingresses</li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Time lords &amp; forecasting</div>
              <div className="mt-3 text-lg font-medium text-[#f4f4f5]">The predictive toolkit, not a subset of it.</div>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#a3a8b3]">
                <li>Profections</li>
                <li>Continuous Profections</li>
                <li>Firdaria</li>
                <li>Decennials</li>
                <li>Zodiacal Releasing</li>
                <li>Circumambulations</li>
                <li>Primary Directions</li>
                <li>Solar Arc</li>
                <li>Transit Search engine</li>
                <li>Angle-at-birth returns</li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Extended objects</div>
              <div className="mt-3 text-lg font-medium text-[#f4f4f5]">Stackable on the secondary ring.</div>
              <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">
                Fixed Stars (with aspects and parallels), Arabic Parts, Antiscia, and Dodecatemoria — each
                available as a secondary ring overlay, switchable with <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-[#e4e4e7]">Cmd + G</kbd> without leaving the chart.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Tables &amp; analysis</div>
              <div className="mt-3 text-lg font-medium text-[#f4f4f5]">Every number you'd otherwise compute by hand.</div>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#a3a8b3]">
                <li>Essential dignities</li>
                <li>Almuten zodiacal &amp; chart</li>
                <li>Midpoints</li>
                <li>Rise / set times</li>
                <li>Planetary speeds</li>
                <li>Mundane positions</li>
                <li>Antiscia tables</li>
                <li>Fixed star parallels</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-5 text-sm leading-7 text-[#9aa0aa]">
            Under the hood: Swiss Ephemeris for positions, all the standard house systems (Placidus, Regiomontanus,
            Alcabitius, Porphyry, Campanus, Equal, Whole Sign, …), traditional and modern rulerships selectable
            per workspace, and chart storage compatible with prior Morinus releases.
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
              <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Support the project</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f4f4f5]">Morinus is free. The Mac build keeps it going.</h3>
              <p className="mt-4 text-sm leading-7 text-[#9aa0aa]">
                The source is GPL v3 and always will be — clone it from GitHub and it's yours. There is no
                paywalled fork, no closed-source version, no feature gate.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#9aa0aa]">
                Buying the Mac build funds the work this release takes: the Python 3 port, the new interface,
                signed and notarized app bundles, bug fixing, and the techniques still being added. If you're
                using Aries in practice, buying it is the most direct way to keep development moving.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#f4f4f5_0%,#d6d7db_100%)] p-8 text-[#101217] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-black/40">Supporter build</div>
                <div className="mt-4 text-4xl font-semibold tracking-[-0.05em]">€79</div>
                <div className="mt-2 text-black/60">Morinus.app — macOS, signed</div>
                <div className="mt-6 space-y-3 text-sm text-black/75">
                  <div>Ready-to-run Apple silicon build</div>
                  <div>Swiss Ephemeris bundled, no compiling</div>
                  <div>Update notifications on new releases</div>
                  <div>Directly funds ongoing development</div>
                </div>
                <a href="#" className="mt-8 inline-flex rounded-full bg-[#101217] px-5 py-3 text-sm font-medium text-white">Buy Aries</a>
              </div>

              <div className="rounded-[2rem] border border-white/8 bg-[#151922] p-8 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <div className="text-sm uppercase tracking-[0.22em] text-[#6f7782]">Source</div>
                <div className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#f4f4f5]">Free</div>
                <div className="mt-2 text-[#9aa0aa]">GitHub, GPL v3</div>
                <div className="mt-6 space-y-3 text-sm text-[#9aa0aa]">
                  <div>Clone, compile, modify</div>
                  <div>Linux &amp; Windows build from here</div>
                  <div>Track issues and development</div>
                  <div>Contribute fixes and techniques</div>
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
                'No. It is the 10.x release of Morinus, the same open-source program Robert Nagy originally wrote and several maintainers have continued since. Aries is the codename for this release.',
              ],
              [
                "What's new versus older Morinus releases?",
                'A rewritten sidebar-based interface, continuous keyboard time stepping across most chart types, Continuous Profections, lunation-phase navigation on transit charts, and switchable secondary ring modes for Fixed Stars, Arabic Parts, Antiscia, and Dodecatemoria.',
              ],
              [
                'Does it do Primary Directions?',
                'Yes. Primary Directions are a first-class chart type with their own speculum and key options. Solar Arc is also available. Circumambulations are computed separately.',
              ],
              [
                'Which house systems are supported?',
                'Placidus, Regiomontanus, Alcabitius, Porphyry, Campanus, Equal, Whole Sign, and the other standard options. Rulership schemes (traditional vs. modern) are a per-workspace setting.',
              ],
              [
                'What about fixed stars, Arabic Parts, Antiscia?',
                'All included. Fixed stars come with their own aspect and parallel tables. Arabic Parts can be computed from any formula. Antiscia and Dodecatemoria can be overlaid on the chart as ring modes.',
              ],
              [
                'What platforms are supported?',
                'A signed macOS application bundle is the primary release target. The source is cross-platform Python + wxPython, so Linux and Windows builds are expected from source — packaged installers for those systems are not ready yet.',
              ],
              [
                'What does buying it get me?',
                'A maintained, signed Mac app with automatic update notifications, without dealing with a Python toolchain. More importantly, it funds the ongoing work — the features list keeps growing because people pay for this build.',
              ],
              [
                'Where do I file bugs or request techniques?',
                'On the GitHub repository. Pull requests are welcome, particularly for Linux/Windows packaging and for restoring or extending traditional techniques.',
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

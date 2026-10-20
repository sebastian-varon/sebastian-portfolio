import { ArrowUpRight } from "lucide-react"
import SculptureHero from "@/components/ui/liquid-sculpture-hero"
import { CopyEmail } from "@/components/site/copy-email"
import { FloatingNav } from "@/components/site/floating-nav"
import { ProjectCard } from "@/components/site/project-card"
import { Reveal } from "@/components/site/reveal"
import { about, hero, nav, profile, projects, stack, timeline } from "@/lib/content"

const sans = "var(--font-geist-sans), 'Helvetica Neue', Arial, sans-serif"
const serif = "var(--font-instrument-serif), 'Times New Roman', serif"

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
      <span className="text-accent">{index}</span>
      <span aria-hidden="true" className="h-px w-7 bg-current opacity-60" />
      {children}
    </p>
  )
}

export default function Home() {
  const marquee = stack.flatMap((g) => g.items)

  return (
    <>
      <FloatingNav />

      <main id="top">
        <SculptureHero
          theme="dark"
          themeToggle={false}
          loadFonts={false}
          headingFont={sans}
          bodyFont={sans}
          accentFont={serif}
          darkBackground="#111110"
          accentColor="#8CFFB8"
          src="/sculpture/sculpture-wide.webp"
          darkSrc="/sculpture/sculpture-wide.webp"
          mobileSrc="/sculpture/sculpture-tall.webp"
          mobileDarkSrc="/sculpture/sculpture-tall.webp"
          imageAlt="A twisting bundle of silver and green filaments that liquefies under the cursor"
          brand={profile.name}
          navLinks={nav}
          navCta={{ label: "Let’s talk", href: `mailto:${profile.email}` }}
          eyebrow={hero.eyebrow}
          headline={hero.headline}
          headlineAccent={hero.headlineAccent}
          body={hero.body}
          primaryCta={{ label: "See my work", href: "#work" }}
          secondaryCta={{ label: "Get in touch", href: "#contact" }}
          hint={hero.hint}
          hintTouch={hero.hintTouch}
          backdropText="varon"
          intro
          ambient
          ambientIntensity={0.6}
        />

        {/* Work */}
        <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index="01">Selected work</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-6xl">
                Things I’ve <span className="font-serif font-normal text-accent italic">conjured</span> into existence.
              </h2>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Everything on GitHub
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>

          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-5">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : undefined}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-y border-border bg-muted/40">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-12">
            <Reveal>
              <SectionLabel index="02">About</SectionLabel>
              <p className="mt-6 text-3xl leading-[1.12] font-medium tracking-[-0.035em] sm:text-[2.6rem]">{about.lead}</p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-6 text-[17px] leading-relaxed text-muted-foreground lg:pt-12">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <blockquote className="mt-4 border-l border-accent pl-5 font-serif text-3xl text-foreground italic sm:text-4xl">
                “{about.quote}”
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="scroll-mt-24 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionLabel index="03">Stack</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-6xl">
              Tools of the <span className="font-serif font-normal text-accent italic">craft</span>.
            </h2>
          </Reveal>

          <div
            aria-hidden="true"
            className="marquee mt-14 flex overflow-hidden border-y border-border py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
          >
            {[0, 1].map((k) => (
              <ul key={k} className="marquee-track flex shrink-0 items-center gap-10 pr-10">
                {marquee.map((s) => (
                  <li key={s} className="flex items-center gap-10 text-2xl font-medium tracking-tight whitespace-nowrap text-foreground/80 sm:text-3xl">
                    {s}
                    <span className="size-1.5 rounded-full bg-accent/70" />
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-x-8 gap-y-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-12">
            {stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <h3 className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{g.group}</h3>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
          <Reveal>
            <SectionLabel index="04">Journey</SectionLabel>
          </Reveal>
          <ol className="mt-10 border-t border-border">
            {timeline.map((t, i) => (
              <Reveal
                as="li"
                key={t.title}
                delay={i * 0.06}
                className="grid gap-2 border-b border-border py-8 sm:grid-cols-[140px_1fr_1.2fr] sm:gap-8"
              >
                <span className="font-mono text-sm text-accent">{t.when}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{t.detail}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
          />
          <Reveal className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
            <SectionLabel index="05">Contact</SectionLabel>
            <h2 className="mt-6 max-w-5xl text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Let’s build something <span className="font-serif font-normal text-accent italic">extraordinary</span>.
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              I’m looking for full-stack and iOS roles. If you’re hiring, or have an idea worth building, my inbox is open.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-px"
              >
                {profile.email}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <CopyEmail email={profile.email} />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:border-foreground/40"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <span>© {profile.name}</span>
          <span>Built with Next.js, React and about 100,000 particles.</span>
        </div>
      </footer>
    </>
  )
}

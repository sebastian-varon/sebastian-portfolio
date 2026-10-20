import SculptureHero from "@/components/ui/liquid-sculpture-hero"
import { CopyEmail } from "@/components/site/copy-email"
import { Fragment } from "@/components/site/fragments"
import { Reveal } from "@/components/site/reveal"
import { SiteHeader } from "@/components/site/site-header"
import { WorkLedger } from "@/components/site/work-ledger"
import { hero, letter, nav, profile, projects, stack } from "@/lib/content"

const sans = "var(--font-geist-sans), 'Helvetica Neue', Arial, sans-serif"
const serif = "var(--font-instrument-serif), 'Times New Roman', serif"

const frame = "mx-auto max-w-[1440px] px-[var(--margin)]"
const textColumn = "col-span-12 lg:col-span-5 lg:col-start-3"

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <SculptureHero
          theme="dark"
          themeToggle={false}
          loadFonts={false}
          headingFont={sans}
          bodyFont={sans}
          accentFont={serif}
          darkBackground="#111110"
          textColor="#EDEDEB"
          src="/sculpture/sculpture-wide.webp"
          darkSrc="/sculpture/sculpture-wide.webp"
          mobileSrc="/sculpture/sculpture-tall.webp"
          mobileDarkSrc="/sculpture/sculpture-tall.webp"
          imageAlt="A twisting bundle of silver and green filaments that liquefies under the cursor"
          brand={profile.name}
          navLinks={nav}
          navCta={{ label: "Email me", href: `mailto:${profile.email}` }}
          eyebrow=""
          headline={hero.headline}
          headlineAccent=""
          body={hero.body}
          primaryCta={{ label: "See my work", href: "#work" }}
          secondaryCta={{ label: "Get in touch", href: "#contact" }}
          hint=""
          hintTouch=""
          backdropText=""
          intro
          ambient
          ambientIntensity={0.6}
        />

        {/* Work: a ledger of every project, then each one with a working piece of it. */}
        <section id="work" aria-labelledby="work-title" className={`${frame} scroll-mt-20 pt-32 pb-12`}>
          <div className="grid grid-cols-12 gap-x-6">
            <div className={textColumn}>
              <Reveal as="h2" className="text-heading leading-tight font-medium tracking-[-0.03em]">
                <span id="work-title">Work</span>
              </Reveal>
              <Reveal as="p" delay={0.08} className="mt-4 text-lead text-ink">
                Five apps, from a capstone staffing platform to an iOS to-do list. Each one has a small working piece of
                it further down.
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.16} className="mt-10">
            <WorkLedger projects={projects} initial="flooring" />
          </Reveal>
        </section>

        <div className={frame}>
          {projects.map((p) => (
            <article
              key={p.id}
              id={p.id}
              aria-labelledby={`${p.id}-title`}
              className="grid scroll-mt-24 grid-cols-12 items-center gap-x-6 gap-y-10 py-16 lg:py-20"
            >
              <div className={textColumn}>
                <Reveal as="h3" className="text-heading leading-tight font-medium tracking-[-0.03em]">
                  <span id={`${p.id}-title`}>{p.title}</span>
                </Reveal>
                <Reveal as="p" delay={0.07} className="mt-1 text-small text-muted">
                  {p.kind} · {p.stack}
                </Reveal>
                <Reveal as="p" delay={0.14} className="mt-6 text-body text-ink">
                  {p.summary}
                </Reveal>
                <Reveal as="p" delay={0.21} className="mt-4 text-body text-ink">
                  {p.detail}
                </Reveal>
                {p.link && (
                  <Reveal delay={0.28} className="mt-6">
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-ink underline decoration-muted transition-colors hover:decoration-accent"
                    >
                      {p.link.label}
                      <span className="sr-only"> for {p.title} (opens in a new tab)</span>
                    </a>
                  </Reveal>
                )}
              </div>
              <Reveal manner="settle" delay={0.12} className="col-span-12 lg:col-span-4 lg:col-start-9">
                <Fragment id={p.id} />
              </Reveal>
            </article>
          ))}
        </div>

        {/* About: a short letter. */}
        <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-surface py-32">
          <div className="mx-auto max-w-[520px] px-6">
            <Reveal as="h2" className="text-heading leading-tight font-medium tracking-[-0.03em]">
              <span id="about-title">A note from me</span>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6 text-body text-ink">
              {letter.paragraphs.map((para, i) => (
                <Reveal as="p" key={i} delay={0.08 * (i + 1)}>
                  {para}
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.45} className="mt-10">
              <p className="font-serif text-heading leading-none italic">{letter.signOff}</p>
              <p className="mt-2 text-small text-muted">{profile.role}</p>
            </Reveal>
          </div>
        </section>

        {/* Stack: two-ended rows, the tool on the left and where I used it on the right. */}
        <section id="stack" aria-labelledby="stack-title" className={`${frame} scroll-mt-20 py-32`}>
          <div className="grid grid-cols-12 gap-x-6">
            <div className={textColumn}>
              <Reveal as="h2" className="text-heading leading-tight font-medium tracking-[-0.03em]">
                <span id="stack-title">What I work with</span>
              </Reveal>
              <Reveal as="p" delay={0.08} className="mt-4 text-lead text-ink">
                The tools, and the project each one shipped in.
              </Reveal>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
            {[stack.slice(0, 3), stack.slice(3)].map((half, h) => (
              <div
                key={h}
                className={`col-span-12 flex flex-col gap-10 ${h === 0 ? "lg:col-span-5 lg:col-start-3" : "lg:col-span-4 lg:col-start-9"}`}
              >
                {half.map((g) => (
                  <div key={g.group}>
                    <h3 className="text-small text-muted">{g.group}</h3>
                    <ul className="mt-2">
                      {g.rows.map((r, i) => (
                        <Reveal
                          as="li"
                          key={r.name}
                          delay={0.06 * i}
                          className="flex min-h-11 items-baseline justify-between gap-6 py-1.5"
                        >
                          <span className="flex items-baseline gap-2 text-body text-ink">
                            <span aria-hidden="true" className="size-2 shrink-0 translate-y-[-2px] rounded-full bg-muted" />
                            {r.name}
                          </span>
                          {r.where && <span className="shrink-0 text-right text-small text-muted">{r.where}</span>}
                        </Reveal>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-surface py-32">
          <div className={`${frame} grid grid-cols-12 items-center gap-x-6 gap-y-10`}>
            <Reveal as="p" className="col-span-12 text-statement leading-[1.15] font-medium tracking-[-0.02em] lg:col-span-6">
              If you’re hiring a full-stack or iOS developer, or have something worth building, write to me.
            </Reveal>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <Reveal as="h2" delay={0.08} className="text-lead font-medium">
                <span id="contact-title">Say hello</span>
              </Reveal>
              <Reveal delay={0.16} className="mt-5 flex flex-col items-start gap-3 text-lead">
                <a href={`mailto:${profile.email}`} className="text-ink underline decoration-accent">
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-muted transition-colors hover:decoration-accent"
                >
                  github.com/sebastian-varon
                </a>
              </Reveal>
              <Reveal delay={0.24} className="mt-6">
                <CopyEmail email={profile.email} />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${frame} grid grid-cols-1 gap-2 pt-10 pb-8 text-small text-muted sm:grid-cols-[1fr_auto_1fr] sm:items-baseline`}>
        <span>{profile.name}, full-stack & iOS developer</span>
        <span className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink no-underline hover:underline">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="text-ink no-underline hover:underline">
            Email
          </a>
        </span>
        <a
          href={profile.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink no-underline hover:underline sm:justify-self-end"
        >
          Source for this site
        </a>
      </footer>
    </>
  )
}

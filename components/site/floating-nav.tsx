"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"
import { nav, profile } from "@/lib/content"

/** A pill nav that slides in once the hero (and its own nav) has scrolled away. */
export function FloatingNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => el !== null)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`)
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Sections"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, x: "-50%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 left-1/2 z-50 flex max-w-[calc(100vw-32px)] items-center gap-1 rounded-full border border-border bg-background/70 p-1.5 shadow-[0_8px_40px_rgb(0_0_0/0.45)] backdrop-blur-xl"
        >
          <a
            href="#top"
            className="hidden px-3 text-sm font-semibold tracking-tight sm:block"
            aria-label={`${profile.name}, back to top`}
          >
            SV
          </a>
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={active === n.href ? "true" : undefined}
              className="relative rounded-full px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground aria-[current=true]:text-foreground"
            >
              {active === n.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {n.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ml-1 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-transform hover:-translate-y-px"
          >
            Let’s talk
          </a>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

"use client"

import { useEffect, useState } from "react"
import { nav, profile } from "@/lib/content"

/** A plain bar that docks at the top once the hero, which has its own nav, has scrolled away. */
export function SiteHeader() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      data-shown={shown}
      inert={!shown}
      className="fixed inset-x-0 top-0 z-50 -translate-y-full bg-bg transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] data-[shown=true]:translate-y-0 motion-reduce:transition-none"
    >
      <div className="flex h-16 items-center justify-between gap-6 px-[var(--margin)]">
        <a href="#top" className="text-small font-medium text-ink no-underline">
          {profile.name}
        </a>
        <nav aria-label="Sections" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-small text-muted no-underline transition-colors hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-small font-medium text-accent-ink no-underline transition-transform active:scale-95"
          >
            Email me
          </a>
        </nav>
      </div>
    </header>
  )
}

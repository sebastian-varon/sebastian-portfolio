"use client"

import { ArrowUpRight } from "lucide-react"
import type { PointerEvent } from "react"
import type { Project } from "@/lib/content"

/** A case-study card with a soft spotlight that follows the pointer. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
  }

  return (
    <article
      onPointerMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/20 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(140 255 184 / 0.09), transparent 60%)",
        }}
      />
      <div className="relative flex items-baseline justify-between gap-4 font-mono text-xs tracking-wide text-muted-foreground uppercase">
        <span>
          {String(index + 1).padStart(2, "0")} · {project.kind}
        </span>
        {project.year && <span>{project.year}</span>}
      </div>

      <h3 className="relative mt-6 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">{project.title}</h3>
      <p className="relative mt-3 max-w-prose text-[15px] leading-relaxed text-muted-foreground">{project.summary}</p>

      <ul className="relative mt-5 space-y-2 text-sm text-foreground/85">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
        <ul className="flex flex-wrap gap-2" aria-label="Built with">
          {project.stack.map((s) => (
            <li key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {s}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-foreground/30 pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {project.link.label}
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="sr-only">for {project.title} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  )
}

"use client"

import { useState } from "react"
import { Fragment } from "@/components/site/fragments"
import type { Project, ProjectId } from "@/lib/content"

/**
 * One row per project. Pointing at a row (or focusing it) shows a live piece of
 * that app to the right; the rows link down to each project's full entry.
 */
export function WorkLedger({ projects, initial }: { projects: Project[]; initial: ProjectId }) {
  const [active, setActive] = useState(initial)

  return (
    <div className="grid grid-cols-12 gap-x-6">
      <ul
        className="col-span-12 lg:col-span-5 lg:col-start-3"
        onPointerLeave={() => setActive(initial)}
      >
        {projects.map((p) => {
          const on = active === p.id
          return (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                onPointerEnter={() => setActive(p.id)}
                onFocus={() => setActive(p.id)}
                data-on={on}
                className="grid min-h-13 grid-cols-[1fr_auto] items-baseline gap-x-6 py-2 text-body text-muted no-underline transition-colors duration-200 hover:text-ink data-[on=true]:text-ink sm:grid-cols-[1.2fr_1fr] sm:py-0 sm:leading-[44px]"
              >
                <span className="font-medium">{p.title}</span>
                <span className="text-small sm:text-body">{p.kind}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div
        aria-hidden="true"
        inert
        className="relative hidden lg:col-span-4 lg:col-start-9 lg:block"
      >
        {projects.map((p) => (
          <div
            key={p.id}
            data-on={active === p.id}
            className="absolute inset-x-0 top-0 origin-top-left scale-[0.92] opacity-0 transition-[opacity,transform] duration-300 data-[on=true]:scale-100 data-[on=true]:opacity-100 motion-reduce:transition-none"
          >
            <Fragment id={p.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

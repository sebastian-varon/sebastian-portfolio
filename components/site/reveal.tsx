"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

const ease = [0.16, 1, 0.3, 1] as const

/**
 * Brings one part of a section into place the first time it scrolls into view.
 * `rise` lifts text; `settle` eases a picture down from a slight scale.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  manner = "rise",
  as = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  manner?: "rise" | "settle"
  as?: "div" | "li" | "p" | "h2" | "h3"
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  const from = manner === "settle" ? { opacity: 0, scale: 0.96 } : { opacity: 0, y: 24 }
  return (
    <Tag
      className={className}
      initial={reduce ? false : from}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: manner === "settle" ? 1.1 : 0.7, delay, ease }}
    >
      {children}
    </Tag>
  )
}

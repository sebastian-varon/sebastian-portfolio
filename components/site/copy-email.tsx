"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-full bg-surface-2 px-5 text-small font-medium text-ink transition-[transform,background-color] hover:bg-[#2c2c2b] active:scale-95"
    >
      {copied ? <Check aria-hidden="true" className="size-4 text-accent" /> : <Copy aria-hidden="true" className="size-4" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email address"}</span>
    </button>
  )
}

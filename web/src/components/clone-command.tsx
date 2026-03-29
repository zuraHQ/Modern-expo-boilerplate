"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GIT_CLONE_COMMAND, NPX_CREATE_COMMAND } from "@/repo"
import { cn } from "@/lib/utils"

type CopiedKey = "npx" | "clone" | null

const ROWS = [
  {
    key: "npx" as const,
    label: "Quick start",
    text: NPX_CREATE_COMMAND,
    copyLabel: "Copy quick start command",
  },
  {
    key: "clone" as const,
    label: "Manual install",
    text: GIT_CLONE_COMMAND,
    copyLabel: "Copy git clone command",
  },
]

type CloneCommandProps = { className?: string }

export function CloneCommand({ className }: CloneCommandProps) {
  const [copied, setCopied] = useState<CopiedKey>(null)

  const copy = async (text: string, key: Exclude<CopiedKey, null>) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      window.setTimeout(() => setCopied(null), 2000)
    } catch {
      setCopied(null)
    }
  }

  return (
    <div className={cn("flex min-w-0 w-full max-w-xl flex-col gap-4", className)}>
      {ROWS.map((row) => (
        <div key={row.key} className="flex min-w-0 flex-col gap-2">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {row.label}
          </p>
          <div className="group relative rounded-xl border border-border bg-muted/50 shadow-sm ring-1 ring-border/40">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className={cn(
                "absolute right-1 top-1 z-10 text-muted-foreground shadow-none transition-opacity hover:bg-transparent hover:text-foreground",
                "focus-visible:bg-muted/60 focus-visible:opacity-100",
                copied === row.key
                  ? "opacity-100"
                  : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
              )}
              onClick={() => void copy(row.text, row.key)}
              aria-label={
                copied === row.key ? "Copied" : row.copyLabel
              }
            >
              {copied === row.key ? (
                <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </Button>
            <pre className="overflow-x-auto px-3 py-2.5 pr-10 pt-2 text-left font-mono text-[0.7rem] leading-relaxed text-foreground sm:text-xs [&_code]:text-left">
              <code className="block whitespace-pre">{row.text}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  )
}

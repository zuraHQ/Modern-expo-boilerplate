import type { ReactNode } from "react"
import { GITHUB_README_URL, GITHUB_REPO_URL } from "@/repo"

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "What is Expo Plate?",
    a: (
      <>
        An opinionated Expo starter: onboarding, paywall wiring, HeroUI Native,
        Uniwind, and RevenueCat—so you can ship product instead of wiring glue
        code. Details and variants are in the{" "}
        <a
          href={GITHUB_README_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          README
        </a>
        .
      </>
    ),
  },
  {
    q: "What’s the difference between Expo Base and Expo Full?",
    a: (
      <>
        <strong className="text-foreground">Expo Base</strong> includes
        onboarding, paywall integration, HeroUI Native, and Uniwind.{" "}
        <strong className="text-foreground">Expo Full</strong> adds Convex
        (backend/database) and Clerk auth. Pick the variant that matches your
        stack when you scaffold or clone.
      </>
    ),
  },
  {
    q: "How do I start a new project?",
    a: (
      <>
        Use the Quick start / Manual install commands in the hero above, or read
        the step-by-step (install, prebuild, run) in the{" "}
        <a
          href={GITHUB_README_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          README
        </a>
        .
      </>
    ),
  },
  {
    q: "Production build crashes—what should I check first?",
    a: "Missing environment variables in EAS are a common cause. Add them in the EAS dashboard or load them from EAS instead of assuming local .env files exist in release builds.",
  },
  {
    q: "What should I change before the first store submission?",
    a: (
      <>
        Update the package identifier in{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.8em]">
          app.json
        </code>{" "}
        (replace the placeholder package name), align your bundle ID with
        RevenueCat, and confirm iPad support if you need tablets (
        <code className="font-mono text-[0.8em]">UIDeviceFamily</code> in project
        settings—see README).
      </>
    ),
  },
  {
    q: "Where do RevenueCat keys and entitlements go?",
    a: (
      <>
        Configure your API key and entitlements in{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.8em]">
          config/revenuecat.ts
        </code>
        , and keep the app bundle in{" "}
        <code className="font-mono text-[0.8em]">app.json</code> consistent with
        your RevenueCat app.
      </>
    ),
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="w-full border-t border-border/60 bg-muted/15 px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2
            id="faq-heading"
            className="text-sm font-semibold tracking-wide text-foreground uppercase"
          >
            FAQ
          </h2>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">
            Short answers. Full setup, Convex + Clerk, RevenueCat, and project
            layout live in the{" "}
            <a
              href={GITHUB_README_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              repo README
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-border rounded-xl border border-border bg-card/60">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group px-4 py-1 transition-colors hover:bg-muted/40 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-left text-sm font-medium text-foreground">
                <span>{item.q}</span>
                <span
                  className="shrink-0 text-muted-foreground transition group-open:rotate-180"
                  aria-hidden
                >
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="pb-4 pl-0.5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            GitHub
          </a>{" "}
          · Expo Plate <span aria-hidden>🍽️</span>
        </p>
      </div>
    </section>
  )
}

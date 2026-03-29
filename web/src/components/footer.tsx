import { GITHUB_REPO_URL } from "@/repo"

const DOCS_HREF = "https://docs.expo.dev/"

const links = [
  { href: DOCS_HREF, label: "Expo docs", external: true },
  { href: GITHUB_REPO_URL, label: "GitHub", external: true },
  { href: "#faq", label: "FAQ", external: false },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/60 bg-muted/20 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} Expo Plate · Modern Expo boilerplate
        </p>
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

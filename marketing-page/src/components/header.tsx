import { BookOpen, Moon, Star, Sun } from "lucide-react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { GITHUB_README_URL, GITHUB_REPO_URL } from "@/repo"

export function Header() {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    // Read DOM so we always flip the *resolved* appearance (covers `system` in storage).
    setTheme(
      document.documentElement.classList.contains("dark") ? "light" : "dark"
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Expo Plate home"
        >
          <img
            src={logo}
            alt=""
            width={40}
            height={40}
            className="size-9 shrink-0 object-contain transition group-hover:opacity-90 sm:size-10"
            decoding="async"
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate text-sm font-semibold leading-tight tracking-tight text-foreground">
              Expo Plate
            </span>
            <span className="truncate text-xs text-muted-foreground">
              Modern expo boilerplate
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="flex items-center rounded-full border border-border/60 bg-muted/40 p-0.5 pl-1 sm:p-1 sm:pl-1.5">
            <Button variant="ghost" size="sm" className="h-8 rounded-full px-2.5 text-muted-foreground hover:text-foreground sm:px-3" asChild>
              <a
                className="inline-flex items-center gap-1.5"
                href={GITHUB_README_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Documentation on GitHub"
              >
                <BookOpen className="size-3.5 shrink-0" aria-hidden />
                <span className="hidden sm:inline">Docs</span>
              </a>
            </Button>
            <Button variant="default" size="sm" className="h-8 gap-1 rounded-full px-2.5 shadow-none sm:px-3" asChild>
              <a
                className="inline-flex items-center gap-1.5"
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Star Modern-expo-boilerplate on GitHub"
              >
                <Star className="size-3.5 shrink-0 fill-primary-foreground/30 sm:size-4" aria-hidden />
                <span className="hidden sm:inline">Star</span>
              </a>
            </Button>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="relative shrink-0 overflow-hidden rounded-full"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </div>
      </div>
    </header>
  )
}

const LOGOS = [
  { name: "Expo", src: "https://cdn.simpleicons.org/expo/9ca3af" },
  {
    name: "TypeScript",
    src: "https://cdn.simpleicons.org/typescript/9ca3af",
    variant: "ts" as const,
  },
  { name: "HeroUI", src: "https://cdn.simpleicons.org/heroui/9ca3af" },
  { name: "Clerk", src: "https://cdn.simpleicons.org/clerk/9ca3af" },
  { name: "Convex", src: "https://cdn.simpleicons.org/convex/9ca3af" },
  { name: "RevenueCat", src: "https://cdn.simpleicons.org/revenuecat/9ca3af" },
  { name: "Uniwind", src: "/tailwindcss.svg" },
] as const

const defaultImg =
  "h-7 w-auto opacity-95 transition duration-200 hover:opacity-100 hover:brightness-110 sm:h-8"

const tsImg = `${defaultImg} rounded-lg`

type LogoCloudProps = { embed?: boolean }

export function LogoCloud({ embed }: LogoCloudProps) {
  const inner = (
    <>
      <h2
        id="logo-cloud-heading"
        className="mb-6 text-center text-sm font-medium tracking-wide text-muted-foreground uppercase sm:mb-8"
      >
        Built with
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:gap-x-16">
        {LOGOS.map((item) => (
          <li key={item.name}>
            <img
              src={item.src}
              alt={item.name}
              className={
                "variant" in item && item.variant === "ts" ? tsImg : defaultImg
              }
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </>
  )

  if (embed) {
    return (
      <div
        className="w-full max-w-6xl"
        aria-labelledby="logo-cloud-heading"
      >
        {inner}
      </div>
    )
  }

  return (
    <section
      className="w-full px-4 py-10 sm:px-6 sm:py-12"
      aria-labelledby="logo-cloud-heading"
    >
      {inner}
    </section>
  )
}

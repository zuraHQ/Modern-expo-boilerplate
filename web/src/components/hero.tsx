import { CloneCommand } from "@/components/clone-command"

const DEMO_VIDEO_SRC =
  "https://res.cloudinary.com/dzvttwdye/video/upload/1a683b93-1dae-4659-b526-faf53424fd11_itmlmu.mp4"

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
        <h1 className="max-w-3xl text-balance text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl lg:text-3xl">
          Production-ready Expo
          <br />
          Payments, UI, and onboarding included
        </h1>
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Prewired stack, zero setup friction
        </p>

        <CloneCommand className="mx-auto" />

        <div
          className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-12 sm:gap-5"
          aria-labelledby="demo-heading"
        >
          <h2
            id="demo-heading"
            className="text-sm font-medium tracking-wide text-muted-foreground uppercase"
          >
            Demo
          </h2>
          <div className="flex w-full justify-center">
            <div
              className="relative w-full max-w-[320px] overflow-hidden rounded-xl bg-black sm:max-w-[min(100%,340px)]"
              style={{ aspectRatio: "9 / 19", maxHeight: "min(820px, 88vh)" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                aria-label="Expo Plate demo video"
              >
                <source src={DEMO_VIDEO_SRC} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

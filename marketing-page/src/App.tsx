import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"

export function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App

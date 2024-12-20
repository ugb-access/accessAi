import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import Accessibility from "@/components/Accessibilty/Accessibility"



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <Hero />
      <LogoCarousel />
      <Features />
      <Testimonials />
      <CTA />
      <Accessibility/>
      <Footer />
    </div>
  )
}


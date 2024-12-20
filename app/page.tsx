
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import Accessibility from "@/components/Accessibilty/Accessibility"
import Image from "next/image"



export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      <Navigation />
      <Hero />
      <LogoCarousel />
      <Features />
      <Testimonials />
      <CTA />
      <Accessibility/>
      <Footer />
      <div className="fixed  bottom-10 right-10 bg-[#146FF8] h-[45px] w-[45px] rounded-full flex justify-center hover:scale-[1.1] cursor-pointer  hover:border border-orange-600 items-center">
        <Image height={20} width={20} src={"/images/svgviewer-output (53).svg"}   alt="Button icon"/>
      </div>
    </div>
  )
}


"use client"
import React, { useState } from 'react';

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import Accessibility from "@/components/Accessibilty/Accessibility"
import { Footer } from "@/components/footer"
import Image from "next/image"




export default function Home({ }) {
  const [open, setOpen] = useState(true)

  const [toggle, setToggle] = useState(false);
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggle(!toggle)
  };
  const handlePageClick = () => {
    setToggle(false);
  };


  return (
    <div className={`min-h-screen  relative ${open ? "bg-[#3d6aaf]" : "bg-black"}`} >
      <div onClick={handlePageClick} >
        <Navigation />
        <Hero />
        <LogoCarousel />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
      {toggle && <Accessibility handlePageClick={handlePageClick} setOpen={setOpen} open={open} />}
      <div className="fixed  bottom-10 right-10 bg-[#146FF8] h-[45px] w-[45px] rounded-full flex justify-center hover:scale-[1.1] cursor-pointer  hover:border border-orange-600 items-center transform transition-all !duration-1000 ease-in-out" onClick={handleButtonClick}>
        <Image height={20} width={20} src={"/images/svgviewer-output (53).svg"} alt="Button icon" />
      </div>
    </div>
  )
}


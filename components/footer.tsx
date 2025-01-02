import Link from "next/link"
import { useEffect, useState } from "react";

export function Footer() {

  // const [back, setBack] = useState("")

  // const backColor = localStorage.getItem("background-color")
  // console.log('backColor: ', backColor);

  // useEffect(() => {
  //   setBack(backColor)
  // }, [backColor])
  // style={{ backgroundColor: back }}
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AccessAI</h3>
            <p className="text-gray-400">Making the web accessible for everyone through AI-powered solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/ai-suite" className="text-gray-400 hover:text-white">AI Accessibility Suite</Link></li>
              <li><Link href="/products/widget" className="text-gray-400 hover:text-white">Accessibility Widget</Link></li>
              <li><Link href="/products/monitoring" className="text-gray-400 hover:text-white">Accessibility Monitoring</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/consulting" className="text-gray-400 hover:text-white">Consulting & Support</Link></li>
              <li><Link href="/services/audits" className="text-gray-400 hover:text-white">Accessibility Audits</Link></li>
              <li><Link href="/services/training" className="text-gray-400 hover:text-white">Accessibility Training</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} AccessAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


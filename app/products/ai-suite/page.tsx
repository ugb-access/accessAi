import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from 'lucide-react'

export default function AISuitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">AI Accessibility Suite</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our comprehensive AI-powered solution for web accessibility, designed to make your website inclusive and compliant.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {[
                "Automated accessibility scanning",
                "Real-time issue detection and remediation",
                "WCAG 2.1 and ADA compliance",
                "Customizable accessibility interface",
                "Detailed reporting and analytics",
                "Continuous monitoring and updates"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-2">
              {[
                "Improve user experience for all visitors",
                "Reduce legal risk and ensure compliance",
                "Expand your market reach",
                "Enhance SEO performance",
                "Demonstrate social responsibility",
                "Stay ahead of accessibility regulations"
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Install our lightweight JavaScript snippet on your website</li>
            <li>Our AI scans your site and identifies accessibility issues</li>
            <li>Automated fixes are applied in real-time</li>
            <li>An accessibility interface is added for user customization</li>
            <li>Continuous monitoring ensures ongoing compliance</li>
          </ol>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to make your website accessible to everyone?</h2>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/free-trial">Start Free Trial</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


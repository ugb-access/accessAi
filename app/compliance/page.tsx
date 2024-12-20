import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Web Accessibility Compliance</h1>
        <p className="text-lg text-gray-600 mb-8">
          Understanding and achieving web accessibility compliance is crucial for businesses in todays digital landscape. AccessAI is here to help you navigate the complex world of accessibility regulations and standards.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Compliance Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">ADA (Americans with Disabilities Act)</h3>
              <p className="mb-4">The ADA prohibits discrimination against individuals with disabilities and requires businesses to make accommodations for these individuals, including on their websites.</p>
              <Button variant="outline" asChild>
                <Link href="/compliance/ada">Learn More About ADA</Link>
              </Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">WCAG (Web Content Accessibility Guidelines)</h3>
              <p className="mb-4">WCAG provides a set of technical standards for making web content more accessible. Its widely recognized as the international standard for web accessibility.</p>
              <Button variant="outline" asChild>
                <Link href="/compliance/wcag">Explore WCAG Guidelines</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Compliance Matters</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Avoid potential lawsuits and legal issues</li>
            <li>Expand your market reach to include users with disabilities</li>
            <li>Improve overall user experience for all visitors</li>
            <li>Demonstrate corporate social responsibility</li>
            <li>Enhance your brand reputation</li>
          </ul>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">How AccessAI Ensures Compliance</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Comprehensive website audits to identify accessibility issues</li>
            <li>AI-powered real-time fixes for common accessibility problems</li>
            <li>Customizable accessibility interface for user preferences</li>
            <li>Ongoing monitoring and reporting to maintain compliance</li>
            <li>Regular updates to stay current with evolving standards</li>
          </ol>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to make your website compliant?</h2>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/free-trial">Start Free Compliance Check</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/book-demo">Book a Compliance Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


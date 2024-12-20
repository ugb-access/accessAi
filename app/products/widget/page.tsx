import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Settings, Users } from "lucide-react"

export default function WidgetPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Accessibility Widget</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our easy-to-install widget provides instant accessibility improvements for your website, ensuring a better experience for all users.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Code className="text-blue-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Simple Integration</h2>
            <p>Add our widget to your site with just a single line of code. No complex setup required.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Settings className="text-green-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Customizable Options</h2>
            <p>Tailor the widget&apos;s appearance and functionality to match your brand and user needs.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Users className="text-purple-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">User-Friendly Interface</h2>
            <p>Empower users to adjust accessibility settings according to their individual preferences.</p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Widget Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Screen reader optimization",
              "Keyboard navigation support",
              "Color contrast adjustments",
              "Text size and spacing controls",
              "Content highlighting options",
              "Font customization",
              "Page structure simplification",
              "Image alt-text management"
            ].map((feature, index) => (
              <li key={index} className="flex items-center bg-gray-50 p-3 rounded">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Sign up for an AccessAI account</li>
            <li>Generate your unique widget code</li>
            <li>Add the code to your websites HTML</li>
            <li>Customize widget settings in your AccessAI dashboard</li>
            <li>Test the widget on your site and gather user feedback</li>
            <li>Monitor usage and accessibility improvements over time</li>
          </ol>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to enhance your websites accessibility?</h2>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/free-trial">Try Widget for Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/book-demo">Request Widget Demo</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


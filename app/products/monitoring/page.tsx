import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart, AlertTriangle, TrendingUp } from "lucide-react"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Accessibility Monitoring</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our advanced monitoring system provides continuous oversight of your websites accessibility, ensuring compliance and optimal user experience.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <BarChart className="text-blue-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Comprehensive Reports</h2>
            <p>Receive detailed reports on your sites accessibility performance, including trends and improvement areas.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <AlertTriangle className="text-red-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Real-time Alerts</h2>
            <p>Get instant notifications when new accessibility issues are detected, allowing for quick remediation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <TrendingUp className="text-green-500 w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
            <p>Monitor your accessibility score over time and track improvements as you address issues.</p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Monitoring Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Automated daily scans",
              "WCAG 2.1 compliance checking",
              "Custom accessibility policy enforcement",
              "Multi-page and dynamic content analysis",
              "Browser and device compatibility tests",
              "Accessibility score benchmarking",
              "Issue prioritization and recommendations",
              "Historical data and trend analysis"
            ].map((feature, index) => (
              <li key={index} className="flex items-center bg-gray-50 p-3 rounded">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Our Monitoring Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Initial comprehensive scan of your website</li>
            <li>Establishment of baseline accessibility score</li>
            <li>Daily automated scans to detect new or recurring issues</li>
            <li>Real-time alerts for critical accessibility problems</li>
            <li>Weekly and monthly report generation</li>
            <li>Continuous updates to comply with latest accessibility standards</li>
          </ol>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Start monitoring your websites accessibility today</h2>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/free-trial">Start Free Trial</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/book-demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


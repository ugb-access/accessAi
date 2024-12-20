import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail, MessageCircle, Phone, FileText, Clock } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Support Center</h1>
        <p className="text-lg text-gray-600 mb-12">
          Need help? Our support team is here to assist you with any questions or concerns.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Available 24/7
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our support team is available around the clock to help you with any issues.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get instant help through our live chat system during business hours.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <a href="mailto:support@accessai.com" className="text-blue-600 hover:text-blue-800">
                  support@accessai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <a href="tel:1-800-ACCESS-AI" className="text-blue-600 hover:text-blue-800">
                  1-800-ACCESS-AI
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                <Link href="/docs" className="text-blue-600 hover:text-blue-800">
                  View Documentation
                </Link>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/docs/getting-started">
                  Getting Started Guide
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq#installation" className="text-blue-600 hover:text-blue-800">
                    Installation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq#billing" className="text-blue-600 hover:text-blue-800">
                    Billing Questions
                  </Link>
                </li>
                <li>
                  <Link href="/faq#features" className="text-blue-600 hover:text-blue-800">
                    Feature Overview
                  </Link>
                </li>
                <li>
                  <Link href="/faq#troubleshooting" className="text-blue-600 hover:text-blue-800">
                    Troubleshooting
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Submit a Support Ticket</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Submit a support ticket and we&apos;ll get back to you as soon as possible.
          </p>
          <Button size="lg" asChild>
            <Link href="/support/new-ticket">Submit Ticket</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}


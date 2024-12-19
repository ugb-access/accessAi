import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make Your Website Accessible to Everyone?</h2>
        <p className="text-xl text-gray-600 mb-8">Start your free trial today and see the difference AccessAI can make.</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200" asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
          <Button size="lg" variant="default" className="bg-blue-600 text-white hover:bg-blue-700" asChild>
            <Link href="/free-trial">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


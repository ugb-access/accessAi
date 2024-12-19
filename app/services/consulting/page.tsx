import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Consulting & Support</h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert guidance and support for your accessibility needs.
        </p>
        {/* Add more content about Consulting & Support services here */}
      </main>
      <Footer />
    </div>
  )
}


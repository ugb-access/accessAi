import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Accessibility Training</h1>
        <p className="text-lg text-gray-600 mb-8">
          Empower your team with accessibility knowledge and best practices.
        </p>
        {/* Add more content about Accessibility Training here */}
      </main>
      <Footer />
    </div>
  )
}


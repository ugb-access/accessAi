import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$49",
    features: [
      "Basic accessibility scans",
      "Up to 100 pages",
      "Monthly reports",
      "Email support"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$149",
    features: [
      "Advanced AI-powered scans",
      "Up to 1,000 pages",
      "Weekly reports",
      "Priority email & chat support",
      "Custom accessibility widget"
    ],
    cta: "Start Free Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited AI-powered scans",
      "Unlimited pages",
      "Daily reports",
      "24/7 priority support",
      "Custom accessibility widget",
      "Dedicated account manager",
      "API access"
    ],
    cta: "Contact Sales"
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Pricing Plans</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Choose the perfect plan for your business needs
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${plan.highlighted ? 'ring-2 ring-blue-500' : ''}`}>
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal text-gray-500">/month</span></p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Not sure which plan is right for you?</h2>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}


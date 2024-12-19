import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Shield, Zap } from 'lucide-react'

const features = [
  {
    title: "AI-Powered Accessibility",
    description: "Our advanced AI algorithms automatically identify and fix accessibility issues in real-time.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100"
  },
  {
    title: "ADA & WCAG Compliance",
    description: "Ensure your website meets ADA and WCAG 2.1 guidelines with our comprehensive solution.",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    title: "Lightning-Fast Integration",
    description: "Get up and running in minutes with our easy-to-install accessibility widget.",
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
]

export function Features() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


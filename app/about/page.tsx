import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Lightbulb, Power } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About AccessAI</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              At AccessAI, were on a mission to make the web accessible for everyone. We believe that technology should empower all individuals, regardless of their abilities or disabilities.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, our team of accessibility experts and AI engineers have been working tirelessly to develop cutting-edge solutions that help businesses create inclusive digital experiences.
            </p>
            <p className="text-lg text-gray-600">
              Our AI-powered tools and services not only ensure compliance with accessibility standards but also enhance the overall user experience for all visitors to your website.
            </p>
          </div>
          <div className="bg-blue-100 p-8 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Users className="h-24 w-24 text-#146FF8 mx-auto mb-4" />
              <p className="text-xl font-semibold text-blue-800">Making the Web Accessible for Everyone</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Inclusivity",
              description: "We believe in creating digital spaces that welcome and accommodate all users.",
              icon: Users,
              color: "text-green-600",
              bgColor: "bg-green-100"
            },
            {
              title: "Innovation",
              description: "We constantly push the boundaries of technology to solve accessibility challenges.",
              icon: Lightbulb,
              color: "text-yellow-600",
              bgColor: "bg-yellow-100"
            },
            {
              title: "Empowerment",
              description: "We strive to empower businesses and individuals to create a more accessible web.",
              icon: Power,
              color: "text-purple-600",
              bgColor: "bg-purple-100"
            }
          ].map((value, index) => (
            <div key={index} className={`${value.bgColor} p-6 rounded-lg`}>
              <value.icon className={`h-12 w-12 ${value.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Jane Doe", role: "CEO & Co-founder" },
            { name: "John Smith", role: "CTO & Co-founder" },
            { name: "Alice Johnson", role: "Head of Accessibility" },
            { name: "Bob Williams", role: "Lead AI Engineer" }
          ].map((member, index) => (
            <div key={index} className="text-center bg-gray-100 p-6 rounded-lg">
              <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-#146FF8" />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}


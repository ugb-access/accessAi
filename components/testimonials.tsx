import Image from "next/image"

const testimonials = [
  {
    quote: "AccessAI has transformed our website, making it truly inclusive for all users. The AI-powered solutions are simply remarkable.",
    author: "Jane Doe",
    role: "CEO, TechCorp",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Implementing AccessAI was a breeze, and the results were immediate. Our accessibility score improved dramatically.",
    author: "John Smith",
    role: "CTO, WebInnovate",
    avatar: "/placeholder.svg",
  },
  {
    quote: "The peace of mind knowing our site is ADA compliant is invaluable. AccessAI's continuous monitoring keeps us ahead of the curve.",
    author: "Emily Brown",
    role: "Marketing Director, E-commerce Plus",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


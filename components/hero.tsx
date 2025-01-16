import { Check, Accessibility, FileSearch, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Leading <span className="text-primary">AI Solutions</span>
                <br />
                for Web Accessibility &
                <br />
                ADA Compliance
              </h1>
              <form action="">
                <input type="text"
                  placeholder='enter your name' />
              </form>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-semibold text-gray-900">Affordable</span>
                    <span className="text-gray-600 ml-2">Plans for every business size & budget</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-semibold text-gray-900">Efficient</span>
                    <span className="text-gray-600 ml-2">Easy CMS and website platform installation</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-semibold text-gray-900">Compliant</span>
                    <span className="text-gray-600 ml-2">Accessibility statement and certifications</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary" asChild>
                  <Link href="/free-trial">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-200" asChild>
                  <Link href="/book-demo">Book a Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-6 rounded-lg flex flex-col items-center justify-center text-primary">
                  <Accessibility className="h-12 w-12 mb-2" />
                  <span className="text-sm font-semibold">Accessibility</span>
                </div>
                <div className="bg-green-100 p-6 rounded-lg flex flex-col items-center justify-center text-green-600">
                  <FileSearch className="h-12 w-12 mb-2" />
                  <span className="text-sm font-semibold">AI-Powered</span>
                </div>
                <div className="bg-purple-100 p-6 rounded-lg flex flex-col items-center justify-center text-purple-600">
                  <Shield className="h-12 w-12 mb-2" />
                  <span className="text-sm font-semibold">Compliance</span>
                </div>
                <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center justify-center text-orange-600">
                  <Check className="h-12 w-12 mb-2" />
                  <span className="text-sm font-semibold">Easy Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


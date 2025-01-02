'use client'

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="border-b shadow-sm"> {/* Update 1: Changed background color */}
      <div className="flex h-16 items-center px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold">AccessAI</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/products/ai-suite"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          AI Accessibility Suite
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Complete accessibility solution powered by artificial intelligence.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/products/widget" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Accessibility Widget</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Easy-to-install widget for instant accessibility improvements.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/products/monitoring" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Accessibility Monitoring</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Continuous monitoring and reporting of your website&ldquo;s accessibility.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/services/consulting"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Consulting & Support
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Expert guidance and support for your accessibility needs.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/audits" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Accessibility Audits</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive audits to identify and resolve accessibility issues.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/training" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Accessibility Training</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Empower your team with accessibility knowledge and best practices.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-700"> {/* Update 2: Changed text color */}
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-700"> {/* Update 2: Changed text color */}
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/compliance" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-700"> {/* Update 2: Changed text color */}
                  Compliance
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"> {/* Update 2: Changed text color */}
            Login
          </Link>
          <Link href="/support" className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"> {/* Update 2: Changed text color */}
            Support
          </Link>
          <Button variant="secondary" className="bg-blue-100 text-#146FF8 hover:bg-blue-200" asChild>
            <>
              <Link href="/book-demo">Book a Demo</Link>
            </>
          </Button>
          <Button variant="default" className="bg-#146FF8 text-white hover:bg-#146FF8" asChild>
            <Link href="/free-trial">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


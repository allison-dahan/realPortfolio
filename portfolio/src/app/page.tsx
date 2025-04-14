"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code2, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
  
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <Code2 className="h-6 w-6" />
              <span className="inline-block font-bold">Allison Dahan</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="px-0 text-base hover:bg-transparent focus:bg-transparent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 py-6 text-center">
            <Link
              href="#about"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="https://github.com/allison-dahan" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/allison-dahan" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:morganneallison@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Allison</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate web developer specializing in creating beautiful, functional, and user-centered digital
                    experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="#contact">
                    <Button className="w-full">Get in Touch</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="w-full">
                      View My Work
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/allison-dahan" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/allison-dahan" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:morganneallison@example.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px] overflow-hidden rounded-full border-4 border-primary">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        I’m a web developer with a people-first mindset and a passion for turning ideas into inclusive, scalable digital solutions.
      </p>
    </div>
  </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Journey</h3>
                  <p className="text-muted-foreground">
          My path into tech wasn’t linear—I studied Economics at UBC before discovering my passion for development while working in hospitality. That experience helped me strengthen my adaptability, communication, and confidence—skills I now bring to my work as a developer.
        </p>
        <p className="text-muted-foreground">
          After years in customer service and administration, I was drawn to the idea of building intuitive, impactful digital experiences. I haven’t looked back since.
        </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Approach</h3>
                  <p className="text-muted-foreground">
          I specialize in React, Next.js, PostgreSQL, and Drizzle ORM, and I’m always exploring new ways to make technology more human. I care deeply about clean code, responsive design, and building with accessibility from the ground up.
        </p>
        <p className="text-muted-foreground">
          I believe that collaboration and empathy are just as important as technical skills when creating software that truly serves users.
        </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">When I'm Not Coding</h3>
                  <p className="text-muted-foreground">
          I’m often reading, working out, or exploring new cafes. I find inspiration in unexpected places and believe that diverse experiences help fuel better ideas in tech.
        </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/me.png"
                  alt="About Me"
                  width={600}
                  height={400}
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Here are some of the technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>PHP</Badge>
                    <Badge>C#</Badge>
                    <Badge>MySQL</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Tools & Others</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Figma</Badge>
                    <Badge>Responsive Design</Badge>
                    <Badge>Agile/Scrum</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Here are some of the projects I've worked on.
        </p>
      </div>
    </div>

    <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 sm:grid-cols-2">

      {/* Chez Mari */}
      <Card className="overflow-hidden flex flex-col">
        <Link href="/projects/chez-mari" className="block">
          <div className="aspect-video w-full overflow-hidden">
            <Image src="/images/chez-mari-hero.png" alt="Chez Mari project" width={600} height={400} className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Chez Mari Hair Salon</CardTitle>
            <CardDescription>Custom WordPress theme for a Toronto-based salon</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">
              Built with WordPress and PHP, this theme supports dynamic content, service filtering, and is fully responsive.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">WordPress</Badge>
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </div>
          </CardContent>
        </Link>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
          <Link href="https://github.com/allison-dahan/chez-mari-theme" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4" /> Code</Button>
          </Link>
          <Link href="https://chezmari.ca" target="_blank" rel="noopener noreferrer">
            <Button size="sm"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Task Manager */}
      <Card className="overflow-hidden flex flex-col">
        <Link href="/projects/task-manager" className="block">
          <div className="aspect-video w-full overflow-hidden">
            <Image src="/images/task-manager-kanban.png" alt="Task Manager" width={600} height={400} className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Task Manager App</CardTitle>
            <CardDescription>Full-stack Kanban-style task management with Clerk auth</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">
              Features drag-and-drop, Clerk auth, and TanStack Query for real-time task sync.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Hono</Badge>
              <Badge variant="outline">Clerk</Badge>
            </div>
          </CardContent>
        </Link>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
          <Link href="https://github.com/allison-dahan/taskmanager" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4" /> Code</Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Fitness Tracker */}
      <Card className="overflow-hidden flex flex-col">
        <Link href="/projects/fitness-tracker" className="block">
          <div className="aspect-video w-full overflow-hidden">
            <Image src="/images/fitness-tracker-dashboard.png" alt="Fitness Tracker" width={600} height={400} className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Fitness Tracker</CardTitle>
            <CardDescription>Single-page fitness tracking app with CI/CD on Azure</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">
              .NET MVC, MySQL, Google Auth, AppRun.js, and GitHub Actions for CI/CD.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">.NET 8</Badge>
              <Badge variant="outline">Azure</Badge>
              <Badge variant="outline">MySQL</Badge>
            </div>
          </CardContent>
        </Link>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
          <Link href="https://github.com/allison-dahan/FitnessTracker" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4" /> Code</Button>
          </Link>
          <Link href="https://fittrack-app-grh7cge7egg0d6bq.canadacentral-01.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
            <Button size="sm"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Crafters Connect */}
      <Card className="overflow-hidden flex flex-col">
        <Link href="/projects/crafters-connect" className="block">
          <div className="aspect-video w-full overflow-hidden">
            <Image src="/images/crafters-connect-hero.png" alt="Crafters Connect" width={600} height={400} className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Crafters Connect</CardTitle>
            <CardDescription>Collaborative DIY platform for makers & creators</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">
              Designed in Figma and built with HTML/CSS/JS to manage shared projects and milestones.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">HTML</Badge>
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">Figma</Badge>
            </div>
          </CardContent>
        </Link>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
        <Link href="https://github.com/ahmedcalif/CraftersConnect" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4" /> Code</Button>
          </Link>
          <Link href="https://craftersconnect-1.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Button size="sm"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
          </Link>
        </CardFooter>
      </Card>

    </div>

    <div className="flex justify-center mt-8">
      <Link href="https://github.com/allison-dahan" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="group">
          View More on GitHub
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I'm currently available for freelance work and full-time positions. If you have a project that needs
                  some creative touches, let's talk!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 sm:py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground break-all">morganneallison@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <Link
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline break-all"
                      >
                        linkedin.com/in/allison-dahan
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline break-all"
                      >
                        github.com/allison-dahan
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Allison Dahan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/allison-dahan" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/allison-dahan" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

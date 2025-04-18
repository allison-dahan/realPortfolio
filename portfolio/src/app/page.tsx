"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code2, X } from "lucide-react"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
  
    

      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m <span className="text-primary">Allison</span>
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
                    src="/images/me.png"
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
            <div className="mx-auto max-w-5xl items-center gap-6 py-12 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Journey</h3>
                  <p className="text-muted-foreground">
          My path into tech wasn’t linear, I studied Economics at UBC before discovering my passion for development while working in hospitality. That experience helped me strengthen my adaptability, communication, and confidence—skills I now bring to my work as a developer.
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
                  <h3 className="text-xl font-bold">When I&apos;m Not Coding</h3>
                  <p className="text-muted-foreground">
          I’m often reading, working out, or exploring new cafes. I find inspiration in unexpected places and believe that diverse experiences help fuel better ideas in tech.
        </p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Skills Section  */}
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
    <div className="mx-auto max-w-5xl py-8 sm:py-12">
      {/* Frontend Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Frontend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/>
                <path fill="#FF6D00" d="M24,8v31.9l11.2-3.2L38.7,8H24z"/>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/>
              </svg>
            </div>
            <span className="font-medium">HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/>
                <path fill="#039BE5" d="M24,8v31.9l11.2-3.2L38.7,8H24z"/>
                <path fill="#FFF" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0.5-8H33.1z"/>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/>
              </svg>
            </div>
            <span className="font-medium">CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
                <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
              </svg>
            </div>
            <span className="font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#1976d2" d="M6,6h36v36H6V6z"/>
                <path fill="#fff" d="M27.49,22H14.227v3.264h4.757V40h3.769V25.264h4.737V22z"/>
                <path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"/>
              </svg>
            </div>
            <span className="font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"/>
                <path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"/>
                <path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"/>
                <circle cx="24" cy="24" r="4" fill="#80deea"/>
              </svg>
            </div>
            <span className="font-medium">React</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5	V31.5z"/>
                <path fill="#212121" d="M25.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5	V31.5z"/>
                <path fill="#212121" d="M32.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5	V31.5z"/>
                <path fill="#212121" d="M44,24c0-11.046-8.954-20-20-20S4,12.954,4,24s8.954,20,20,20S44,35.046,44,24z M41,24	c0,9.389-7.611,17-17,17S7,33.389,7,24S14.611,7,24,7S41,14.611,41,24z"/>
              </svg>
            </div>
            <span className="font-medium">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598 c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"/>
              </svg>
            </div>
            <span className="font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>


    </div>
    {/* Backend Skills */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-center mb-8">Backend</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    <div className="flex flex-col items-center">
      <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
        <Image src="/php.svg" alt="PHP" width="64" height="64"/>
      </div>
      <span className="font-medium">PHP</span>
    </div>
    <div className="flex flex-col items-center">
  <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
    <Image src="/c-sharp.svg" alt="C#" width="64" height="64"/>
  </div>
  <span className="font-medium">C#</span>
</div>
<div className="flex flex-col items-center">
  <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
  <Image src="/sql.svg" alt="MySQL" width="64" height="64"  />
  </div>
  <span className="font-medium">MySQL</span>
</div>
  </div>
</div>

{/* Tools & Others */}
<div>
  <h3 className="text-2xl font-bold text-center mb-8 p-8">Tools & Others</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
    <div className="flex flex-col items-center">
      <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
          <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"/>
        </svg>
      </div>
      <span className="font-medium">Git</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
          <path fill="#455A64" d="M40.3,15.7c0.6-1.7,1.2-5-0.4-8.7c-4.5,0-8.3,3.2-8.9,3.8c-2.2-0.5-4.6-0.7-7-0.7c-2.5,0-4.9,0.3-7.2,0.8C13.7,7.7,9.6,7,8,7c0,0-0.9,1.8-0.9,5c0,2,0.5,3.2,0.8,3.8C5.5,18.3,4,21.7,4,26.1c0,11.2,7.1,15.4,17,15.4S40,37.3,40,26.1C40,21.5,39.5,18.3,40.3,15.7z"/>
          <path fill="#FFCCBC" d="M25.2,39.5h-2.4c-0.5,0-0.9-0.4-0.9-0.9v-2.4c0-0.5,0.4-0.9,0.9-0.9h2.4c0.5,0,0.9,0.4,0.9,0.9v2.4C26.1,39.1,25.7,39.5,25.2,39.5z"/>
          <path fill="#FFCCBC" d="M30.4,39.5H28c-0.5,0-0.9-0.4-0.9-0.9v-2.4c0-0.5,0.4-0.9,0.9-0.9h2.4c0.5,0,0.9,0.4,0.9,0.9v2.4C31.3,39.1,30.9,39.5,30.4,39.5z"/>
          <path fill="#FFCCBC" d="M20,39.5h-2.4c-0.5,0-0.9-0.4-0.9-0.9v-2.4c0-0.5,0.4-0.9,0.9-0.9H20c0.5,0,0.9,0.4,0.9,0.9v2.4C20.9,39.1,20.5,39.5,20,39.5z"/>
          <path fill="#FFCCBC" d="M25.2,34.5h-2.4c-0.5,0-0.9-0.4-0.9-0.9v-2.4c0-0.5,0.4-0.9,0.9-0.9h2.4c0.5,0,0.9,0.4,0.9,0.9v2.4C26.1,34.1,25.7,34.5,25.2,34.5z"/>
          <path fill="#FFCCBC" d="M30.4,34.5H28c-0.5,0-0.9-0.4-0.9-0.9v-2.4c0-0.5,0.4-0.9,0.9-0.9h2.4c0.5,0,0.9,0.4,0.9,0.9v2.4C31.3,34.1,30.9,34.5,30.4,34.5z"/>
          <path fill="#FFCCBC" d="M20,34.5h-2.4c-0.5,0-0.9-0.4-0.9-0.9v-2.4c0-0.5,0.4-0.9,0.9-0.9H20c0.5,0,0.9,0.4,0.9,0.9v2.4C20.9,34.1,20.5,34.5,20,34.5z"/>
        </svg>
      </div>
      <span className="font-medium">GitHub</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
          <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14C43.21,8.71,44,9.84,44,11.11z"/>
          <path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"/>
          <path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"/>
        </svg>
      </div>
      <span className="font-medium">VS Code</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
          <path fill="#E64A19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"/>
          <path fill="#7C4DFF" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"/>
          <path fill="#448AFF" d="M18,45h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V45z"/>
          <path fill="#FF9800" d="M32,17h-6v-6h6c1.657,0,3,1.343,3,3v0C35,15.657,33.657,17,32,17z"/>
          <path fill="#D500F9" d="M25,31h7c3.866,0,7-3.134,7-7v0c0-3.866-3.134-7-7-7h-7V31z"/>
          <path fill="#2196F3" d="M29,45h-6v-6h6c1.657,0,3,1.343,3,3v0C32,43.657,30.657,45,29,45z"/>
        </svg>
      </div>
      <span className="font-medium">Figma</span>
    </div>

    <div className="flex flex-col items-center">
      <div className="mb-3 p-4 rounded-full bg-white shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
          <path fill="#2196f3" d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"/>
          <g fill="#fff">
            <rect x="22" y="20" width="4" height="11"/>
            <circle cx="24" cy="15" r="2"/>
          </g>
        </svg>
      </div>
      <span className="font-medium">Agile/Scrum</span>
    </div>
  </div>
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
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>
    </div>

    <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 sm:grid-cols-2">

      {/* Chez Mari */}
      <Card className="overflow-hidden flex flex-col">
        <Link href="/projects/chez-mari" className="block">
          <div className="aspect-video w-full overflow-hidden">
            <Image src="/chez-logo.svg" alt="Chez Mari project" width={600} height={400} className="object-cover" />
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
            <Image src="/task-manager-logo.svg" alt="Task Manager" width={600} height={400} className="object-cover" />
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
            <Image src="/fitness-tracker-logo.svg" alt="Fitness Tracker" width={600} height={400} className="object-cover" />
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
            <Image src="/crafters-logo.svg" alt="Crafters Connect" width={600} height={400} className="object-cover" />
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
                  I&apos;m currently available for freelance work and full-time positions. If you have a project that needs
                  some creative touches, let&apos;s talk!
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
                        href="https://linkedin.com/in/allison-dahan"
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
                        href="https://github.com/allison-dahan"
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
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
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

// components/ProjectDetailPage.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

type ProjectDetailPageProps = {
  title: string
  subtitle: string
  heroImage: string
  overview: string
  role: string[]
  techStack: string[]
  process: string
  challenges: string[]
  outcome: string
  images: { src: string; alt: string }[]
  github?: string
  liveSite?: string
}

export default function ProjectDetailPage({
  title,
  subtitle,
  heroImage,
  overview,
  role,
  techStack,
  process,
  challenges,
  outcome,
  images,
  github,
  liveSite,
}: ProjectDetailPageProps) {
  return (

    
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground text-lg mt-2">{subtitle}</p>
        <Image
          src={heroImage}
          alt={`${title} Hero`}
          width={1200}
          height={700}
          className="rounded-xl mt-6 shadow"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>{overview}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">My Role</h2>
        <ul className="list-disc list-inside space-y-1">
          {role.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          {techStack.map((tech, i) => (
            <Badge key={i} variant="outline">{tech}</Badge>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Development Process</h2>
        <p>{process}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Challenges</h2>
        <ul className="list-disc list-inside space-y-1">
          {challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Mockups</h2>
        <div className="space-y-4">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Outcome & Reflection</h2>
        <p>{outcome}</p>
      </div>

      <div className="flex gap-4 mt-6">
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">View Code</Button>
          </Link>
        )}
        {liveSite && (
          <Link href={liveSite} target="_blank" rel="noopener noreferrer">
            <Button>Live Site</Button>
          </Link>
        )}
      </div>
    </section>
  )
}

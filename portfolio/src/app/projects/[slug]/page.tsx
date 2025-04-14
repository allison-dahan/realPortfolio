// app/projects/[slug]/page.tsx
import { projects } from "@/data/projects"
import ProjectDetailPage from "@/components/ProjectDetailPage"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return <ProjectDetailPage {...project} />
}

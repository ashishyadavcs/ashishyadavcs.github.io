import { notFound } from "next/navigation";
import { projects } from "@/app/utils/data";
import ProjectPageClient from "./ProjectPageClient";

// Enable ISR with revalidation every 3600 seconds (1 hour)
export const revalidate = 3600;

// Generate static paths for all projects at build time
export async function generateStaticParams() {
    return projects.map(project => ({
        slug: project.slug,
    }));
}

// Server component for ISR
export default async function ProjectPage({ params }) {
    // Await the params to handle async routing in Next.js 15
    const { slug } = await params;

    // Find the project on the server
    const project = projects.find(p => p.slug === slug);

    // Return 404 if project not found
    if (!project) {
        notFound();
    }

    // Return the client component with project data
    return <ProjectPageClient project={project} />;
}

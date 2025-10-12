import { projects } from "@/app/utils/data";
import ProjectsPageClient from "./ProjectsPageClient";

// Enable ISR with revalidation every 7200 seconds (2 hours)
export const revalidate = 7200;

// Server component for ISR
export default async function Projects() {
    // Return the client component with projects data
    return <ProjectsPageClient projects={projects} />;
}

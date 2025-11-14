import Button from "@/components/Button";
import Container from "@/components/layout/Container";
import MyImage from "@/components/MyImage";
import ProjectdetailsStyle from "@/styles/projectdetails";
import projects from "public/config/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find(proj => proj.slug === slug);

    return {
        title: `${project?.title || "Project"} | Portfolio`,
        description: project?.description || `View details for project ${slug}`,
        keywords: ["project", "portfolio", "development", "web development"],
    };
}
export async function generateStaticParams() {
    return projects.map(project => ({ slug: project.slug }));
}
const page = async ({ params }) => {
    const { slug } = await params;
    const project = projects.find(proj => proj.slug === slug);
    return (
        <ProjectdetailsStyle>
            <Container>
                <div className="info">
                    <MyImage src={project.image} alt={project.title} />
                    <ul className="tags">
                        {[...project.tags].map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div className="btn-group">
                        {project.demoUrl && (
                            <Button
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt size={15} /> demo
                            </Button>
                        )}
                        {project.codeUrl && (
                            <Button
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> source code
                            </Button>
                        )}
                    </div>
                </div>
                <div className="content">
                    <h1 className="heading">{project.title}</h1>
                    <p>{project.description}</p>
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
            </Container>
        </ProjectdetailsStyle>
    );
};

export default page;

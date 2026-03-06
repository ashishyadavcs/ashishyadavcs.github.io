import Button from "@/components/Button";
import Container from "@/components/layout/Container";
import MyImage from "@/components/MyImage";
import ProjectdetailsStyle from "@/styles/projectdetails";
import projects from "public/config/projects";
import config from "public/config";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find(proj => proj.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | Portfolio",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: `${project.title} | ${config.seo.author.name} Portfolio`,
        description:
            project.description || `${project.title} - A project by ${config.seo.author.name}`,
        keywords: [
            project.title,
            ...(project.tags || []),
            "portfolio project",
            "web development",
            config.seo.author.name,
        ],
        openGraph: {
            title: `${project.title} | Portfolio`,
            description: project.description,
            url: `${config.seo.url}/projects/${slug}`,
            type: "article",
            images: project.image
                ? [
                      {
                          url: `${config.seo.url}${project.image}`,
                          width: 1200,
                          height: 630,
                          alt: project.title,
                      },
                  ]
                : undefined,
            article: {
                author: config.seo.author.name,
                tags: project.tags || [],
            },
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Portfolio`,
            description: project.description,
            creator: config.seo.author.twitter,
            images: project.image ? [`${config.seo.url}${project.image}`] : undefined,
        },
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
            {/* Hero */}
            <div className="project-hero">
                <Container>
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="separator">/</span>
                        <Link href="/projects">Projects</Link>
                        <span className="separator">/</span>
                        <span className="current">{project.title}</span>
                    </nav>
                    <h1>{project.title}</h1>
                    <p className="project-meta-desc">{project.description}</p>
                    <div className="hero-actions">
                        {project.demoUrl && (
                            <Button
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt size={14} /> Live Demo
                            </Button>
                        )}
                        {project.codeUrl && (
                            <Button
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                type="secondary"
                            >
                                <FaGithub size={16} /> Source Code
                            </Button>
                        )}
                    </div>
                </Container>
            </div>

            {/* Body */}
            <Container>
                <div className="project-body">
                    {/* Content */}
                    <div className="project-content">
                        <div dangerouslySetInnerHTML={{ __html: project.content }} />
                    </div>

                    {/* Sidebar */}
                    <aside className="project-sidebar">
                        <div className="sidebar-card">
                            {project.image && (
                                <MyImage
                                    src={project.image}
                                    alt={project.title}
                                    className="sidebar-image"
                                />
                            )}
                            <div className="sidebar-body">
                                <p className="sidebar-label">Technologies Used</p>
                                <ul className="tags">
                                    {[...project.tags].map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="sidebar-links">
                                    {project.demoUrl && (
                                        <Button
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            arrow
                                        >
                                            View Live
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </ProjectdetailsStyle>
    );
};

export default page;

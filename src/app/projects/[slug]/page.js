import Button from "@/app/components/Button";
import Container from "@/app/components/layout/Container";
import MyImage from "@/app/components/MyImage";
import ProjectdetailsStyle from "@/app/styles/projectdetails";
import projects from "public/data/projects";

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
                <MyImage src={project.image} alt={project.title} />
                <h1 className="heading">{project.title}</h1>
                <p>{project.description}</p>
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                <div className="btn-group">
                    <Button href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        demo
                    </Button>
                    <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        source code
                    </Button>
                </div>
            </Container>
        </ProjectdetailsStyle>
    );
};

export default page;

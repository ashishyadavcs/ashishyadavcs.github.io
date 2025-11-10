import React from "react";
import Container from "./components/layout/Container";
import ProjectList from "./components/ProjectList";
import projects from "public/config/projects";
import HomeStyle from "./styles/home";
import config from "public/config";
import MyImage from "./components/MyImage";
import Button from "./components/Button";
import { GoDownload } from "react-icons/go";
import Timeline from "./components/Timeline";

const page = () => {
    const { personal, experience } = config;
    return (
        <HomeStyle>
            <Container className="banner">
                <MyImage
                    className="profile"
                    height={200}
                    width={200}
                    src={personal.image}
                    alt={personal.name}
                />
                <h1 className="heading">Hi I'm {personal.name}</h1>
                <p className="title">{personal.title}</p>
                <p className="description">{personal.description}</p>
                <div className="btn-group center">
                    <Button arrow={true} href="/projects">
                        view my work
                    </Button>
                    <Button
                        href={personal.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="secondary"
                    >
                        download resume
                        <GoDownload />
                    </Button>
                </div>
            </Container>

            <Container>
                <section className="timeline-section">
                    <h2 className="section-heading">Work Experience</h2>
                    <p className="section-subtitle">My professional journey</p>
                    <Timeline data={experience} />
                </section>

                <section className="timeline-section">
                    <h2 className="section-heading">Education</h2>
                    <p className="section-subtitle">Academic background</p>
                    <Timeline data={personal.education} />
                </section>

                <section className="projects-section">
                    <ProjectList title="Featured Projects" projects={projects} />
                </section>
            </Container>
        </HomeStyle>
    );
};

export default page;

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
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import TypingEffect from "./components/TypingEffect";

const page = () => {
    const { personal, experience, skills, testimonials } = config;
    return (
        <HomeStyle>
            <Container className="banner">
                <MyImage
                    className="profile"
                    height={200}
                    width={200}
                    src={personal.image}
                    alt={personal.name}
                    priority
                />
                <div className="content">
                    <h1 className="heading">Hi I&apos;m {personal.name}</h1>
                    <p className="title">
                        <TypingEffect
                            texts={personal.typingTexts || [personal.title]}
                            typingSpeed={120}
                            deletingSpeed={60}
                            delayBetweenTexts={2000}
                            showCursor={true}
                            loop={true}
                        />
                    </p>
                    <p className="description">{personal.description}</p>
                    <div className="btn-group center">
                        <Button arrow={true} href="/projects">
                            View my work
                        </Button>
                        <Button
                            href={`tel:${personal.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            type="secondary"
                        >
                            Call Me
                            <GoDownload />
                        </Button>
                    </div>
                </div>
            </Container>

            <Container>
                <Skills skills={skills} />
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
                <Testimonials testimonials={testimonials} showStats={true} />
            </Container>
        </HomeStyle>
    );
};

export default page;

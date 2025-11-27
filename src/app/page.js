import React from "react";
import Container from "@/components/layout/Container";
import ProjectList from "@/components/ProjectList";
import projects from "public/config/projects";
import HomeStyle from "@/styles/home";
import config from "public/config";
import MyImage from "@/components/MyImage";
import Button from "@/components/Button";
import { GoDownload } from "react-icons/go";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import TypingEffect from "@/components/TypingEffect";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";

export const metadata = {
    title: config.seo.pages.home.title,
    description: config.seo.pages.home.description,
    keywords: config.seo.pages.home.keywords,
    openGraph: {
        title: config.seo.pages.home.title,
        description: config.seo.pages.home.description,
        url: config.seo.url,
        type: "website",
    },
};

const page = () => {
    const { personal, experience, skills, testimonials, certifications } = config;
    return (
        <HomeStyle>
            <Container className="banner">
                <MyImage
                    className="profile"
                    height={150}
                    width={150}
                    src={personal.image}
                    alt={personal.name || personal.title}
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
                        <Button href={"/contact"} type="secondary">
                            contact me
                            {/* <GoDownload /> */}
                        </Button>
                    </div>
                </div>
            </Container>

            <Container>
                <section className="timeline-section">
                    <h2 className="section-heading">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey - {personal.totalExperience}
                    </p>
                    <Timeline data={experience} />
                </section>

                <section className="timeline-section">
                    <h2 className="section-heading">Education</h2>
                    <p className="section-subtitle">Academic background</p>
                    <Timeline data={personal.education} />
                </section>
                <Skills skills={skills} />

                <Certifications certifications={certifications} showStats={false} />
            </Container>
            <ProjectList title="Featured Projects" projects={projects} />

            <Testimonials testimonials={testimonials} showStats={true} />

            <FAQ
                title="Frequently Asked Questions"
                showSearch={true}
                showFilters={true}
                limit={6}
            />
        </HomeStyle>
    );
};

export default page;

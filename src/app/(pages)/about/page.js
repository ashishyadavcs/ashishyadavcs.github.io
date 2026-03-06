import React from "react";
import AboutStyle from "@/styles/about";
import Timeline from "@/components/Timeline";
import Skills from "@/app/components/Skills";
import Certifications from "@/app/components/Certifications";
import config from "public/config";
import MyImage from "@/app/components/MyImage";
import Button from "@/app/components/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
    HiOutlineCode,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
    HiOutlineDownload,
    HiOutlineLightningBolt,
    HiOutlineSparkles,
    HiOutlineHeart,
} from "react-icons/hi";

export const metadata = {
    title: config.seo.pages.about.title,
    description: config.seo.pages.about.description,
    keywords: config.seo.pages.about.keywords,
    openGraph: {
        title: config.seo.pages.about.title,
        description: config.seo.pages.about.description,
        url: `${config.seo.url}/about`,
        type: "website",
    },
};

const page = () => {
    const { experience, personal, skills, certifications } = config;
    const { education } = personal;

    const highlights = [
        {
            icon: <HiOutlineBriefcase />,
            label: "Experience",
            value: personal.totalExperience,
        },
        {
            icon: <HiOutlineCode />,
            label: "Projects",
            value: `${config.projects.length}+`,
        },
        {
            icon: <HiOutlineAcademicCap />,
            label: "Certifications",
            value: `${certifications.length}`,
        },
    ];

    const philosophy = [
        {
            icon: <HiOutlineLightningBolt />,
            title: "Performance First",
            desc: "Every millisecond counts. I build blazing-fast apps optimized for Core Web Vitals.",
        },
        {
            icon: <HiOutlineSparkles />,
            title: "Pixel Perfect",
            desc: "From Figma to code — every detail, spacing, and animation is crafted with precision.",
        },
        {
            icon: <HiOutlineHeart />,
            title: "User Obsessed",
            desc: "Great UX isn\u2019t optional. I design experiences people genuinely enjoy using.",
        },
    ];

    return (
        <AboutStyle>
            {/* ── Hero ── */}
            <section className="about-hero">
                {/* decorative orbs */}
                <span className="orb orb-1" aria-hidden="true" />
                <span className="orb orb-2" aria-hidden="true" />
                <span className="orb orb-3" aria-hidden="true" />

                <div className="container hero-inner">
                    <div className="hero-text">
                        <span className="hero-badge">
                            <span className="badge-dot" /> Available for hire
                        </span>
                        <h1>
                            I&apos;m <span className="gradient-text">{personal.name}</span>
                        </h1>
                        <p className="hero-subtitle">{personal.description}</p>

                        <div className="hero-actions">
                            {personal.resume && (
                                <Button
                                    href={personal.resume}
                                    type="primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <HiOutlineDownload /> Resume
                                </Button>
                            )}
                            <Button href="/contact" type="secondary">
                                Get In Touch
                            </Button>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="card-glow" aria-hidden="true" />
                        <div className="profile-image-wrap">
                            <MyImage
                                className="profile-img"
                                height={200}
                                width={200}
                                src={personal.image}
                                alt={personal.name}
                                priority
                            />
                            <span className="status-dot" />
                        </div>
                        <h2 className="profile-title">{personal.title}</h2>
                        <p className="profile-location">📍 {personal.address}</p>
                        <div className="social-links">
                            {personal.socialMedia?.linkedin && (
                                <a
                                    href={personal.socialMedia.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                            )}
                            {personal.socialMedia?.github && (
                                <a
                                    href={personal.socialMedia.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                            )}
                            {personal.socialMedia?.twitter && (
                                <a
                                    href={personal.socialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                >
                                    <FaXTwitter />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* wave divider */}
                <div className="wave-divider" aria-hidden="true">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" />
                    </svg>
                </div>
            </section>

            {/* ── Highlights Strip ── */}
            <section className="highlights-strip">
                <div className="container">
                    <div className="highlights-grid">
                        {highlights.map((item, i) => (
                            <div key={i} className="highlight-item">
                                <span className="highlight-icon">{item.icon}</span>
                                <span className="highlight-value">{item.value}</span>
                                <span className="highlight-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About Me ── */}
            {personal.aboutme && (
                <section className="about-section">
                    <div className="container">
                        <h2 className="section-tag">&#47;&#47; About Me</h2>
                        <div className="about-card">
                            <div className="terminal-dots" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                            </div>
                            <div
                                className="about-text"
                                dangerouslySetInnerHTML={{ __html: personal.aboutme }}
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* ── Philosophy ── */}
            <section className="philosophy-section">
                <div className="container">
                    <h2 className="section-heading">My Philosophy</h2>
                    <p className="section-subtitle">Principles that drive every line of code</p>
                    <div className="philosophy-grid">
                        {philosophy.map((item, i) => (
                            <div key={i} className="philosophy-card">
                                <span className="phi-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Skills ── */}
            <section className="skills-wrap">
                <div className="container">
                    <Skills skills={skills} />
                </div>
            </section>

            {/* ── Experience ── */}
            <section className="experience-section">
                <div className="container">
                    <h2 className="section-heading">
                        Professional Experience ({personal.totalExperience})
                    </h2>
                    <p className="section-subtitle">My career journey and key contributions</p>
                    <Timeline data={experience} />
                </div>
            </section>

            {/* ── Education ── */}
            <section className="education-section">
                <div className="container">
                    <h2 className="section-heading">Education</h2>
                    <p className="section-subtitle">Academic background &amp; qualifications</p>
                    <Timeline data={education} />
                </div>
            </section>

            {/* ── Certifications ── */}
            <section className="certifications-wrapper">
                <div className="container">
                    <Certifications certifications={certifications} />
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="about-cta">
                <span className="cta-orb cta-orb-1" aria-hidden="true" />
                <span className="cta-orb cta-orb-2" aria-hidden="true" />
                <div className="container">
                    <h2>
                        Let&apos;s Build Something{" "}
                        <span className="gradient-text">Extraordinary</span>
                    </h2>
                    <p>
                        Looking for a developer who cares about quality, performance, and user
                        experience? Let&apos;s talk.
                    </p>
                    <div className="cta-buttons">
                        <Button href="/hire" type="primary" arrow>
                            Hire Me
                        </Button>
                        <Button href="/projects" type="secondary">
                            View Projects
                        </Button>
                    </div>
                </div>
            </section>
        </AboutStyle>
    );
};

export default page;

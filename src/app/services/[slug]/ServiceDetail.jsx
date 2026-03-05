"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { ServiceDetailStyle } from "@/styles/services";
import services from "public/config/services";
import {
    FiCheck,
    FiClock,
    FiDollarSign,
    FiLayers,
    FiCpu,
    FiTarget,
    FiChevronRight,
    FiArrowRight,
    FiShield,
    FiRefreshCw,
    FiHeadphones,
    FiCalendar,
    FiStar,
    FiGlobe,
    FiLayout,
    FiServer,
    FiLink2,
} from "react-icons/fi";

/* Map service slugs to proper React icons */
const SERVICE_ICON_MAP = {
    "web-development": <FiGlobe />,
    frontend: <FiLayout />,
    backend: <FiServer />,
    api: <FiLink2 />,
    ai: <FiCpu />,
};

const PROCESS_STEPS = [
    {
        title: "Discovery & Planning",
        description:
            "We start with a deep dive into your goals, audience, and requirements to build a clear roadmap.",
    },
    {
        title: "Architecture & Design",
        description:
            "I design the technical architecture and UI wireframes so you can visualize the solution before a single line of code is written.",
    },
    {
        title: "Development & Iteration",
        description:
            "Agile sprints with regular demos keep you in the loop. You'll review working software every week.",
    },
    {
        title: "Testing & Quality Assurance",
        description:
            "Rigorous testing across devices and edge cases ensures rock-solid reliability and performance.",
    },
    {
        title: "Launch & Support",
        description:
            "Smooth deployment with post-launch monitoring. I stick around to squash any bugs and fine-tune performance.",
    },
];

const TRUST_SIGNALS = [
    { icon: <FiShield />, text: "100% Secure & Confidential" },
    { icon: <FiRefreshCw />, text: "Free Revisions Included" },
    { icon: <FiHeadphones />, text: "Post-Launch Support" },
    { icon: <FiStar />, text: "5★ Average Rating" },
];

const ServiceDetailContent = ({ slug }) => {
    const service = services.find(s => s.slug === slug);

    if (!service) return null;

    const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

    return (
        <ServiceDetailStyle>
            {/* ── Hero ── */}
            <div className="hero">
                <Container>
                    <div className="hero-inner">
                        <div className="hero-icon" aria-hidden="true">
                            {SERVICE_ICON_MAP[service.slug] || service.icon}
                        </div>
                        <div className="hero-content">
                            <nav className="breadcrumb" aria-label="Breadcrumb">
                                <Link href="/services">Services</Link>
                                <FiChevronRight aria-hidden="true" />
                                <span aria-current="page">{service.title}</span>
                            </nav>

                            <h1>{service.title}</h1>
                            <p>{service.description}</p>

                            <div className="hero-meta">
                                <span className="meta-pill">
                                    <FiDollarSign aria-hidden="true" /> {service.price}
                                </span>
                                <span className="meta-pill">
                                    <FiClock aria-hidden="true" /> {service.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ── Body ── */}
            <Container>
                <div className="detail-body">
                    {/* Left Column */}
                    <main className="detail-main">
                        {/* Features */}
                        <div className="detail-card">
                            <h2 className="section-title">
                                <FiTarget aria-hidden="true" /> What&apos;s Included
                            </h2>
                            <div className="features-grid">
                                {service.features.map(feature => (
                                    <div className="feature-item" key={feature}>
                                        <span className="check-icon" aria-hidden="true">
                                            <FiCheck />
                                        </span>
                                        <span className="feature-text">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="detail-card">
                            <h2 className="section-title">
                                <FiCpu aria-hidden="true" /> Technology Stack
                            </h2>
                            <div className="tech-list" role="list">
                                {service.technologies.map(tech => (
                                    <span className="tech-chip" key={tech} role="listitem">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Process */}
                        <div className="detail-card">
                            <h2 className="section-title">
                                <FiLayers aria-hidden="true" /> How I Work
                            </h2>
                            <ol className="process-steps">
                                {PROCESS_STEPS.map((step, i) => (
                                    <li className="step" key={i}>
                                        <div className="step-marker" aria-hidden="true">
                                            <span className="step-number">{i + 1}</span>
                                            {i < PROCESS_STEPS.length - 1 && (
                                                <span className="step-line" />
                                            )}
                                        </div>
                                        <div className="step-content">
                                            <h4>{step.title}</h4>
                                            <p>{step.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Inline CTA Card */}
                        <div className="detail-card inline-cta-card">
                            <div className="inline-cta-content">
                                <h3>Ready to get started?</h3>
                                <p>
                                    Let&apos;s discuss your {service.title.toLowerCase()} needs and
                                    build something great together.
                                </p>
                                <div className="inline-cta-buttons">
                                    <Button href="/contact" arrow>
                                        Start Your Project
                                    </Button>
                                    <Button href="/schedule-meeting" type="secondary">
                                        <FiCalendar /> Book a Free Call
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Right Sidebar */}
                    <aside className="detail-sidebar">
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Project Details</h3>

                            <div className="info-row">
                                <span className="info-icon" aria-hidden="true">
                                    <FiDollarSign />
                                </span>
                                <div className="info-text">
                                    <span className="label">Investment</span>
                                    <span className="value">{service.price}</span>
                                </div>
                            </div>

                            <div className="info-row">
                                <span className="info-icon" aria-hidden="true">
                                    <FiClock />
                                </span>
                                <div className="info-text">
                                    <span className="label">Timeline</span>
                                    <span className="value">{service.duration}</span>
                                </div>
                            </div>

                            <div className="info-row">
                                <span className="info-icon" aria-hidden="true">
                                    <FiLayers />
                                </span>
                                <div className="info-text">
                                    <span className="label">Category</span>
                                    <span className="value" style={{ textTransform: "capitalize" }}>
                                        {service.category}
                                    </span>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="trust-signals">
                                {TRUST_SIGNALS.map((item, i) => (
                                    <div className="trust-item" key={i}>
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="sidebar-cta">
                                <Button href="/contact" arrow>
                                    Start This Project
                                </Button>
                            </div>

                            <div className="sidebar-alt-cta">
                                <span className="or-divider">or</span>
                                <Link href="/schedule-meeting" className="alt-link">
                                    <FiCalendar /> Schedule a free consultation
                                </Link>
                            </div>

                            {/* Guarantee Badge */}
                            <div className="guarantee-badge">
                                <FiShield className="guarantee-icon" />
                                <div>
                                    <strong>Satisfaction Guaranteed</strong>
                                    <p>
                                        Not happy with the result? I&apos;ll revise until you are —
                                        free of charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>

            {/* ── Related Services ── */}
            {relatedServices.length > 0 && (
                <section className="related-section" aria-label="Related services">
                    <Container>
                        <h2>Explore Other Services</h2>
                        <p className="related-subtitle">
                            Looking for something different? Check out these related offerings.
                        </p>
                        <div className="related-grid">
                            {relatedServices.map(rs => (
                                <Link
                                    href={`/services/${rs.slug}`}
                                    key={rs.id}
                                    className="related-card"
                                    aria-label={`View ${rs.title} service`}
                                >
                                    <span className="related-icon" aria-hidden="true">
                                        {SERVICE_ICON_MAP[rs.slug] || rs.icon}
                                    </span>
                                    <div className="related-info">
                                        <h3>{rs.title}</h3>
                                        <p>{rs.shortDescription}</p>
                                        <span className="related-arrow">
                                            View details <FiArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}
        </ServiceDetailStyle>
    );
};

export default ServiceDetailContent;

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
} from "react-icons/fi";

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
                        <div className="hero-icon">{service.icon}</div>
                        <div className="hero-content">
                            <div className="breadcrumb">
                                <Link href="/services">Services</Link>
                                <FiChevronRight />
                                <span>{service.title}</span>
                            </div>

                            <h1>{service.title}</h1>
                            <p>{service.description}</p>

                            <div className="hero-meta">
                                <span className="meta-pill">
                                    <FiDollarSign /> {service.price}
                                </span>
                                <span className="meta-pill">
                                    <FiClock /> {service.duration}
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
                    <div className="detail-main">
                        {/* Features */}
                        <div className="detail-card">
                            <h2 className="section-title">
                                <FiTarget /> What&apos;s Included
                            </h2>
                            <div className="features-grid">
                                {service.features.map(feature => (
                                    <div className="feature-item" key={feature}>
                                        <span className="check-icon">
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
                                <FiCpu /> Technology Stack
                            </h2>
                            <div className="tech-list">
                                {service.technologies.map(tech => (
                                    <span className="tech-chip" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Process */}
                        <div className="detail-card">
                            <h2 className="section-title">
                                <FiLayers /> How I Work
                            </h2>
                            <div className="process-steps">
                                {PROCESS_STEPS.map((step, i) => (
                                    <div className="step" key={i}>
                                        <div className="step-marker">
                                            <span className="step-number">{i + 1}</span>
                                            <span className="step-line" />
                                        </div>
                                        <div className="step-content">
                                            <h4>{step.title}</h4>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="detail-sidebar">
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Project Details</h3>

                            <div className="info-row">
                                <span className="info-icon">
                                    <FiDollarSign />
                                </span>
                                <div className="info-text">
                                    <span className="label">Investment</span>
                                    <span className="value">{service.price}</span>
                                </div>
                            </div>

                            <div className="info-row">
                                <span className="info-icon">
                                    <FiClock />
                                </span>
                                <div className="info-text">
                                    <span className="label">Timeline</span>
                                    <span className="value">{service.duration}</span>
                                </div>
                            </div>

                            <div className="info-row">
                                <span className="info-icon">
                                    <FiLayers />
                                </span>
                                <div className="info-text">
                                    <span className="label">Category</span>
                                    <span className="value" style={{ textTransform: "capitalize" }}>
                                        {service.category}
                                    </span>
                                </div>
                            </div>

                            <div className="sidebar-cta">
                                <Button href="/contact" arrow>
                                    Start This Project
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* ── Related Services ── */}
            {relatedServices.length > 0 && (
                <div className="related-section">
                    <Container>
                        <h2>Explore Other Services</h2>
                        <div className="related-grid">
                            {relatedServices.map(rs => (
                                <Link
                                    href={`/services/${rs.slug}`}
                                    key={rs.id}
                                    className="related-card"
                                >
                                    <span className="related-icon">{rs.icon}</span>
                                    <div className="related-info">
                                        <h3>{rs.title}</h3>
                                        <p>{rs.shortDescription}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </ServiceDetailStyle>
    );
};

export default ServiceDetailContent;

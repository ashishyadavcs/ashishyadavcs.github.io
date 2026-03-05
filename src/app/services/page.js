"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { ServicesPageStyle } from "@/styles/services";
import services from "public/config/services";
import {
    FiArrowRight,
    FiClock,
    FiDollarSign,
    FiCheck,
    FiZap,
    FiShield,
    FiRefreshCw,
    FiHeadphones,
    FiStar,
    FiMessageCircle,
    FiGlobe,
    FiLayout,
    FiServer,
    FiLink2,
    FiCpu,
    FiGrid,
} from "react-icons/fi";

/* Map service slugs to proper React icons */
const SERVICE_ICON_MAP = {
    "web-development": <FiGlobe />,
    frontend: <FiLayout />,
    backend: <FiServer />,
    api: <FiLink2 />,
    ai: <FiCpu />,
};

const CATEGORIES = [
    { key: "all", label: "All Services", icon: <FiGrid /> },
    { key: "development", label: "Web Dev", icon: <FiGlobe /> },
    { key: "frontend", label: "Frontend", icon: <FiLayout /> },
    { key: "backend", label: "Backend", icon: <FiServer /> },
    { key: "api", label: "API", icon: <FiLink2 /> },
    { key: "ai", label: "AI / ML", icon: <FiCpu /> },
];

const DIFFERENTIATORS = [
    {
        icon: <FiZap />,
        title: "Rapid Delivery",
        description: "Most projects launch within 2-4 weeks. You'll see working demos every week.",
    },
    {
        icon: <FiShield />,
        title: "Quality Guaranteed",
        description: "Clean, tested code with free revisions. Not satisfied? I'll make it right.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Transparent Process",
        description: "Daily updates, weekly demos, no surprises. You'll always know the status.",
    },
    {
        icon: <FiHeadphones />,
        title: "Post-Launch Support",
        description: "Every project includes 2 weeks of free bug-fix support after launch.",
    },
];

const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices = useMemo(
        () =>
            activeCategory === "all"
                ? services
                : services.filter(s => s.category === activeCategory),
        [activeCategory]
    );

    return (
        <ServicesPageStyle>
            {/* ── Hero ── */}
            <div className="hero">
                <Container>
                    <span className="hero-badge">
                        <span aria-hidden="true">&#10024;</span> Professional Services
                    </span>
                    <h1>Solutions That Deliver Real Results</h1>
                    <p>
                        From pixel-perfect front-ends to scalable APIs — I build end-to-end
                        solutions that load fast, rank high, and convert visitors into paying
                        customers.
                    </p>

                    <div className="hero-cta-row">
                        <Button href="/contact" arrow>
                            Get a Free Quote
                        </Button>
                        <Button href="/hire" type="secondary">
                            Explore Hiring Options
                        </Button>
                    </div>

                    <div className="hero-stats" aria-label="Key metrics">
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">99%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2-4wk</span>
                            <span className="stat-label">Avg. Delivery</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ── Category Filter ── */}
            <div
                className="category-filter"
                role="tablist"
                aria-label="Filter services by category"
            >
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.key}
                        className={`filter-btn ${activeCategory === cat.key ? "active" : ""}`}
                        onClick={() => setActiveCategory(cat.key)}
                        role="tab"
                        aria-selected={activeCategory === cat.key}
                    >
                        <span className="filter-icon" aria-hidden="true">
                            {cat.icon}
                        </span>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* ── Services Grid ── */}
            <Container>
                <div className="services-grid" role="tabpanel">
                    {filteredServices.map((service, idx) => (
                        <Link
                            href={`/services/${service.slug}`}
                            className={`service-card ${service.featured ? "is-featured" : ""}`}
                            key={service.id}
                            style={{ animationDelay: `${idx * 0.08}s` }}
                        >
                            {service.featured && (
                                <span className="featured-badge">
                                    <FiStar /> Popular
                                </span>
                            )}

                            <div className="card-body">
                                <div className="card-header">
                                    <div className="card-icon" aria-hidden="true">
                                        {SERVICE_ICON_MAP[service.slug] || service.icon}
                                    </div>
                                    <div className="card-header-text">
                                        <h3 className="card-title">{service.title}</h3>
                                        <span className="card-category">{service.category}</span>
                                    </div>
                                </div>

                                <p className="card-desc">{service.shortDescription}</p>

                                <ul className="card-features">
                                    {service.features.slice(0, 3).map((f, i) => (
                                        <li key={i}>
                                            <FiCheck className="check" aria-hidden="true" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="card-meta">
                                    <span className="meta-item">
                                        <FiDollarSign aria-hidden="true" />
                                        <span>{service.price}</span>
                                    </span>
                                    <span className="meta-item">
                                        <FiClock aria-hidden="true" />
                                        <span>{service.duration}</span>
                                    </span>
                                </div>

                                <div className="card-techs" aria-label="Technologies used">
                                    {service.technologies.slice(0, 4).map(tech => (
                                        <span className="tech-tag" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                    {service.technologies.length > 4 && (
                                        <span className="tech-tag more">
                                            +{service.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                <span className="card-cta">
                                    View details <FiArrowRight aria-hidden="true" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>

            {/* ── Why Choose Me ── */}
            <section className="differentiators-section">
                <Container>
                    <h2 className="section-heading">Why Clients Choose Me</h2>
                    <p className="section-subtitle">
                        I don&apos;t just write code — I deliver business outcomes
                    </p>
                    <div className="diff-grid">
                        {DIFFERENTIATORS.map((diff, i) => (
                            <div
                                className="diff-card"
                                key={i}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <div className="diff-icon">{diff.icon}</div>
                                <h3>{diff.title}</h3>
                                <p>{diff.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="cta-section">
                <Container>
                    <div className="cta-inner">
                        <span className="cta-badge">
                            <FiMessageCircle /> Free Consultation
                        </span>
                        <h2>Not sure which service you need?</h2>
                        <p>
                            Let&apos;s talk about your project. I&apos;ll recommend the right
                            approach, timeline, and tech stack — completely free, no strings
                            attached.
                        </p>
                        <div className="cta-buttons">
                            <Button href="/contact" arrow>
                                Get a Free Consultation
                            </Button>
                            <Button href="/schedule-meeting" type="secondary">
                                Schedule a Call
                            </Button>
                        </div>
                        <div className="cta-trust">
                            <span>
                                <FiCheck /> No commitment required
                            </span>
                            <span>
                                <FiCheck /> Response within 24 hours
                            </span>
                            <span>
                                <FiCheck /> Free project estimate
                            </span>
                        </div>
                    </div>
                </Container>
            </section>
        </ServicesPageStyle>
    );
};

export default ServicesPage;

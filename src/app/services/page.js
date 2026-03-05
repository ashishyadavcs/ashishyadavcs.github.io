"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { ServicesPageStyle } from "@/styles/services";
import services from "public/config/services";
import { FiArrowRight, FiClock, FiDollarSign } from "react-icons/fi";

const CATEGORIES = [
    { key: "all", label: "All Services" },
    { key: "development", label: "Web Dev" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "api", label: "API" },
    { key: "ai", label: "AI / ML" },
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
                        <span aria-hidden="true">&#10024;</span> What I Offer
                    </span>
                    <h1>Services Built to Grow Your Business</h1>
                    <p>
                        From pixel-perfect front-ends to rock-solid APIs, I deliver end-to-end
                        solutions that load fast, rank high, and convert visitors into customers.
                    </p>

                    <div className="hero-stats" aria-label="Key metrics">
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">99%</span>
                            <span className="stat-label">Satisfaction</span>
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
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* ── Services Grid ── */}
            <Container>
                <div className="services-grid" role="tabpanel">
                    {filteredServices.map((service, idx) => (
                        <div
                            className="service-card"
                            key={service.id}
                            style={{ animationDelay: `${idx * 0.08}s` }}
                        >
                            {service.featured && <span className="featured-badge">Popular</span>}

                            <div className="card-body">
                                <div className="card-header">
                                    <div className="card-icon" aria-hidden="true">
                                        {service.icon}
                                    </div>
                                    <div className="card-header-text">
                                        <h3 className="card-title">{service.title}</h3>
                                        <span className="card-category">{service.category}</span>
                                    </div>
                                </div>

                                <p className="card-desc">{service.shortDescription}</p>

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
                                        <span className="tech-tag">
                                            +{service.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                <Link
                                    href={`/services/${service.slug}`}
                                    className="card-cta"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    View details <FiArrowRight aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="cta-section">
                    <h2>Not sure which service you need?</h2>
                    <p>
                        Let&apos;s talk about your project. I&apos;ll recommend the right approach,
                        timeline, and tech stack — no strings attached.
                    </p>
                    <Button href="/contact" arrow>
                        Get a Free Consultation
                    </Button>
                </div>
            </Container>
        </ServicesPageStyle>
    );
};

export default ServicesPage;

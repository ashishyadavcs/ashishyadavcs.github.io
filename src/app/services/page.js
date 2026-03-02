"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { ServicesPageStyle } from "@/styles/services";
import services from "public/config/services";
import { FiArrowRight, FiClock, FiDollarSign } from "react-icons/fi";

const ServicesPage = () => {
    return (
        <ServicesPageStyle>
            {/* ── Hero ── */}
            <div className="hero">
                <Container>
                    <span className="hero-badge">What I Offer</span>
                    <h1>Services Built to Grow Your Business</h1>
                    <p>
                        From pixel-perfect front-ends to rock-solid APIs, I deliver end-to-end
                        solutions that load fast, rank high, and convert visitors into customers.
                    </p>
                </Container>
            </div>

            {/* ── Services Grid ── */}
            <Container>
                <div className="services-grid">
                    {services.map(service => (
                        <div className="service-card" key={service.id}>
                            <div className="card-icon">{service.icon}</div>

                            <h3 className="card-title">{service.title}</h3>

                            <p className="card-desc">{service.shortDescription}</p>

                            <div className="card-meta">
                                <span className="meta-item">
                                    <FiDollarSign />
                                    {service.price}
                                </span>
                                <span className="meta-item">
                                    <FiClock />
                                    {service.duration}
                                </span>
                            </div>

                            <div className="card-techs">
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

                            <Link href={`/services/${service.slug}`} className="card-cta">
                                Learn more <FiArrowRight />
                            </Link>
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

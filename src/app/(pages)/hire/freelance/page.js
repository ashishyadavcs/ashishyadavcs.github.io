"use client";
import React from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { FreelanceTrackStyle } from "@/styles/funnel";
import funnel from "public/config/funnel";
import config from "public/config";
import { FiCheck } from "react-icons/fi";

const FreelancePage = () => {
    if (!config.settings.enableFunnel) {
        return null;
    }

    const { freelance } = funnel;

    return (
        <FreelanceTrackStyle>
            {/* ── Hero ── */}
            <div className="track-hero">
                <Container>
                    <span className="hero-badge">
                        <span aria-hidden="true">🚀</span> {freelance.hero.badge}
                    </span>
                    <h1>{freelance.hero.headline}</h1>
                    <p>{freelance.hero.subheadline}</p>
                </Container>
            </div>

            {/* ── Value Propositions ── */}
            <div className="value-props">
                <Container>
                    <h2>Why Clients Choose Me</h2>
                    <p className="section-subtitle">
                        Delivering exceptional results, every single time
                    </p>
                    <div className="props-grid">
                        {freelance.valueProps.map((prop, i) => (
                            <div
                                className="prop-card"
                                key={i}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <span className="prop-icon" aria-hidden="true">
                                    {prop.icon}
                                </span>
                                <h3>{prop.title}</h3>
                                <p>{prop.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Pricing Packages ── */}
            <div className="packages-section">
                <Container>
                    <h2>Transparent Pricing</h2>
                    <p className="section-subtitle">Clear scope, fair pricing, no hidden costs</p>
                    <div className="packages-grid">
                        {freelance.packages.map((pkg, i) => (
                            <div
                                className={`package-card ${pkg.highlighted ? "highlighted" : ""}`}
                                key={i}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {pkg.highlighted && (
                                    <span className="popular-badge">Most Popular</span>
                                )}
                                <h3 className="package-name">{pkg.name}</h3>
                                <div className="package-price">{pkg.price}</div>
                                <div className="package-duration">{pkg.duration}</div>
                                <p className="package-description">{pkg.description}</p>
                                <ul className="features-list">
                                    {pkg.features.map((feature, j) => (
                                        <li key={j}>
                                            <FiCheck className="check" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button href="/contact" arrow>
                                    Get Started
                                </Button>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Engagement Models ── */}
            <div className="engagement-models">
                <Container>
                    <h2>Flexible Engagement Models</h2>
                    <div className="models-grid">
                        {freelance.engagementModels.map((model, i) => (
                            <div
                                className="model-card"
                                key={i}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <h3>{model.title}</h3>
                                <p className="model-description">{model.description}</p>
                                <span className="best-for">Best for: {model.bestFor}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Process ── */}
            <div className="process-section">
                <Container>
                    <h2>How We&apos;ll Work Together</h2>
                    <div className="process-timeline">
                        {freelance.process.map((step, i) => (
                            <div
                                className="process-step"
                                key={i}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="step-number">{step.step}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <span className="duration">⏱ {step.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="bottom-cta">
                <Container>
                    <h2>{freelance.cta.headline}</h2>
                    <p>{freelance.cta.subheadline}</p>
                    <div className="cta-buttons">
                        <Button href={freelance.cta.primaryButton.href}>
                            {freelance.cta.primaryButton.label}
                        </Button>
                        <Button href={freelance.cta.secondaryButton.href} type="secondary">
                            {freelance.cta.secondaryButton.label}
                        </Button>
                    </div>
                </Container>
            </div>
        </FreelanceTrackStyle>
    );
};

export default FreelancePage;

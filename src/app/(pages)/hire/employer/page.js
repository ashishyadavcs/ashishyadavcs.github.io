"use client";
import React from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { EmployerTrackStyle } from "@/styles/funnel";
import funnel from "public/config/funnel";
import config from "public/config";
import { FiCheck } from "react-icons/fi";

const EmployerPage = () => {
    if (!config.settings.enableFunnel) {
        return null;
    }

    const { employer } = funnel;

    return (
        <EmployerTrackStyle>
            {/* ── Hero ── */}
            <div className="track-hero">
                <Container>
                    <span className="hero-badge">
                        <span aria-hidden="true">🏢</span> {employer.hero.badge}
                    </span>
                    <h1>{employer.hero.headline}</h1>
                    <p>{employer.hero.subheadline}</p>
                </Container>
            </div>

            {/* ── Value Propositions ── */}
            <div className="value-props">
                <Container>
                    <h2>Why I&apos;ll Be a Great Addition to Your Team</h2>
                    <p className="section-subtitle">
                        Here&apos;s what sets me apart from other candidates
                    </p>
                    <div className="props-grid">
                        {employer.valueProps.map((prop, i) => (
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

            {/* ── Tech Stack ── */}
            <div className="tech-stack">
                <Container>
                    <h2>My Technical Arsenal</h2>
                    <div className="stack-grid">
                        {employer.techStack.map((tech, i) => (
                            <div className="stack-item" key={i}>
                                {tech.name}
                                <span className={`level ${tech.level.toLowerCase()}`}>
                                    {tech.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Hiring Process ── */}
            <div className="process-section">
                <Container>
                    <h2>Simple Hiring Process</h2>
                    <div className="process-timeline">
                        {employer.process.map((step, i) => (
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

            {/* ── What I'm Looking For ── */}
            <div className="ideal-role">
                <Container>
                    <h2>{employer.idealRole.title}</h2>
                    <ul className="role-list">
                        {employer.idealRole.items.map((item, i) => (
                            <li key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                                <FiCheck className="check-icon" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="bottom-cta">
                <Container>
                    <h2>{employer.cta.headline}</h2>
                    <p>{employer.cta.subheadline}</p>
                    <div className="cta-buttons">
                        <Button href={employer.cta.primaryButton.href}>
                            {employer.cta.primaryButton.label}
                        </Button>
                        <Button
                            href={employer.cta.secondaryButton.href}
                            type="secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {employer.cta.secondaryButton.label}
                        </Button>
                    </div>
                </Container>
            </div>
        </EmployerTrackStyle>
    );
};

export default EmployerPage;

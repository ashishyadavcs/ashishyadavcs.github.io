"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";
import { HireLandingStyle } from "@/styles/funnel";
import funnel from "public/config/funnel";
import config from "public/config";
import { FiArrowRight, FiBriefcase, FiZap } from "react-icons/fi";

const trackIcons = {
    employer: FiBriefcase,
    freelance: FiZap,
};

const HirePage = () => {
    if (!config.settings.enableFunnel) {
        return null;
    }

    const { hero, tracks, socialProof } = funnel;

    return (
        <HireLandingStyle>
            {/* ── Hero ── */}
            <div className="funnel-hero">
                <Container>
                    <span className="hero-badge">
                        <span aria-hidden="true">✨</span> {hero.badge}
                    </span>
                    <h1>{hero.headline}</h1>
                    <p>{hero.subheadline}</p>
                    <div className="hero-stats" aria-label="Key metrics">
                        {hero.stats.map((stat, i) => (
                            <div className="stat-item" key={i}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Track Cards ── */}
            <div className="tracks-section">
                <div className="tracks-grid">
                    {tracks.map(track => {
                        const Icon = trackIcons[track.id];
                        return (
                            <Link
                                href={track.href}
                                key={track.id}
                                className="track-card"
                                aria-label={track.title}
                            >
                                <span className="track-icon" aria-hidden="true">
                                    <Icon size={28} />
                                </span>
                                <h3>{track.title}</h3>
                                <p>{track.shortDescription}</p>
                                <Button arrow>{track.cta}</Button>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* ── Social Proof ── */}
            <div className="social-proof">
                <Container>
                    <h2>{socialProof.title}</h2>
                    <div className="metrics-grid">
                        {socialProof.metrics.map((metric, i) => (
                            <div className="metric-item" key={i}>
                                <span className="metric-number">{metric.number}</span>
                                <span className="metric-label">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="bottom-cta">
                <Container>
                    <h2>Not Sure Which Option Fits?</h2>
                    <p>
                        No worries — let&apos;s have a quick conversation and figure out the best
                        way to work together.
                    </p>
                    <div className="cta-buttons">
                        <Button href="/schedule-meeting">Schedule a Call</Button>
                        <Button href="/contact" type="secondary">
                            Send a Message
                        </Button>
                    </div>
                </Container>
            </div>
        </HireLandingStyle>
    );
};

export default HirePage;

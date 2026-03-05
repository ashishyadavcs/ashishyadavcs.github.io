"use client";
import React from "react";
import Link from "next/link";
import { FunnelCTABannerStyle } from "@/styles/funnel";
import funnel from "public/config/funnel";
import config from "public/config";
import {
    FiArrowRight,
    FiBriefcase,
    FiZap,
    FiCheckCircle,
    FiAward,
    FiClock,
    FiUsers,
    FiStar,
} from "react-icons/fi";

const trackIcons = {
    employer: FiBriefcase,
    freelance: FiZap,
};

const metricIcons = [FiAward, FiUsers, FiClock, FiStar];

const FunnelCTABanner = () => {
    if (!config.settings.enableFunnel) {
        return null;
    }

    const { ctaBanner, tracks, socialProof } = funnel;

    return (
        <FunnelCTABannerStyle>
            {/* ── Background mesh ── */}
            <div className="bg-mesh" aria-hidden="true" />

            {/* ── Header ── */}
            <div className="cta-content">
                <span className="section-badge">
                    <span className="pulse-dot" aria-hidden="true" />
                    Available Now
                </span>
                <h2>{ctaBanner.headline}</h2>
                <p>{ctaBanner.subheadline}</p>
            </div>

            {/* ── Track Cards ── */}
            <div className="tracks-row">
                {tracks.map((track, idx) => {
                    const Icon = trackIcons[track.id];
                    return (
                        <Link
                            href={track.href}
                            key={track.id}
                            className="track-card"
                            aria-label={track.title}
                        >
                            <div className="track-icon-wrap">
                                <Icon size={28} />
                            </div>
                            <h3>{track.title}</h3>
                            <p>{track.shortDescription}</p>

                            {track.highlights && (
                                <ul className="track-highlights">
                                    {track.highlights.map((h, i) => (
                                        <li key={i}>
                                            <FiCheckCircle size={14} />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <span className="track-cta">
                                {track.cta} <FiArrowRight />
                            </span>
                        </Link>
                    );
                })}

                {/* ── OR Divider (desktop) ── */}
                <div className="or-divider" aria-hidden="true">
                    <span>OR</span>
                </div>
            </div>

            {/* ── Trust Metrics ── */}
            <div className="trust-metrics">
                {socialProof.metrics.map((metric, i) => {
                    const MIcon = metricIcons[i] || FiStar;
                    return (
                        <div className="metric" key={i}>
                            <span className="metric-icon">
                                <MIcon size={16} />
                            </span>
                            <span className="metric-value">{metric.number}</span>
                            <span className="metric-label">{metric.label}</span>
                        </div>
                    );
                })}
            </div>
        </FunnelCTABannerStyle>
    );
};

export default FunnelCTABanner;

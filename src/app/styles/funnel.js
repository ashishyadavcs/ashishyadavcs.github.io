"use client";
import styled, { css, keyframes } from "styled-components";
import media from "@/app/config/media";

const gradient = "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)";

/* ── Animations ──────────────────────────────────────── */
const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 0.4; }
    50%      { opacity: 0.7; }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
`;

const shimmer = keyframes`
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

/* ── Card base mixin ─────────────────────────────────── */
const cardBase = css`
    background: #ffffff;
    border-radius: 20px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 8px 32px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
    transition:
        transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
        border-color 0.35s ease;
`;

/* ═══════════════════════════════════════════════════════
   ── Main Hire Landing Page ────────────────────────────
   ═══════════════════════════════════════════════════════ */
export const HireLandingStyle = styled.section`
    /* ── Hero ── */
    .funnel-hero {
        background: ${gradient};
        padding: 96px 0 180px;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 700px;
            height: 700px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
            top: -250px;
            right: -200px;
            animation: ${pulse} 6s ease-in-out infinite;
            pointer-events: none;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 120px;
            background: linear-gradient(to top, #f8f9fc, transparent);
        }

        ${media.sm} {
            padding: 56px 0 140px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.14);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.22);
            border-radius: 40px;
            padding: 10px 22px;
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            margin-bottom: 28px;
            animation: ${fadeInUp} 0.6s ease-out both;
        }

        h1 {
            font-size: clamp(2.2rem, 5vw, 3.6rem);
            font-weight: 800;
            margin: 0 0 22px;
            line-height: 1.15;
            letter-spacing: -0.02em;
            animation: ${fadeInUp} 0.6s ease-out 0.1s both;
        }

        p {
            max-width: 640px;
            margin: 0 auto;
            font-size: 1.15rem;
            line-height: 1.7;
            padding: 0 20px;
            color: rgba(255, 255, 255, 0.92);
            animation: ${fadeInUp} 0.6s ease-out 0.2s both;

            ${media.sm} {
                font-size: 1rem;
            }
        }

        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 40px;
            animation: ${fadeInUp} 0.6s ease-out 0.35s both;

            ${media.sm} {
                gap: 20px;
                margin-top: 28px;
                flex-wrap: wrap;
            }
        }

        .stat-item {
            text-align: center;

            .stat-number {
                display: block;
                font-size: 1.8rem;
                font-weight: 800;
                letter-spacing: -0.02em;
            }

            .stat-label {
                font-size: 0.8rem;
                opacity: 0.82;
                font-weight: 500;
                letter-spacing: 0.4px;
                text-transform: uppercase;
                margin-top: 2px;
            }
        }
    }

    /* ── Track Cards ── */
    .tracks-section {
        max-width: 900px;
        margin: -100px auto 0;
        padding: 0 20px 80px;
        position: relative;
        z-index: 2;

        .tracks-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;

            ${media.sm} {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }

        .track-card {
            ${cardBase};
            padding: 40px 32px;
            text-align: center;
            cursor: pointer;
            animation: ${fadeInUp} 0.6s ease-out both;

            &:nth-child(2) {
                animation-delay: 0.1s;
            }

            &:hover {
                transform: translateY(-6px);
                box-shadow:
                    0 12px 40px rgba(255, 0, 128, 0.15),
                    0 4px 12px rgba(0, 0, 0, 0.08);
                border-color: rgba(255, 0, 128, 0.2);
            }

            .track-icon {
                width: 56px;
                height: 56px;
                border-radius: 16px;
                background: ${gradient};
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                color: #fff;
                box-shadow: 0 4px 16px rgba(255, 0, 128, 0.2);
            }

            h3 {
                font-size: 1.4rem;
                font-weight: 700;
                margin-bottom: 12px;
                color: #1a1a2e;
            }

            p {
                color: #666;
                font-size: 0.95rem;
                line-height: 1.6;
                margin-bottom: 24px;
            }
        }
    }

    /* ── Social Proof ── */
    .social-proof {
        background: #f8f9fc;
        padding: 64px 0;
        text-align: center;

        h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1a1a2e;
            margin-bottom: 40px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .metrics-grid {
            display: flex;
            justify-content: center;
            gap: 60px;
            flex-wrap: wrap;

            ${media.sm} {
                gap: 30px;
            }
        }

        .metric-item {
            .metric-number {
                display: block;
                font-size: 2.4rem;
                font-weight: 800;
                background: ${gradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .metric-label {
                font-size: 0.85rem;
                color: #666;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-top: 4px;
            }
        }
    }

    /* ── Bottom CTA ── */
    .bottom-cta {
        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1b3d 100%);
        padding: 80px 20px;
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.08) 0%, transparent 70%);
            top: -150px;
            right: -100px;
            pointer-events: none;
        }

        h2 {
            font-size: clamp(1.8rem, 4vw, 2.6rem);
            font-weight: 800;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
        }

        p {
            max-width: 560px;
            margin: 0 auto 36px;
            font-size: 1.1rem;
            opacity: 0.8;
            line-height: 1.6;
            position: relative;
            z-index: 1;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;

            /* Primary button — gradient pops on dark bg */
            .btn.primary {
                background: ${gradient};
                color: #fff;
                box-shadow: 0 8px 28px rgba(255, 0, 128, 0.4);

                &:hover {
                    box-shadow: 0 12px 36px rgba(255, 0, 128, 0.55);
                }
            }

            /* Secondary — white outline for contrast */
            .btn.secondary,
            .btn[data-type="secondary"] {
                background: transparent;
                color: #fff;
                border: 2px solid rgba(255, 255, 255, 0.5);

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #fff;
                    color: #fff;
                }
            }
        }
    }
`;

/* ═══════════════════════════════════════════════════════
   ── Employer Track Page ───────────────────────────────
   ═══════════════════════════════════════════════════════ */
export const EmployerTrackStyle = styled.section`
    /* ── Hero ── */
    .track-hero {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        padding: 96px 0 120px;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.12) 0%, transparent 70%);
            top: -150px;
            left: -100px;
            animation: ${pulse} 5s ease-in-out infinite;
            pointer-events: none;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to top, #fff, transparent);
        }

        ${media.sm} {
            padding: 56px 0 90px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 0, 128, 0.15);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 0, 128, 0.3);
            border-radius: 40px;
            padding: 10px 22px;
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            margin-bottom: 28px;
            color: #ff0080;
            animation: ${fadeInUp} 0.6s ease-out both;
        }

        h1 {
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            font-weight: 800;
            margin: 0 0 20px;
            line-height: 1.15;
            letter-spacing: -0.02em;
            animation: ${fadeInUp} 0.6s ease-out 0.1s both;
        }

        p {
            max-width: 600px;
            margin: 0 auto;
            font-size: 1.1rem;
            line-height: 1.7;
            padding: 0 20px;
            opacity: 0.85;
            animation: ${fadeInUp} 0.6s ease-out 0.2s both;

            ${media.sm} {
                font-size: 1rem;
            }
        }
    }

    /* ── Value Props Grid ── */
    .value-props {
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 12px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.05rem;
            margin-bottom: 48px;
        }

        .props-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;

            ${media.md} {
                grid-template-columns: repeat(2, 1fr);
            }

            ${media.sm} {
                grid-template-columns: 1fr;
                gap: 16px;
            }
        }

        .prop-card {
            ${cardBase};
            padding: 32px 28px;
            animation: ${fadeInUp} 0.5s ease-out both;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
            }

            .prop-icon {
                font-size: 2.2rem;
                margin-bottom: 16px;
                display: block;
            }

            h3 {
                font-size: 1.15rem;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 10px;
            }

            p {
                color: #555;
                font-size: 0.92rem;
                line-height: 1.6;
            }
        }
    }

    /* ── Tech Stack ── */
    .tech-stack {
        background: #f8f9fc;
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 40px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stack-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            max-width: 700px;
            margin: 0 auto;
        }

        .stack-item {
            ${cardBase};
            padding: 14px 24px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 0.9rem;
            color: #1a1a2e;

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 0, 128, 0.2);
            }

            .level {
                font-size: 0.72rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                padding: 3px 10px;
                border-radius: 20px;
                background: rgba(255, 0, 128, 0.08);
                color: #ff0080;
            }

            .level.expert {
                background: rgba(255, 0, 128, 0.12);
                color: #d6006c;
            }

            .level.advanced {
                background: rgba(121, 40, 202, 0.1);
                color: #7928ca;
            }

            .level.intermediate {
                background: rgba(0, 128, 128, 0.1);
                color: #008080;
            }
        }
    }

    /* ── Process ── */
    .process-section {
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 48px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .process-timeline {
            max-width: 700px;
            margin: 0 auto;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                left: 28px;
                top: 0;
                bottom: 0;
                width: 3px;
                background: ${gradient};
                border-radius: 3px;

                ${media.sm} {
                    left: 20px;
                }
            }
        }

        .process-step {
            display: flex;
            gap: 24px;
            margin-bottom: 36px;
            animation: ${fadeInUp} 0.5s ease-out both;

            ${media.sm} {
                gap: 16px;
            }

            .step-number {
                width: 56px;
                height: 56px;
                min-width: 56px;
                border-radius: 50%;
                background: ${gradient};
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                font-weight: 800;
                position: relative;
                z-index: 1;
                box-shadow: 0 4px 16px rgba(255, 0, 128, 0.3);

                ${media.sm} {
                    width: 40px;
                    height: 40px;
                    min-width: 40px;
                    font-size: 0.95rem;
                }
            }

            .step-content {
                ${cardBase};
                padding: 24px 28px;
                flex: 1;

                h3 {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #1a1a2e;
                    margin-bottom: 8px;
                }

                p {
                    font-size: 0.92rem;
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 8px;
                }

                .duration {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #ff0080;
                    text-transform: uppercase;
                    letter-spacing: 0.4px;
                }
            }
        }
    }

    /* ── Ideal Role ── */
    .ideal-role {
        background: #f8f9fc;
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 40px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .role-list {
            max-width: 600px;
            margin: 0 auto;
            list-style: none;
            padding: 0;

            li {
                display: flex;
                align-items: flex-start;
                gap: 14px;
                padding: 16px 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.06);
                font-size: 1rem;
                color: #333;
                line-height: 1.5;
                animation: ${fadeInUp} 0.4s ease-out both;

                &:last-child {
                    border-bottom: none;
                }

                .check-icon {
                    color: #ff0080;
                    font-size: 1.2rem;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
            }
        }
    }

    /* ── Bottom CTA ── */
    .bottom-cta {
        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1b3d 100%);
        padding: 80px 20px;
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.08) 0%, transparent 70%);
            top: -150px;
            right: -100px;
            pointer-events: none;
        }

        h2 {
            font-size: clamp(1.8rem, 4vw, 2.6rem);
            font-weight: 800;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
        }

        p {
            max-width: 560px;
            margin: 0 auto 36px;
            font-size: 1.1rem;
            opacity: 0.8;
            line-height: 1.6;
            position: relative;
            z-index: 1;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;

            .btn.primary {
                background: ${gradient};
                color: #fff;
                box-shadow: 0 8px 28px rgba(255, 0, 128, 0.4);

                &:hover {
                    box-shadow: 0 12px 36px rgba(255, 0, 128, 0.55);
                }
            }

            .btn.secondary,
            .btn[data-type="secondary"] {
                background: transparent;
                color: #fff;
                border: 2px solid rgba(255, 255, 255, 0.5);

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #fff;
                    color: #fff;
                }
            }
        }
    }
`;

/* ═══════════════════════════════════════════════════════
   ── Freelance Track Page ──────────────────────────────
   ═══════════════════════════════════════════════════════ */
export const FreelanceTrackStyle = styled.section`
    /* ── Hero ── */
    .track-hero {
        background: linear-gradient(135deg, #0f0f23 0%, #1a0a2e 50%, #2d1b69 100%);
        padding: 96px 0 120px;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%);
            bottom: -200px;
            right: -100px;
            animation: ${pulse} 5s ease-in-out infinite;
            pointer-events: none;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to top, #fff, transparent);
        }

        ${media.sm} {
            padding: 56px 0 90px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(121, 40, 202, 0.2);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(121, 40, 202, 0.35);
            border-radius: 40px;
            padding: 10px 22px;
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            margin-bottom: 28px;
            color: #c084fc;
            animation: ${fadeInUp} 0.6s ease-out both;
        }

        h1 {
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            font-weight: 800;
            margin: 0 0 20px;
            line-height: 1.15;
            letter-spacing: -0.02em;
            animation: ${fadeInUp} 0.6s ease-out 0.1s both;
        }

        p {
            max-width: 620px;
            margin: 0 auto;
            font-size: 1.1rem;
            line-height: 1.7;
            padding: 0 20px;
            opacity: 0.85;
            animation: ${fadeInUp} 0.6s ease-out 0.2s both;

            ${media.sm} {
                font-size: 1rem;
            }
        }
    }

    /* ── Value Props ── */
    .value-props {
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 12px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.05rem;
            margin-bottom: 48px;
        }

        .props-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;

            ${media.md} {
                grid-template-columns: repeat(2, 1fr);
            }

            ${media.sm} {
                grid-template-columns: 1fr;
                gap: 16px;
            }
        }

        .prop-card {
            ${cardBase};
            padding: 32px 28px;
            animation: ${fadeInUp} 0.5s ease-out both;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
            }

            .prop-icon {
                font-size: 2.2rem;
                margin-bottom: 16px;
                display: block;
            }

            h3 {
                font-size: 1.15rem;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 10px;
            }

            p {
                color: #555;
                font-size: 0.92rem;
                line-height: 1.6;
            }
        }
    }

    /* ── Pricing Packages ── */
    .packages-section {
        background: #f8f9fc;
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 12px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.05rem;
            margin-bottom: 48px;
        }

        .packages-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            align-items: start;

            ${media.md} {
                grid-template-columns: 1fr;
                max-width: 480px;
                margin: 0 auto;
                gap: 20px;
            }
        }

        .package-card {
            ${cardBase};
            padding: 36px 28px;
            text-align: center;
            position: relative;
            animation: ${fadeInUp} 0.5s ease-out both;

            &.highlighted {
                border: 2px solid #ff0080;
                box-shadow: 0 12px 40px rgba(255, 0, 128, 0.15);
                transform: scale(1.03);

                ${media.md} {
                    transform: none;
                }
            }

            .popular-badge {
                position: absolute;
                top: -12px;
                left: 50%;
                transform: translateX(-50%);
                background: ${gradient};
                color: #fff;
                font-size: 0.72rem;
                font-weight: 700;
                letter-spacing: 0.8px;
                text-transform: uppercase;
                padding: 5px 18px;
                border-radius: 20px;
                box-shadow: 0 4px 12px rgba(255, 0, 128, 0.3);
            }

            .package-name {
                font-size: 1.3rem;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 8px;
                margin-top: 8px;
            }

            .package-price {
                font-size: 2rem;
                font-weight: 800;
                background: ${gradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 6px;
            }

            .package-duration {
                font-size: 0.85rem;
                color: #999;
                font-weight: 500;
                margin-bottom: 12px;
            }

            .package-description {
                font-size: 0.9rem;
                color: #666;
                line-height: 1.5;
                margin-bottom: 24px;
            }

            .features-list {
                list-style: none;
                padding: 0;
                text-align: left;
                margin-bottom: 28px;

                li {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    padding: 8px 0;
                    font-size: 0.88rem;
                    color: #444;
                    line-height: 1.4;

                    .check {
                        color: #ff0080;
                        font-weight: 700;
                        flex-shrink: 0;
                        margin-top: 1px;
                    }
                }
            }
        }
    }

    /* ── Engagement Models ── */
    .engagement-models {
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 48px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .models-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;

            ${media.md} {
                grid-template-columns: 1fr;
                max-width: 500px;
                margin: 0 auto;
            }
        }

        .model-card {
            ${cardBase};
            padding: 32px 28px;
            text-align: center;
            animation: ${fadeInUp} 0.5s ease-out both;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
            }

            h3 {
                font-size: 1.2rem;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 12px;
            }

            .model-description {
                font-size: 0.92rem;
                color: #555;
                line-height: 1.6;
                margin-bottom: 16px;
            }

            .best-for {
                font-size: 0.82rem;
                font-weight: 600;
                color: #ff0080;
                background: rgba(255, 0, 128, 0.06);
                padding: 8px 16px;
                border-radius: 8px;
                display: inline-block;
            }
        }
    }

    /* ── Process ── */
    .process-section {
        background: #f8f9fc;
        padding: 80px 0;

        h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 48px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .process-timeline {
            max-width: 700px;
            margin: 0 auto;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                left: 28px;
                top: 0;
                bottom: 0;
                width: 3px;
                background: ${gradient};
                border-radius: 3px;

                ${media.sm} {
                    left: 20px;
                }
            }
        }

        .process-step {
            display: flex;
            gap: 24px;
            margin-bottom: 36px;
            animation: ${fadeInUp} 0.5s ease-out both;

            ${media.sm} {
                gap: 16px;
            }

            .step-number {
                width: 56px;
                height: 56px;
                min-width: 56px;
                border-radius: 50%;
                background: ${gradient};
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                font-weight: 800;
                position: relative;
                z-index: 1;
                box-shadow: 0 4px 16px rgba(255, 0, 128, 0.3);

                ${media.sm} {
                    width: 40px;
                    height: 40px;
                    min-width: 40px;
                    font-size: 0.95rem;
                }
            }

            .step-content {
                ${cardBase};
                padding: 24px 28px;
                flex: 1;

                h3 {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #1a1a2e;
                    margin-bottom: 8px;
                }

                p {
                    font-size: 0.92rem;
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 8px;
                }

                .duration {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #ff0080;
                    text-transform: uppercase;
                    letter-spacing: 0.4px;
                }
            }
        }
    }

    /* ── Bottom CTA ── */
    .bottom-cta {
        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1b3d 100%);
        padding: 80px 20px;
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(121, 40, 202, 0.08) 0%, transparent 70%);
            bottom: -150px;
            left: -100px;
            pointer-events: none;
        }

        h2 {
            font-size: clamp(1.8rem, 4vw, 2.6rem);
            font-weight: 800;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
        }

        p {
            max-width: 560px;
            margin: 0 auto 36px;
            font-size: 1.1rem;
            opacity: 0.8;
            line-height: 1.6;
            position: relative;
            z-index: 1;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;

            .btn.primary {
                background: ${gradient};
                color: #fff;
                box-shadow: 0 8px 28px rgba(255, 0, 128, 0.4);

                &:hover {
                    box-shadow: 0 12px 36px rgba(255, 0, 128, 0.55);
                }
            }

            .btn.secondary,
            .btn[data-type="secondary"] {
                background: transparent;
                color: #fff;
                border: 2px solid rgba(255, 255, 255, 0.5);

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #fff;
                    color: #fff;
                }
            }
        }
    }
`;

/* ═══════════════════════════════════════════════════════
   ── Homepage Choosing Flow Banner ─────────────────────
   ═══════════════════════════════════════════════════════ */
export const FunnelCTABannerStyle = styled.section`
    background: linear-gradient(135deg, #0f0c29 0%, #1a1a2e 35%, #16213e 65%, #0f3460 100%);
    padding: 72px 20px 56px;
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
    margin: 60px 0;
    border-radius: 24px;

    /* ── Ambient glow orbs ── */
    &::before {
        content: "";
        position: absolute;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 0, 128, 0.12) 0%, transparent 65%);
        top: -250px;
        right: -200px;
        pointer-events: none;
        animation: ${pulse} 4s ease-in-out infinite;
    }

    &::after {
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(121, 40, 202, 0.12) 0%, transparent 65%);
        bottom: -200px;
        left: -150px;
        pointer-events: none;
        animation: ${pulse} 4s ease-in-out infinite 2s;
    }

    /* ── Background mesh pattern ── */
    .bg-mesh {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 48px 48px;
        pointer-events: none;
        mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%);
        -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%);
    }

    /* ── Header ── */
    .cta-content {
        position: relative;
        z-index: 1;
        margin-bottom: 44px;
    }

    .section-badge {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: rgba(16, 185, 129, 0.12);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 40px;
        padding: 8px 22px;
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        margin-bottom: 24px;
        color: #6ee7b7;
        animation: ${fadeInUp} 0.5s ease-out both;
    }

    .pulse-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #10b981;
        display: inline-block;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            inset: -3px;
            border-radius: 50%;
            border: 2px solid rgba(16, 185, 129, 0.4);
            animation: ${pulse} 1.5s ease-in-out infinite;
        }
    }

    h2 {
        font-size: clamp(1.7rem, 3.8vw, 2.6rem);
        font-weight: 800;
        margin-bottom: 16px;
        letter-spacing: -0.02em;
        line-height: 1.2;
        animation: ${fadeInUp} 0.5s ease-out 0.05s both;
    }

    .cta-content > p {
        max-width: 560px;
        margin: 0 auto;
        font-size: 1.05rem;
        opacity: 0.78;
        line-height: 1.7;
        animation: ${fadeInUp} 0.5s ease-out 0.1s both;
    }

    /* ── Track Cards Row ── */
    .tracks-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        max-width: 820px;
        margin: 0 auto 48px;
        position: relative;
        z-index: 1;

        ${media.sm} {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 420px;
        }
    }

    /* ── OR Divider ── */
    .or-divider {
        display: none;

        @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;

            span {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 2px solid rgba(255, 0, 128, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.7rem;
                font-weight: 800;
                letter-spacing: 1.5px;
                color: #ff6eae;
                box-shadow: 0 0 24px rgba(255, 0, 128, 0.15);
            }
        }
    }

    /* ── Track Card ── */
    .track-card {
        background: rgba(255, 255, 255, 0.04);
        border: 1.5px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 36px 28px 30px;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        text-align: left;
        animation: ${fadeInUp} 0.5s ease-out 0.15s both;
        position: relative;
        overflow: hidden;

        /* Gradient top accent line */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: ${gradient};
            opacity: 0;
            transition: opacity 0.35s ease;
        }

        &:nth-child(2) {
            animation-delay: 0.22s;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 0, 128, 0.3);
            transform: translateY(-6px);
            box-shadow:
                0 20px 60px rgba(255, 0, 128, 0.12),
                0 0 0 1px rgba(255, 0, 128, 0.1);

            &::before {
                opacity: 1;
            }
        }

        .track-icon-wrap {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: ${gradient};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
            color: #fff;
            box-shadow: 0 4px 16px rgba(255, 0, 128, 0.2);
            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
        }

        &:hover .track-icon-wrap {
            transform: scale(1.08);
            box-shadow: 0 6px 24px rgba(255, 0, 128, 0.3);
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 10px;
            line-height: 1.3;
        }

        > p {
            font-size: 0.88rem;
            line-height: 1.6;
            opacity: 0.72;
            margin-bottom: 16px;
        }

        /* ── Feature highlights ── */
        .track-highlights {
            list-style: none;
            padding: 0;
            margin: 0 0 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.82rem;
                color: rgba(255, 255, 255, 0.78);
                font-weight: 500;

                svg {
                    color: #10b981;
                    flex-shrink: 0;
                }
            }
        }

        .track-cta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            font-weight: 700;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: gap 0.25s ease;

            svg {
                color: #ff6eae;
                -webkit-text-fill-color: initial;
            }
        }

        &:hover .track-cta {
            gap: 10px;
        }
    }

    /* ── Trust Metrics ── */
    .trust-metrics {
        display: flex;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
        padding-top: 32px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        animation: ${fadeInUp} 0.5s ease-out 0.3s both;

        ${media.sm} {
            gap: 20px;
        }

        ${media.xs} {
            gap: 16px;
        }
    }

    .metric {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        .metric-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 6px;
            color: #ff6eae;
            transition: background 0.3s ease;
        }

        &:hover .metric-icon {
            background: rgba(255, 0, 128, 0.12);
        }

        .metric-value {
            display: block;
            font-size: 1.5rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .metric-label {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            opacity: 0.55;
            font-weight: 500;
            display: block;
        }
    }
`;

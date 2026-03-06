"use client";
import styled, { keyframes } from "styled-components";
import media from "../config/media";

/* ── Design tokens ── */
const accent = "#ff0080";
const purple = "#7928ca";
const gradient = `linear-gradient(135deg, ${accent} 0%, ${purple} 100%)`;
const heroBg = "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)";
const dark = "#1a1a2e";
const glass = "rgba(255,255,255,0.06)";
const glassBorder = "rgba(255,255,255,0.12)";

/* ── Keyframes ── */
const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50%      { transform: translateY(-18px) rotate(2deg); }
`;

const orbDrift = keyframes`
    0%   { transform: translate(0, 0) scale(1); }
    33%  { transform: translate(30px, -40px) scale(1.05); }
    66%  { transform: translate(-20px, 20px) scale(0.95); }
    100% { transform: translate(0, 0) scale(1); }
`;

const statusPulse = keyframes`
    0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.55); }
    50%      { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
`;

const shimmer = keyframes`
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
`;

const glowPulse = keyframes`
    0%, 100% { opacity: 0.35; }
    50%      { opacity: 0.65; }
`;

const AboutStyle = styled.div`
    overflow-x: hidden;

    /* ═══════════════════════════════════════
       HERO — immersive split layout + orbs
       ═══════════════════════════════════════ */
    .about-hero {
        background: ${heroBg};
        position: relative;
        padding: 80px 0 140px;
        color: #fff;
        overflow: hidden;

        ${media.sm} {
            padding: 56px 0 120px;
        }

        ${media.xs} {
            padding: 44px 0 100px;
        }
    }

    /* floating gradient orbs */
    .orb {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        filter: blur(80px);
        will-change: transform;
        contain: layout paint;

        ${media.sm} {
            filter: blur(40px);
            animation: none !important;
            opacity: 0.7;
        }
    }

    .orb-1 {
        width: 420px;
        height: 420px;
        background: radial-gradient(circle, rgba(255, 0, 128, 0.18) 0%, transparent 70%);
        top: -100px;
        right: -80px;
        animation: ${orbDrift} 14s ease-in-out infinite;
    }

    .orb-2 {
        width: 320px;
        height: 320px;
        background: radial-gradient(circle, rgba(121, 40, 202, 0.16) 0%, transparent 70%);
        bottom: 30px;
        left: -60px;
        animation: ${orbDrift} 18s ease-in-out infinite reverse;
    }

    .orb-3 {
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
        top: 40%;
        left: 50%;
        animation: ${orbDrift} 22s ease-in-out infinite 3s;
    }

    /* hero layout */
    .hero-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;
        position: relative;
        z-index: 2;

        ${media.sm} {
            flex-direction: column;
            text-align: center;
            gap: 32px;
        }
    }

    .hero-text {
        flex: 1;
        max-width: 560px;
        animation: ${fadeInUp} 0.7s ease-out both;

        ${media.sm} {
            max-width: 100%;
        }
    }

    .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: ${glass};
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid ${glassBorder};

        ${media.sm} {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: rgba(255, 255, 255, 0.12);
        }
        border-radius: 40px;
        padding: 8px 20px;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        margin-bottom: 24px;

        .badge-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10b981;
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
            animation: ${statusPulse} 2s ease-in-out infinite;
        }

        ${media.sm} {
            font-size: 0.7rem;
            padding: 6px 16px;
        }
    }

    h1 {
        font-size: clamp(2.2rem, 5vw, 3.6rem);
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -0.03em;
        margin: 0 0 20px;
    }

    .gradient-text {
        background: ${gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: 1.08rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 32px;

        ${media.sm} {
            font-size: 0.95rem;
            margin-bottom: 24px;
        }
    }

    /* ── hero profile card (glassmorphism) ── */
    .hero-card {
        position: relative;
        background: ${glass};
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid ${glassBorder};

        ${media.sm} {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
        }
        border-radius: 24px;
        padding: 40px 36px 32px;
        text-align: center;
        min-width: 280px;
        animation: ${fadeInUp} 0.7s ease-out 0.2s both;
        transition:
            transform 0.4s ease,
            border-color 0.4s ease;

        &:hover {
            transform: translateY(-6px);
            border-color: rgba(255, 0, 128, 0.35);

            .card-glow {
                opacity: 1;
            }
        }

        ${media.sm} {
            min-width: unset;
            width: 100%;
            max-width: 320px;
            padding: 32px 24px 26px;
        }

        .card-glow {
            position: absolute;
            inset: -1px;
            border-radius: 24px;
            background: ${gradient};
            opacity: 0;
            z-index: -1;
            filter: blur(18px);
            transition: opacity 0.4s ease;

            ${media.sm} {
                display: none;
            }
        }

        .profile-image-wrap {
            position: relative;
            display: inline-block;
            margin-bottom: 18px;

            .profile-img {
                border-radius: 50%;
                border: 3px solid rgba(255, 255, 255, 0.15);
                object-fit: cover;
                width: 110px;
                height: 110px;
                transition: border-color 0.3s ease;

                ${media.sm} {
                    width: 96px;
                    height: 96px;
                }
            }

            .status-dot {
                position: absolute;
                bottom: 4px;
                right: 4px;
                width: 16px;
                height: 16px;
                background: #10b981;
                border: 3px solid #1a1a2e;
                border-radius: 50%;
                animation: ${statusPulse} 2s ease-in-out infinite;
            }
        }

        .profile-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin: 0 0 6px;
            color: #fff;
        }

        .profile-location {
            font-size: 0.82rem;
            color: rgba(255, 255, 255, 0.55);
            margin: 0 0 18px;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 10px;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.07);
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: rgba(255, 255, 255, 0.65);
                font-size: 1.05rem;
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(255, 0, 128, 0.25);
                    border-color: rgba(255, 0, 128, 0.5);
                    color: #fff;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(255, 0, 128, 0.2);
                }
            }
        }
    }

    /* ── Hero Actions ── */
    .hero-actions {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;

        ${media.sm} {
            justify-content: center;
        }

        .btn.primary {
            background: ${gradient} !important;
            color: #fff !important;
            box-shadow: 0 6px 24px rgba(255, 0, 128, 0.35) !important;
            display: flex;
            align-items: center;
            gap: 6px;

            &:hover {
                box-shadow: 0 12px 36px rgba(255, 0, 128, 0.5) !important;
                transform: translateY(-2px);
            }
        }

        .btn.secondary {
            background: ${glass} !important;
            color: #fff !important;
            border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
            box-shadow: none !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);

            ${media.sm} {
                backdrop-filter: none;
                -webkit-backdrop-filter: none;
                background: rgba(255, 255, 255, 0.12) !important;
            }

            &:hover {
                background: rgba(255, 255, 255, 0.14) !important;
                border-color: rgba(255, 255, 255, 0.5) !important;
                transform: translateY(-2px);
            }
        }

        ${media.xs} {
            flex-direction: column;
            align-items: center;
            gap: 10px;

            .btn {
                width: 100%;
                max-width: 260px;
                justify-content: center;
            }
        }
    }

    /* ── Wave Divider ── */
    .wave-divider {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        line-height: 0;
        z-index: 1;

        svg {
            display: block;
            width: 100%;
            height: 60px;

            ${media.sm} {
                height: 40px;
            }
        }

        path {
            fill: #fff;
        }
    }

    /* ═══════════════════════════════════════
       HIGHLIGHTS — floating pill bar
       ═══════════════════════════════════════ */
    .highlights-strip {
        position: relative;
        z-index: 3;
        margin-top: -48px;
        padding: 0 20px;

        ${media.sm} {
            margin-top: -36px;
            padding: 0 16px;
        }

        .highlights-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 560px;
            margin: 0 auto;
            background: #fff;
            border-radius: 20px;
            box-shadow:
                0 8px 40px rgba(0, 0, 0, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0, 0, 0, 0.04);
            overflow: hidden;
        }

        .highlight-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 26px 16px;
            position: relative;
            transition: background 0.3s ease;

            &:hover {
                background: rgba(255, 0, 128, 0.03);
            }

            &:not(:last-child)::after {
                content: "";
                position: absolute;
                right: 0;
                top: 22%;
                height: 56%;
                width: 1px;
                background: rgba(0, 0, 0, 0.06);
            }

            ${media.sm} {
                padding: 20px 10px;
            }
        }

        .highlight-icon {
            font-size: 1.5rem;
            color: ${accent};
            display: flex;
            align-items: center;

            ${media.sm} {
                font-size: 1.2rem;
            }
        }

        .highlight-value {
            font-size: 1.6rem;
            font-weight: 900;
            color: ${dark};
            letter-spacing: -0.03em;

            ${media.sm} {
                font-size: 1.25rem;
            }
        }

        .highlight-label {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: #999;

            ${media.xs} {
                font-size: 0.62rem;
            }
        }
    }

    /* ═══════════════════════════════════════
       SECTION HEADINGS — shared
       ═══════════════════════════════════════ */
    .section-heading {
        color: ${dark};
        font-size: 2rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 10px;
        letter-spacing: -0.02em;

        ${media.sm} {
            font-size: 1.6rem;
        }
    }

    .section-subtitle {
        color: #888;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 40px;
        font-weight: 400;

        ${media.sm} {
            font-size: 0.9rem;
            margin-bottom: 28px;
        }
    }

    /* ═══════════════════════════════════════
       ABOUT ME — code-terminal style card
       ═══════════════════════════════════════ */
    .about-section {
        padding: 72px 20px 0;

        ${media.sm} {
            padding: 48px 16px 0;
        }

        .section-tag {
            font-family: "Courier New", Courier, monospace;
            font-size: 0.85rem;
            font-weight: 600;
            color: ${accent};
            letter-spacing: 0.4px;
            text-align: center;
            margin-bottom: 20px;
            opacity: 0.9;
        }

        .about-card {
            max-width: 760px;
            margin: 0 auto;
            background: #1e1e2e;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
            animation: ${fadeInUp} 0.5s ease-out both;
        }

        .terminal-dots {
            display: flex;
            gap: 8px;
            padding: 14px 20px;
            background: rgba(0, 0, 0, 0.25);

            span {
                width: 12px;
                height: 12px;
                border-radius: 50%;

                &:nth-child(1) {
                    background: #ff5f57;
                }
                &:nth-child(2) {
                    background: #febc2e;
                }
                &:nth-child(3) {
                    background: #28c840;
                }
            }
        }

        .about-text {
            padding: 28px 32px 32px;
            color: rgba(255, 255, 255, 0.82);
            font-size: 1.05rem;
            line-height: 1.9;
            font-family: "Inter", sans-serif;

            ${media.sm} {
                padding: 20px 20px 24px;
                font-size: 0.92rem;
                line-height: 1.75;
            }
        }
    }

    /* ═══════════════════════════════════════
       PHILOSOPHY — 3 principle cards
       ═══════════════════════════════════════ */
    .philosophy-section {
        padding: 72px 20px;

        ${media.sm} {
            padding: 48px 16px;
        }

        .philosophy-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            max-width: 900px;
            margin: 0 auto;

            ${media.sm} {
                grid-template-columns: 1fr;
                gap: 20px;
                max-width: 400px;
            }
        }

        .philosophy-card {
            background: #fff;
            border-radius: 20px;
            padding: 36px 28px 32px;
            text-align: center;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
            transition: all 0.35s ease;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: ${gradient};
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.35s ease;
            }

            &:hover {
                transform: translateY(-6px);
                box-shadow: 0 16px 48px rgba(255, 0, 128, 0.1);
                border-color: rgba(255, 0, 128, 0.15);

                &::before {
                    transform: scaleX(1);
                }

                .phi-icon {
                    transform: scale(1.1) rotate(-5deg);
                    box-shadow: 0 8px 24px rgba(255, 0, 128, 0.3);
                }
            }

            ${media.sm} {
                padding: 28px 24px 26px;
            }

            .phi-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 56px;
                height: 56px;
                border-radius: 16px;
                background: ${gradient};
                color: #fff;
                font-size: 1.5rem;
                margin-bottom: 20px;
                transition: all 0.35s ease;
                box-shadow: 0 4px 16px rgba(255, 0, 128, 0.25);
            }

            h3 {
                font-size: 1.15rem;
                font-weight: 700;
                color: ${dark};
                margin: 0 0 10px;
            }

            p {
                font-size: 0.92rem;
                color: #777;
                line-height: 1.65;
                margin: 0;
            }
        }
    }

    /* ═══════════════════════════════════════
       SKILLS — wrapper for Skills component
       ═══════════════════════════════════════ */
    .skills-wrap {
        padding: 0 20px 72px;
        background: #f8f9fc;

        /* add subtle top diagonal */
        clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%);
        padding-top: 100px;

        ${media.sm} {
            padding: 80px 16px 48px;
            clip-path: polygon(0 24px, 100% 0, 100% 100%, 0 100%);
        }

        .skills-section {
            scroll-margin-top: 70px;

            .section-heading {
                color: #333;
                font-size: 2.2rem;
                font-weight: 700;
                text-align: center;
                margin-bottom: 8px;
                background: ${gradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;

                ${media.sm} {
                    font-size: 1.8rem;
                }
            }

            .section-subtitle {
                color: #666;
                opacity: 0.8;
                font-size: 1.1rem;
                text-align: center;
                margin-bottom: 50px;
                font-weight: 400;

                ${media.sm} {
                    font-size: 1rem;
                    margin-bottom: 40px;
                }

                ${media.xs} {
                    font-size: 0.95rem;
                    margin-bottom: 30px;
                }
            }

            .skills-tabs {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-bottom: 40px;
                flex-wrap: wrap;

                ${media.sm} {
                    gap: 12px;
                    margin-bottom: 30px;
                }
            }

            .tab-button {
                padding: 12px 24px;
                border: 2px solid #e0e0e0;
                background: white;
                color: #666;
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
                font-size: 0.95rem;
                outline: none;

                &.active {
                    background: ${gradient} !important;
                    color: white !important;
                    border-color: transparent !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);
                }

                &:hover:not(.active) {
                    border-color: ${accent};
                    color: ${accent};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(255, 0, 128, 0.15);
                }

                &:active {
                    transform: translateY(1px) scale(0.96);
                    box-shadow: 0 2px 6px rgba(255, 0, 128, 0.2);
                    transition: all 0.1s ease;
                }

                ${media.sm} {
                    padding: 10px 20px;
                    font-size: 0.9rem;
                }
            }

            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 32px;

                ${media.sm} {
                    grid-template-columns: 1fr;
                    gap: 24px;
                }
            }

            .skill-category {
                background: white;
                border-radius: 16px;
                padding: 32px 24px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                border: 1px solid #f0f0f0;
                transition: all 0.3s ease;

                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(255, 0, 128, 0.12);
                    border-color: rgba(255, 0, 128, 0.2);
                }

                ${media.sm} {
                    padding: 24px 20px;
                }
            }

            .category-title {
                font-size: 1.3rem;
                font-weight: 600;
                color: #333;
                margin-bottom: 20px;
                text-align: center;
                padding-bottom: 12px;
                border-bottom: 2px solid #f0f0f0;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 2px;
                    background: ${gradient};
                }

                ${media.sm} {
                    font-size: 1.2rem;
                }
            }

            .skill-item {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .skill-icon {
                font-size: 1.5rem;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .skill-info {
                flex: 1;
            }

            .skill-name {
                font-size: 1rem;
                font-weight: 500;
                color: #333;
                margin-bottom: 4px;
            }

            .skill-bar-container {
                background: #f0f0f0;
                height: 8px;
                border-radius: 4px;
                overflow: hidden;
                position: relative;
            }

            .skill-bar {
                height: 100%;
                background: ${gradient};
                border-radius: 4px;
                transition: width 1s ease-in-out;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.3),
                        transparent
                    );
                    background-size: 200% 100%;
                    animation: ${shimmer} 2s infinite;
                }
            }

            .skill-level {
                font-size: 0.8rem;
                color: #666;
                font-weight: 500;
                min-width: 35px;
                text-align: right;
            }

            .soft-skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;

                ${media.sm} {
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 16px;
                }
            }

            .soft-skill-card {
                background: white;
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
                border: 1px solid #f0f0f0;
                transition: all 0.3s ease;

                &:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(255, 0, 128, 0.12);
                    border-color: rgba(255, 0, 128, 0.2);
                }

                ${media.sm} {
                    padding: 16px;
                }
            }

            .soft-skill-icon {
                font-size: 2rem;
                margin-bottom: 8px;
            }

            .soft-skill-name {
                font-size: 0.9rem;
                font-weight: 500;
                color: #333;
                margin-bottom: 8px;
            }

            .soft-skill-level {
                font-size: 0.8rem;
                color: #666;
            }
        }
    }

    /* ═══════════════════════════════════════
       EXPERIENCE — alt background
       ═══════════════════════════════════════ */
    .experience-section {
        padding: 72px 20px;
        background: #fff;

        ${media.sm} {
            padding: 48px 16px;
        }
    }

    /* ═══════════════════════════════════════
       EDUCATION
       ═══════════════════════════════════════ */
    .education-section {
        padding: 72px 20px;
        background: #f8f9fc;

        ${media.sm} {
            padding: 48px 16px;
        }
    }

    /* ═══════════════════════════════════════
       CERTIFICATIONS
       ═══════════════════════════════════════ */
    .certifications-wrapper {
        padding: 0 20px 40px;

        ${media.sm} {
            padding: 0 16px 24px;
        }
    }

    /* ═══════════════════════════════════════
       CTA — cinematic with orbs
       ═══════════════════════════════════════ */
    .about-cta {
        background: ${heroBg};
        padding: 80px 20px;
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;

        ${media.sm} {
            padding: 56px 16px;
        }

        .cta-orb {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            filter: blur(60px);
            contain: layout paint;

            ${media.sm} {
                filter: blur(30px);
                animation: none !important;
                opacity: 0.6;
            }
        }

        .cta-orb-1 {
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.12) 0%, transparent 70%);
            top: -80px;
            right: -60px;
            animation: ${glowPulse} 5s ease-in-out infinite;
        }

        .cta-orb-2 {
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(121, 40, 202, 0.1) 0%, transparent 70%);
            bottom: -60px;
            left: -40px;
            animation: ${glowPulse} 7s ease-in-out infinite reverse;
        }

        h2 {
            font-size: clamp(1.7rem, 3.5vw, 2.5rem);
            font-weight: 900;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
            letter-spacing: -0.02em;

            .gradient-text {
                background: ${gradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
        }

        p {
            max-width: 480px;
            margin: 0 auto 36px;
            font-size: 1rem;
            opacity: 0.75;
            line-height: 1.65;
            position: relative;
            z-index: 1;

            ${media.sm} {
                font-size: 0.9rem;
                margin-bottom: 28px;
            }
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;

            .btn.primary {
                background: ${gradient} !important;
                color: #fff !important;
                box-shadow: 0 6px 28px rgba(255, 0, 128, 0.4) !important;

                &:hover {
                    box-shadow: 0 12px 40px rgba(255, 0, 128, 0.55) !important;
                    transform: translateY(-2px);
                }
            }

            .btn.secondary {
                background: transparent !important;
                color: #fff !important;
                border: 1.5px solid rgba(255, 255, 255, 0.35) !important;
                box-shadow: none !important;

                &:hover {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-color: #fff !important;
                    transform: translateY(-2px);
                }
            }

            ${media.sm} {
                flex-direction: column;
                align-items: center;
                gap: 10px;

                .btn {
                    width: 100%;
                    max-width: 280px;
                    justify-content: center;
                }
            }
        }
    }
`;

export default AboutStyle;

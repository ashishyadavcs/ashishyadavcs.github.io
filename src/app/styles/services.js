"use client";
import styled, { css, keyframes } from "styled-components";
import media from "@/app/config/media";

const gradient = "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)";

/* ── Animations ────────────────────────────── */
const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const pulse = keyframes`
    0%, 100% { opacity: 0.4; }
    50%      { opacity: 0.7; }
`;

const slideInLeft = keyframes`
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
`;

/* ── Shared card mixin ───────────────────── */
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

// ═══════════════════════════════════════════════
// ── Services Listing Page ─────────────────────
// ═══════════════════════════════════════════════
export const ServicesPageStyle = styled.section`
    /* ── Hero ── */
    .hero {
        background: ${gradient};
        padding: 96px 0 170px;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
            top: -200px;
            right: -150px;
            animation: ${pulse} 6s ease-in-out infinite;
            pointer-events: none;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to top, #f8f9fc, transparent);
        }

        ${media.sm} {
            padding: 56px 0 130px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.14);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
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

        > .container > p {
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

        .hero-cta-row {
            display: flex;
            justify-content: center;
            gap: 14px;
            margin-top: 32px;
            flex-wrap: wrap;
            animation: ${fadeInUp} 0.6s ease-out 0.28s both;

            .btn.secondary {
                background: rgba(255, 255, 255, 0.12);
                color: #fff;
                border: 1.5px solid rgba(255, 255, 255, 0.3);
                box-shadow: none;

                &:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                    box-shadow: none;
                }
            }
        }

        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 40px;
            animation: ${fadeInUp} 0.6s ease-out 0.38s both;
            padding-top: 32px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            max-width: 620px;
            margin-left: auto;
            margin-right: auto;

            ${media.sm} {
                gap: 20px;
                margin-top: 28px;
                flex-wrap: wrap;
                padding-top: 24px;
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
                font-size: 0.75rem;
                opacity: 0.78;
                font-weight: 500;
                letter-spacing: 0.4px;
                text-transform: uppercase;
                margin-top: 2px;
            }
        }
    }

    /* ── Category Filter ── */
    .category-filter {
        margin: 40px 0;
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        transform: translateY(-34px);

        padding: 0 16px;
        animation: ${fadeInUp} 0.5s ease-out 0.3s both;

        .filter-btn {
            background: #fff;
            border: 1.5px solid #e2e4ea;
            border-radius: 40px;
            padding: 10px 22px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a4a5e;
            cursor: pointer;
            transition: all 0.25s ease;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

            .filter-icon {
                font-size: 0.9rem;
                display: inline-flex;
                align-items: center;

                svg {
                    width: 16px;
                    height: 16px;
                }
            }

            &:hover {
                border-color: #c084fc;
                color: #7928ca;
                background: rgba(121, 40, 202, 0.04);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(121, 40, 202, 0.08);

                .filter-icon svg {
                    color: #7928ca;
                }
            }

            &:focus-visible {
                outline: 2px solid #7928ca;
                outline-offset: 2px;
            }

            &.active {
                background: ${gradient};
                color: #fff;
                border-color: transparent;
                box-shadow: 0 4px 16px rgba(255, 0, 128, 0.3);
                transform: translateY(-1px);
            }
        }
    }

    /* ── Services Grid ── */
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 24px;
        transform: translateY(-10px);
        margin-bottom: 0;

        ${media.sm} {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 0 2px;
        }
    }

    /* ── Service Card ── */
    .service-card {
        ${cardBase}
        padding: 0;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        animation: ${fadeInUp} 0.55s ease-out both;
        text-decoration: none;
        color: inherit;

        /* Gradient top accent */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: ${gradient};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        &:hover {
            transform: translateY(-8px);
            box-shadow:
                0 20px 60px rgba(0, 0, 0, 0.1),
                0 4px 16px rgba(121, 40, 202, 0.08);
            border-color: rgba(121, 40, 202, 0.15);

            &::before {
                transform: scaleX(1);
            }

            .card-icon {
                transform: scale(1.08) rotate(-3deg);
            }

            .card-cta svg {
                transform: translateX(4px);
            }
        }

        &:focus-within {
            outline: 2px solid #7928ca;
            outline-offset: 2px;
        }

        /* Featured card special treatment */
        &.is-featured {
            border-color: rgba(255, 0, 128, 0.18);
            box-shadow:
                0 1px 3px rgba(0, 0, 0, 0.04),
                0 8px 32px rgba(255, 0, 128, 0.1),
                inset 0 0 0 1px rgba(255, 0, 128, 0.06);

            &::before {
                transform: scaleX(1);
                height: 4px;
            }

            &:hover {
                box-shadow:
                    0 20px 60px rgba(255, 0, 128, 0.14),
                    0 4px 16px rgba(121, 40, 202, 0.1);
            }
        }

        .card-body {
            padding: 32px 28px 28px;
            display: flex;
            flex-direction: column;
            flex: 1;

            ${media.sm} {
                padding: 24px 20px 22px;
            }
        }

        .card-header {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 16px;
        }

        .card-icon {
            font-size: 1.4rem;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${gradient};
            border-radius: 12px;
            flex-shrink: 0;
            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            color: #fff;
            box-shadow: 0 4px 14px rgba(255, 0, 128, 0.22);
        }

        .card-header-text {
            flex: 1;
            min-width: 0;
        }

        .card-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #111827;
            margin: 0 0 6px;
            line-height: 1.3;
        }

        .card-category {
            font-size: 0.72rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #7928ca;
            background: rgba(121, 40, 202, 0.08);
            padding: 3px 10px;
            border-radius: 20px;
            display: inline-block;
        }

        .featured-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            background: linear-gradient(135deg, #f59e0b, #ef4444);
            color: #fff;
            font-size: 0.65rem;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 2px 8px rgba(245, 158, 11, 0.35);
            display: inline-flex;
            align-items: center;
            gap: 4px;
            z-index: 2;

            svg {
                font-size: 9px;
            }
        }

        .card-desc {
            color: #4a4a5e;
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0 0 14px;
        }

        /* Feature checklist inside card */
        .card-features {
            list-style: none;
            padding: 0;
            margin: 0 0 16px;
            display: flex;
            flex-direction: column;
            gap: 6px;

            li {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.82rem;
                color: #333;
                font-weight: 500;

                .check {
                    color: #059669;
                    font-size: 13px;
                    flex-shrink: 0;
                }
            }
        }

        .card-meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 14px;
            padding: 12px 0;
            border-top: 1px solid #f0f1f5;
            border-bottom: 1px solid #f0f1f5;

            .meta-item {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 0.8rem;
                color: #4a4a5e;
                font-weight: 600;

                svg {
                    color: #d6336c;
                    font-size: 14px;
                    flex-shrink: 0;
                }
            }
        }

        .card-techs {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-bottom: 18px;

            .tech-tag {
                background: #f3f4f8;
                color: #3d3d52;
                padding: 4px 10px;
                border-radius: 20px;
                font-size: 0.72rem;
                font-weight: 600;
                border: 1px solid transparent;

                &.more {
                    background: rgba(255, 0, 128, 0.06);
                    color: #d6336c;
                    font-weight: 700;
                }
            }
        }

        .card-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #d6336c;
            font-weight: 700;
            font-size: 0.88rem;
            margin-top: auto;
            transition: color 0.25s ease;

            svg {
                transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
            }

            &:hover {
                color: #7928ca;
            }
        }
    }

    /* ── Why Choose Me / Differentiators ── */
    .differentiators-section {
        background: #f8f9fc;
        padding: 80px 0;
        margin-top: 80px;

        ${media.sm} {
            padding: 48px 0;
            margin-top: 40px;
        }

        .section-heading {
            text-align: center;
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 8px;
            background: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: ${fadeInUp} 0.5s ease-out both;

            ${media.sm} {
                font-size: 1.6rem;
            }
        }

        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.05rem;
            margin-bottom: 48px;
            animation: ${fadeInUp} 0.5s ease-out 0.05s both;
        }

        .diff-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;

            ${media.md} {
                grid-template-columns: repeat(2, 1fr);
            }

            ${media.sm} {
                grid-template-columns: 1fr;
                gap: 16px;
            }
        }

        .diff-card {
            ${cardBase};
            padding: 32px 24px;
            text-align: center;
            animation: ${fadeInUp} 0.5s ease-out both;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
                border-color: rgba(255, 0, 128, 0.12);
            }

            .diff-icon {
                width: 52px;
                height: 52px;
                border-radius: 14px;
                background: ${gradient};
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22px;
                margin: 0 auto 18px;
                box-shadow: 0 4px 16px rgba(255, 0, 128, 0.25);
            }

            h3 {
                font-size: 1.05rem;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 10px;
            }

            p {
                color: #555;
                font-size: 0.88rem;
                line-height: 1.6;
            }
        }
    }

    /* ── Bottom CTA ── */
    .cta-section {
        padding: 80px 0 100px;

        ${media.sm} {
            padding: 48px 0 64px;
        }

        .cta-inner {
            background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1b3d 100%);
            border-radius: 24px;
            padding: 64px 40px;
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

            &::after {
                content: "";
                position: absolute;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(121, 40, 202, 0.08) 0%, transparent 70%);
                bottom: -100px;
                left: -50px;
                pointer-events: none;
            }

            ${media.sm} {
                padding: 40px 24px;
                border-radius: 20px;
            }
        }

        .cta-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 0, 128, 0.12);
            border: 1px solid rgba(255, 0, 128, 0.25);
            border-radius: 40px;
            padding: 8px 18px;
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: #ff6eae;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;

            svg {
                font-size: 14px;
            }
        }

        h2 {
            font-size: clamp(1.6rem, 3.5vw, 2.2rem);
            font-weight: 800;
            margin: 0 0 16px;
            letter-spacing: -0.01em;
            position: relative;
            z-index: 1;
        }

        .cta-inner > p {
            color: rgba(255, 255, 255, 0.78);
            max-width: 520px;
            margin: 0 auto 32px;
            line-height: 1.7;
            font-size: 1.02rem;
            position: relative;
            z-index: 1;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;
            margin-bottom: 28px;

            .btn.primary {
                box-shadow: 0 8px 28px rgba(255, 0, 128, 0.4);
            }

            .btn.secondary,
            .btn[data-type="secondary"] {
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
                border: 1.5px solid rgba(255, 255, 255, 0.25);
                box-shadow: none;

                &:hover {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.4);
                    box-shadow: none;
                }
            }
        }

        .cta-trust {
            display: flex;
            justify-content: center;
            gap: 24px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;

            ${media.sm} {
                gap: 12px;
            }

            span {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 0.8rem;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.6);

                svg {
                    color: #059669;
                    font-size: 14px;
                }
            }
        }
    }
`;

// ═══════════════════════════════════════════════
// ── Service Detail Page ───────────────────────
// ═══════════════════════════════════════════════
export const ServiceDetailStyle = styled.section`
    /* ── Hero ── */
    .hero {
        background: ${gradient};
        padding: 88px 0 140px;
        color: #fff;
        position: relative;
        overflow: hidden;

        /* Decorative orb */
        &::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 70%);
            bottom: -200px;
            left: -100px;
            animation: ${pulse} 7s ease-in-out infinite;
            pointer-events: none;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: linear-gradient(to top, #f8f9fc, transparent);
        }

        ${media.sm} {
            padding: 52px 0 100px;
        }

        .hero-inner {
            display: flex;
            align-items: center;
            gap: 48px;
            position: relative;
            z-index: 1;

            ${media.sm} {
                flex-direction: column;
                text-align: center;
                gap: 28px;
            }
        }

        .hero-icon {
            font-size: 2.8rem;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.14);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.22);
            border-radius: 24px;
            flex-shrink: 0;
            animation: ${fadeInUp} 0.5s ease-out 0.1s both;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            color: #fff;

            ${media.sm} {
                width: 80px;
                height: 80px;
                font-size: 2.2rem;
                border-radius: 18px;
            }
        }

        .hero-content {
            flex: 1;

            .breadcrumb {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 0.84rem;
                margin-bottom: 14px;
                color: rgba(255, 255, 255, 0.85);
                animation: ${slideInLeft} 0.5s ease-out both;

                a {
                    color: rgba(255, 255, 255, 0.9);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;

                    &:hover {
                        color: #fff;
                        text-decoration: underline;
                    }

                    &:focus-visible {
                        outline: 2px solid rgba(255, 255, 255, 0.6);
                        outline-offset: 2px;
                        border-radius: 2px;
                    }
                }

                svg {
                    opacity: 0.7;
                    font-size: 12px;
                }

                span {
                    font-weight: 600;
                }

                ${media.sm} {
                    justify-content: center;
                }
            }

            h1 {
                font-size: clamp(2rem, 4.5vw, 3rem);
                font-weight: 800;
                margin: 0 0 18px;
                line-height: 1.15;
                letter-spacing: -0.02em;
                animation: ${fadeInUp} 0.5s ease-out 0.15s both;
            }

            > p {
                font-size: 1.12rem;
                line-height: 1.7;
                max-width: 620px;
                color: rgba(255, 255, 255, 0.92);
                animation: ${fadeInUp} 0.5s ease-out 0.25s both;

                ${media.sm} {
                    font-size: 1rem;
                    margin: 0 auto;
                }
            }
        }

        .hero-meta {
            display: flex;
            gap: 16px;
            margin-top: 28px;
            flex-wrap: wrap;
            animation: ${fadeInUp} 0.5s ease-out 0.35s both;

            ${media.sm} {
                justify-content: center;
            }

            .meta-pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(255, 255, 255, 0.14);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 40px;
                padding: 10px 20px;
                font-size: 0.88rem;
                font-weight: 600;

                svg {
                    font-size: 16px;
                    flex-shrink: 0;
                }
            }
        }

        .hero-actions {
            display: flex;
            gap: 14px;
            margin-top: 24px;
            flex-wrap: wrap;
            animation: ${fadeInUp} 0.5s ease-out 0.45s both;

            ${media.sm} {
                justify-content: center;
            }

            .btn.secondary {
                background: rgba(255, 255, 255, 0.12);
                color: #fff;
                border: 1.5px solid rgba(255, 255, 255, 0.3);
                box-shadow: none;

                &:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                    box-shadow: none;
                }
            }
        }
    }

    /* ── Two-column body ── */
    .detail-body {
        transform: translateY(-60px);
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 36px;
        margin-bottom: 0;

        ${media.sm} {
            grid-template-columns: 1fr;
            transform: translateY(-36px);
            gap: 24px;
        }
    }

    /* ── Left Column ── */
    .detail-main {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .detail-card {
        ${cardBase}
        padding: 40px 36px;
        animation: ${fadeInUp} 0.5s ease-out both;

        &:nth-child(2) {
            animation-delay: 0.1s;
        }
        &:nth-child(3) {
            animation-delay: 0.2s;
        }

        ${media.sm} {
            padding: 26px 20px;
            border-radius: 16px;
        }

        .section-title {
            font-size: 1.3rem;
            font-weight: 800;
            color: #111827;
            margin: 0 0 28px;
            display: flex;
            align-items: center;
            gap: 12px;
            letter-spacing: -0.01em;

            svg {
                color: #d6336c;
                font-size: 22px;
            }
        }
    }

    /* ── Features ── */
    .features-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        ${media.xs} {
            grid-template-columns: 1fr;
        }

        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 18px 16px;
            background: #f8f9fc;
            border-radius: 14px;
            border: 1px solid transparent;
            transition:
                background 0.25s,
                border-color 0.25s,
                transform 0.25s;

            &:hover {
                background: linear-gradient(
                    135deg,
                    rgba(255, 0, 128, 0.03),
                    rgba(121, 40, 202, 0.05)
                );
                border-color: rgba(121, 40, 202, 0.1);
                transform: translateY(-2px);
            }

            .check-icon {
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background: ${gradient};
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 12px;
                flex-shrink: 0;
                margin-top: 1px;
                box-shadow: 0 3px 10px rgba(255, 0, 128, 0.25);
            }

            .feature-text {
                font-size: 0.93rem;
                color: #2d2d3f;
                font-weight: 600;
                line-height: 1.5;
            }
        }
    }

    /* ── Tech Stack ── */
    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .tech-chip {
            background: linear-gradient(135deg, rgba(255, 0, 128, 0.05), rgba(121, 40, 202, 0.07));
            border: 1px solid rgba(121, 40, 202, 0.12);
            color: #2d2d3f;
            padding: 10px 20px;
            border-radius: 40px;
            font-size: 0.88rem;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

            &:hover {
                background: ${gradient};
                color: #fff;
                border-color: transparent;
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(255, 0, 128, 0.25);
            }
        }
    }

    /* ── Process Timeline ── */
    .process-steps {
        display: flex;
        flex-direction: column;
        gap: 0;
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;

        .step {
            display: flex;
            gap: 22px;
            position: relative;
            padding-bottom: 32px;

            &:last-child {
                padding-bottom: 0;
                .step-line {
                    display: none;
                }
            }

            &:hover {
                .step-number {
                    transform: scale(1.1);
                    box-shadow: 0 4px 16px rgba(255, 0, 128, 0.3);
                }
                .step-content h4 {
                    color: #d6336c;
                }
            }
        }

        .step-marker {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .step-number {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${gradient};
            color: #fff;
            font-size: 0.88rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            z-index: 1;
            box-shadow: 0 3px 12px rgba(255, 0, 128, 0.2);
            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
        }

        .step-line {
            flex: 1;
            width: 2px;
            background: linear-gradient(
                to bottom,
                rgba(121, 40, 202, 0.4),
                rgba(121, 40, 202, 0.08)
            );
            margin-top: 8px;
            border-radius: 2px;
        }

        .step-content {
            padding-top: 6px;
            flex: 1;

            h4 {
                font-size: 1.05rem;
                font-weight: 700;
                color: #111827;
                margin: 0 0 8px;
                transition: color 0.25s;
            }

            p {
                font-size: 0.9rem;
                color: #4a4a5e;
                line-height: 1.6;
                margin: 0;
            }
        }
    }

    /* ── Inline CTA Card (inside detail-main) ── */
    .inline-cta-card {
        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1b3d 100%) !important;
        border: none !important;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.1) 0%, transparent 70%);
            top: -100px;
            right: -80px;
            pointer-events: none;
        }

        .inline-cta-content {
            position: relative;
            z-index: 1;

            h3 {
                font-size: 1.4rem;
                font-weight: 800;
                margin: 0 0 10px;
                color: #fff;
            }

            > p {
                color: rgba(255, 255, 255, 0.78);
                font-size: 0.95rem;
                line-height: 1.65;
                margin: 0 0 24px;
                max-width: 480px;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .inline-cta-buttons {
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;

            .btn.primary {
                box-shadow: 0 6px 24px rgba(255, 0, 128, 0.35);
            }

            .btn.secondary,
            .btn[data-type="secondary"] {
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
                border: 1.5px solid rgba(255, 255, 255, 0.25);
                box-shadow: none;

                &:hover {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.4);
                }
            }
        }
    }

    /* ── Right Sidebar ── */
    .detail-sidebar {
        display: flex;
        flex-direction: column;
        gap: 24px;

        ${media.sm} {
            order: -1;
        }
    }

    .sidebar-card {
        ${cardBase}
        padding: 32px 28px;
        position: sticky;
        top: 24px;
        animation: ${fadeInUp} 0.5s ease-out 0.15s both;

        ${media.sm} {
            position: static;
            padding: 26px 20px;
            border-radius: 16px;
        }

        .sidebar-title {
            font-size: 1.15rem;
            font-weight: 800;
            color: #111827;
            margin: 0 0 24px;
            padding-bottom: 16px;
            border-bottom: 2px solid #f0f1f5;
        }

        .info-row {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 16px 0;
            border-bottom: 1px solid #f3f4f8;

            &:last-of-type {
                border-bottom: none;
            }

            .info-icon {
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: linear-gradient(
                    135deg,
                    rgba(255, 0, 128, 0.07),
                    rgba(121, 40, 202, 0.1)
                );
                display: flex;
                align-items: center;
                justify-content: center;
                color: #d6336c;
                font-size: 19px;
                flex-shrink: 0;
            }

            .info-text {
                display: flex;
                flex-direction: column;
                gap: 2px;

                .label {
                    font-size: 0.76rem;
                    color: #6b6b7e;
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                    font-weight: 700;
                }

                .value {
                    font-size: 0.96rem;
                    color: #111827;
                    font-weight: 700;
                }
            }
        }

        /* Trust signals */
        .trust-signals {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #f0f1f5;

            .trust-item {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.84rem;
                font-weight: 600;
                color: #2d2d3f;

                svg {
                    color: #059669;
                    font-size: 16px;
                    flex-shrink: 0;
                }
            }
        }

        .sidebar-cta {
            margin-top: 24px;

            a,
            button {
                width: 100%;
            }
        }

        .sidebar-alt-cta {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0;
            margin-top: 0;

            .or-divider {
                display: block;
                font-size: 0.78rem;
                color: #9ca3af;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin: 12px 0;
                position: relative;

                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    width: 40px;
                    height: 1px;
                    background: #e5e7eb;
                }

                &::before {
                    right: calc(100% + 10px);
                }

                &::after {
                    left: calc(100% + 10px);
                }
            }

            .alt-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 0.88rem;
                font-weight: 600;
                color: #7928ca;
                text-decoration: none;
                transition: color 0.2s;
                padding: 6px 0;

                svg {
                    font-size: 16px;
                }

                &:hover {
                    color: #d6336c;
                    text-decoration: underline;
                }

                &:focus-visible {
                    outline: 2px solid #7928ca;
                    outline-offset: 2px;
                    border-radius: 4px;
                }
            }
        }

        .guarantee-badge {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            margin-top: 20px;
            padding: 18px 16px;
            background: linear-gradient(135deg, rgba(5, 150, 105, 0.06), rgba(5, 150, 105, 0.02));
            border: 1px solid rgba(5, 150, 105, 0.15);
            border-radius: 14px;

            .guarantee-icon {
                color: #059669;
                font-size: 22px;
                flex-shrink: 0;
                margin-top: 2px;
            }

            strong {
                display: block;
                font-size: 0.9rem;
                font-weight: 700;
                color: #059669;
                margin-bottom: 4px;
            }

            p {
                font-size: 0.8rem;
                color: #4a5568;
                line-height: 1.5;
                margin: 0;
            }
        }
    }

    /* ── Related Services ── */
    .related-section {
        padding: 72px 0 96px;
        background: #f8f9fc;
        margin-top: 20px;

        ${media.sm} {
            padding: 48px 0 64px;
        }

        h2 {
            font-size: 1.6rem;
            font-weight: 800;
            color: #111827;
            margin: 0 0 12px;
            text-align: center;
            letter-spacing: -0.01em;
        }

        .related-subtitle {
            text-align: center;
            color: #4a4a5e;
            font-size: 0.96rem;
            margin: 0 auto 36px;
            max-width: 420px;
            line-height: 1.6;
        }

        .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;

            ${media.sm} {
                grid-template-columns: 1fr;
            }
        }

        .related-card {
            ${cardBase}
            padding: 28px 24px;
            display: flex;
            align-items: flex-start;
            gap: 18px;
            text-decoration: none;

            &:hover {
                transform: translateY(-6px);
                box-shadow:
                    0 16px 48px rgba(0, 0, 0, 0.1),
                    0 4px 12px rgba(121, 40, 202, 0.06);
                border-color: rgba(121, 40, 202, 0.12);

                .related-icon {
                    transform: scale(1.1);
                }

                h3 {
                    color: #d6336c;
                }
            }

            &:focus-visible {
                outline: 2px solid #7928ca;
                outline-offset: 2px;
            }

            .related-icon {
                font-size: 1.4rem;
                flex-shrink: 0;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${gradient};
                color: #fff;
                border-radius: 14px;
                transition: transform 0.3s ease;
                box-shadow: 0 3px 12px rgba(255, 0, 128, 0.2);
            }

            .related-info {
                flex: 1;
                min-width: 0;

                h3 {
                    font-size: 1.02rem;
                    font-weight: 700;
                    color: #111827;
                    margin: 0 0 6px;
                    transition: color 0.25s;
                }

                p {
                    font-size: 0.86rem;
                    color: #4a4a5e;
                    line-height: 1.55;
                    margin: 0;
                }

                .related-arrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #d6336c;
                    margin-top: 10px;

                    svg {
                        transition: transform 0.25s;
                    }
                }
            }

            &:hover .related-arrow svg {
                transform: translateX(4px);
            }
        }
    }
`;

export default ServicesPageStyle;

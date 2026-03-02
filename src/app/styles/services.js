"use client";
import styled, { css } from "styled-components";
import media from "@/app/config/media";

const gradient = "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)";

// ── Services Listing Page ──────────────────────
export const ServicesPageStyle = styled.section`
    .hero {
        background: ${gradient};
        padding: 80px 0 140px;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: linear-gradient(to top, #fff, transparent);
        }

        ${media.sm} {
            padding: 48px 0 110px;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 40px;
            padding: 8px 20px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 24px;
        }

        h1 {
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            font-weight: 800;
            margin: 0 0 20px;
            line-height: 1.2;
        }

        p {
            max-width: 620px;
            margin: 0 auto;
            font-size: 1.1rem;
            opacity: 0.9;
            line-height: 1.65;
            padding: 0 20px;

            ${media.sm} {
                font-size: 1rem;
            }
        }
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 28px;
        transform: translateY(-60px);
        margin-bottom: -20px;

        ${media.sm} {
            grid-template-columns: 1fr;
            gap: 20px;
            transform: translateY(-40px);
            padding: 0 4px;
        }
    }

    .service-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
        border: 1px solid #f0f0f0;
        padding: 36px 30px;
        display: flex;
        flex-direction: column;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: ${gradient};
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);

            &::before {
                opacity: 1;
            }
        }

        ${media.sm} {
            padding: 28px 22px;
        }

        .card-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(255, 0, 128, 0.08), rgba(121, 40, 202, 0.08));
            border-radius: 14px;
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a1a2e;
            margin: 0 0 10px;
        }

        .card-desc {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 20px;
            flex: 1;
        }

        .card-meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 20px;

            .meta-item {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 0.82rem;
                color: #888;
                font-weight: 500;

                svg {
                    color: #ff0080;
                    font-size: 14px;
                    flex-shrink: 0;
                }
            }
        }

        .card-techs {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 24px;

            .tech-tag {
                background: #f5f5f5;
                color: #555;
                padding: 4px 10px;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 500;
            }
        }

        .card-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ff0080;
            font-weight: 600;
            font-size: 0.92rem;
            transition: gap 0.25s ease;

            &:hover {
                gap: 12px;
            }
        }
    }

    .cta-section {
        text-align: center;
        padding: 60px 0 80px;

        ${media.sm} {
            padding: 40px 0 60px;
        }

        h2 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 700;
            color: #1a1a2e;
            margin: 0 0 16px;
        }

        p {
            color: #666;
            max-width: 520px;
            margin: 0 auto 30px;
            line-height: 1.6;
            padding: 0 20px;
        }
    }
`;

// ── Service Detail Page ────────────────────────
export const ServiceDetailStyle = styled.section`
    .hero {
        background: ${gradient};
        padding: 80px 0 120px;
        color: #fff;
        position: relative;

        ${media.sm} {
            padding: 48px 0 90px;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(to top, #f9f9fb, transparent);
        }

        .hero-inner {
            display: flex;
            align-items: center;
            gap: 48px;

            ${media.sm} {
                flex-direction: column;
                text-align: center;
                gap: 24px;
            }
        }

        .hero-icon {
            font-size: 4rem;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            flex-shrink: 0;

            ${media.sm} {
                width: 80px;
                height: 80px;
                font-size: 3rem;
                border-radius: 18px;
            }
        }

        .hero-content {
            flex: 1;

            .breadcrumb {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.85rem;
                opacity: 0.8;
                margin-bottom: 12px;

                a {
                    color: #fff;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }

                ${media.sm} {
                    justify-content: center;
                }
            }

            h1 {
                font-size: clamp(1.8rem, 4vw, 2.8rem);
                font-weight: 800;
                margin: 0 0 16px;
                line-height: 1.2;
            }

            p {
                font-size: 1.1rem;
                opacity: 0.9;
                line-height: 1.65;
                max-width: 600px;

                ${media.sm} {
                    font-size: 1rem;
                    margin: 0 auto;
                }
            }
        }

        .hero-meta {
            display: flex;
            gap: 24px;
            margin-top: 24px;
            flex-wrap: wrap;

            ${media.sm} {
                justify-content: center;
                gap: 16px;
            }

            .meta-pill {
                display: flex;
                align-items: center;
                gap: 8px;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 40px;
                padding: 8px 18px;
                font-size: 0.88rem;
                font-weight: 500;

                svg {
                    font-size: 16px;
                    flex-shrink: 0;
                }
            }
        }
    }

    .detail-body {
        transform: translateY(-50px);
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 36px;
        margin-bottom: -10px;

        ${media.sm} {
            grid-template-columns: 1fr;
            transform: translateY(-30px);
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
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        border: 1px solid #f0f0f0;
        padding: 36px 32px;

        ${media.sm} {
            padding: 24px 18px;
            border-radius: 12px;
        }

        .section-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1a1a2e;
            margin: 0 0 24px;
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                color: #ff0080;
            }
        }
    }

    .features-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        ${media.xs} {
            grid-template-columns: 1fr;
        }

        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            background: #fafafa;
            border-radius: 12px;
            transition: background 0.2s;

            &:hover {
                background: linear-gradient(
                    135deg,
                    rgba(255, 0, 128, 0.04),
                    rgba(121, 40, 202, 0.04)
                );
            }

            .check-icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: ${gradient};
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 12px;
                flex-shrink: 0;
                margin-top: 2px;
            }

            .feature-text {
                font-size: 0.92rem;
                color: #444;
                font-weight: 500;
                line-height: 1.5;
            }
        }
    }

    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .tech-chip {
            background: linear-gradient(135deg, rgba(255, 0, 128, 0.06), rgba(121, 40, 202, 0.06));
            border: 1px solid rgba(255, 0, 128, 0.12);
            color: #333;
            padding: 8px 18px;
            border-radius: 40px;
            font-size: 0.88rem;
            font-weight: 500;
            transition: all 0.25s;

            &:hover {
                background: ${gradient};
                color: #fff;
                border-color: transparent;
                transform: translateY(-2px);
            }
        }
    }

    .process-steps {
        display: flex;
        flex-direction: column;
        gap: 0;
        position: relative;

        .step {
            display: flex;
            gap: 20px;
            position: relative;
            padding-bottom: 28px;

            &:last-child {
                padding-bottom: 0;
                .step-line {
                    display: none;
                }
            }
        }

        .step-marker {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            .step-number {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: ${gradient};
                color: #fff;
                font-size: 0.85rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                z-index: 1;
            }

            .step-line {
                flex: 1;
                width: 2px;
                background: linear-gradient(to bottom, #ff0080, #e0e0e0);
                margin-top: 6px;
            }
        }

        .step-content {
            padding-top: 4px;

            h4 {
                font-size: 1rem;
                font-weight: 600;
                color: #1a1a2e;
                margin: 0 0 6px;
            }

            p {
                font-size: 0.88rem;
                color: #666;
                line-height: 1.55;
                margin: 0;
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
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        border: 1px solid #f0f0f0;
        padding: 28px 24px;
        position: sticky;
        top: 20px;

        ${media.sm} {
            position: static;
            padding: 24px 18px;
            border-radius: 12px;
        }

        .sidebar-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1a1a2e;
            margin: 0 0 20px;
        }

        .info-row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 0;
            border-bottom: 1px solid #f5f5f5;

            &:last-child {
                border-bottom: none;
            }

            .info-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: linear-gradient(
                    135deg,
                    rgba(255, 0, 128, 0.08),
                    rgba(121, 40, 202, 0.08)
                );
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ff0080;
                font-size: 18px;
                flex-shrink: 0;
            }

            .info-text {
                .label {
                    font-size: 0.78rem;
                    color: #999;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 600;
                }
                .value {
                    font-size: 0.95rem;
                    color: #333;
                    font-weight: 600;
                    margin-top: 2px;
                }
            }
        }

        .sidebar-cta {
            margin-top: 20px;
            a,
            button {
                width: 100%;
            }
        }
    }

    .related-section {
        padding: 60px 0 80px;

        ${media.sm} {
            padding: 40px 0 60px;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a2e;
            margin: 0 0 28px;
            text-align: center;
        }

        .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;

            ${media.sm} {
                grid-template-columns: 1fr;
            }
        }

        .related-card {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
            border: 1px solid #f0f0f0;
            padding: 24px 20px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            transition:
                transform 0.25s,
                box-shadow 0.25s;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
            }

            .related-icon {
                font-size: 1.8rem;
                flex-shrink: 0;
            }

            .related-info {
                h3 {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1a1a2e;
                    margin: 0 0 6px;
                }

                p {
                    font-size: 0.85rem;
                    color: #777;
                    line-height: 1.5;
                    margin: 0;
                }
            }
        }
    }
`;

export default ServicesPageStyle;

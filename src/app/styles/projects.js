"use client";

import styled, { keyframes } from "styled-components";
import media from "../config/media";

const gradient = "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)";

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 0.4; }
    50%      { opacity: 0.7; }
`;

const ProjectStyle = styled.div`
    /* ── Hero ── */
    .projects-hero {
        background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
        padding: 64px 0 80px;
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

            ${media.sm} {
                width: 300px;
                height: 300px;
                top: -100px;
                right: -80px;
            }
        }

        ${media.sm} {
            padding: 44px 16px 56px;
        }

        ${media.xs} {
            padding: 36px 12px 48px;
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

            ${media.sm} {
                font-size: 0.72rem;
                padding: 8px 16px;
                margin-bottom: 20px;
            }

            ${media.xs} {
                font-size: 0.68rem;
                padding: 6px 14px;
                letter-spacing: 0.5px;
            }
        }

        h1 {
            font-size: clamp(2.2rem, 5vw, 3.6rem);
            font-weight: 800;
            margin: 0 0 22px;
            line-height: 1.15;
            letter-spacing: -0.02em;
            animation: ${fadeInUp} 0.6s ease-out 0.1s both;
        }

        .hero-subtitle {
            max-width: 640px;
            margin: 0 auto;
            font-size: 1.15rem;
            line-height: 1.7;
            padding: 0 20px;
            color: rgba(255, 255, 255, 0.92);
            animation: ${fadeInUp} 0.6s ease-out 0.2s both;

            ${media.sm} {
                font-size: 1rem;
                padding: 0 16px;
            }

            ${media.xs} {
                font-size: 0.9rem;
                line-height: 1.6;
            }
        }

        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 40px;
            padding-top: 32px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            animation: ${fadeInUp} 0.6s ease-out 0.35s both;

            ${media.sm} {
                gap: 24px;
                margin-top: 28px;
                padding-top: 24px;
            }

            ${media.xs} {
                gap: 16px;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                padding-top: 20px;
            }
        }

        .stat-item {
            text-align: center;

            .stat-number {
                display: block;
                font-size: 1.8rem;
                font-weight: 800;
                letter-spacing: -0.02em;

                ${media.sm} {
                    font-size: 1.5rem;
                }

                ${media.xs} {
                    font-size: 1.3rem;
                }
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

    /* ── CTA Section ── */
    .projects-cta {
        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1b3d 100%);
        padding: 80px 20px;
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;

        ${media.sm} {
            padding: 48px 16px;
        }

        ${media.xs} {
            padding: 36px 12px;
        }

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

            ${media.sm} {
                width: 250px;
                height: 250px;
                top: -80px;
                right: -60px;
            }
        }

        h2 {
            font-size: clamp(1.8rem, 4vw, 2.6rem);
            font-weight: 800;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
        }

        > .container > p {
            max-width: 560px;
            margin: 0 auto 36px;
            font-size: 1.1rem;
            opacity: 0.8;
            line-height: 1.6;
            position: relative;
            z-index: 1;

            ${media.sm} {
                font-size: 0.95rem;
                margin-bottom: 28px;
            }

            ${media.xs} {
                font-size: 0.88rem;
                margin-bottom: 24px;
            }
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;

            ${media.sm} {
                flex-direction: column;
                align-items: center;
                gap: 12px;

                .btn {
                    width: 100%;
                    max-width: 320px;
                    text-align: center;
                    justify-content: center;
                }
            }

            ${media.xs} {
                gap: 10px;

                .btn {
                    max-width: 100%;
                    font-size: 0.9rem !important;
                }
            }

            .btn.primary {
                background: ${gradient} !important;
                color: #fff !important;
                box-shadow: 0 8px 28px rgba(255, 0, 128, 0.4) !important;

                &:hover {
                    box-shadow: 0 12px 36px rgba(255, 0, 128, 0.55) !important;
                }
            }

            .btn.secondary {
                background: transparent !important;
                color: #fff !important;
                border: 2px solid rgba(255, 255, 255, 0.5) !important;
                box-shadow: none !important;

                &:hover {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-color: #fff !important;
                }
            }
        }
    }
`;

export default ProjectStyle;

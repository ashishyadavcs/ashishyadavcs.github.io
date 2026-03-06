"use client";
import styled, { keyframes } from "styled-components";
import media from "../config/media";

const gradient = "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)";

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const ProjectdetailsStyle = styled.section`
    /* ── Hero banner ── */
    .project-hero {
        background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
        padding: 80px 0 48px;
        color: #fff;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.1) 0%, transparent 70%);
            top: -200px;
            right: -100px;
            pointer-events: none;
        }

        ${media.sm} {
            padding: 48px 0 32px;
        }

        ${media.xs} {
            padding: 36px 0 24px;
        }

        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
            font-size: 0.85rem;
            animation: ${fadeInUp} 0.5s ease-out both;

            a {
                color: rgba(255, 255, 255, 0.6);
                transition: color 0.2s;

                &:hover {
                    color: #ff0080;
                }
            }

            .separator {
                color: rgba(255, 255, 255, 0.3);
            }

            .current {
                color: rgba(255, 255, 255, 0.9);
                font-weight: 500;
            }

            ${media.sm} {
                font-size: 0.78rem;
                flex-wrap: wrap;
                gap: 6px;
                margin-bottom: 16px;
            }
        }

        h1 {
            font-size: clamp(1.6rem, 4vw, 2.6rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 16px;
            animation: ${fadeInUp} 0.5s ease-out 0.1s both;
        }

        .project-meta-desc {
            max-width: 700px;
            font-size: 1.05rem;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.75);
            margin-bottom: 24px;
            animation: ${fadeInUp} 0.5s ease-out 0.15s both;

            ${media.sm} {
                font-size: 0.95rem;
            }
        }

        .hero-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            animation: ${fadeInUp} 0.5s ease-out 0.2s both;

            ${media.sm} {
                flex-direction: column;
                gap: 10px;

                .btn {
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                }
            }

            .btn.primary {
                background: ${gradient} !important;
                color: #fff !important;
                box-shadow: 0 6px 20px rgba(255, 0, 128, 0.35) !important;

                &:hover {
                    box-shadow: 0 10px 28px rgba(255, 0, 128, 0.5) !important;
                }
            }

            .btn.secondary {
                background: rgba(255, 255, 255, 0.08) !important;
                color: #fff !important;
                border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
                box-shadow: none !important;

                &:hover {
                    background: rgba(255, 255, 255, 0.15) !important;
                    border-color: rgba(255, 255, 255, 0.5) !important;
                }
            }
        }
    }

    /* ── Main content area ── */
    .project-body {
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: 48px;
        padding: 48px 0 80px;
        align-items: start;

        ${media.sm} {
            grid-template-columns: 1fr;
            padding: 32px 0 48px;
            gap: 24px;
        }

        ${media.xs} {
            padding: 24px 0 36px;
            gap: 20px;
        }
    }

    /* ── Left: content ── */
    .project-content {
        animation: ${fadeInUp} 0.5s ease-out 0.25s both;

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a2e;
            margin: 36px 0 16px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f0f0;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 60px;
                height: 2px;
                background: ${gradient};
            }

            &:first-child {
                margin-top: 0;
            }

            ${media.sm} {
                font-size: 1.3rem;
                margin: 28px 0 12px;
            }

            ${media.xs} {
                font-size: 1.15rem;
            }
        }

        p {
            font-size: 1rem;
            line-height: 1.75;
            color: #444;
            margin-bottom: 16px;
        }

        ul {
            padding: 0 0 0 8px;
            list-style: none;
            margin-bottom: 16px;

            li {
                position: relative;
                padding: 8px 0 8px 24px;
                font-size: 0.95rem;
                color: #444;
                line-height: 1.6;

                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 16px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: ${gradient};
                }
            }
        }
    }

    /* ── Right: sidebar ── */
    .project-sidebar {
        animation: ${fadeInUp} 0.5s ease-out 0.3s both;

        ${media.sm} {
            order: -1;
        }
    }

    .sidebar-card {
        background: #fff;
        border-radius: 16px;
        box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.04),
            0 8px 28px rgba(0, 0, 0, 0.07);
        border: 1px solid rgba(0, 0, 0, 0.06);
        overflow: hidden;
        position: sticky;
        top: 80px;

        ${media.sm} {
            position: static;
        }

        .sidebar-image {
            width: 100%;
            height: 200px;
            object-fit: cover;

            ${media.sm} {
                height: 180px;
            }

            ${media.xs} {
                height: 160px;
            }
        }

        .sidebar-body {
            padding: 24px;

            ${media.sm} {
                padding: 18px;
            }
        }

        .sidebar-label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: #999;
            margin-bottom: 12px;
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            list-style: none;
            margin-bottom: 24px;

            li {
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
                background: rgba(255, 0, 128, 0.08);
                color: #ff0080;
                border: 1px solid rgba(255, 0, 128, 0.15);
                transition: all 0.2s;

                &:hover {
                    background: rgba(255, 0, 128, 0.15);
                }
            }
        }

        .sidebar-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
`;

export default ProjectdetailsStyle;

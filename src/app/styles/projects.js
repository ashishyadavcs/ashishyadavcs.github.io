"use client";

import styled from "styled-components";
import media from "../config/media";

const ProjectStyle = styled.div`
    padding: 40px 0 0;
    color: var(--foreground);

    .projects-header {
        text-align: center;
        margin-bottom: 60px;

        .heading {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            margin-bottom: 24px;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
        }

        .projects-intro {
            max-width: 800px;
            margin: 0 auto;
            font-size: 1.125rem;
            line-height: 1.7;
            color: var(--text-light);

            ${media.md} {
                font-size: 1rem;
                padding: 0 20px;
            }
        }
    }

    .project-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 24px;
        margin-bottom: 80px;

        ${media.sm} {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 60px;
        }
    }

    .stat-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 32px 24px;
        text-align: center;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(255, 0, 128, 0.15);
            border-color: var(--primary-color);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;

            ${media.sm} {
                font-size: 2rem;
            }
        }

        .stat-label {
            font-size: 0.95rem;
            color: var(--text-light);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    }

    .featured-section,
    .all-projects,
    .tech-stack {
        margin-bottom: 80px;

        ${media.md} {
            margin-bottom: 60px;
        }
    }

    .section-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--foreground);

        ${media.md} {
            font-size: 1.75rem;
        }
    }

    .section-description {
        font-size: 1.1rem;
        color: var(--text-light);
        margin-bottom: 40px;
        max-width: 600px;
        line-height: 1.6;
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
        margin-bottom: 40px;

        ${media.sm} {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 12px;
        }
    }

    .tech-tag {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        text-align: center;
        font-weight: 500;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 0, 128, 0.3);
        }

        ${media.sm} {
            padding: 10px 16px;
            font-size: 0.85rem;
        }
    }

    .cta-section {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 20px;
        padding: 60px 40px;
        text-align: center;
        margin-top: 80px;

        ${media.md} {
            padding: 40px 24px;
            margin-top: 60px;
        }

        .cta-content {
            max-width: 600px;
            margin: 0 auto;

            h2 {
                font-size: 2.25rem;
                font-weight: 600;
                margin-bottom: 20px;
                background: var(--primary-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;

                ${media.md} {
                    font-size: 1.75rem;
                }
            }

            p {
                font-size: 1.125rem;
                color: var(--text-light);
                line-height: 1.6;
                margin-bottom: 32px;

                ${media.md} {
                    font-size: 1rem;
                }
            }
        }

        .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;

            ${media.sm} {
                flex-direction: column;
                align-items: center;
            }
        }

        .cta-button {
            padding: 14px 32px;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1rem;
            min-width: 140px;
            text-align: center;

            &.primary {
                background: var(--primary-gradient);
                color: white;
                border: 2px solid transparent;

                &:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(255, 0, 128, 0.4);
                }
            }

            &.secondary {
                background: transparent;
                color: var(--primary-color);
                border: 2px solid var(--primary-color);

                &:hover {
                    background: var(--primary-gradient);
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(255, 0, 128, 0.3);
                }
            }

            ${media.sm} {
                min-width: 200px;
            }
        }
    }

    ${media.md} {
        padding: 30px 0 60px;
    }
`;

export default ProjectStyle;

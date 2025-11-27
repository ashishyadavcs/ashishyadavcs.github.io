"use client";
import styled from "styled-components";
import { media } from "../config/media";

const TestimonialStyle = styled.div`
    .testimonials-section {
        padding: 80px 0;
        overflow: hidden;
        position: relative;
        ${media.xs} {
            padding: 40px 0;
            margin: 40px 0;
        }
    }

    .section-header {
        text-align: center;
        position: relative;
        z-index: 2;
        padding: 0 20px;

        ${media.sm} {
            padding: 0 16px;
        }

        .section-heading {
            font-size: 2.2rem;
            font-weight: 700;
            margin: 0 0 8px 0;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;

            ${media.sm} {
                font-size: 1.8rem;
            }
        }

        .section-subtitle {
            color: #666;
            font-size: 1.1rem;
            font-weight: 400;

            ${media.sm} {
                font-size: 1rem;
            }
        }
    }

    .testimonials-carousel-container {
        position: relative;
        overflow: hidden;
        transform: translateZ(0); /* Enable hardware acceleration */
        backface-visibility: hidden;
        padding: 30px 0;
        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 10;
            pointer-events: none;

            ${media.sm} {
                width: 50px;
            }
        }

        &::before {
            left: 0;
            background: linear-gradient(
                to right,
                rgba(248, 249, 250, 1) 0%,
                rgba(248, 249, 250, 0.9) 30%,
                rgba(248, 249, 250, 0) 100%
            );
        }

        &::after {
            right: 0;
            background: linear-gradient(
                to left,
                rgba(248, 249, 250, 1) 0%,
                rgba(248, 249, 250, 0.9) 30%,
                rgba(248, 249, 250, 0) 100%
            );
        }
    }

    .testimonials-carousel {
        display: flex;
        gap: 24px;
        padding: 20px 0;
        animation: autoScroll 60s linear infinite;
        width: max-content;
        will-change: transform;

        &:hover {
            animation-play-state: paused;
        }

        ${media.sm} {
            gap: 16px;
            animation-duration: 50s;
        }
    }

    @keyframes autoScroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-50% - 12px));
        }
    }

    .testimonial-card {
        background: white;
        border-radius: 20px;
        padding: 32px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        border: 1px solid #f0f0f0;
        position: relative;
        min-width: 380px;
        max-width: 380px;
        flex-shrink: 0;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        ${media.sm} {
            padding: 24px;
            min-width: 320px;
            max-width: 320px;
        }

        ${media.xs} {
            min-width: 280px;
            max-width: 280px;
            padding: 20px;
        }

        .quote-icon {
            position: absolute;
            top: -15px;
            left: 24px;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);
        }

        .testimonial-content {
            margin: 12px 0 24px 0;

            .testimonial-text {
                font-size: 1rem;
                line-height: 1.7;
                color: #333;
                font-style: italic;
                margin: 0 0 16px 0;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;

                ${media.sm} {
                    font-size: 0.95rem;
                    -webkit-line-clamp: 3;
                }
            }

            .project-tag {
                display: inline-block;
                background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
                color: white;
                padding: 4px 12px;
                border-radius: 16px;
                font-size: 0.8rem;
                font-weight: 500;
            }
        }

        .client-info {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 0 0 16px 0;
        }

        .client-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #f0f0f0;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 1rem;
            flex-shrink: 0;
        }

        .client-details {
            min-width: 0;
            flex: 1;

            .client-name {
                font-size: 1rem;
                font-weight: 600;
                color: #333;
                margin: 0 0 2px 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .client-role {
                font-size: 0.85rem;
                color: #666;
                margin: 0 0 2px 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .client-company {
                font-size: 0.8rem;
                color: #999;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .rating {
            display: flex;
            gap: 2px;

            .star {
                color: #ffd700;
                font-size: 1rem;
            }
        }
    }

    .testimonials-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 32px;
        padding: 40px 20px 0 20px;
        border-top: 1px solid #e0e0e0;
        position: relative;
        z-index: 2;
        margin: 0 auto;

        ${media.sm} {
            gap: 24px;
            margin: 40px auto 0 auto;
            padding: 40px 16px 0 16px;
        }
    }

    .stat-item {
        text-align: center;

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 8px 0;
            display: block;

            ${media.sm} {
                font-size: 2rem;
            }
        }

        .stat-label {
            font-size: 0.9rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }
    }

    .scroll-indicator {
        text-align: center;
        margin: 20px auto 0 auto;
        color: #999;
        font-size: 0.85rem;
        position: relative;
        z-index: 2;
        max-width: 1200px;
        padding: 0 20px;

        ${media.sm} {
            font-size: 0.8rem;
            padding: 0 16px;
        }
    }
`;

export default TestimonialStyle;

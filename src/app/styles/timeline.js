"use client";

import styled from "styled-components";
import media from "../config/media";

const TimelineStyle = styled.div`
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;

    ${media.sm} {
        padding: 30px 15px;
    }

    ${media.xs} {
        padding: 20px 10px;
    }

    &::before {
        content: "";
        position: absolute;
        left: 8px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--foreground);
        opacity: 0.1;

        ${media.xs} {
            left: 6px;
        }
    }

    .timeline-item {
        position: relative;
        width: 100%;
        padding: 0 0 40px 30px;

        ${media.xs} {
            padding: 0 0 30px 25px;
        }

        &::before {
            content: "";
            position: absolute;
            top: 8px;
            left: -19px;
            width: 12px;
            height: 12px;
            background: #8900f3;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 0 0 1px #e0e0e0;
            z-index: 2;

            ${media.xs} {
                left: -9px;
                width: 10px;
                height: 10px;
                border: 2px solid white;
                top: 6px;
            }
        }
    }

    .timeline-content {
        background: transparent;
        padding: 0;
        border: none;
        box-shadow: none;

        .timeline-date {
            color: var(--foreground);
            opacity: 0.6;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 4px;
            text-transform: none;
            letter-spacing: normal;

            ${media.xs} {
                font-size: 0.85rem;
            }
        }

        .timeline-title {
            color: var(--foreground);
            font-size: 1.3rem;
            font-weight: 600;
            margin: 0 0 4px 0;
            line-height: 1.3;

            ${media.sm} {
                font-size: 1.2rem;
            }

            ${media.xs} {
                font-size: 1.1rem;
            }
        }

        .timeline-company {
            color: #2575fc;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 8px;
            display: block;

            ${media.xs} {
                font-size: 0.95rem;
            }
        }

        .timeline-field {
            color: #6a11cb;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 8px;
            display: block;
            font-style: normal;

            ${media.xs} {
                font-size: 0.95rem;
            }
        }

        .timeline-description {
            color: var(--foreground);
            opacity: 0.7;
            line-height: 1.6;
            margin: 0;
            font-size: 0.95rem;

            ${media.xs} {
                font-size: 0.9rem;
                line-height: 1.5;
            }
        }
    }

    .timeline-item {
        opacity: 0;
        transform: translateY(20px);
        animation: slideInUp 0.5s ease forwards;
    }

    .timeline-item:nth-child(1) {
        animation-delay: 0.1s;
    }

    .timeline-item:nth-child(2) {
        animation-delay: 0.2s;
    }

    .timeline-item:nth-child(3) {
        animation-delay: 0.3s;
    }

    .timeline-item:nth-child(4) {
        animation-delay: 0.4s;
    }

    .timeline-item:nth-child(5) {
        animation-delay: 0.5s;
    }

    @keyframes slideInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export default TimelineStyle;

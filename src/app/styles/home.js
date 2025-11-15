"use client";
import styled from "styled-components";
import media from "../config/media";

const HomeStyle = styled.div`
    .profile {
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
        border: 4px solid #ff0080;
        box-shadow: 0 15px 30px rgba(255, 0, 128, 0.3);
        z-index: 1;
        position: relative;
    }

    .banner {
        background: url("/images/bg.jpg") no-repeat center center/cover;
        color: #333;
        padding: 60px 20px 80px;
        ${media.sm} {
            padding: 20px;
        }
        text-align: center;
        position: relative;
        overflow: hidden;
        margin: 0 0 50px;
        min-height: calc(100dvh - 50px);
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 10% 10%, transparent 3%, #000, #000);
            background: linear-gradient(to bottom, transparent, #000);
        }
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 10% 10%, transparent, #000);
        }

        .title {
            font-size: 1.3rem;
            margin: 15px 0;
            font-weight: 500;
            opacity: 0.9;
            min-height: 1.5em;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            position: relative;

            ${media.md} {
                font-size: 1.2rem;
            }

            ${media.sm} {
                font-size: 1.1rem;
            }
        }

        .description {
            font-size: 1.1rem;
            opacity: 0.8;
            max-width: 600px;
            margin: 0 auto 30px;
            line-height: 1.6;
            ${media.sm} {
                display: -webkit-box;
                -webkit-line-clamp: 3; /* number of lines */
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
    .content {
        position: relative;
        z-index: 1;
        color: #fff;
    }
    .timeline-section {
        .section-heading {
            color: #333;
            font-size: 2.2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;

            ${media.sm} {
                font-size: 1.8rem;
            }

            ${media.xs} {
                font-size: 1.6rem;
            }
        }

        .section-subtitle {
            color: #666;
            opacity: 0.8;
            font-size: 1.1rem;
            text-align: center;
            margin-bottom: 40px;
            font-weight: 400;

            ${media.sm} {
                font-size: 1rem;
                margin-bottom: 30px;
            }

            ${media.xs} {
                font-size: 0.95rem;
                margin-bottom: 25px;
            }
        }
    }

    .stats-section {
        background: linear-gradient(135deg, #2d0016 0%, #7928ca 100%);
        color: white;
        padding: 60px 0;
        margin: 60px 0;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(255, 0, 128, 0.3);

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            text-align: center;

            ${media.sm} {
                gap: 30px;
            }
        }

        .stat-item {
            .stat-number {
                font-size: 2.5rem;
                font-weight: 700;
                color: white;
                margin-bottom: 8px;

                ${media.sm} {
                    font-size: 2rem;
                }
            }

            .stat-label {
                font-size: 1rem;
                opacity: 0.9;
                text-transform: uppercase;
                letter-spacing: 0.5px;

                ${media.sm} {
                    font-size: 0.9rem;
                }
            }
        }
    }

    .projects-section {
        ${media.minsm} {
            margin: 80px 0 40px 0;
            padding: 60px 0;
        }
        border-radius: 20px;
    }

    .skills-section {
        margin: 40px 0;
        border-radius: 20px;
        .section-heading {
            color: #333;
            font-size: 2.2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
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
            position: relative;
            z-index: 1;

            &.active {
                background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%) !important;
                color: white !important;
                border-color: transparent !important;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);
            }

            &:hover:not(.active) {
                border-color: #ff0080;
                color: #ff0080;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(255, 0, 128, 0.15);
            }

            &:focus {
                outline: 2px solid rgba(255, 0, 128, 0.3);
                outline-offset: 2px;
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
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(255, 0, 128, 0.15);
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
                background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
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
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
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
                animation: shimmer 2s infinite;
            }
        }

        @keyframes shimmer {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
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
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 25px rgba(255, 0, 128, 0.15);
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
`;
export default HomeStyle;

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
    }

    .banner {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        color: #333;
        padding: 60px 20px 80px;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(0,0,0,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.1;
        }

        ${media.md} {
            padding: 40px 20px 60px;
        }

        .title {
            font-size: 1.3rem;
            margin: 15px 0;
            font-weight: 400;
            opacity: 0.9;
        }

        .description {
            font-size: 1.1rem;
            opacity: 0.8;
            max-width: 600px;
            margin: 0 auto 30px;
            line-height: 1.6;
        }
    }

    .timeline-section {
        margin: 80px 0;
        padding: 60px 0;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

        ${media.sm} {
            margin: 60px 0;
            padding: 40px 20px;
        }

        ${media.xs} {
            margin: 40px 0;
            padding: 30px 15px;
        }

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
        margin: 80px 0 40px 0;
        background: #fafbfc;
        padding: 60px 0;
        border-radius: 20px;

        ${media.sm} {
            margin: 60px 0 30px 0;
            padding: 40px 20px;
        }

        ${media.xs} {
            margin: 40px 0 20px 0;
            padding: 30px 15px;
        }
    }
`;
export default HomeStyle;

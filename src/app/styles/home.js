"use client";
import styled from "styled-components";
import media from "../config/media";

const HomeStyle = styled.div`
    .profile {
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
        border: 4px solid #2575fc;
    }
    .banner {
        background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
        color: white;
        padding: 20px;
        ${media.md} {
            padding: 40px 30% 40px;
        }
        text-align: center;
        .title {
            font-size: 1.2rem;
            margin: 10px 0;
        }
    }

    .timeline-section {
        margin: 80px 0;

        ${media.sm} {
            margin: 60px 0;
        }

        ${media.xs} {
            margin: 40px 0;
        }

        .section-heading {
            color: var(--foreground);
            font-size: 2.2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
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
            color: var(--foreground);
            opacity: 0.6;
            font-size: 1rem;
            text-align: center;
            margin-bottom: 40px;
            font-weight: 400;

            ${media.sm} {
                font-size: 0.95rem;
                margin-bottom: 30px;
            }

            ${media.xs} {
                font-size: 0.9rem;
                margin-bottom: 25px;
            }
        }
    }

    .projects-section {
        margin: 80px 0 40px 0;

        ${media.sm} {
            margin: 60px 0 30px 0;
        }

        ${media.xs} {
            margin: 40px 0 20px 0;
        }
    }
`;
export default HomeStyle;

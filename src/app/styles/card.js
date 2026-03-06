"use client";

import styled from "styled-components";
import media from "../config/media";

const CardStyle = styled.div`
    background: #ffffff;
    border-radius: 20px;
    color: #333;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 8px 32px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition:
        transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
        border-color 0.35s ease;
    border: 1px solid rgba(0, 0, 0, 0.06);

    &:hover {
        box-shadow:
            0 12px 40px rgba(255, 0, 128, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.08);
        border-color: rgba(255, 0, 128, 0.15);
    }

    img {
        height: 220px;
        object-fit: cover;
        width: 100%;
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

        ${media.sm} {
            height: 180px;
        }
    }

    &:hover img {
        transform: scale(1.05);
    }

    .card-title {
        margin: 0 0 10px;
        font-size: 1.2rem;
        font-weight: 700;

        ${media.xs} {
            font-size: 1.05rem;
        }
        background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.35;
    }

    .details {
        padding: 22px 24px 24px;

        ${media.sm} {
            padding: 18px 18px 20px;
        }
    }

    .card-description {
        color: #555;
        line-height: 1.65;
        margin-bottom: 16px;
        font-size: 0.92rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card-tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        list-style: none;
        margin: 16px 0 0;

        ${media.xs} {
            gap: 4px;
            margin: 12px 0 0;
        }

        li {
            padding: 4px 12px;
            background: rgba(255, 0, 128, 0.06);
            color: #ff0080;
            border-radius: 20px;
            font-size: 0.78rem;
            font-weight: 600;
            border: 1px solid rgba(255, 0, 128, 0.12);
            transition: all 0.2s;

            &:hover {
                background: rgba(255, 0, 128, 0.12);
            }
        }
    }

    .card-links {
        padding: 0 24px 22px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        ${media.sm} {
            padding: 0 18px 18px;
            gap: 8px;
        }

        a {
            padding: 8px 16px;
            background: rgba(255, 0, 128, 0.08);
            color: #ff0080;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            transition: all 0.3s ease;

            &:hover {
                background: #ff0080;
                color: white;
                transform: translateY(-2px);
            }

            ${media.sm} {
                padding: 7px 14px;
                font-size: 0.82rem;
            }
        }
    }
`;
export default CardStyle;

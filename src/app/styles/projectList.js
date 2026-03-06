"use client";
import styled, { keyframes } from "styled-components";
import media from "../config/media";

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const ProjectListStyle = styled.div`
    .heading {
        margin: 30px 0 20px;
        padding-inline: var(--container-size);
        font-size: 2rem;
        font-weight: 700;

        ${media.sm} {
            font-size: 1.6rem;
            margin: 20px 0 16px;
        }

        ${media.xs} {
            font-size: 1.35rem;
        }
        background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    .projects {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 28px;
        padding-inline: var(--container-size);
        padding-block: 20px;
        margin: min(5vw, 50px) 0 0;

        > li {
            width: 100%;
            animation: ${fadeInUp} 0.5s ease-out both;
        }

        ${media.sm} {
            display: flex;
            flex-wrap: nowrap;
            overflow: auto;
            padding-inline: var(--container-size);
            gap: 16px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;

            &::-webkit-scrollbar {
                display: none;
            }

            > li {
                min-width: 85%;
                scroll-snap-align: start;
                flex-shrink: 0;
            }
        }

        .card {
            height: 100%;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);

            img {
                width: 100%;
            }

            &:hover {
                transform: translateY(-8px);
            }

            .view-more {
                margin: 20px 0;
            }

            ${media.sm} {
                .card-description {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }
        }
    }
`;
export default ProjectListStyle;

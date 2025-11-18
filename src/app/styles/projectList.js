"use client";
import styled from "styled-components";
import media from "../config/media";

const ProjectListStyle = styled.div`
    .heading {
        margin: 30px 0 20px;
        padding-inline: var(--container-size);
    }
    .projects {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding-block: 0 40px;
        padding-inline: var(--container-size);
        margin: min(5vw, 50px) 0 0;
        ${media.sm} {
            display: flex;
            flex-wrap: nowrap;
            overflow: auto;
            padding-inline: var(--container-size);
            > li {
                min-width: 90%;
            }
        }
        .card {
            perspective: 100px;
            height: 100%;
            transition: all 0.3s ease-in-out;
            img {
                width: 100%;
            }
            &:hover {
                transform: rotateX(-10deg) scale(0.98);
            }
            .view-more {
                margin: 20px 0;
            }
            ${media.sm} {
                .card-description {
                    display: none;
                }
            }
        }
    }
`;
export default ProjectListStyle;

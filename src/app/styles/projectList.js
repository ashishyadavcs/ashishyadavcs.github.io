"use client";
import styled from "styled-components";

const ProjectListStyle = styled.div`
    .projects {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        .card {
            perspective: 100px;
            height: 100%;
            transition: all 0.3s ease-in-out;
            img {
                width: 100%;
            }
            &:hover {
                transform: rotateY(-20deg) rotateX(-10deg) scale(0.98);
            }
        }
    }
`;
export default ProjectListStyle;

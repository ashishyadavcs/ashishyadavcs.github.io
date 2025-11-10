"use client";
import styled from "styled-components";

const ProjectListStyle = styled.div`
    h2 {
        margin: 30px 0 20px;
    }
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
                transform: rotateX(-10deg) scale(0.98);
            }
        }
    }
`;
export default ProjectListStyle;

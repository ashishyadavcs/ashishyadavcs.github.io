"use client";
import styled from "styled-components";
import media from "../config/media";

const ProjectdetailsStyle = styled.footer`
    h2 {
        margin: 20px 0 10px;
    }
    .content ul {
        padding: 0 0 0 20px;
    }
    img {
        object-fit: cover;
        border-radius: 8px;
    }
    .info {
        ${media.md} {
            position: sticky;
            top: 60px;
            margin: 20px 0 0;
            height: max-content;
        }
    }
    .container {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        ${media.md} {
            flex-direction: row;
        }
        gap: 20px 40px;
    }
    .tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        list-style: none;
        margin: 30px 0;
        li {
            padding: 5px 10px;
            border-radius: 40px;
            font-size: 1rem;
            border: 2px solid;
        }
    }
`;
export default ProjectdetailsStyle;

"use client";
import styled from "styled-components";
import media from "../config/media";

const MeetingStyle = styled.div`
    padding: 20px;
    overflow: auto;
    background: #f8fafc;
    color: #000;
    border: 2px solid #ddd;
    border-radius: 8px;
    max-height: ${props => props.maxHeight};
    ${media.sm} {
        &,
        .container {
            padding: 0;
        }
    }

    p {
        color: #000;
        margin: 0 0 20px;
    }
    .scheduling-header {
        text-align: center;
        padding: 10px;
        .scheduling-icon {
            font-size: 2rem;
            color: #6366f1;
            margin: 0 0 12px;
        }
    }
`;
export default MeetingStyle;

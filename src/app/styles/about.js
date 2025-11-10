"use client";
import styled from "styled-components";
import media from "../config/media";

const AboutStyle = styled.div`
    min-height: 100vh;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        text-align: center;
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 30px;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        ${media.md} {
            font-size: 2rem;
        }
    }

    .about-description {
        text-align: center;
        color: #666;
        font-size: 1.1rem;
        line-height: 1.8;
        max-width: 800px;
        margin: 0 auto 60px auto;
        padding: 40px 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        ${media.md} {
            font-size: 1rem;
        }
    }

    .section-title {
        text-align: center;
        color: #333;
        font-size: 2rem;
        margin: 80px 0 40px 0;
        position: relative;

        &:first-of-type {
            margin-top: 40px;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            border-radius: 2px;
        }

        ${media.md} {
            font-size: 1.6rem;
        }
    }
`;

export default AboutStyle;

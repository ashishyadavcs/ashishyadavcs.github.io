"use client";
import styled from "styled-components";
import media from "@/app/config/media";

export const WhatsAppButton = styled.a`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #25d366;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
    transition:
        transform 0.25s,
        box-shadow 0.25s;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 24px rgba(37, 211, 102, 0.55);
    }

    ${media.sm} {
        width: 46px;
        height: 46px;
        font-size: 24px;
    }
`;

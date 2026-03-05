"use client";
import styled from "styled-components";
import media from "@/app/config/media";

export const FloatWrapper = styled.div`
    position: fixed;
    bottom: 28px;
    right: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    z-index: 9998;

    ${media.sm} {
        bottom: 18px;
        right: 18px;
        gap: 12px;
        opacity: ${({ $visible }) => ($visible ? 1 : 0)};
        visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
        pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
    }
`;

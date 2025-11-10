"use client";
import styled from "styled-components";

const ButtonStyle = type => styled(type)`
    background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 14px 28px;
    cursor: pointer;
    font-size: inherit;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);
    position: relative;
    overflow: hidden;
    svg {
        flex-shrink: 0;
    }
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 30px rgba(255, 0, 128, 0.4);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }

    &[data-type="secondary"] {
        background: transparent;
        color: #ff0080;
        border: 2px solid #ff0080;

        &:hover {
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            color: white;
        }
    }
`;
export default ButtonStyle;

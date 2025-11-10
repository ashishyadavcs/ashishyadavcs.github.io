"use client";
import styled from "styled-components";

const ButtonStyle = type => styled(type)`
    background: #8900f3;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    cursor: pointer;
    font-size: inherit;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover {
        background: #6211a1;
    }
`;
export default ButtonStyle;

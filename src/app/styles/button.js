"use client";
import styled from "styled-components";

const ButtonStyle = type => styled(type)`
    background: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    cursor: pointer;
    font-size: inherit;

    &:hover {
        background: #005bb5;
    }
`;
export default ButtonStyle;

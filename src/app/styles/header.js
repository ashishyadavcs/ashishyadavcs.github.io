"use client";
import styled from "styled-components";
import { media } from "../config/media";

const StyledHeader = styled.header`
    background: #f5f5f5;
    color: #000;
    text-transform: capitalize;
    background: #fff;
    position: sticky;
    z-index: 10;
    top: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    nav {
        &,
        ul {
            display: flex;
            list-style: none;
        }

        ${media.md} {
            justify-content: space-between;
        }
        ${media.sm} {
            ul {
                flex-direction: column;
            }
            li {
                width: 100%;
                border-bottom: 1px solid #f1f1f1;
                a {
                    color: #fff;
                    display: flex;
                }
            }
            flex-direction: column-reverse;
            justify-content: flex-end;
            &.mobilelinks {
                width: 70%;
                max-width: 400px;
                background: #000;
                position: absolute;
                transition: all 0.2s ease-in-out;
                top: 100%;
                left: -100%;
                height: 100vh;
                overflow: hidden;
            }
        }
    }
    .menu {
        display: none;
        outline: none;
        border: none;
        width: 60px;
        height: 60px;
        margin-right: -17px;
        background: transparent;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-left: 1px solid #f1f1f1;
        &:-webkit-tap-highlight-color {
            background: #f1f1f1;
        }
        span {
            height: 2.6px;
            width: 25px;
            transition: all 0.2s;
            display: block;
            margin-bottom: 3px;
            background: #000;
        }
        ${media.sm} {
            display: flex;
        }
    }
    a {
        padding: 15px;
        ${media.minsm} {
            &:hover {
                background: #f1f1f1;
            }
        }
    }
    .logo {
        padding: 15px 0;
        transition: all 0.3s;
        font-weight: 600;
        &:hover {
            background: transparent;
        }
    }
    &.active {
        .menu {
            span {
                &:nth-of-type(2) {
                    opacity: 0;
                    width: 0px;
                }
                &:first-child {
                    transform: rotate(45deg);
                    transform-origin: left;
                }
                &:last-child {
                    transform: translateY(7px) rotate(-45deg);
                    transform-origin: left;
                }
            }
        }
        .mobilelinks {
            left: 0;
            z-index: 1;
        }

        &:after {
            ${media.sm} {
                opacity: 1;
            }
        }
    }
`;
export default StyledHeader;

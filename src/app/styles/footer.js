"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
    --footer-padding: 40px;
    background: #f1f1f1;
    color: #000;
    padding: var(--footer-padding) 0 0;
    margin: 50px 0 0;
    .container {
        display: grid;
        gap: 20px 40px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .title {
        margin: 0 0 10px;
    }
    ul {
        list-style: none;
        a {
            display: block;
            padding: 5px 0;
            transition: all 0.3s;
            &:hover {
                padding: 5px 10px;
                background: #ddd;
            }
        }
    }
    .socials {
        display: flex;
        gap: 10px;
        margin: 20px 0 0;
        a {
            height: 30px;
            width: 30px;
            background: #ddd;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
    }
    .sub-footer {
        background: #ddd;
        margin: var(--footer-padding) 0 0;
        padding: 10px 0;
        text-align: center;
    }
`;
export default StyledFooter;

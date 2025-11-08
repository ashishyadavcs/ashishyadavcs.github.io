"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: #f1f1f1;
    color: #000;
    padding: 20px 0 0;
    margin: 50px 0 0;
    .container {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .title {
        margin: 0 0 10px;
    }
    ul {
        list-style: none;
    }
    .sub-footer {
        background: #ddd;
        margin: 20px 0 0;
        padding: 10px 0;
        text-align: center;
    }
`;
export default StyledFooter;

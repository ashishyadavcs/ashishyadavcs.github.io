"use client";
import React from "react";
import Container from "./components/layout/Container";
import styled from "styled-components";
import Button from "./components/Button";
const Pagestyle = styled.section`
    padding: 40px 0 0;
    text-align: center;
    a {
        display: block;
        margin: 20px auto;
        width: fit-content;
    }
`;
const Page = () => {
    return (
        <Pagestyle>
            <Container>
                😔 Sorry, page not found
                <Button href="/">Go Home</Button>
            </Container>
        </Pagestyle>
    );
};

export default Page;

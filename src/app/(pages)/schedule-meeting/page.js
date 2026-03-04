import Container from "@/app/components/layout/Container";
import Meeting from "@/app/components/Meeting";
import React from "react";

const page = () => {
    return (
        <Container style={{ margin: "20px auto" }}>
            <Meeting />
        </Container>
    );
};

export default page;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import config from "@/config";

import FloatBTNContainer from "../FloatContainer";
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <FloatBTNContainer />
        </>
    );
};

export default Layout;

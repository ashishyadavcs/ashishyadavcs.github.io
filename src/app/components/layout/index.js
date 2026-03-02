import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import dynamic from "next/dynamic";
const ChatBot = dynamic(() => import("@/app/chatbot"));
import config from "@/config";
const Layout = ({ children }) => {
    const { settings } = config;
    return (
        <>
            <Header />
            {children}
            <Footer />
            {settings.enableChatBot && <ChatBot />}
        </>
    );
};

export default Layout;

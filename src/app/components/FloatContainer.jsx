"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import config from "@/config";
import { FloatWrapper } from "@/styles/floatContainer";

const ChatBot = dynamic(() => import("@/app/chatbot"));
const WhatsApp = dynamic(() => import("@/app/components/WhatsApp"));

const SCROLL_THRESHOLD = 100;

const FloatBTNContainer = () => {
    const { settings } = config;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        if (!mq.matches) {
            setVisible(true);
            return;
        }

        const onScroll = () => setVisible(window.scrollY >= SCROLL_THRESHOLD);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <FloatWrapper $visible={visible}>
            <WhatsApp />
            {settings.enableChatBot && <ChatBot />}
        </FloatWrapper>
    );
};

export default FloatBTNContainer;

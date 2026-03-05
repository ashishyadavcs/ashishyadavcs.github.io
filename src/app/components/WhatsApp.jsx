"use client";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import config from "@/config";
import { WhatsAppButton } from "@/styles/whatsapp";

const WhatsApp = () => {
    const { personal } = config;
    const whatsappNumber = personal.phone.replace(/[^0-9]/g, "");
    const message = encodeURIComponent("Hi Ashish, I'd like to discuss a project with you.");

    const getWhatsAppUrl = () => {
        const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
            navigator.userAgent
        );
        if (isMobile) {
            return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        }
        return `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    };

    const handleClick = e => {
        e.preventDefault();
        window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
    };

    return (
        <WhatsAppButton href="#whatsapp" onClick={handleClick} aria-label="Chat on WhatsApp">
            <IoLogoWhatsapp />
        </WhatsAppButton>
    );
};

export default WhatsApp;

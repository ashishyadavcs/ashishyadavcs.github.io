"use client";
import React from "react";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io5";
import config from "@/config";
import media from "@/app/config/media";

const WhatsAppButton = styled.a`
    position: fixed;
    bottom: 96px;
    right: 28px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #25d366;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
    z-index: 9997;
    transition:
        transform 0.25s,
        box-shadow 0.25s;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 24px rgba(37, 211, 102, 0.55);
    }

    ${media.sm} {
        bottom: 80px;
        right: 18px;
        width: 46px;
        height: 46px;
        font-size: 24px;
    }
`;

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

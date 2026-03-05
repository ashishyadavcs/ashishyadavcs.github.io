"use client";
import styled, { css, keyframes } from "styled-components";
import media from "@/app/config/media";

// ── Design Tokens ──────────────────────────────
const gradient = "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)";
const shadow = {
    subtle: "0 1px 4px rgba(0,0,0,.06)",
    medium: "0 12px 48px rgba(0,0,0,.18)",
    glow: "0 6px 24px rgba(255,0,128,.4)",
    glowHover: "0 8px 32px rgba(255,0,128,.5)",
};
const border = {
    light: "1px solid #e8e8e8",
    input: "1px solid #e0e0e0",
    separator: "1px solid #eee",
    faint: "1px solid #f0f0f0",
};
const radius = { full: "50%", pill: "20px", bubble: "16px", input: "24px", window: "16px" };

// ── Shared Mixins ──────────────────────────────
const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const iconBtn = css`
    ${flexCenter};
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: ${radius.full};
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }
`;

// ── Animations ─────────────────────────────────
const slideUp = keyframes`
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
`;
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
`;
const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.08); }
`;
const bounce = keyframes`
    0%, 80%, 100% { transform: translateY(0); }
    40%           { transform: translateY(-5px); }
`;

// ── Toggle Button ──────────────────────────────
export const ChatToggle = styled.button`
    ${flexCenter};
    width: 58px;
    position: relative;
    height: 58px;
    border-radius: ${radius.full};
    border: none;
    background: ${gradient};
    color: #fff;
    font-size: 26px;
    cursor: pointer;
    box-shadow: ${shadow.glow};
    transition:
        transform 0.25s,
        box-shadow 0.25s;

    &:hover {
        transform: scale(1.1);
        box-shadow: ${shadow.glowHover};
    }

    ${media.sm} {
        width: 52px;
        height: 52px;
        font-size: 22px;
    }
`;

export const UnreadBadge = styled.span`
    ${flexCenter};
    position: absolute;
    top: -4px;
    right: -4px;
    width: 20px;
    height: 20px;
    border-radius: ${radius.full};
    background: #ff3b3b;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    animation: ${pulse} 1.5s ease-in-out infinite;
`;

// ── Chat Window ────────────────────────────────
export const ChatWindowWrapper = styled.div`
    position: fixed;
    bottom: 100px;
    right: 28px;
    width: 330px;
    max-height: max(80vh, 400px);
    border-radius: ${radius.window};
    background: #fff;
    box-shadow: ${shadow.medium};
    display: flex;
    flex-direction: column;
    z-index: 9999;
    overflow: hidden;
    animation: ${slideUp} 0.3s ease-out;

    ${media.sm} {
        inset: auto 0 0 0;
        width: 100%;
        max-height: 100dvh;
        height: 100dvh;
        border-radius: 0;
    }
`;

// ── Header ─────────────────────────────────────
export const ChatHeader = styled.div`
    background: ${gradient};
    color: #fff;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;

    .avatar {
        width: 38px;
        height: 38px;
        border-radius: ${radius.full};
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.5);
    }

    .info {
        flex: 1;
        .name {
            font-weight: 700;
            font-size: 0.95rem;
        }
        .status {
            font-size: 0.75rem;
            opacity: 0.85;
            display: flex;
            align-items: center;
            gap: 5px;
            &::before {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: ${radius.full};
                background: #4cff8d;
                display: inline-block;
            }
        }
    }

    .close-btn {
        ${iconBtn};
        font-size: 18px;
    }
`;

// ── Mute Button ────────────────────────────────
export const MuteButton = styled.button`
    ${iconBtn};
    font-size: 16px;
`;

// ── Messages Area ──────────────────────────────
export const MessagesArea = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #f8f9fb;

    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 10px;
    }
`;

// ── Bot-bubble base (shared by bot messages & typing) ──
const botBubbleBase = css`
    align-self: flex-start;
    background: #fff;
    border: ${border.light};
    border-radius: ${radius.bubble};
    border-bottom-left-radius: 4px;
    box-shadow: ${shadow.subtle};
`;

// ── Message Bubble ─────────────────────────────
export const MessageBubble = styled.div`
    max-width: 82%;
    padding: 10px 14px;
    border-radius: ${radius.bubble};
    font-size: 0.88rem;
    line-height: 1.55;
    animation: ${fadeIn} 0.3s ease-out;
    overflow-wrap: break-word;

    ${({ $isUser }) =>
        $isUser
            ? css`
                  align-self: flex-end;
                  background: ${gradient};
                  color: #fff;
                  border-bottom-right-radius: 4px;
              `
            : botBubbleBase}

    a {
        color: ${({ $isUser }) => ($isUser ? "#ffe0f0" : "#ff0080")};
        text-decoration: underline;
        font-weight: 600;
        &:hover {
            opacity: 0.8;
        }
    }

    strong {
        font-weight: 700;
    }

    .timestamp {
        font-size: 0.68rem;
        opacity: 0.55;
        margin-top: 4px;
        text-align: ${({ $isUser }) => ($isUser ? "right" : "left")};
    }
`;

// ── Typing Indicator ───────────────────────────
export const TypingIndicator = styled.div`
    ${botBubbleBase};
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 10px 16px;

    span {
        width: 7px;
        height: 7px;
        border-radius: ${radius.full};
        background: #aaa;
        animation: ${bounce} 1.2s ease-in-out infinite;
        &:nth-child(2) {
            animation-delay: 0.15s;
        }
        &:nth-child(3) {
            animation-delay: 0.3s;
        }
    }
`;

// ── Quick Replies ──────────────────────────────
export const QuickRepliesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 4px 0 2px;
`;

export const QuickReplyButton = styled.button`
    padding: 6px 12px;
    border-radius: ${radius.pill};
    border: ${border.input};
    background: #fff;
    color: #555;
    font-size: 0.78rem;
    cursor: pointer;
    transition:
        background 0.2s,
        color 0.2s,
        border-color 0.2s;
    white-space: nowrap;

    &:hover {
        background: ${gradient};
        color: #fff;
        border-color: transparent;
    }
`;

// ── Input Area ─────────────────────────────────
export const InputArea = styled.form`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 14px;
    border-top: ${border.separator};
    background: #fff;
    flex-shrink: 0;

    input {
        flex: 1;
        padding: 10px 14px;
        border-radius: ${radius.input};
        border: ${border.input};
        font-size: 0.88rem;
        outline: none;
        transition: border-color 0.2s;
        font-family: inherit;
        &:focus {
            border-color: #ff0080;
        }
        &::placeholder {
            color: #aaa;
        }
    }

    button {
        ${flexCenter};
        width: 40px;
        height: 40px;
        border-radius: ${radius.full};
        border: none;
        background: ${gradient};
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        transition:
            opacity 0.2s,
            transform 0.2s;
        flex-shrink: 0;
        &:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }
        &:not(:disabled):hover {
            transform: scale(1.08);
        }
    }
`;

// ── Powered-by footer ──────────────────────────
export const PoweredBy = styled.div`
    text-align: center;
    padding: 6px 0;
    font-size: 0.68rem;
    color: #bbb;
    background: #fff;
    border-top: ${border.faint};
    flex-shrink: 0;
`;

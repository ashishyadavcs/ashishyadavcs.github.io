"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoChatbubbleEllipses, IoClose, IoSend, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { getChatResponse, quickReplies } from "./chatEngine";
import {
    ChatToggle,
    UnreadBadge,
    ChatWindowWrapper,
    ChatHeader,
    MessagesArea,
    MessageBubble,
    TypingIndicator,
    QuickRepliesWrapper,
    QuickReplyButton,
    InputArea,
    PoweredBy,
    MuteButton,
} from "./styles";

// Lightweight markdown-ish renderer (bold, links, newlines)
function renderMarkdown(text) {
    if (!text) return null;
    const parts = [];
    // Split on markdown patterns
    const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        // Push preceding plain text
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        if (match[1]) {
            // Bold
            parts.push(<strong key={match.index}>{match[2]}</strong>);
        } else if (match[3]) {
            // Link
            parts.push(
                <a
                    key={match.index}
                    href={match[5]}
                    target={match[5].startsWith("/") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                >
                    {match[4]}
                </a>
            );
        }
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    // Split by newlines and join with <br/>
    const result = [];
    parts.forEach((part, i) => {
        if (typeof part === "string") {
            const lines = part.split("\n");
            lines.forEach((line, j) => {
                result.push(<React.Fragment key={`${i}-${j}`}>{line}</React.Fragment>);
                if (j < lines.length - 1) result.push(<br key={`br-${i}-${j}`} />);
            });
        } else {
            result.push(part);
        }
    });
    return result;
}

function getTimestamp() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const WELCOME_MESSAGE = {
    id: 0,
    text: `Hi there! 👋 I'm Ashish's virtual assistant. Ask me anything about his skills, experience, projects, or how to get in touch!`,
    isUser: false,
    time: getTimestamp(),
};

const STORAGE_KEY = "chatbot_history";

function loadChatHistory() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch {}
    return [WELCOME_MESSAGE];
}

function saveChatHistory(messages) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => loadChatHistory());
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const [unread, setUnread] = useState(1);
    const [isMuted, setIsMuted] = useState(() => {
        try {
            return localStorage.getItem("chatbot_muted") === "true";
        } catch {
            return false;
        }
    });
    const messagesEndRef = useRef(null);
    const messagesAreaRef = useRef(null);
    const inputRef = useRef(null);
    const chatSoundRef = useRef(null);

    // Initialize chat sound
    useEffect(() => {
        chatSoundRef.current = new Audio("/chatbot/sounds/chat.mp3");
        chatSoundRef.current.volume = 0.5;
    }, []);

    const playMessageSound = useCallback(() => {
        if (chatSoundRef.current && !isMuted) {
            chatSoundRef.current.currentTime = 0;
            chatSoundRef.current.play().catch(() => {});
        }
    }, [isMuted]);

    const toggleMute = useCallback(() => {
        setIsMuted(prev => {
            const next = !prev;
            try {
                localStorage.setItem("chatbot_muted", String(next));
            } catch {}
            return next;
        });
    }, []);

    // Persist messages to localStorage whenever they change
    useEffect(() => {
        saveChatHistory(messages);
    }, [messages]);

    // Smooth scroll to bottom (for new messages)
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    // Instant scroll to bottom (no animation, for chat open)
    const snapToBottom = useCallback(() => {
        const area = messagesAreaRef.current;
        if (area) area.scrollTop = area.scrollHeight;
    }, []);

    // Track whether we just opened chat (to skip smooth scroll)
    const justOpenedRef = useRef(false);

    // Smooth-scroll on new messages / typing (skip right after opening)
    useEffect(() => {
        if (!isOpen) return;
        if (justOpenedRef.current) {
            justOpenedRef.current = false;
            return;
        }
        scrollToBottom();
    }, [messages, isTyping, isOpen, scrollToBottom]);

    // Instantly jump to bottom when chat opens (no visible scroll)
    useEffect(() => {
        if (isOpen) {
            justOpenedRef.current = true;
            // Wait for DOM to render the chat window, then snap instantly
            requestAnimationFrame(() => {
                snapToBottom();
                inputRef.current?.focus();
            });
            setUnread(0);
        }
    }, [isOpen, snapToBottom]);

    const sendMessage = useCallback(
        text => {
            if (!text.trim()) return;

            const userMsg = {
                id: Date.now(),
                text: text.trim(),
                isUser: true,
                time: getTimestamp(),
            };

            setMessages(prev => [...prev, userMsg]);
            setInput("");
            setIsTyping(true);
            setShowQuickReplies(false);

            // Simulate typing delay for natural feel
            const delay = Math.min(600 + text.length * 15, 1800);
            setTimeout(() => {
                const response = getChatResponse(text);
                const botMsg = {
                    id: Date.now() + 1,
                    text: response,
                    isUser: false,
                    time: getTimestamp(),
                };
                setMessages(prev => [...prev, botMsg]);
                setIsTyping(false);
                setShowQuickReplies(true);
                playMessageSound();

                if (!isOpen) {
                    setUnread(prev => prev + 1);
                }
            }, delay);
        },
        [isOpen, playMessageSound]
    );

    const handleSubmit = e => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleQuickReply = message => {
        sendMessage(message);
    };

    const toggleChat = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            {/* Floating toggle */}
            <ChatToggle onClick={toggleChat} aria-label={isOpen ? "Close chat" : "Open chat"}>
                {isOpen ? <IoClose /> : <IoChatbubbleEllipses />}
                {!isOpen && unread > 0 && <UnreadBadge>{unread}</UnreadBadge>}
            </ChatToggle>

            {/* Chat window */}
            {isOpen && (
                <ChatWindowWrapper role="dialog" aria-label="Chat with Ashish's assistant">
                    {/* Header */}
                    <ChatHeader>
                        <img
                            className="avatar"
                            src="/images/ashish-profile.jpeg"
                            alt="Ashish Yadav"
                            width={38}
                            height={38}
                        />
                        <div className="info">
                            <div className="name">Ashish&apos;s Assistant</div>
                            <div className="status">Online</div>
                        </div>
                        <MuteButton onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                            {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
                        </MuteButton>
                        <button className="close-btn" onClick={toggleChat} aria-label="Close chat">
                            <IoClose />
                        </button>
                    </ChatHeader>

                    {/* Messages */}
                    <MessagesArea ref={messagesAreaRef}>
                        {messages.map(msg => (
                            <MessageBubble key={msg.id} $isUser={msg.isUser}>
                                {renderMarkdown(msg.text)}
                                <div className="timestamp">{msg.time}</div>
                            </MessageBubble>
                        ))}

                        {isTyping && (
                            <TypingIndicator>
                                <span />
                                <span />
                                <span />
                            </TypingIndicator>
                        )}

                        {/* Quick replies */}
                        {showQuickReplies && !isTyping && (
                            <QuickRepliesWrapper>
                                {quickReplies.map(qr => (
                                    <QuickReplyButton
                                        key={qr.label}
                                        onClick={() => handleQuickReply(qr.message)}
                                    >
                                        {qr.label}
                                    </QuickReplyButton>
                                ))}
                            </QuickRepliesWrapper>
                        )}

                        <div ref={messagesEndRef} />
                    </MessagesArea>

                    {/* Input */}
                    <InputArea onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            disabled={isTyping}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping}
                            aria-label="Send message"
                        >
                            <IoSend />
                        </button>
                    </InputArea>

                    <PoweredBy>Powered by Ashish&apos;s Portfolio ✨</PoweredBy>
                </ChatWindowWrapper>
            )}
        </>
    );
};

export default ChatBot;

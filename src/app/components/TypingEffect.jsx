"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
`;

const TypingContainer = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;

    .cursor {
        display: inline-block;
        width: 3px;
        height: 1.2em;
        background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        margin-left: 3px;
        animation: ${blink} 1s infinite;
        border-radius: 1px;
        flex-shrink: 0;
    }

    .typed-text {
        display: inline;
        font-weight: 500;
        color: inherit;
    }
`;

const TypingEffect = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenTexts = 2000,
    showCursor = true,
    loop = true,
}) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        const handleTyping = () => {
            const fullText = texts[currentTextIndex];

            if (!isDeleting && !isPaused) {
                // Typing
                if (currentText.length < fullText.length) {
                    setCurrentText(fullText.substring(0, currentText.length + 1));
                } else {
                    // Finished typing, pause before deleting
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        if (loop || currentTextIndex < texts.length - 1) {
                            setIsDeleting(true);
                        }
                    }, delayBetweenTexts);
                }
            } else if (isDeleting && !isPaused) {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(fullText.substring(0, currentText.length - 1));
                } else {
                    // Finished deleting
                    setIsDeleting(false);
                    setCurrentTextIndex(prev => {
                        if (loop) {
                            return (prev + 1) % texts.length;
                        } else {
                            return prev < texts.length - 1 ? prev + 1 : prev;
                        }
                    });
                }
            }
        };

        if (!isPaused) {
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            const timer = setTimeout(handleTyping, speed);
            return () => clearTimeout(timer);
        }
    }, [
        currentText,
        isDeleting,
        isPaused,
        currentTextIndex,
        texts,
        typingSpeed,
        deletingSpeed,
        delayBetweenTexts,
        loop,
    ]);

    return (
        <TypingContainer>
            <span className="typed-text">{currentText}</span>
            {showCursor && <span className="cursor"></span>}
        </TypingContainer>
    );
};

export default TypingEffect;

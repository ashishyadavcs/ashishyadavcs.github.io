"use client";
import media from "@/app/config/media";
import styled from "styled-components";

const ContactStyles = styled.section`
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column;
    background: #f6f7fb;
    p {
        color: #fff;
    }

    .hero-section {
        background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
        padding: 80px 0 140px;
        position: relative;
        overflow: hidden;
        ${media.sm} {
            padding: 40px 0 100px;
        }
        color: white;
        text-align: center;

        &::before {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.12) 0%, transparent 70%);
            top: -120px;
            right: -100px;
            pointer-events: none;
            filter: blur(60px);
        }

        &::after {
            content: "";
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(121, 40, 202, 0.1) 0%, transparent 70%);
            bottom: -60px;
            left: -80px;
            pointer-events: none;
            filter: blur(60px);
        }

        h1 {
            margin: 0 0 20px;
            font-weight: 700;
            position: relative;
            z-index: 1;
        }

        p {
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
            padding: 0 20px;
            position: relative;
            z-index: 1;
        }
    }

    .main-content {
        margin: 0 auto 60px;
        position: relative;
        z-index: 2;
        ${media.md} {
            padding: 0 20px;
        }

        ${media.xs} {
            margin: 0 auto 40px;
        }
    }

    .wrapper {
        display: flex;
        border-radius: 16px;
        overflow: hidden;
        background: #fff;
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.04);
        transform: translateY(-60px);
        border: 1px solid rgba(0, 0, 0, 0.04);

        ${media.sm} {
            flex-direction: column;
            transform: translateY(-40px);
            border-radius: 12px;
        }
    }

    .contact-info {
        background: linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%);
        color: white;
        padding: 40px 30px;
        flex: 0 0 38%;
        min-width: 0;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, transparent 70%);
            bottom: -60px;
            right: -60px;
            pointer-events: none;
        }

        ${media.sm} {
            flex: none;
            width: 100%;
            padding: 30px 20px;
        }

        h2 {
            margin: 0 0 20px;
            font-weight: 600;
        }

        p {
            margin: 0 0 30px;
            opacity: 0.9;
            line-height: 1.6;
        }

        .contact-details {
            margin: 40px 0 0 0;
            font-size: 0.9rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            margin: 0 0 25px 0;

            .icon {
                background: rgba(255, 255, 255, 0.2);
                height: 40px;
                width: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 15px 0 0;
                flex-shrink: 0;

                ${media.xs} {
                    height: 36px;
                    width: 36px;
                }
            }

            .text {
                min-width: 0;
                overflow-wrap: break-word;
                word-break: break-word;

                h3 {
                    margin: 0 0 5px 0;
                    font-weight: 500;
                }

                p {
                    margin: 0 0 0 0;
                }
            }
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin: 40px 0 0;
            flex-wrap: wrap;

            .social-icon {
                background: rgba(255, 255, 255, 0.2);
                height: 40px;
                width: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                transition: all 0.3s ease;

                &:hover {
                    background: white;
                    color: #ff0080;
                    transform: translateY(-3px);
                }

                ${media.xs} {
                    height: 36px;
                    width: 36px;
                }
            }

            ${media.xs} {
                justify-content: center;
            }
        }
    }

    .contact-form {
        padding: clamp(20px, 5vw, 40px);
        flex: 1;
        min-width: 0;

        ${media.sm} {
            width: 100%;
            padding: 0;
        }
        h2 {
            margin: 0 0 30px 0;
            color: #333;
        }

        .form-row {
            margin: 0 0 25px 0;

            &.two-columns {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;

                ${media.xs} {
                    grid-template-columns: 1fr;
                }
            }
        }

        .input-group {
            display: block;
            width: 100%;

            .input-label {
                display: flex;
                align-items: center;
                margin: 0 0 8px 0;

                .input-icon {
                    margin: 0 8px 0 0;
                    color: #ff0080;
                }

                span {
                    font-weight: 500;
                    color: #555;
                }
            }
        }

        input,
        textarea {
            width: 100%;
            font-family: inherit;
            padding: 12px 15px;
            border: 1px solid #e1e1e1;
            border-radius: 5px;
            transition: all 0.3s ease;

            &:focus {
                border-color: #ff0080;
                box-shadow: 0 0 0 2px rgba(255, 0, 128, 0.1);
                outline: none;
            }

            &::placeholder {
                color: #aaa;
            }
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }

        button {
            padding: 14px 30px 14px 30px;
            margin: 10px 0 0 0;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 250px;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(255, 0, 128, 0.4);
            }

            ${media.xs} {
                max-width: 100%;
            }
        }
    }

    .success-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        padding: 40px 20px;
        min-height: 400px;

        .success-icon {
            color: #0cce6b;
            margin: 0 0 20px 0;

            ${media.xs} {
                svg {
                    width: 50px;
                    height: 50px;
                }
            }
        }

        h2 {
            margin: 0 0 15px 0;
            color: #333;
        }

        p {
            color: #666;
            margin: 0 0 30px 0;
            max-width: 400px;
            line-height: 1.6;
            padding: 0 10px 0 10px;
        }

        button {
            margin: 20px 0 0 0;
        }
    }

    .map-container {
        height: 450px;
        width: 100%;
        margin: 60px 0 0;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);

        iframe {
            display: block;
        }

        ${media.xs} {
            height: 300px;
            margin: 40px 0 0;
            border-radius: 12px;
        }
    }
`;
export default ContactStyles;

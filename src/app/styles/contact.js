"use client";
import media from "@/app/config/media";
import styled from "styled-components";

const ContactStyles = styled.section`
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column;
    p {
        color: #fff;
    }

    .hero-section {
        background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        padding: 80px 0 140px;
        ${media.sm} {
            padding: 40px 0 100px;
        }
        color: white;
        text-align: center;

        h1 {
            margin: 0 0 20px;
            font-weight: 700;
        }

        p {
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
            padding: 0 20px;
        }
    }

    .main-content {
        margin: 0 auto 60px;
        ${media.md} {
            padding: 0 20px;
        }

        ${media.xs} {
            margin: 0 auto 40px;
        }
    }

    .wrapper {
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translateY(-60px);

        ${media.sm} {
            flex-direction: column;
            transform: translateY(-40px);
            margin: 0 10px;
            border-radius: 8px;
        }
    }

    .contact-info {
        background: linear-gradient(135deg, #2d0016 0%, #7928ca 100%);
        color: white;
        padding: 40px 30px;
        flex: 0 0 38%;
        min-width: 0;

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
            padding: 24px 16px;
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

        iframe {
            display: block;
        }

        ${media.xs} {
            height: 300px;
            margin: 40px 0 0;
        }
    }
`;
export default ContactStyles;

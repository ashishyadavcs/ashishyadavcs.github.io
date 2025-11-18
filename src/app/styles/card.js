"use client";

import styled from "styled-components";

const CardStyle = styled.div`
    background: white;
    border-radius: 15px;
    color: #333;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #f0f0f0;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(255, 0, 128, 0.2);
    }

    img {
        height: 220px;
        object-fit: cover;
        width: 100%;
        transition: all 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }

    .card-title {
        margin: 15px 0 10px;
        font-size: 1.25rem;
        font-weight: 600;
        background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.3;
    }

    .details {
        padding: 20px;
    }

    .card-description {
        color: #666;
        line-height: 1.6;
        margin-bottom: 15px;
        font-size: 0.95rem;
    }

    .card-tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        list-style: none;
        margin: 20px 0 0;

        li {
            padding: 6px 12px;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            color: white;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }
    }

    .card-links {
        padding: 0 20px 20px;
        display: flex;
        gap: 10px;

        a {
            padding: 8px 16px;
            background: rgba(255, 0, 128, 0.1);
            color: #ff0080;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;

            &:hover {
                background: #ff0080;
                color: white;
                transform: translateY(-2px);
            }
        }
    }
`;
export default CardStyle;

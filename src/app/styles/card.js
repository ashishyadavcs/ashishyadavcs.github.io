"use client";

import styled from "styled-components";

const CardStyle = styled.div`
    background: #f5f5f5;
    border-radius: 8px;
    color: #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    img {
        height: 200px;
        object-fit: cover;
    }
    .card-title {
        margin: 10px 0;
    }
    .details {
        padding: 15px;
    }
    .card-tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        list-style: none;
        margin: 20px 0 0;
        li {
            padding: 5px 10px;
            background: #e0e0e0;
            border-radius: 40px;
            font-size: 1rem;
        }
    }
`;
export default CardStyle;

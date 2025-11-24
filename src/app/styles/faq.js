"use client";
import styled from "styled-components";

const FAQStyle = styled.div`
    padding: 80px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

    @media (max-width: 768px) {
        padding: 60px 0;
    }

    .faq-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .section-header {
        text-align: center;
        margin-bottom: 60px;

        @media (max-width: 768px) {
            margin-bottom: 40px;
        }
    }

    .title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 16px;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .subtitle {
        font-size: 1.1rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto 30px;
        line-height: 1.8;
    }

    .search-container {
        position: relative;
        max-width: 500px;
        margin: 0 auto 30px;
    }

    .search-input {
        width: 100%;
        padding: 12px 16px 12px 50px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
            border-color: #ff0080;
            box-shadow: 0 0 0 3px rgba(255, 0, 128, 0.1);
        }

        &::placeholder {
            color: #94a3b8;
        }
    }

    .search-icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        width: 20px;
        height: 20px;
    }

    .filter-container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-bottom: 40px;
    }

    .filter-button {
        padding: 8px 16px;
        border: 2px solid #e2e8f0;
        background: white;
        color: #666;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

        &:hover {
            border-color: #ff0080;
            color: #ff0080;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(255, 0, 128, 0.2);
        }

        &.active {
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            border-color: #ff0080;
            color: white;
            box-shadow: 0 4px 12px rgba(255, 0, 128, 0.3);

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(255, 0, 128, 0.4);
            }
        }
    }

    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .faq-item {
        background: white;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        &:hover {
            border-color: #ff0080;
            box-shadow: 0 8px 30px rgba(255, 0, 128, 0.15);
            transform: translateY(-2px);
        }
    }

    .question-button {
        width: 100%;
        padding: 20px;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;

        &:hover {
            background: linear-gradient(135deg, rgba(255, 0, 128, 0.02), rgba(121, 40, 202, 0.02));
        }
    }

    .question-content {
        flex: 1;
    }

    .question-text {
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
        line-height: 1.4;
    }

    .question-meta {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 8px;
    }

    .category-tag {
        background: linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(121, 40, 202, 0.1));
        color: #ff0080;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
        border: 1px solid rgba(255, 0, 128, 0.2);
    }

    .priority-indicator {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.75rem;
        font-weight: 600;

        &.priority-1 {
            color: #ff0080;
        }

        &.priority-2 {
            color: #7928ca;
        }

        &.priority-3 {
            color: #6a11cb;
        }
    }

    .chevron-icon {
        color: #666;
        transition: transform 0.3s ease;

        &.open {
            transform: rotate(180deg);
            color: #ff0080;
        }
    }

    .answer-container {
        padding: 0 20px 20px;
        border-top: 1px solid #f1f5f9;
        background: linear-gradient(135deg, rgba(255, 0, 128, 0.01), rgba(121, 40, 202, 0.01));
    }

    .answer-text {
        color: #555;
        line-height: 1.8;
        font-size: 1rem;
        margin-top: 16px;
    }

    .no-results {
        text-align: center;
        padding: 60px 20px;
        color: #666;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .no-results-icon {
        font-size: 3rem;
        margin-bottom: 16px;
        opacity: 0.6;
    }
`;

export default FAQStyle;

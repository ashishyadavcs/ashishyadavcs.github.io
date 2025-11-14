"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import media from "@/app/config/media";

const TestimonialStyle = styled.div`
    .testimonials-section {
        padding: 80px 0;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border-radius: 20px;
        margin: 80px 0;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

        ${media.sm} {
            padding: 60px 20px;
            margin: 60px 0;
        }

        ${media.xs} {
            padding: 40px 15px;
            margin: 40px 0;
        }
    }

    .section-header {
        text-align: center;
        margin-bottom: 60px;

        .section-heading {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;

            ${media.sm} {
                font-size: 1.8rem;
            }
        }

        .section-subtitle {
            color: #666;
            font-size: 1.1rem;
            font-weight: 400;

            ${media.sm} {
                font-size: 1rem;
            }
        }
    }

    .testimonials-carousel {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
    }

    .testimonial-card {
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        border: 1px solid #f0f0f0;
        position: relative;
        text-align: center;
        transition: all 0.5s ease;

        &.active {
            transform: scale(1);
            opacity: 1;
        }

        &.prev,
        &.next {
            transform: scale(0.9);
            opacity: 0.6;
        }

        ${media.sm} {
            padding: 32px 24px;
        }

        .quote-icon {
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);
        }

        .testimonial-content {
            margin-bottom: 30px;

            .testimonial-text {
                font-size: 1.125rem;
                line-height: 1.7;
                color: #333;
                font-style: italic;
                margin-bottom: 20px;

                ${media.sm} {
                    font-size: 1rem;
                }
            }

            .project-tag {
                display: inline-block;
                background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
                color: white;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 0.85rem;
                font-weight: 500;
            }
        }

        .client-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 20px;

            ${media.sm} {
                flex-direction: column;
                gap: 12px;
            }
        }

        .client-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #f0f0f0;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 1.2rem;
        }

        .client-details {
            text-align: left;

            ${media.sm} {
                text-align: center;
            }

            .client-name {
                font-size: 1.1rem;
                font-weight: 600;
                color: #333;
                margin-bottom: 2px;
            }

            .client-role {
                font-size: 0.9rem;
                color: #666;
                margin-bottom: 2px;
            }

            .client-company {
                font-size: 0.85rem;
                color: #999;
            }
        }

        .rating {
            display: flex;
            justify-content: center;
            gap: 4px;

            .star {
                color: #ffd700;
                font-size: 1.1rem;
            }
        }
    }

    .carousel-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 40px;

        .nav-button {
            background: white;
            border: 2px solid #e0e0e0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #666;

            &:hover {
                border-color: #ff0080;
                color: #ff0080;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(255, 0, 128, 0.2);
            }

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;

                &:hover {
                    border-color: #e0e0e0;
                    color: #666;
                    transform: none;
                    box-shadow: none;
                }
            }
        }

        .dots-container {
            display: flex;
            gap: 8px;

            .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #e0e0e0;
                cursor: pointer;
                transition: all 0.3s ease;

                &.active {
                    background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
                    transform: scale(1.2);
                }

                &:hover:not(.active) {
                    background: #ff0080;
                    transform: scale(1.1);
                }
            }
        }
    }

    .testimonials-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 32px;
        margin-top: 60px;
        padding-top: 40px;
        border-top: 1px solid #e0e0e0;

        ${media.sm} {
            gap: 24px;
            margin-top: 40px;
        }
    }

    .stat-item {
        text-align: center;

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
            display: block;

            ${media.sm} {
                font-size: 2rem;
            }
        }

        .stat-label {
            font-size: 0.9rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }
    }
`;

const Testimonials = ({ testimonials, showStats = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const featuredTestimonials = testimonials.filter(t => t.featured);
    const displayTestimonials =
        featuredTestimonials.length > 0 ? featuredTestimonials : testimonials.slice(0, 3);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % displayTestimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, displayTestimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex(prev => (prev + 1) % displayTestimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            prev => (prev - 1 + displayTestimonials.length) % displayTestimonials.length
        );
        setIsAutoPlaying(false);
    };

    const goToSlide = index => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const getClientInitials = name => {
        return name
            .split(" ")
            .map(n => n[0])
            .join("")
            .toUpperCase();
    };

    const renderStars = rating => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={`star ${index < rating ? "filled" : ""}`} />
        ));
    };

    if (!displayTestimonials.length) return null;

    return (
        <TestimonialStyle>
            <section className="testimonials-section">
                <div className="section-header">
                    <h2 className="section-heading">Client Testimonials</h2>
                    <p className="section-subtitle">What my clients say about working with me</p>
                </div>

                <div className="testimonials-carousel">
                    <div className="testimonial-card active">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>

                        <div className="testimonial-content">
                            <p className="testimonial-text">
                                "{displayTestimonials[currentIndex].content}"
                            </p>
                            <div className="project-tag">
                                {displayTestimonials[currentIndex].project}
                            </div>
                        </div>

                        <div className="client-info">
                            <div className="client-avatar">
                                {getClientInitials(displayTestimonials[currentIndex].name)}
                            </div>
                            <div className="client-details">
                                <div className="client-name">
                                    {displayTestimonials[currentIndex].name}
                                </div>
                                <div className="client-role">
                                    {displayTestimonials[currentIndex].role}
                                </div>
                                <div className="client-company">
                                    {displayTestimonials[currentIndex].company}
                                </div>
                            </div>
                        </div>

                        <div className="rating">
                            {renderStars(displayTestimonials[currentIndex].rating)}
                        </div>
                    </div>

                    <div className="carousel-navigation">
                        <button
                            className="nav-button"
                            onClick={prevTestimonial}
                            disabled={displayTestimonials.length <= 1}
                        >
                            <FaChevronLeft />
                        </button>

                        <div className="dots-container">
                            {displayTestimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>

                        <button
                            className="nav-button"
                            onClick={nextTestimonial}
                            disabled={displayTestimonials.length <= 1}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {showStats && (
                    <div className="testimonials-stats">
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Project Success</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.9/5</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Client Retention</span>
                        </div>
                    </div>
                )}
            </section>
        </TestimonialStyle>
    );
};

export default Testimonials;

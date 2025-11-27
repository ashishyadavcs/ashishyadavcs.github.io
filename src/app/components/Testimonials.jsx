"use client";

import React, { useMemo, memo } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import TestimonialStyle from "@/app/styles/testimonials";

// Memoized star rating component
const StarRating = memo(({ rating }) => (
    <div className="rating">
        {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={`star ${index < rating ? "filled" : ""}`} />
        ))}
    </div>
));

StarRating.displayName = "StarRating";

// Memoized testimonial card component
const TestimonialCard = memo(({ testimonial, index }) => {
    const initials = testimonial.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();

    return (
        <div key={`${testimonial.id}-${index}`} className="testimonial-card">
            <div className="quote-icon">
                <FaQuoteLeft />
            </div>

            <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
                <div className="project-tag">{testimonial.project}</div>
            </div>

            <div className="client-info">
                <div className="client-avatar">{initials}</div>
                <div className="client-details">
                    <div className="client-name">{testimonial.name}</div>
                    <div className="client-role">{testimonial.role}</div>
                    <div className="client-company">{testimonial.company}</div>
                </div>
            </div>

            <StarRating rating={testimonial.rating} />
        </div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

// Stats configuration
const STATS = [
    { number: "50+", label: "Happy Clients" },
    { number: "100%", label: "Project Success" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Client Retention" },
];

const Testimonials = ({ testimonials = [], showStats = true }) => {
    // Process testimonials once
    const processedTestimonials = useMemo(() => {
        if (!testimonials.length) return [];

        const featured = testimonials.filter(t => t.featured);
        const toShow = featured.length > 0 ? featured : testimonials;

        // Duplicate for seamless scrolling
        return [...toShow, ...toShow];
    }, [testimonials]);

    // Early return for empty testimonials
    if (!processedTestimonials.length) return null;

    return (
        <TestimonialStyle>
            <section className="testimonials-section">
                <div className="section-header">
                    <h2 className="section-heading">Client Testimonials</h2>
                    <p className="section-subtitle">What my clients say about working with me</p>
                </div>

                <div className="testimonials-carousel-container">
                    <div className="testimonials-carousel">
                        {processedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.id}-${index}`}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {showStats && (
                    <div className="testimonials-stats">
                        {STATS.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </TestimonialStyle>
    );
};

export default memo(Testimonials);

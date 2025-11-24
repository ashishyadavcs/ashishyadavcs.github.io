"use client";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp, IoSearch, IoPricetag, IoStar } from "react-icons/io5";
import faq, { getFeaturedFAQs, getFAQCategories, searchFAQs } from "public/config/faq";
import FAQStyle from "../styles/faq";

const FAQ = ({
    title = "Frequently Asked Questions",
    showSearch = true,
    showFilters = true,
    limit = null,
}) => {
    const [openItems, setOpenItems] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const categories = ["all", "featured", ...getFAQCategories()];

    // Filter FAQs based on search and category
    const getFilteredFAQs = () => {
        let filteredFAQs = faq;

        // Apply category filter
        if (activeFilter === "featured") {
            filteredFAQs = getFeaturedFAQs();
        } else if (activeFilter !== "all") {
            filteredFAQs = faq.filter(item => item.category === activeFilter);
        }

        // Apply search filter
        if (searchTerm) {
            filteredFAQs = searchFAQs(searchTerm).filter(item =>
                activeFilter === "all" || activeFilter === "featured"
                    ? getFeaturedFAQs().includes(item)
                    : item.category === activeFilter
            );
        }

        // Apply limit
        if (limit) {
            filteredFAQs = filteredFAQs.slice(0, limit);
        }

        return filteredFAQs;
    };

    const filteredFAQs = getFilteredFAQs();

    // Generate FAQ Schema for SEO
    const generateFAQSchema = () => {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: filteredFAQs.map(item => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        };

        return JSON.stringify(schemaData);
    };

    const toggleItem = id => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const getPriorityStars = priority => {
        return Array.from({ length: 4 - priority }, (_, i) => <IoStar key={i} size={12} />);
    };

    return (
        <>
            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: generateFAQSchema() }}
            />

            <FAQStyle>
                <div className="faq-container">
                    <div className="section-header">
                        <h2 className="title">{title}</h2>
                        <p className="subtitle">
                            Everything you need to know about my background, experience, and
                            services. Can't find the answer you're looking for? Feel free to contact
                            me.
                        </p>

                        {showSearch && (
                            <div className="search-container">
                                <IoSearch className="search-icon" />
                                <input
                                    className="search-input"
                                    type="text"
                                    placeholder="Search FAQs..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </div>
                        )}

                        {showFilters && (
                            <div className="filter-container">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={`filter-button ${activeFilter === category ? "active" : ""}`}
                                        onClick={() => setActiveFilter(category)}
                                    >
                                        {category === "all"
                                            ? "All"
                                            : category === "featured"
                                              ? "Featured"
                                              : category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {filteredFAQs.length === 0 ? (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <h3>No FAQs found</h3>
                            <p>Try adjusting your search terms or filters</p>
                        </div>
                    ) : (
                        <div className="faq-list">
                            {filteredFAQs.map(item => (
                                <div
                                    key={item.id}
                                    className="faq-item"
                                    itemScope
                                    itemType="https://schema.org/Question"
                                >
                                    <button
                                        className="question-button"
                                        onClick={() => toggleItem(item.id)}
                                    >
                                        <div className="question-content">
                                            <h3 className="question-text" itemProp="name">
                                                {item.question}
                                            </h3>
                                            <div className="question-meta">
                                                <span className="category-tag">
                                                    <IoPricetag size={12} />
                                                    {item.category}
                                                </span>
                                                <span
                                                    className={`priority-indicator priority-${item.priority}`}
                                                >
                                                    {getPriorityStars(item.priority)}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={`chevron-icon ${openItems.has(item.id) ? "open" : ""}`}
                                        >
                                            {openItems.has(item.id) ? (
                                                <IoChevronUp size={20} />
                                            ) : (
                                                <IoChevronDown size={20} />
                                            )}
                                        </div>
                                    </button>
                                    {openItems.has(item.id) && (
                                        <div
                                            className="answer-container"
                                            itemScope
                                            itemType="https://schema.org/Answer"
                                        >
                                            <p className="answer-text" itemProp="text">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </FAQStyle>
        </>
    );
};

export default FAQ;

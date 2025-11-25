"use client";

import React, { useState, useEffect } from "react";

const Skills = ({ skills }) => {
    const [activeTab, setActiveTab] = useState("technical");
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        // Trigger animation when component mounts
        const timer = setTimeout(() => setAnimateSkills(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const renderTechnicalSkills = () => (
        <div className="skills-grid">
            {skills.technical.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="skills-list">
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="skill-item">
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="skill-info">
                                    <div className="skill-name">{skill.name}</div>
                                    <div className="skill-bar-container">
                                        <div
                                            className="skill-bar"
                                            style={{
                                                width: animateSkills ? `${skill.level}%` : "0%",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="skill-level">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    const renderSoftSkills = () => (
        <div className="soft-skills-grid">
            {skills.soft.map((skill, index) => (
                <div key={index} className="soft-skill-card">
                    <div className="soft-skill-icon">{skill.icon}</div>
                    <div className="soft-skill-name">{skill.name}</div>
                    <div className="soft-skill-level">{skill.level}%</div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="skills-section" id="skills">
            <h2 className="section-heading">Skills & Expertise</h2>
            <p className="section-subtitle">
                Technologies and tools I work with to bring ideas to life
            </p>

            <div className="skills-tabs">
                <button
                    className={`tab-button ${activeTab === "technical" ? "active" : ""}`}
                    onClick={() => setActiveTab("technical")}
                >
                    Technical Skills
                </button>
                <button
                    className={`tab-button ${activeTab === "soft" ? "active" : ""}`}
                    onClick={() => setActiveTab("soft")}
                >
                    Soft Skills
                </button>
            </div>

            <div className="skills-content">
                {activeTab === "technical" ? renderTechnicalSkills() : renderSoftSkills()}
            </div>
        </section>
    );
};

export default Skills;

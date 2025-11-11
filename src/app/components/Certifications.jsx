"use client";

import React from "react";
import styled from "styled-components";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from "react-icons/fa";
import media from "../config/media";

const CertificationsStyle = styled.section`
    .certifications-section {
        margin: 80px 0;
        padding: 60px 0;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

        ${media.sm} {
            margin: 60px 0;
            padding: 40px 20px;
        }

        ${media.xs} {
            margin: 40px 0;
            padding: 30px 15px;
        }
    }

    .section-header {
        text-align: center;
        margin-bottom: 50px;

        .section-heading {
            color: #333;
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

            ${media.xs} {
                font-size: 1.6rem;
            }
        }

        .section-subtitle {
            color: #666;
            opacity: 0.8;
            font-size: 1.1rem;
            font-weight: 400;

            ${media.sm} {
                font-size: 1rem;
            }

            ${media.xs} {
                font-size: 0.95rem;
            }
        }
    }

    .certifications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 32px;

        ${media.md} {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
        }

        ${media.sm} {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }

    .certification-card {
        background: white;
        border-radius: 16px;
        padding: 32px 28px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        border: 1px solid #f0f0f0;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        }

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(255, 0, 128, 0.15);
            border-color: rgba(255, 0, 128, 0.2);

            .cert-icon {
                transform: scale(1.1) rotate(5deg);
            }

            .view-link {
                background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
                color: white;
                transform: translateY(-2px);
            }
        }

        ${media.sm} {
            padding: 24px 20px;
        }
    }

    .cert-header {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 20px;

        ${media.sm} {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
        }
    }

    .cert-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        transition: all 0.3s ease;
        flex-shrink: 0;
        box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);

        ${media.sm} {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
        }
    }

    .cert-info {
        flex: 1;

        ${media.sm} {
            text-align: center;
        }
    }

    .cert-title {
        font-size: 1.3rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
        line-height: 1.3;

        ${media.sm} {
            font-size: 1.2rem;
        }
    }

    .cert-issuer {
        font-size: 1rem;
        color: #666;
        font-weight: 500;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        gap: 8px;

        ${media.sm} {
            justify-content: center;
            font-size: 0.95rem;
        }

        .issuer-icon {
            color: var(--primary-color);
            font-size: 0.9rem;
        }

        .issuer-link {
            color: #666;
            text-decoration: none;
            transition: all 0.3s ease;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #ff0080;
                border-bottom-color: #ff0080;
            }
        }
    }

    .cert-date {
        font-size: 0.9rem;
        color: #888;
        display: flex;
        align-items: center;
        gap: 6px;

        ${media.sm} {
            justify-content: center;
            font-size: 0.85rem;
        }

        .date-icon {
            color: var(--primary-color);
            font-size: 0.8rem;
        }
    }

    .cert-actions {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;

        ${media.sm} {
            justify-content: center;
        }
    }

    .view-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #f8f9fa;
        color: #333;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        border: 1px solid #e9ecef;

        &:hover {
            background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 0, 128, 0.3);
        }

        .link-icon {
            font-size: 0.8rem;
        }
    }

    .certifications-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 32px;
        margin-top: 50px;
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

    .no-certifications {
        text-align: center;
        padding: 60px 20px;
        color: #666;

        .no-cert-icon {
            font-size: 3rem;
            color: #ddd;
            margin-bottom: 16px;
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 8px;
        }

        .sub-text {
            font-size: 0.95rem;
            color: #888;
        }
    }
`;

const Certifications = ({ certifications, showStats = true }) => {
    const formatDate = dateString => {
        // Handle DD-MM-YYYY format from config
        const parts = dateString.split("-");
        if (parts.length === 3) {
            // Convert DD-MM-YYYY to YYYY-MM-DD for proper Date parsing
            const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
            const date = new Date(formattedDate);
            return date.toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
            });
        }
        // Fallback for other formats
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
        });
    };

    const getYearsOfCertifications = () => {
        if (!certifications || certifications.length === 0) return 0;
        const dates = certifications.map(cert => new Date(cert.date));
        const earliest = new Date(Math.min(...dates));
        const latest = new Date(Math.max(...dates));
        return Math.ceil((latest - earliest) / (1000 * 60 * 60 * 24 * 365)) + 1;
    };

    if (!certifications || certifications.length === 0) {
        return (
            <CertificationsStyle>
                <div className="certifications-section">
                    <div className="no-certifications">
                        <FaCertificate className="no-cert-icon" />
                        <p>No certifications available</p>
                        <p className="sub-text">Check back later for updates</p>
                    </div>
                </div>
            </CertificationsStyle>
        );
    }

    return (
        <CertificationsStyle>
            <div className="certifications-section">
                <div className="section-header">
                    <h2 className="section-heading">Certifications & Training</h2>
                    <p className="section-subtitle">
                        Professional certifications and continuous learning achievements
                    </p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="cert-header">
                                <div className="cert-icon">
                                    <FaAward />
                                </div>
                                <div className="cert-info">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <div className="cert-issuer">
                                        <FaCertificate className="issuer-icon" />
                                        {cert.website ? (
                                            <a
                                                href={cert.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="issuer-link"
                                            >
                                                {cert.issuer}
                                            </a>
                                        ) : (
                                            cert.issuer
                                        )}
                                    </div>
                                    <div className="cert-date">
                                        <FaCalendarAlt className="date-icon" />
                                        {formatDate(cert.date)}
                                    </div>
                                </div>
                            </div>

                            {cert.link && (
                                <div className="cert-actions">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-link"
                                    >
                                        View Certificate
                                        <FaExternalLinkAlt className="link-icon" />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {showStats && (
                    <div className="certifications-stats">
                        <div className="stat-item">
                            <span className="stat-number">{certifications.length}</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{getYearsOfCertifications()}</span>
                            <span className="stat-label">Years Learning</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Completion Rate</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Skill Areas</span>
                        </div>
                    </div>
                )}
            </div>
        </CertificationsStyle>
    );
};

export default Certifications;

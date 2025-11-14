"use client";
import React from "react";
import TimelineStyle from "@/styles/timeline";
import Link from "next/link";

const Timeline = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return (
            <TimelineStyle>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <p className="timeline-description">No timeline data available.</p>
                    </div>
                </div>
            </TimelineStyle>
        );
    }

    return (
        <TimelineStyle>
            {data.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">{item.date}</div>
                        <h3 className="timeline-title">{item.title || item.degree}</h3>
                        {(item.company || item.institution) && (
                            <Link
                                className="timeline-company"
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.company || item.institution}
                            </Link>
                        )}
                        {item.field && <div className="timeline-field">{item.field}</div>}
                        <p
                            className="timeline-description"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                    </div>
                </div>
            ))}
        </TimelineStyle>
    );
};

export default Timeline;
